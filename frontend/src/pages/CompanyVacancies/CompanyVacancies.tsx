import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";

import * as companyService from "../../service/CompanyService";
import { handleButtonClick } from "../../utils/scrollTop";

import useCompany from "../../hooks/useCompany";
import Vacancies from "../../components/Vacancies/Vacancies";

export default function CompanyVacancies() {
  const navigate = useNavigate();

  const [job, setJob] = useState<JobProps[]>([]);

  const { companyId } = useCompany();

  const fetchJobs = async () => {
    try {
      const res = await companyService.getJobsCompany(companyId);

      setJob(res.data);
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

      <button onClick={handleGoBack}>Voltar ao perfil</button>
    </div>
  );
}
