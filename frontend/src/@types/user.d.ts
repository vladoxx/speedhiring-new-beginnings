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
  curriculumId?: string;
  password: string | undefined;
  confirm_password?: string | undefined;
}

export interface UserTokenContextProps {
  jwt: string;
  setJwt: (jwt: string) => void;
}

export interface UserIdContextProps {
  userId: string;
  setUserId: (userId: string) => void;
}

export interface UserContextProviderProps {
  children: ReactNode;
}
