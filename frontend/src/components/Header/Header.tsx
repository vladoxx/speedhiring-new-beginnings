import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import useUser from "../../hooks/useUser";
import useCompany from "../../hooks/useCompany";

import Logo from "../../assets/images/logo.png";

import "./Header.css";
import Button from "../Button/Button";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const { isLoggedInUser, logoutUser, userId } = useUser();
  const { isLoggedInCompany, logoutCompany, companyId } = useCompany();

  const value = "Contato";
  const isHome = location.pathname === "/";
  const isPageCompany = location.pathname === "/company/:id?";

  const handleLinkClick = (path: string) => {
    const contactSection = document.getElementById("contact");
    const target = event?.target as HTMLElement;
    const value = target.dataset.value;

    if (contactSection && value) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      setMenuOpen(false);
    }

    navigate(path);
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
                    <li onClick={() => handleLinkClick("/")}>Início</li>
                  )}

                  {/* Logica Company */}

                  {isLoggedInCompany && isPageCompany && (
                    <li className="dropdown">
                      Para empresas
                      <div
                        className="dropdown-content"
                        onClick={() => handleLinkClick(`/company/${companyId}`)}
                      >
                        Perfil
                      </div>
                    </li>
                  )}

                  {isLoggedInCompany && !isPageCompany && (
                    <li className="dropdown">
                      Para empresas
                      <div
                        className="dropdown-content"
                        onClick={() => handleLinkClick(`/company/${companyId}`)}
                      >
                        Perfil
                      </div>
                    </li>
                  )}

                  {/* Lógica Candidato */}

                  {isLoggedInUser && (
                    <li className="dropdown">
                      Candidato
                      <div
                        className="dropdown-content"
                        onClick={() => handleLinkClick(`/user/${userId}`)}
                      >
                        Perfil
                      </div>
                    </li>
                  )}

                  {!isLoggedInUser && !isLoggedInCompany && (
                    <>
                      <li className="dropdown">
                        Para empresas
                        <div
                          className="dropdown-content"
                          onClick={() => handleLinkClick("/register-company")}
                        >
                          Cadastrar empresa
                        </div>
                      </li>

                      <li className="dropdown">
                        Candidato
                        <div
                          className="dropdown-content"
                          onClick={() => handleLinkClick("/register-user")}
                        >
                          Cadastrar candidato
                        </div>
                      </li>
                    </>
                  )}

                  <li onClick={() => handleLinkClick("/vacancy")}>Vagas</li>

                  {!isHome ? null : (
                    <li
                      className={`${value}`}
                      data-value={value}
                      onClick={() => handleLinkClick("")}
                    >
                      Contato
                    </li>
                  )}

                  <li>
                    {isLoggedInUser || isLoggedInCompany ? (
                      <Button
                        text="Logout"
                        className={`${
                          (!isLoggedInUser && "logout") ||
                          (!isLoggedInCompany && "logout")
                        }`}
                        onClick={handleLinkClickLogout}
                        width="6.875rem"
                      />
                    ) : (
                      <Button
                        text="Login"
                        width="6.875rem"
                        onClick={() => navigate("/general-login")}
                      />
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="header__div">
            <Link to={"/"}>
              <img className="header__img" src={Logo} />
            </Link>

            <h1 className="header_title">New Beginnings</h1>
          </div>
        </div>

        {isHome && (
          <>
            <h2 className="header__subtitle">
              Solução de emprego para imigrantes e refugiados
            </h2>
            <p className="header__paragraph">
              Ajude imigrantes e refugiados a encontrar empregos e superar as
              barreiras que muitas vezes impedem a integração no mercado de
              trabalho.
            </p>
          </>
        )}
      </header>
    </>
  );
}

export default Header;
