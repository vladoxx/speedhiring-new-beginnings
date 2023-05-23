import axios from "axios";
import { CandidatureJobs, JobProps } from "../@types/job";

const API = "http://localhost:3333";

export const getAllJobs = async () => {
  return await axios.get<JobProps[]>(`${API}/jobs`);
};

export const getAllCandidatures = async () => {
  return await axios.get<CandidatureJobs[]>(`${API}/jobs`);
};
