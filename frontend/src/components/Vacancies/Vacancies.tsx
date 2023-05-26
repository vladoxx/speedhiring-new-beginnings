import { JobProps } from "../../@types/job";

import "./Vacancies.css";
interface PropsJob {
  vacancy: JobProps | undefined;
}

export default function Vacancies({ vacancy }: PropsJob) {
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
        <button className="vacant__box_info-button" type="submit" value="">
          Ver Vaga
        </button>
      </div>
    </div>
  );
}
