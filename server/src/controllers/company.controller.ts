import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import Company from "../models/Company";
import Job from "../models/Job";

/**
 * Gera um token JWT com base nos parâmetros fornecidos.
 * @param {object} params - Parâmetros para gerar o token.
 * @returns {string} Token JWT gerado.
 */
function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET || "", {
    expiresIn: 86400,
  });
}

/**
 * Cria uma nova empresa.
 * Verifica se já existe uma empresa com o CNPJ fornecido.
 * Cria a nova empresa com os dados fornecidos no corpo da solicitação.
 * Retorna a empresa criada.
 */
export const createCompany: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cnpj } = req.body;

    // Verifica se a empresa já existe
    const companyFound = await Company.findOne({ cnpj });

    if (companyFound) {
      return res
        .status(301)
        .json({ message: "Já existe uma empresa com este CNPJ" });
    }
    console.log(req.body);

    // // Hash da senha antes de salvar -- Outra opção de encryptar senha
    // const hashedPassword = await bcrypt.hash(password, 10);

    // const company = new Company({
    //   cnpj,
    //   password: hashedPassword,
    //   ...req.body,
    // });

    const company = new Company(req.body);
    const savedCompany = await company.save();

    res.json(savedCompany);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao criar empresa" });
  }
};

/**
 * Realiza o login da empresa.
 * Verifica se a empresa com o CNPJ fornecido existe e se a senha está correta.
 * Retorna a empresa e um token JWT de autenticação.
 */
export const loginCompany: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { cnpj, password } = req.body;

    const company = await Company.findOne({ cnpj }).select("+password");

    if (!company) {
      return res.status(400).json({ message: "Empresa não encontrada" });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      company.password || ""
    );

    if (!passwordMatch) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    company.password = "";

    const token = generateToken({ id: company.id });

    res.json({ company, token });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "Erro ao realizar login da empresa" });
  }
};

/**
 * Obtém todas as empresas.
 * Retorna uma lista de todas as empresas no banco de dados.
 * Retorna uma resposta de erro em caso de falha.
 */
export const getAllCompanies: RequestHandler = async (req, res) => {
  try {
    const companies = await Company.find();
    return res.json(companies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao obter todas as empresas" });
  }
};

/**
 * Obtém uma empresa específica com base no ID.
 * Verifica se a empresa existe no banco de dados.
 * Retorna a empresa encontrada ou uma resposta de status 204 se não for encontrada.
 */
export const getOneCompany: RequestHandler = async (req, res) => {
  try {
    const companyFound = await Company.findById(req.params.id);

    if (!companyFound) {
      return res.status(204).json();
    }

    return res.json(companyFound);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao obter empresa específica" });
  }
};

/**
 * Atualiza uma empresa específica com base no ID.
 * Verifica se a empresa existe no banco de dados.
 * Atualiza a empresa com os dados fornecidos no corpo da solicitação.
 * Retorna a empresa atualizada ou uma resposta de status 204 se não for encontrada.
 */
export const updateCompany: RequestHandler = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar empresa específica" });
  }
};

/**
 * Exclui uma empresa específica com base no ID.
 * Verifica se a empresa existe no banco de dados.
 * Exclui a empresa do banco de dados.
 * Retorna a empresa excluída ou uma resposta de status 204 se não for encontrada.
 */
export const deleteCompany: RequestHandler = async (req, res) => {
  try {
    const companyFound = await Company.findByIdAndDelete(req.params.id);

    if (!companyFound) {
      return res.status(204).json();
    }

    return res.json(companyFound);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir empresa específica" });
  }
};

/**
 * Exclui todas as empresas do banco de dados.
 * Retorna uma mensagem de sucesso e informações sobre as empresas excluídas.
 * Retorna uma resposta de erro em caso de falha.
 */
export const deleteAllCompanies: RequestHandler = async (req, res) => {
  try {
    // Excluir todas as empresas
    const deleteCompanies = await Company.deleteMany();

    return res.json({
      message: "Todas as empresas foram excluídas com sucesso.",
      deleteCompanies,
    });
  } catch (error) {
    console.error("Erro ao excluir todas as empresas:", error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir todas as empresas." });
  }
};

/**
 * Obtém todas as vagas de uma empresa específica com base no ID da empresa.
 * Verifica se a empresa existe no banco de dados.
 * Retorna uma lista de todas as vagas da empresa encontrada.
 * Retorna uma resposta de erro em caso de falha.
 */
export const getJobsCompany: RequestHandler = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);

    console.log(req.params);

    if (!company) {
      return res.status(400).json({ message: "Empresa não encontrada" });
    }

    const jobs = await Job.find({ companyId: company.id });

    return res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar as vagas da empresa" });
  }
};

// // Atualização dos trabalhos com nome da empresa

// import JobModel, { IJob } from "../models/Job";
// import CompanyModel, { ICompany } from "../models/Company";

// const updateJobCompanyNames = async () => {
//   try {
//     // Obtenha todos os trabalhos existentes no banco de dados
//     const jobs: IJob[] = await JobModel.find();

//     // Para cada trabalho, atualize o nome da empresa
//     for (const job of jobs) {
//       // Consulte a empresa correspondente pelo ID da empresa
//       const company: ICompany | null = await CompanyModel.findById(
//         job.companyId
//       );

//       if (company) {
//         // Obtenha o nome da empresa
//         const companyName: string = company.corporate_name;

//         // Atualize o trabalho com o nome da empresa
//         job.companyName = companyName;

//         // Atualize o trabalho com o nome da empresa
//         job.companyName = companyName;

//         // Salve as alterações no banco de dados
//         await job.save();
//       }
//     }

//     console.log("Atualização concluída com sucesso.");
//   } catch (error) {
//     console.error(
//       "Erro ao atualizar os nomes das empresas nos trabalhos:",
//       error
//     );
//   }
// };

// // Chame a função para realizar a atualização
// updateJobCompanyNames();
