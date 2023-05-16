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
  const { name, email, phone, address, password, confirm_password } = req.body;

  const userFound = await User.findOne({ email: email });

  if (userFound) {
    return res
      .status(301)
      .json({ message: "Já existe um usuário com este e-mail!" });
  }

  if (!name) {
    return res.status(422).json({ msg: "Nome obrigatório" });
  }

  if (!phone) {
    return res.status(422).json({ msg: "Telefone obrigatório" });
  }

  if (!address) {
    return res.status(422).json({ msg: "Endereço obrigatório" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Senha obrigatória" });
  }

  if (password !== confirm_password) {
    return res.status(422).json({ msg: "As senhas não conferem" });
  }

  console.log(req.body);

  const user = new User(req.body);
  const saveUser = await user.save();

  saveUser.password = undefined; // remover o campo password do objeto saveUser antes de enviar a resposta
  saveUser.confirm_password = undefined; // remover o campo confirm_password do objeto saveUser antes de enviar a resposta
  res.json({ saveUser, token: generateToken({ id: user.id }) });
};

export const loginUser: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password"); // adiciona o campo password

  if (!user) {
    return res.status(400).json({ msg: "Usuário não encontrado" });
  }

  if (!(await bcrypt.compare(password, user.password || ""))) {
    return res.status(400).send({ msj: "Senha inválida" });
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
  const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!userUpdate) {
    return res.status(204).json();
  }

  res.json(userUpdate);
};

export const deleteUser: RequestHandler = async (req, res) => {
  const userFound = await User.findByIdAndDelete(req.params.id);

  if (!userFound) {
    return res.status(204).json();
  }

  return res.json(userFound);
};

export const getAllJobApplications: RequestHandler = async (req, res) => {
  const userId = await User.findById(req.params.id);
  const applications = await Application.find({ user: userId }).populate("job");

  const jobs = applications.map((application) => application.job);

  res.json(jobs);
};
