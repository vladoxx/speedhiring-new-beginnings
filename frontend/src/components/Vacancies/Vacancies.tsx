import { Link, useLocation, useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";

import useCompany from "../../hooks/useCompany";
import * as vacancyService from "../../service/VacancyService";

import { handleButtonClick } from "../../utils/scrollTop";

import "./Vacancies.css";
import { useEffect } from "react";
interface PropsJob {
  vacancy: JobProps | undefined;
  fetchJobs: () => void;
}

export default function Vacancies({ vacancy, fetchJobs }: PropsJob) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedInCompany } = useCompany();

  const isPageVacancy = location.pathname === "/vacancy";

  const vacancyDelete = async (id: string) => {
    try {
      await vacancyService.deleteOneJob(id);

      fetchJobs();
    } catch (error) {
      console.error(error);
    }
  };

  const handleButtonNavigate = (id: string | undefined) => {
    handleButtonClick();

    navigate(`/advertise-vacancy/${id}`);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div key={vacancy?._id} className="vacant__box_info">
      <div className="vacant__box_info-header">
        <h3 className="vacant__job_title">{vacancy?.jobTitle}</h3>
        <span className="vacant__localization">
          {vacancy?.state || "Não anunciado"}
        </span>
      </div>
      <div className="vacant__description-container">
        <span className="vacant__description-empresa">
          {vacancy?.companyName}
        </span>
        <p className="vacant__description">{vacancy?.jobDescription}</p>

        {!isLoggedInCompany && (
          <Link
            to={`/description-vacancy/${vacancy?._id}`}
            className="vacant__box_info-button"
            onClick={handleButtonClick}
          >
            Ver vaga
          </Link>
        )}

        {isLoggedInCompany && !isPageVacancy && (
          <div>
            <button
              className="vacant__box_info-button"
              onClick={() => handleButtonNavigate(vacancy?._id)}
            >
              Editar
            </button>
            <button
              className="vacant__box_info-button"
              onClick={() => vacancy?._id && vacancyDelete(vacancy?._id)}
            >
              Deletar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
