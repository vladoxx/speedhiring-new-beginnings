import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="navbar">
            <div className="container nav-container">
              <input className="checkbox" type="checkbox" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <ul className="header__ul menu-items">
                <li>
                  <Link to={"/"}>Início</Link>
                </li>
                <li>
                  <Link to={"/register-company"}>Para empresas</Link>
                </li>
                <li>
                  <Link to={"/register-user"}>Candidato</Link>
                </li>
                <li>
                  <Link to={"/vacancy"}>Vagas</Link>
                </li>
                <li>
                  <Link to={"/"}>Contato</Link>
                </li>
                <li id="login">
                  <Link className="header__navbar_button" to={"/login"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header__div">
          <img className="header__img" src={Logo} alt="Logo do Site" />
          <h1 className="header_title">New Beginnings</h1>
        </div>
        <h2 className="header_subtitle">
          Solução de empregos para imigrantes e refugiados
        </h2>
        <p className="header__paragraph">
          Ajude imigrantes e refugiados a encontrar empregos e superar as
          barreiras que muitas vezes impedem a integração no mercado de trabalho
        </p>
      </header>
    </>
  );
}

export default Header;
