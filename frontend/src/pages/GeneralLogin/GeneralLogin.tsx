import { Link } from "react-router-dom";
import CadastroUser from "../../assets/images/candidata.png";
import Recrutadores from "../../assets/images/trabajadores.png";

import "./GeneralLogin.css";

function GeneralLogin() {
  return (
    <div className="generalLogin">
      <h3 className="generalLogin__title">Fazer login como</h3>
      <div className="services__container">
        <Link to="/register-company">
          <div className="services__companies">
            <h4 className="services__companies_title">Empresa</h4>
            <img
              className="services__companies_image"
              src={Recrutadores}
              alt="Imagem Cumprimento"
            />
          </div>
        </Link>

        <div className="services__candidate">
          <Link to={"/register-user"}>
            <h4 className="services__candidate_title">Candidato</h4>
            <img
              className="services__candidate_image"
              src={CadastroUser}
              alt="Imagem de Usuário"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GeneralLogin;
