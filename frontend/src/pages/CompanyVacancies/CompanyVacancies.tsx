import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";

import * as companyService from "../../service/CompanyService";
import { handleButtonClick } from "../../utils/scrollTop";

import Vacancies from "../../components/Vacancies/Vacancies";
import Button from "../../components/Button/Button";

export default function CompanyVacancies() {
  const navigate = useNavigate();

  const [job, setJob] = useState<JobProps[]>([]);

  const companyId = sessionStorage.getItem("company_id");

  const fetchJobs = async () => {
    try {
      if (companyId) {
        const res = await companyService.getJobsCompany(companyId);
        setJob(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    handleButtonClick();

    navigate(-1);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="vacant">
      <h2 className="vacant__title">Vagas anunciadas</h2>
      {job.length > 0 ? (
        <div className="vacant__container">
          {job.map((jobItem) => {
            return (
              <Vacancies
                key={jobItem?._id}
                vacancy={jobItem}
                fetchJobs={fetchJobs}
              />
            );
          })}
        </div>
      ) : (
        <h3>Sem vagas anunciadas</h3>
      )}

      <Button text="Voltar ao perfil" onClick={handleGoBack} />
    </div>
  );
}
