import { createContext, useState } from "react";

import { UserContextProps, UserContextProviderProps } from "../@types/user";

const UserContext = createContext<UserContextProps>({
  jwt: "",
  setJwt: () => {},
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [jwt, setJwt] = useState<any>(null);

  return (
    <UserContext.Provider value={{ jwt, setJwt }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
