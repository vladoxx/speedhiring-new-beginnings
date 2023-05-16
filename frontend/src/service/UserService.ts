import axios from "axios";
import { UserProps } from "../@types/user";

const API = "http://localhost:3333";

export const getAllUsers = async () => {
  return await axios.get<UserProps[]>(`${API}/users`);
};

export const createUser = async (user: UserProps) => {
  return await axios.post(`${API}/user/register`, user);
};

export const getOneUser = async (id: string) => {
  return await axios.get<UserProps>(`${API}/user/${id}`);
};

export const updateUser = async (id: string, user: UserProps) => {
  return await axios.put<UserProps>(`${API}/user/${id}`, user);
};

export const deleteUser = async (id: string) => {
  return await axios.delete<UserProps>(`${API}/user/${id}`);
};
