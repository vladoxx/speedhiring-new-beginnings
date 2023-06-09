import axios from "axios";
import { UserProps } from "../@types/user";
import { CompanyProps } from "../@types/company";

const API = "http://localhost:3333";

export const loginUserBack = async (user: UserProps) => {
  return await axios.post(`${API}/user/login`, user);
};

export const loginCompanyBack = async (company: CompanyProps) => {
  return await axios.post(`${API}/company/login`, company);
};
