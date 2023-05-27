import { createContext, useState } from "react";
import {
  CompanyNameContextProps,
  CompanyContextProviderProps,
} from "../@types/company";

const CompanyNameContext = createContext<CompanyNameContextProps>({
  companyName: "",
  setCompanyName: () => {},
});

export function CompanyNameContextProvider({
  children,
}: CompanyContextProviderProps) {
  const [companyName, setCompanyName] = useState<string>("");

  return (
    <CompanyNameContext.Provider value={{ companyName, setCompanyName }}>
      {children}
    </CompanyNameContext.Provider>
  );
}

export default CompanyNameContext;
