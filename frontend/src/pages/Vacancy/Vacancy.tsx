import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Vacancies from "../../components/Vacancies/Vacancies";
import Button from "../../components/Button/Button";

import { JobProps } from "../../@types/job";
import { handleButtonClick } from "../../utils/scrollTop";
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

  const handleButton = () => {
    navigate("/");
    handleButtonClick();
  };

  return (
    <div className="vacant">
      <h2 className="vacant__title">Vagas</h2>

      <div className="vacant__container">
        {jobs.map((job) => {
          return <Vacancies key={job._id} vacancy={job} fetchJobs={loadJobs} />;
        })}
      </div>

      <Button text="Voltar ao Início" onClick={handleButton} />
    </div>
  );
}

export default Vacancy;
