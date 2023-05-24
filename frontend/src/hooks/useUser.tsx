import { useContext, useCallback } from "react";
import UserTokenContext from "../context/UserTokenContext";
import UserIdContext from "../context/UserIdContext";

function useUserToken() {
  const { jwt, setJwt } = useContext(UserTokenContext);
  const { userId, setUserId } = useContext(UserIdContext);

  const tokenUser = useCallback(
    (userToken: string) => {
      setJwt(userToken);
    },
    [setJwt]
  );

  const logoutUser = useCallback(() => {
    setJwt("");
    setUserId("");
  }, [setJwt, setUserId]);

  const idUser = useCallback(
    (userId: string) => {
      setJwt(userId);
    },
    [setUserId]
  );

  return {
    isLoggedInUser: Boolean(jwt),
    isIdUser: Boolean(userId),
    tokenUser,
    logoutUser,
    idUser,
  };
}

export default useUserToken;
