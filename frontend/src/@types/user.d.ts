import { jwt } from "jsonwebtoken";
import React, { Dispatch, ReactNode } from "react";

export interface UserProps {
  _id?: string;
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  cep?: string;
  city?: string;
  state?: string;
  job?: string;
  password: string | undefined;
  confirm_password?: string | undefined;
}

export interface UserContextProps {
  jwt: string;
  setJwt: (jwt: string) => void;
}

export interface UserContextProviderProps {
  children: ReactNode;
}
