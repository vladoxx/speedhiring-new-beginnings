import axios from "axios";
import { CompanyProps } from "./../@types/company.d";

const API = "http://localhost:3333";

export const getAllCompanies = async () => {
  return await axios.get<CompanyProps[]>(`${API}/companies`);
};

export const createCompany = async (company: CompanyProps) => {
  return await axios.post(`${API}/company/register`, company);
};

export const getOneCompany = async (id: string) => {
  return await axios.get<CompanyProps>(`${API}/company/${id}`);
};

export const updateCompany = async (id: string, company: CompanyProps) => {
  return await axios.put<CompanyProps>(`${API}/company/${id}`, company);
};

export const deleteCompany = async (id: string) => {
  return await axios.delete<CompanyProps>(`${API}/company/${id}`);
};
