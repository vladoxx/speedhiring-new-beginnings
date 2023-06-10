import { useLocation, useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";

import useCompany from "../../hooks/useCompany";
import * as vacancyService from "../../service/VacancyService";

import { handleButtonClick } from "../../utils/scrollTop";

import { useEffect } from "react";
import Button from "../Button/Button";

import "./Vacancies.css";
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

    navigate(`/description-vacancy/${id}`);
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

        <div>
          {!isLoggedInCompany && (
            <Button
              text="Ver Vaga"
              onClick={() => handleButtonNavigate(`${vacancy?._id}`)}
            />
          )}
        </div>

        {isLoggedInCompany && !isPageVacancy && (
          <div className="vacancies__containerButtons">
            <Button
              text="Editar"
              onClick={() => navigate(`/advertise-vacancy/${vacancy?._id}`)}
              className="btn-edit"
              width="9rem"
            />

            <Button
              text="Deletar"
              onClick={() => vacancy?._id && vacancyDelete(vacancy?._id)}
              className="btn-delete"
              width="9rem"
            />
          </div>
        )}
      </div>
    </div>
  );
}
