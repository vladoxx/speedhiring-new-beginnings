import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { JobProps } from "../../@types/job";

import { getAllCandidatures } from "../../service/VacancyService";

import "./Candidatures.css";

import useUser from "../../hooks/useUser";

function Candidatures() {
  const [candidatures, setCandidatures] = useState<JobProps[]>([]);
  const { userId } = useUser();

  const loadCandidatures = async (id: string) => {
    const res = await getAllCandidatures(id);

    setCandidatures(res.data);
  };

  useEffect(() => {
    if (userId) {
      loadCandidatures(userId);
    }
  }, []);

  return (
    <div className="candidatures">
      <h3 className="candidatures__tittle">Minhas Candidaturas</h3>

      <div className="candidatures__container">
        {candidatures.length === 0 ? (
          <h4 className="candidatures__tittle-h4">Sem candidaturas</h4>
        ) : (
          candidatures.map((candidature) => {
            return (
              <div
                key={candidature._id}
                className="candidatures__box-container"
              >
                <h4 className="candidatures__role">{candidature.jobTitle}</h4>
                <p className="candidatures__city">
                  {candidature.state || "Não informado"}
                </p>
                <hr />
                <p className="candidatures__company">{candidature._id}</p>
                <p className="candidatures__job_description">
                  {candidature.jobDescription}
                </p>

                <div className="candidatures__box_input_job">
                  <input
                    className="candidatures__button_job"
                    type="submit"
                    value="Ver vaga"
                  />
                </div>
              </div>
            );
          })
        )}
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
