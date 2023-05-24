import axios from "axios";
import { JobProps } from "../@types/job";

const API = "http://localhost:3333";

export const getAllJobs = async () => {
  return await axios.get<JobProps[]>(`${API}/jobs`);
};

export const getAllCandidatures = async (id: string) => {
  return await axios.get<JobProps[]>(`${API}/user/${id}/jobs`);
};
