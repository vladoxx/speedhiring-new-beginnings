import { Link } from "react-router-dom";

import { CandidatureJobs } from "../../@types/job";

import { getAllCandidatures } from "../../service/VacancyService";

import "./Candidatures.css";
import { useEffect, useState } from "react";

function Candidatures() {
  const [candidatures, setCandidatures] = useState<CandidatureJobs[]>([]);

  const loadCandidatures = async () => {
    const res = await getAllCandidatures();

    setCandidatures(res.data);
  };

  console.log(candidatures);

  useEffect(() => {
    loadCandidatures();
  }, []);

  return (
    <div className="candidatures">
      <h3 className="candidatures__tittle">Minhas Candidaturas</h3>

      {candidatures.map((candidature) => {
        return (
          <div>
            <h1>{candidature.user}</h1>
          </div>
        );
      })}

      <div className="candidatures__container">
        <div className="candidatures__box_jobs">
          <h4 className="candidatures__role">Atendente de Caixa</h4>
          <p className="candidatures__city">Rio de Janeiro</p>
          <hr />
          <p className="candidatures__company">Empresa Lorem</p>
          <p className="candidatures__job_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dolores autem, alias vel earum veniam minus quos delectus excepturi.
          </p>

          <div className="candidatures__box_input_job">
            <input
              className="candidatures__button_job"
              type="submit"
              value="Ver vaga"
            />
          </div>
        </div>
      </div>

      <div className="candidatures__box_button_home">
        <Link to={"/"}>
          <button className="candidatures__button_home" type="button">
            Voltar ao Início
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Candidatures;
