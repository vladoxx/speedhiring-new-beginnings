import { useEffect, useState } from "react";
import * as userService from "./service/UserService";

import { UserProps } from "./@types/user";

function App() {
  const [users, setUsers] = useState<UserProps[]>([]);

  const loadUser = async () => {
    const res = await userService.getAllUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  console.log(users);

  let user = users?.map((item) => {
    return <p key={item.email}>{item.name}</p>;
  });

  return (
    <>
      <h1>Hello World!!</h1>

      <p>{user}</p>
    </>
  );
}

export default App;
