import { RequestHandler } from "express";

import Job from "../models/Job";
import Company from "../models/Company";

export const createJob: RequestHandler = async (req, res) => {
  console.log(req.body);

  const job = new Job(req.body);
  const jobUser = await job.save();

  // após salvar o trabalho, atualiza a empresa relacionada adicionando o trabalho à lista de trabalhos.
  const updateCompany = await Company.findByIdAndUpdate(
    req.body.company,
    { $push: { jobs: jobUser._id } },
    { new: true }
  );

  res.json({ jobUser, updateCompany });
};

export const getAllJobs: RequestHandler = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.json(jobs);
  } catch (error) {
    res.json(error);
  }
};

export const getOneJob: RequestHandler = async (req, res) => {
  const jobFound = await Job.findById(req.params.id);

  if (!jobFound) {
    return res.status(204).json();
  }

  return res.json(jobFound);
};

export const updateJob: RequestHandler = async (req, res) => {
  const jobUpdate = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!jobUpdate) {
    return res.status(204).json();
  }

  res.json(jobUpdate);
};

export const deleteJob: RequestHandler = async (req, res) => {
  const jobFound = await Job.findByIdAndDelete(req.params.id);

  if (!jobFound) {
    return res.status(204).json();
  }

  return res.json(jobFound);
};
