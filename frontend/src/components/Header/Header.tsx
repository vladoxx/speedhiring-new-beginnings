import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import useUser from "../../hooks/useUser";
import useCompany from "../../hooks/useCompany";

import Logo from "../../assets/images/logo.png";

import "./Header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoggedInUser, logoutUser, userId } = useUser();
  const { isLoggedInCompany, logoutCompany, companyId } = useCompany();

  const value = "Contato";
  const isHome = location.pathname === "/";
  const isPageCompany = location.pathname === "/company/:id?";
  const isPageUser = location.pathname === "/user";

  const handleLinkClick = () => {
    const contactSection = document.getElementById("contact");
    const target = event?.target as HTMLElement;
    const value = target.dataset.value;

    if (contactSection && value) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }
  };

  const handleCheckboxChange = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClickLogout = () => {
    logoutUser();
    logoutCompany();

    navigate("/");
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
                  {isHome ? null : (
                    <li>
                      <Link to={`/`} onClick={handleLinkClick}>
                        Início
                      </Link>
                    </li>
                  )}

                  {/* Logica Company */}

                  {isLoggedInCompany && isPageCompany && (
                    <li className="dropdown">
                      Para empresas
                      <div className="dropdown-content">
                        <Link
                          to={`/company/${companyId}`}
                          onClick={handleLinkClick}
                        >
                          Perfil
                        </Link>
                      </div>
                    </li>
                  )}

                  {isLoggedInCompany && isHome && (
                    <li className="dropdown">
                      Para empresas
                      <div className="dropdown-content">
                        {!isPageCompany ? (
                          ""
                        ) : (
                          <Link
                            to={"/advertise-vacancy"}
                            onClick={handleLinkClick}
                          >
                            Cadastrar vaga
                          </Link>
                        )}

                        <Link
                          to={`/company/${companyId}`}
                          onClick={handleLinkClick}
                        >
                          Perfil
                        </Link>
                      </div>
                    </li>
                  )}

                  {!isLoggedInCompany && !isPageCompany && (
                    <li className="dropdown">
                      Para empresas
                      <div className="dropdown-content">
                        <Link
                          to={"/register-company"}
                          onClick={handleLinkClick}
                        >
                          Cadastrar empresa
                        </Link>
                      </div>
                    </li>
                  )}

                  {/* Lógica Candidato */}

                  {isLoggedInUser && !isPageUser && (
                    <li className="dropdown">
                      Candidato
                      <div className="dropdown-content">
                        {!isLoggedInUser ? (
                          <Link to={"/register-user"} onClick={handleLinkClick}>
                            Cadastrar candidato
                          </Link>
                        ) : (
                          <Link
                            to={`/user/${userId}`}
                            onClick={handleLinkClick}
                          >
                            Perfil
                          </Link>
                        )}
                      </div>
                    </li>
                  )}

                  {!isLoggedInUser && !isLoggedInCompany && (
                    <li className="dropdown">
                      Candidato
                      <div className="dropdown-content">
                        {!isLoggedInUser ? (
                          <Link to={"/register-user"} onClick={handleLinkClick}>
                            Cadastrar candidato
                          </Link>
                        ) : (
                          <Link
                            to={`/user/${userId}`}
                            onClick={handleLinkClick}
                          >
                            Perfil
                          </Link>
                        )}
                      </div>
                    </li>
                  )}

                  <li>
                    <Link to={"/vacancy"} onClick={handleLinkClick}>
                      Vagas
                    </Link>
                  </li>

                  {!isHome ? null : (
                    <li className={`${value}`}>
                      <Link
                        to={""}
                        onClick={handleLinkClick}
                        data-value={value}
                      >
                        Contato
                      </Link>
                    </li>
                  )}

                  <li>
                    {isLoggedInUser || isLoggedInCompany ? (
                      <button
                        className={`${
                          !isLoggedInUser || !isLoggedInCompany
                            ? "header__navbar_button"
                            : "logout"
                        }`}
                        onClick={handleLinkClickLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        className="header__navbar_button"
                        to={"/general-login"}
                        onClick={handleLinkClick}
                      >
                        Login
                      </Link>
                    )}
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
          Solução de emprego para imigrantes e refugiados
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
