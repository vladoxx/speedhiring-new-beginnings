import { useContext, useCallback } from "react";
import CompanyTokenContext from "../context/CompanyTokenContext";
import CompanyIdContext from "../context/CompanyIdContext";

function useCompany() {
  const { jwtCompany, setJwtCompany } = useContext(CompanyTokenContext);
  const { companyId, setCompanyId } = useContext(CompanyIdContext);

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

  return {
    isLoggedInCompany: Boolean(jwtCompany),
    tokenCompany,
    jwtCompany,
    logoutCompany,
    getIdCompany,
    companyId,
  };
}

export default useCompany;
