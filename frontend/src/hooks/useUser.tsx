import { useContext, useCallback } from "react";
import Context from "../context/UserLoginContext";

function useUser() {
  const { jwt, setJwt } = useContext(Context);

  const login = useCallback(() => {
    setJwt("test");
  }, [setJwt]);

  const logout = useCallback(() => {
    setJwt("");
  }, [setJwt]);

  return {
    isLoggedIn: Boolean(jwt),
    login,
    logout,
  };
}

export default useUser;
