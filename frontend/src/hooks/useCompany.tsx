import { useContext, useCallback } from "react";
import Context from "../context/UserTokenContext";

function useCompany() {
  const { jwt, setJwt } = useContext(Context);

  const loginCompany = useCallback(
    (companyLogin: string) => {
      setJwt(companyLogin);
    },
    [setJwt]
  );

  const logoutCompany = useCallback(() => {
    setJwt("");
  }, [setJwt]);

  return {
    isLoggedInCompany: Boolean(jwt),
    loginCompany,
    logoutCompany,
  };
}

export default useCompany;
