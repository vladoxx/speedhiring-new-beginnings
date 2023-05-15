import { RequestHandler } from "express";

import Company from "../models/Company";
import Job from "../models/Job";

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

export const getOneCompany: RequestHandler = async (req, res) => {
  const companyFound = await Company.findById(req.params.id);

  if (!companyFound) {
    return res.status(204).json();
  }

  return res.json(companyFound);
};

export const updateCompany: RequestHandler = async (req, res) => {
  const companyUpdate = await Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!companyUpdate) {
    return res.status(204).json();
  }

  res.json(companyUpdate);
};

export const deleteCompany: RequestHandler = async (req, res) => {
  const companyFound = await Company.findByIdAndDelete(req.params.id);

  if (!companyFound) {
    return res.status(204).json();
  }

  return res.json(companyFound);
};

export const getJobsCompany: RequestHandler = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(400).json({ message: "Empresa não encontrada" });
    }

    const jobs = await Job.find({ company: company._id });

    return res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar as vagas da empresa" });
  }
};
