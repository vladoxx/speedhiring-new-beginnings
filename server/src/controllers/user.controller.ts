import { RequestHandler } from "express";

import User from "../models/User";
import Application from "../models/Candidate";

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
  res.json(saveUser);
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
