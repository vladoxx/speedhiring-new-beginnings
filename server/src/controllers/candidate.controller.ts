import { RequestHandler } from "express";

import Job from "../models/Job";
import Curriculum from "../models/Curriculum";
import Candidate from "../models/Candidate";

/**
 * Cria uma nova candidatura.
 * Verifica se a vaga e o currículo existem no banco de dados.
 * Cria a nova candidatura com os dados fornecidos no corpo da solicitação.
 * Retorna a candidatura criada.
 * Retorna uma resposta de erro em caso de falha.
 */
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

/**
 * Obtém todas as candidaturas.
 * Retorna uma lista de todas as candidaturas no banco de dados.
 * Retorna uma resposta de erro em caso de falha.
 */
export const getAllApplications: RequestHandler = async (req, res) => {
  try {
    const applications = await Candidate.find();
    return res.json(applications);
  } catch (error) {
    res.json(error);
  }
};
