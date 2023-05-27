import axios from "axios";
import { JobProps } from "../@types/job";

const API = "http://localhost:3333";

export const createJob = async (job: JobProps) => {
  return await axios.post(`${API}/job`, job);
};

export const getOneJob = async (id: string) => {
  return await axios.get<JobProps>(`${API}/job/${id}`);
};

export const updateOneJob = async (id: string, job: JobProps) => {
  return await axios.put<JobProps>(`${API}/job/${id}`, job);
};

export const getAllJobs = async () => {
  return await axios.get<JobProps[]>(`${API}/jobs`);
};

export const getAllCandidatures = async (id: string) => {
  return await axios.get<JobProps[]>(`${API}/user/${id}/jobs`);
};

export const deleteOneJob = async (id: string) => {
  return await axios.delete<JobProps>(`${API}/job/${id}`);
};
