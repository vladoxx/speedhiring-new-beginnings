import { createContext, useState } from "react";

import {
  UserTokenContextProps,
  UserContextProviderProps,
} from "../@types/user";

const UserTokenContext = createContext<UserTokenContextProps>({
  jwt: "",
  setJwt: () => {},
});

export function UserTokenContextProvider({
  children,
}: UserContextProviderProps) {
  const [jwt, setJwt] = useState<any>(null);

  return (
    <UserTokenContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserTokenContext.Provider>
  );
}

export default UserTokenContext;
