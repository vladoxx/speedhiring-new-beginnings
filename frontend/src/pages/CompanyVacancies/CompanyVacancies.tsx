import { useEffect, useState } from "react";

import { JobProps } from "../../@types/job";

import * as companyService from "../../service/CompanyService";

import useCompany from "../../hooks/useCompany";
import Vacancies from "../../components/Vacancies/Vacancies";

export default function CompanyVacancies() {
  const [job, setJob] = useState<JobProps[]>([]);

  const { companyId } = useCompany();

  console.log(job);

  const fetchJobs = async () => {
    try {
      const res = await companyService.getJobsCompany(companyId);

      setJob(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="vacant">
      <h2 className="vacant__title">Vagas anunciadas</h2>
      <div className="vacant__container">
        {job.map((jobItem) => {
          return <Vacancies key={jobItem?._id} vacancy={jobItem} />;
        })}
      </div>
    </div>
  );
}
