import axios from "axios";
import { Curriculum, PersonalInfo } from "../@types/curriculum";

const API = "http://localhost:3333";

export const getOneCurriculum = async (id: string) => {
  return await axios.get<Curriculum>(`${API}/curriculum/${id}`);
};

export const getUpdatePersonalInfoCurriculum = async (
  id: string,
  curriculum: Curriculum
) => {
  return await axios.put<Curriculum>(`${API}/curriculum/${id}`, curriculum);
};
