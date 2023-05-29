import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";
dotenv.config();

import User from "../models/User";
import Application from "../models/Candidate";

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET || "", {
    expiresIn: 86400,
  });
}

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, address, password, confirm_password } =
      req.body;

    const userFound = await User.findOne({ email: email });

    if (userFound) {
      return res
        .status(301)
        .json({ message: "Já existe um usuário com este e-mail!" });
    }

    if (!name) {
      return res.status(422).json({ message: "Nome obrigatório" });
    }

    if (!phone) {
      return res.status(422).json({ message: "Telefone obrigatório" });
    }

    if (!address) {
      return res.status(422).json({ message: "Endereço obrigatório" });
    }

    if (!password) {
      return res.status(422).json({ message: "Senha obrigatória" });
    }

    if (password !== confirm_password) {
      return res.status(422).json({ message: "As senhas não conferem" });
    }

    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      ...req.body,
      password: hashedPassword,
      confirm_password: hashedPassword,
    });

    const savedUser = await user.save();
    savedUser.password = undefined;
    savedUser.confirm_password = undefined;

    res.json({ user: savedUser, token: generateToken({ id: user.id }) });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

export const loginUser: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password"); // adiciona o campo password

  if (!user) {
    return res.status(400).json({ message: "Usuário não encontrado" });
  }

  if (!(await bcrypt.compare(password, user.password || ""))) {
    return res.status(400).send({ message: "Senha inválida" });
  }

  user.password = undefined; // remover o campo password do objeto saveUser antes de enviar a resposta

  res.json({ user, token: generateToken({ id: user.id }) });
};

export const getAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const getOneUser: RequestHandler = async (req, res) => {
  const userFound = await User.findById(req.params.id);

  if (!userFound) {
    return res.status(204).json();
  }

  return res.json(userFound);
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const { userId, ...updatedData } = req.body;

    // Atualizar apenas as chaves fornecidas no corpo da solicitação
    const userUpdate = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updatedData },
      { new: true }
    );

    if (!userUpdate) {
      return res.status(204).json();
    }

    res.json(userUpdate);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ message: "Erro ao atualizar usuário" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  const userFound = await User.findByIdAndDelete(req.params.id);

  if (!userFound) {
    return res.status(204).json();
  }

  return res.json(userFound);
};

export const deleteAllUsers: RequestHandler = async (req, res) => {
  try {
    // Excluir todos os trabalhos
    const deleteJobs = await User.deleteMany();

    return res.json({
      message: "Todos os usuários foram excluídos com sucesso.",
      deleteJobs,
    });
  } catch (error) {
    console.error("Erro ao excluir todos os usuários:", error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir todos os usuários." });
  }
};

export const getAllJobApplications: RequestHandler = async (req, res) => {
  const userId = await User.findById(req.params.id);
  const applications = await Application.find({ user: userId }).populate("job");

  const jobs = applications.map((application) => application.job);

  res.json(jobs);
};
