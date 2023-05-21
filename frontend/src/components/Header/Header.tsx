import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const value = "Contato";

  const handleLinkClick = () => {
    const contactSection = document.getElementById("contact");
    const target = event?.target as HTMLElement;
    const value = target.dataset.value;

    if (contactSection && value) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      setMenuOpen(false);
    }
  };

  const handleCheckboxChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__nav">
          <nav>
            <div className="navbar">
              <div className="container nav-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={menuOpen}
                  onChange={handleCheckboxChange}
                />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>

                <ul
                  className={`header__ul menu-items ${menuOpen ? "open" : ""}`}
                >
                  <li>
                    <Link to={"/"} onClick={handleLinkClick}>
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link to={"/register-company"} onClick={handleLinkClick}>
                      Para empresas
                    </Link>
                  </li>
                  <li>
                    <Link to={"/register-user"} onClick={handleLinkClick}>
                      Candidato
                    </Link>
                  </li>
                  <li>
                    <Link to={"/vacancy"} onClick={handleLinkClick}>
                      Vagas
                    </Link>
                  </li>
                  <li>
                    <Link to={""} onClick={handleLinkClick} data-value={value}>
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="header__navbar_button"
                      to={"/login"}
                      onClick={handleLinkClick}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="header__div">
            <img className="header__img" src={Logo} />

            <h1 className="header_title">New Beginnings</h1>
          </div>
        </div>
        <h2 className="header__subtitle">
          Solução de empregos para imigrantes e refugiados
        </h2>
        <p className="header__paragraph">
          Ajude imigrantes e refugiados a encontrar empregos e superar as
          barreiras que muitas vezes impedem a integração no mercado de
          trabalho.
        </p>
      </header>
    </>
  );
}

export default Header;
