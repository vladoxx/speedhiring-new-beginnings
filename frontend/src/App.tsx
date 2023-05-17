import About from "./components/About/About";
import Connection from "./components/Connection/Connection";
import Header from "./components/Header/Header";
import Objective from "./components/Objective/Objective";
import Principles from "./components/Principles/Principles";
import Services from "./components/Services/Services";

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
      <Header />

      <About />

      <Objective />

      <Connection />

      <Services />

      <Principles />

      <section>
        <h3>Empresas parceiras</h3>

        <div>
          <div>Toti</div>
          <div>USAID</div>
          <div>Pares Cáritas Rj</div>
        </div>
      </section>

      <section>
        <h3>Contacto</h3>

        <p>
          Se você é um imigrante em busca de emprego ou deseja saber mais sobre
          nossos serviços, entre em contato conosco através do telefone (xx)
          xxxxx-xxxx ou pelo email contato@nomedaempresa.com. Teremos o maior
          prazer em ajudá-lo em sua busca por uma vida melhor em nosso país.
        </p>
      </section>

      <footer>
        <div>
          <div>
            <img src="" alt="" />
            <h3>New Beginnings</h3>
          </div>

          <div>
            <img src="" alt="Facebook" />
            <img src="" alt="Twitter" />
            <img src="" alt="Instagram" />
          </div>
        </div>
        <div>
          <p>
            © 2023. Todos direitos reservados a Inclusion Squad. Este material
            não pode ser publicado, transmitido por broadcast, reescrito ou
            redistribuído sem autorização.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
