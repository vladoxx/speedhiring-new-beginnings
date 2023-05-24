import { createContext, useState } from "react";
import {
  CompanyContextProviderProps,
  CompanyIdContextProps,
} from "../@types/company";

const CompanyIdContext = createContext<CompanyIdContextProps>({
  companyId: "",
  setCompanyId: () => {},
});

export function CompanyIdContextProvider({
  children,
}: CompanyContextProviderProps) {
  const [companyId, setCompanyId] = useState<string>("");

  return (
    <CompanyIdContext.Provider value={{ companyId, setCompanyId }}>
      {children}
    </CompanyIdContext.Provider>
  );
}

export default CompanyIdContext;
