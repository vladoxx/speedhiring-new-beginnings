import { RequestHandler } from "express";

import Company from "../models/Company";

export const createCompany: RequestHandler = async (req, res) => {
  const companyFound = await Company.findOne({ cnpj: req.body.cnpj });

  if (companyFound) {
    return res
      .status(301)
      .json({ message: "Já existe uma empresas com este CNPJ" });
  }

  console.log(req.body);

  const company = new Company(req.body);
  const saveCompany = await company.save();
  res.json(saveCompany);
};

export const getAllCompanies: RequestHandler = async (req, res) => {
  try {
    const companies = await Company.find();
    return res.json(companies);
  } catch (error) {
    res.json(error);
  }
};

// export const getOneUser: RequestHandler = async (req, res) => {
//   const userFound = await User.findById(req.params.id);

//   if (!userFound) {
//     return res.status(204).json();
//   }

//   return res.json(userFound);
// };

// export const updateUser: RequestHandler = async (req, res) => {
//   const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   if (!userUpdate) {
//     return res.status(204).json();
//   }

//   res.json(userUpdate);
// };

// export const deleteUser: RequestHandler = async (req, res) => {
//   const userFound = await User.findByIdAndDelete(req.params.id);

//   if (!userFound) {
//     return res.status(204).json();
//   }

//   return res.json(userFound);
// };
