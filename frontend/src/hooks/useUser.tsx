import { useContext, useCallback } from "react";
import UserTokenContext from "../context/UserTokenContext";
import UserIdContext from "../context/UserIdContext";

function useUser() {
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

  const getIdUser = useCallback(
    (userId: string) => {
      setUserId(userId);
    },
    [setUserId]
  );

  return {
    isLoggedInUser: Boolean(jwt),
    tokenUser,
    logoutUser,
    getIdUser,
    userId,
  };
}

export default useUser;
