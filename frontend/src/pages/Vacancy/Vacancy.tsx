import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";
import * as vacancyService from "../../service/VacancyService";

import "./Vacancy.css";

function Vacancy() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobProps[]>([]);

  const loadJobs = async () => {
    const res = await vacancyService.getAllJobs();

    setJobs(res.data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleButtonClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="vacant">
      <h2 className="vacant__title">Vagas</h2>
      <div className="vacant__container">
        {jobs.map((job) => {
          return (
            <div key={job._id} className="vacant__box_info">
              <div className="vacant__box_info-header">
                <h3 className="vacant__job_title">{job.jobTitle}</h3>
                <span className="vacant__localization">
                  {job.state || "Não anunciado"}
                </span>
              </div>
              <div className="vacant__description-container">
                <span className="vacant__description-empresa">
                  {job.company}
                </span>
                <p className="vacant__description">{job.jobDescription}</p>
                <button
                  className="vacant__box_info-button"
                  type="submit"
                  value=""
                >
                  Ver Vaga
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="vacant__button"
        type="button"
        onClick={handleButtonClick}
      >
        Voltar ao Inicio
      </button>
    </div>
  );
}

export default Vacancy;
