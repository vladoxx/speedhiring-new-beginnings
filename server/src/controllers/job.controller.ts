import { RequestHandler } from "express";

import Job from "../models/Job";
import Company from "../models/Company";

export const createJob: RequestHandler = async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();

    console.log(savedJob);

    /**
     * Cria um novo trabalho.
     * Salva o trabalho no banco de dados e atualiza a empresa relacionada adicionando o trabalho à lista de trabalhos.
     * Retorna o trabalho criado e a empresa atualizada.
     */

    const updateCompany = await Company.findByIdAndUpdate(
      req.body.companyId,
      { $push: { jobs: savedJob.companyId } },
      { new: true }
    );

    res.json({ job: savedJob, companyId: updateCompany });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar a vaga de emprego." });
  }
};

/**
 * Obtém todos os trabalhos.
 * Retorna uma lista de todos os trabalhos no banco de dados.
 */
export const getAllJobs: RequestHandler = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.json(jobs);
  } catch (error) {
    res.json(error);
  }
};

/**
 * Obtém um trabalho específico com base no ID fornecido.
 * Retorna o trabalho encontrado ou uma resposta com status 204 se o trabalho não for encontrado.
 */
export const getOneJob: RequestHandler = async (req, res) => {
  const jobFound = await Job.findById(req.params.id);

  if (!jobFound) {
    return res.status(204).json();
  }

  return res.json(jobFound);
};

/**
 * Atualiza um trabalho específico com base no ID fornecido.
 * Atualiza as propriedades do trabalho com os dados fornecidos no corpo da solicitação.
 * Retorna o trabalho atualizado ou uma resposta com status 204 se o trabalho não for encontrado.
 */
export const updateJob: RequestHandler = async (req, res) => {
  const jobUpdate = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!jobUpdate) {
    return res.status(204).json();
  }

  res.json(jobUpdate);
};

/**
 * Exclui um trabalho específico com base no ID fornecido.
 * Retorna o trabalho excluído ou uma resposta com status 204 se o trabalho não for encontrado.
 */
export const deleteJob: RequestHandler = async (req, res) => {
  const jobFound = await Job.findByIdAndDelete(req.params.id);

  if (!jobFound) {
    return res.status(204).json();
  }

  return res.json(jobFound);
};

/**
 * Exclui todos os trabalhos.
 * Retorna uma mensagem indicando que todos os trabalhos foram excluídos com sucesso ou uma resposta de erro em caso de falha.
 */
export const deleteAllJobs: RequestHandler = async (req, res) => {
  try {
    // Excluir todos os trabalhos
    const deleteJobs = await Job.deleteMany();

    return res.json({
      message: "Todos os trabalhos foram excluídos com sucesso.",
      deleteJobs,
    });
  } catch (error) {
    console.error("Erro ao excluir todos os trabalhos:", error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir todas os trabalhos." });
  }
};

// // Renomear a chave company para companyId em todos os documentos da coleção Job.
// const updateJobs = async () => {
//   await Job.updateMany({}, { $rename: { company: "companyId" } });
// };

// updateJobs();
