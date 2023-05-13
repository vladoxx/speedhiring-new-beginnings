import { RequestHandler } from "express";

import User from "../models/User";

export const createUser: RequestHandler = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email });

  if (userFound) {
    return res
      .status(301)
      .json({ message: "Já existe um usuário com este e-mail!" });
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

export const deleteUser: RequestHandler = async (req, res) => {};
