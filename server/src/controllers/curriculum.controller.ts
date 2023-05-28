import { RequestHandler } from "express";

import Curriculum from "../models/Curriculum";
import User from "../models/User";

export const createCurriculum: RequestHandler = async (req, res) => {
  try {
    const { userId, ...curriculumData } = req.body;

    console.log(req.body);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const existingCurriculum = await Curriculum.findOne({ userId: user._id });

    if (existingCurriculum) {
      return res
        .status(400)
        .json({ message: "Já existe um currículo para este usuário" });
    }

    const curriculum = new Curriculum({
      ...curriculumData,
    });

    const savedCurriculum = await curriculum.save();
    user.curriculumId = savedCurriculum._id.toString();
    await user.save();

    res.json(savedCurriculum);
  } catch (error) {
    console.error("Erro ao criar currículo:", error);
    res.status(500).json({ message: "Erro ao criar currículo" });
  }
};

export const getAllCurriculums: RequestHandler = async (req, res) => {
  try {
    const curriculums = await Curriculum.find();
    return res.json(curriculums);
  } catch (error) {
    res.json(error);
  }
};

export const getOneCurriculum: RequestHandler = async (req, res) => {
  const curriculumFound = await Curriculum.findById(req.params.id);

  if (!curriculumFound) {
    return res.status(204).json();
  }

  return res.json(curriculumFound);
};

export const updateCurriculum: RequestHandler = async (req, res) => {
  try {
    const curriculumUpdate = await Curriculum.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!curriculumUpdate) {
      return res.status(204).json();
    }

    // Verificar se o usuário associado ao currículo existe
    const user = await User.findOne({ curriculumId: req.params.id });

    if (user) {
      user.curriculumId = curriculumUpdate._id;
      await user.save();
    }

    res.json(curriculumUpdate);
  } catch (error) {
    console.error("Erro ao atualizar currículo:", error);
    res.status(500).json({ message: "Erro ao atualizar currículo" });
  }
};

export const deleteCurriculum: RequestHandler = async (req, res) => {
  const curriculumFound = await Curriculum.findByIdAndDelete(req.params.id);

  if (!curriculumFound) {
    return res.status(204).json();
  }

  return res.json(curriculumFound);
};

export const deleteAllCurriculums: RequestHandler = async (req, res) => {
  try {
    // Excluir todos os currículos
    const deleteJobs = await Curriculum.deleteMany();

    return res.json({
      message: "Todos os currículos foram excluídos com sucesso.",
      deleteJobs,
    });
  } catch (error) {
    console.error("Erro ao excluir todos os currículos:", error);
    return res
      .status(500)
      .json({ message: "Erro ao excluir todos os currículos:" });
  }
};
