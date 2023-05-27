import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";
import * as vacancyService from "../../service/VacancyService";

import "./Vacancy.css";
import Vacancies from "../../components/Vacancies/Vacancies";

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
          return <Vacancies key={job._id} vacancy={job} fetchJobs={loadJobs} />;
        })}
      </div>

      <Link to={"/"}>
        <button
          className="vacant__button"
          type="button"
          onClick={handleButtonClick}
        >
          Voltar ao Inicio
        </button>
      </Link>
    </div>
  );
}

export default Vacancy;
