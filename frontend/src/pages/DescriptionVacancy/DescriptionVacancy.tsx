import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { JobProps } from "../../@types/job";

import * as vacancyService from "../../service/VacancyService";
import { handleButtonClick } from "../../utils/scrollTop";

import "./DescriptionVacancy.css";
import Button from "../../components/Button/Button";

function DescriptionVacancy() {
  const params = useParams();
  const navigate = useNavigate();

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

  const handleButtonToVacancy = (path: string) => {
    handleButtonClick();

    navigate(path);
  };

  useEffect(() => {
    if (params.id) {
      getJob(params.id);
    }
  }, []);

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

      <div className="vacancies__containerButtons">
        <Button text="Aplicar" className="btn-open" />
        <Button
          text="Voltas às vagas"
          onClick={() => handleButtonToVacancy("/vacancy")}
        />
      </div>
    </div>
  );
}

export default DescriptionVacancy;
