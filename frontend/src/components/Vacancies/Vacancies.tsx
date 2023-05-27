import { Link, useLocation } from "react-router-dom";

import { JobProps } from "../../@types/job";

import useCompany from "../../hooks/useCompany";

import { handleButtonClick } from "../../utils/scrollTop";

import "./Vacancies.css";
interface PropsJob {
  vacancy: JobProps | undefined;
}

export default function Vacancies({ vacancy }: PropsJob) {
  const location = useLocation();
  const { isLoggedInCompany } = useCompany();

  const isPageVacancy = location.pathname === "/vacancy";

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
            <button className="vacant__box_info-button">Editar</button>
            <button className="vacant__box_info-button">Deletar</button>
          </div>
        )}
      </div>
    </div>
  );
}
