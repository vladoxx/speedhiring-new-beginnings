// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./User.css";

function User() {
  const params = useParams();

  const [userIdCandidature, setUserIdCandidature] = useState("");

  useEffect(() => {
    if (params.id) {
      setUserIdCandidature(params.id);
    }
  }, []);

  return (
    <div className="user">
      <h3 className="register-use__tittle">Perfil do candidato</h3>

      <div className="user__container">
        <Link className="user__buttons" to={"/personal-information"}>
          Informações Pessoais
        </Link>

        <Link
          className="user__buttons"
          to={`/candidatures/${userIdCandidature}`}
        >
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
