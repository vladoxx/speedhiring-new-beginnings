import { useContext, useCallback } from "react";
import CompanyTokenContext from "../context/CompanyTokenContext";
import CompanyIdContext from "../context/CompanyIdContext";
import CompanyNameContext from "../context/CompanyName";

function useCompany() {
  const { jwtCompany, setJwtCompany } = useContext(CompanyTokenContext);
  const { companyId, setCompanyId } = useContext(CompanyIdContext);
  const { companyName, setCompanyName } = useContext(CompanyNameContext);

  const tokenCompany = useCallback(
    (companyToken: string) => {
      setJwtCompany(companyToken);
    },
    [setJwtCompany]
  );

  const logoutCompany = useCallback(() => {
    setJwtCompany("");
    setCompanyId("");
  }, [setJwtCompany, setCompanyId]);

  const getIdCompany = useCallback(
    (companyId: string) => {
      setCompanyId(companyId);
    },
    [setCompanyId]
  );

  const getNameCompany = useCallback((companyName: string) => {
    setCompanyName(companyName);
  }, []);

  return {
    isLoggedInCompany: Boolean(jwtCompany),
    tokenCompany,
    jwtCompany,
    logoutCompany,
    getIdCompany,
    companyId,
    companyName,
    getNameCompany,
  };
}

export default useCompany;
