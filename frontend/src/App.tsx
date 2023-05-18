import Home from "./pages/Home/Home";

function App() {
  // const [users, setUsers] = useState<UserProps[]>([]);

  // const loadUser = async () => {
  //   const res = await userService.getAllUsers();
  //   setUsers(res.data);
  // };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  // console.log(users);

  // let user = users?.map((item) => {
  //   return <p key={item.email}>{item.name}</p>;
  // });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
