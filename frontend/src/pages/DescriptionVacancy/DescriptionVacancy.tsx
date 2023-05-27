import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { JobProps } from "../../@types/job";

import * as vacancyService from "../../service/VacancyService";
import { handleButtonClick } from "../../utils/scrollTop";

import "./DescriptionVacancy.css";

function DescriptionVacancy() {
  const params = useParams();

  const initialState = {
    jobTitle: "",
    professionalArea: "",
    hierarchicalLevel: "",
    workday: "",
    workModel: "",
    educationLevel: "",
    contractType: "",
    salary: 0.0,
    jobDescription: "",
    email: "",
    companyId: "",
    companyName: "",
    state: "",
  };

  const [jobId, setJobId] = useState<JobProps>(initialState);

  const getJob = async (id: string) => {
    const res = await vacancyService.getOneJob(id);

    const {
      jobTitle,
      professionalArea,
      hierarchicalLevel,
      workday,
      workModel,
      educationLevel,
      contractType,
      salary,
      jobDescription,
      email,
      companyName,
      state,
    } = res.data;

    setJobId({
      jobTitle,
      professionalArea,
      hierarchicalLevel,
      workday,
      workModel,
      educationLevel,
      contractType,
      salary,
      jobDescription,
      email,
      companyName,
      state,
    });
  };

  useEffect(() => {
    if (params.id) {
      getJob(params.id);
    }
  }, []);

  console.log(jobId);

  return (
    <div className="vacancy">
      <h3 className="vacancy__tittle">Descrição da Vaga</h3>

      <div className="vacancy__list">
        <ul>
          <li>
            <h4 className="vacancy__tittle_job">{jobId.jobTitle}</h4>
          </li>
          <li className="vacancy__localization">{jobId.state}</li>
          <li className="vacancy__modality">Modalidade: {jobId.workModel}</li>
          <li className="vacancy__salary">Sálario: {jobId.salary}</li>
          <li className="vacancy__work_day">{jobId.workday}</li>
          <li className="vacancy__company">
            <strong>{jobId.companyName}</strong>
          </li>
          <li className="vacancy__description">{jobId.jobDescription}</li>
          {jobId.email && (
            <li className="vacancy__email">
              <strong>Email:</strong> {jobId.email}
            </li>
          )}
        </ul>
      </div>

      <button className="vacancy__button_apply" type="button">
        Aplicar
      </button>
      <Link to={"/vacancy"} onClick={handleButtonClick}>
        Voltar às vagas
      </Link>
    </div>
  );
}

export default DescriptionVacancy;
