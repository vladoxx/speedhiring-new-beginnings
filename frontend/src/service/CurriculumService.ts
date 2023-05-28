import axios from "axios";
import { Curriculum } from "../@types/curriculum";

const API = "http://localhost:3333";

export const getOneCurriculum = async (id: string) => {
  return await axios.get<Curriculum>(`${API}/curriculum/${id}`);
};
