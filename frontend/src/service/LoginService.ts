import axios from "axios";
import { UserProps } from "../@types/user";
import { CompanyProps } from "../@types/company";

const API = "http://localhost:3333";

export const loginUser = async (user: UserProps) => {
  return await axios.post(`${API}/user/login`, user);
};

export const loginCompany = async (company: CompanyProps) => {
  return await axios.post(`${API}/company/login`, company);
};
