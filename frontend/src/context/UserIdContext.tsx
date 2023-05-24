import { createContext, useState } from "react";
import { UserContextProviderProps, UserIdContextProps } from "../@types/user";

const UserIdContext = createContext<UserIdContextProps>({
  userId: "",
  setUserId: () => {},
});

export function UserIdContextProvider({ children }: UserContextProviderProps) {
  const [userId, setUserId] = useState<string>("");

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
}

export default UserIdContext;
