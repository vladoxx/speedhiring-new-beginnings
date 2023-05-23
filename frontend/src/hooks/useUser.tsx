import { useContext, useCallback } from "react";
import Context from "../context/UserLoginContext";

function useUser() {
  const { jwt, setJwt } = useContext(Context);

  const loginUser = useCallback(
    (userLogin: string) => {
      setJwt(userLogin);
    },
    [setJwt]
  );

  const logoutUser = useCallback(() => {
    setJwt("");
  }, [setJwt]);

  return {
    isLoggedInUser: Boolean(jwt),
    loginUser,
    logoutUser,
  };
}

export default useUser;
