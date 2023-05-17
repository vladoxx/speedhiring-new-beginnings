import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <>
      <header>
        <img src={Logo} />
        <nav>
          <ul>
            <li>Início</li>
            <li>Para empresas</li>
            <li>Candidato</li>
            <li>Vagas</li>
            <li>Benefícios</li>
            <li>Contato</li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </nav>

        <h1>New Beginnings</h1>
        <h2>Solução de empregos para imigrantes e refugiados</h2>
        <p>
          Ajude imigrantes e refugiados a encontrar empregos e superar as
          barreiras que muitas vezes impedem a integração no mercado de
          trabalho.
        </p>
      </header>
    </>
  );
}

export default Header;
