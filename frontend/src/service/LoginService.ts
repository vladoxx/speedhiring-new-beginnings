import axios from "axios";
import { UserProps } from "../@types/user";

const API = "http://localhost:3333";

export const loginUser = async (user: UserProps) => {
  return await axios.post(`${API}/user/login`, user);
};
