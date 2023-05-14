import { RequestHandler } from "express";

import Curriculum from "../models/Curriculum";

export const createCurriculum: RequestHandler = async (req, res) => {
  const curriculumFound = await Curriculum.findOne({ user: req.body.user });

  if (curriculumFound) {
    return res
      .status(301)
      .json({ message: "Já existe um usuário com este e-mail!" });
  }

  console.log(req.body);

  const curriculum = new Curriculum(req.body);
  const curriculumUser = await curriculum.save();
  res.json(curriculumUser);
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

  res.json(curriculumUpdate);
};

export const deleteCurriculum: RequestHandler = async (req, res) => {
  const curriculumFound = await Curriculum.findByIdAndDelete(req.params.id);

  if (!curriculumFound) {
    return res.status(204).json();
  }

  return res.json(curriculumFound);
};
