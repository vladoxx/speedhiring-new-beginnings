import axios from "axios";
import { Curriculum, EducationProps } from "../@types/curriculum";

const API = "http://localhost:3333";

export const getOneCurriculum = async (id: string) => {
  return await axios.get<Curriculum>(`${API}/curriculum/${id}`);
};

export const getUpdateCurriculum = async (
  id: string,
  dados: Curriculum["personalInfo"]
) => {
  return await axios.put<Curriculum>(`${API}/curriculum/${id}`, dados);
};

export const deleteEducation = async (
  idCurriculum: string,
  idEducation: String
) => {
  return await axios.delete<Curriculum>(
    `${API}/curriculum/${idCurriculum}/education/${idEducation}`
  );
};

export const addEducation = async (
  idCurriculum: string,
  education: EducationProps
) => {
  return await axios.post<Curriculum>(
    `${API}/curriculum/${idCurriculum}/education`,
    education
  );
};

export const updateEducation = async (
  idCurriculum: string,
  idEducation: string,
  education: EducationProps
) => {
  return await axios.put<Curriculum["education"]>(
    `${API}/curriculum/${idCurriculum}/education/${idEducation}`,
    education
  );
};
