import { RequestHandler } from "express";

import Curriculum, { ICurriculum } from "../models/Curriculum";

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

// Education

export const addEducation: RequestHandler = async (req, res) => {
  try {
    const curriculumId = req.params.curriculumId;
    const newEducation = req.body; // Dados da nova formação

    const curriculum = await Curriculum.findById(curriculumId);

    if (!curriculum) {
      return res.status(404).json({ message: "Currículo não encontrado" });
    }

    curriculum.education.push(newEducation); // Adiciona a nova formação ao array de education

    // Salva o currículo atualizado
    await curriculum.save();

    res.json({
      message: "Formação adicionada com sucesso",
      education: newEducation,
    });
  } catch (error) {
    console.error("Erro ao adicionar formação:", error);
    res.status(500).json({ message: "Erro ao adicionar formação" });
  }
};

export const deleteEducation: RequestHandler = async (req, res) => {
  try {
    const curriculumId = req.params.curriculumId;
    const educationId = req.params.educationId;

    console.log(req.params);

    const curriculum = await Curriculum.findById(curriculumId);

    if (!curriculum) {
      return res.status(404).json({ message: "Currículo não encontrado" });
    }

    // Converte o campo 'education' para o tipo 'any'
    const educationArray: any[] = curriculum.education;

    // Encontra o índice do objeto de 'education' com base no 'educationId'
    const educationIndex = educationArray.findIndex(
      (edu) => edu._id.toString() === educationId
    );

    if (educationIndex === -1) {
      return res
        .status(404)
        .json({ message: "Valor de educação não encontrado" });
    }

    // Remove o objeto de 'education' do array
    educationArray.splice(educationIndex, 1);

    // Salva o currículo atualizado
    await curriculum.save();

    res.json({ message: "Valor de educação deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar valor de educação:", error);
    res.status(500).json({ message: "Erro ao deletar valor de educação" });
  }
};

export const updateEducation: RequestHandler = async (req, res) => {
  try {
    const curriculumId = req.params.curriculumId;
    const educationId = req.params.educationId;
    const updatedEducation = req.body; // Dados atualizados da educação

    const curriculum = await Curriculum.findById(curriculumId);

    if (!curriculum) {
      return res.status(404).json({ message: "Currículo não encontrado" });
    }

    // Encontra a educação a ser editada pelo ID
    const educationIndex = curriculum.education.findIndex(
      (education) => education._id?.toString() === educationId
    );

    if (educationIndex === -1) {
      return res.status(404).json({ message: "Educação não encontrada" });
    }

    // Atualiza os dados da educação
    curriculum.education[educationIndex] = updatedEducation;

    // Salva o currículo atualizado
    await curriculum.save();

    res.json({
      message: "Educação atualizada com sucesso",
      education: updatedEducation,
    });
  } catch (error) {
    console.error("Erro ao editar educação:", error);
    res.status(500).json({ message: "Erro ao editar educação" });
  }
};
