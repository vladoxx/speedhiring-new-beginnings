// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./User.css";
import useUser from "../../hooks/useUser";

function User() {
  const { userId } = useUser();

  return (
    <div className="user">
      <h3 className="register-use__tittle">Perfil do candidato</h3>

      <div className="user__container">
        <Link className="user__buttons" to={`/personal-information/${userId}`}>
          Informações Pessoais
        </Link>

        <Link className="user__buttons" to={`/candidatures/${userId}`}>
          Minhas Candidaturas
        </Link>

        <Link className="user__buttons" to={"/change-password"}>
          Privacidade
        </Link>

        <Link className="user__buttons" to={"/vacancy"}>
          Área de Vagas
        </Link>
      </div>
    </div>
  );
}

export default User;
