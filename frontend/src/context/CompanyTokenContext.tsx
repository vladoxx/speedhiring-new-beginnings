import { createContext, useState } from "react";

import {
  CompanyTokenContextProps,
  CompanyContextProviderProps,
} from "../@types/company";

const CompanyTokenContext = createContext<CompanyTokenContextProps>({
  jwtCompany: "",
  setJwtCompany: () => {},
});

export function CompanyTokenContextProvider({
  children,
}: CompanyContextProviderProps) {
  const [jwtCompany, setJwtCompany] = useState<string>("");

  return (
    <CompanyTokenContext.Provider value={{ jwtCompany, setJwtCompany }}>
      {children}
    </CompanyTokenContext.Provider>
  );
}

export default CompanyTokenContext;
