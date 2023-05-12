import { RequestHandler } from "express";

import User from "../models/User";

export const createUser: RequestHandler = async (req, res) => {
  const emailFound = await User.findOne({ email: req.body });

  console.log(req.body);
};

export const updateUser: RequestHandler = async (req, res) => {};

export const deleteUser: RequestHandler = async (req, res) => {};

export const getUserById: RequestHandler = async (req, res) => {};

export const getAllUsers: RequestHandler = async (req, res) => {};
