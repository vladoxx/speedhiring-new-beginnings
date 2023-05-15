import { RequestHandler } from "express";

import Job from "../models/Job";
import Curriculum from "../models/Curriculum";
import Candidate from "../models/Candidate";

export const createApplication: RequestHandler = async (req, res) => {
  try {
    const { job, curriculum } = req.body;

    // Verifica se a vaga existe
    const jobFound = await Job.findById(job);

    if (!jobFound) {
      return res.status(400).json({ message: "Vaga não encontrada" });
    }

    // Verifica se o currículo existe
    const curriculumFound = await Curriculum.findById(curriculum);

    if (!curriculumFound) {
      return res.status(400).json({ message: "Currículo não encontrado" });
    }

    // Cria a nova candidatura
    const newApplication = new Candidate(req.body);
    const saveApplication = await newApplication.save();
    res.json(saveApplication);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar candidatura" });
  }
};

export const getAllApplications: RequestHandler = async (req, res) => {
  try {
    const applications = await Candidate.find();
    return res.json(applications);
  } catch (error) {
    res.json(error);
  }
};
