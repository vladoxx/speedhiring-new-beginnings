import { Link } from "react-router-dom";

import "./User.css";

function User() {
  return (
    <div className="user">
      <h3 className="register-use__tittle">Perfil do candidato</h3>

      <div className="user__container">
        <Link className="user__buttons" to={"/personal-information"}>
          Informações Pessoais
        </Link>

        <Link className="user__buttons" to={"/candidatures"}>
          Minhas Candidaturas
        </Link>

        <Link className="user__buttons" to={"/change-password"}>
          Privacidade
        </Link>

        <Link className="user__buttons" to={"/vacancy"}>
          Area de Vagas
        </Link>
      </div>
    </div>
  );
}

export default User;
