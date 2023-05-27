import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";

import { InputChange } from "../../@types/general";
import { JobProps } from "../../@types/job";

import useCompany from "../../hooks/useCompany";

import * as jobService from "../../service/VacancyService";

import "./AdvertiseVacancy.css";

function AdvertiseVacancy() {
  let navigate = useNavigate();
  const { companyId, companyName } = useCompany();

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
    companyId: "",
    companyName: "",
    state: "",
  };

  const [job, setJob] = useState<JobProps>(initialState);

  const handleInputChangeJob = (e: InputChange) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmitJob = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (companyId) {
      const updateJob = {
        ...job,
        companyId: companyId,
        companyName: companyName,
      };
      await jobService.createJob(updateJob);

      alert("Vaga cadastrada com sucesso!");

      setJob(initialState);
    } else {
      await jobService.updateOneJob(companyId, job);
    }

    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 1000);
  };

  const getJob = async (id: string) => {
    const res = await jobService.getOneJob(id);

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
      state,
    } = res.data;

    setJob({
      jobTitle,
      professionalArea,
      hierarchicalLevel,
      workday,
      workModel,
      educationLevel,
      contractType,
      salary,
      jobDescription,
      state,
    });
  };

  useEffect(() => {
    if (companyId) {
      getJob(companyId);
    }
  }, []);

  return (
    <div className="advertisement">
      <h3 className="advertisement__title">Anuncie sua Vaga</h3>
      <form
        className="advertisement__form"
        onSubmit={handleSubmitJob}
        action="/advertise-vacancy"
      >
        <input
          className="advertisement__input"
          type="text"
          name="jobTitle"
          onChange={handleInputChangeJob}
          value={job.jobTitle}
          placeholder="Cargo da Vaga*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="professionalArea"
          onChange={handleInputChangeJob}
          value={job.professionalArea}
          placeholder="Area Profissional*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="hierarchicalLevel"
          onChange={handleInputChangeJob}
          value={job.hierarchicalLevel}
          placeholder="Nivel Herárquico*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="workday"
          onChange={handleInputChangeJob}
          value={job.workday}
          placeholder="Jornada*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="workModel"
          onChange={handleInputChangeJob}
          value={job.workModel}
          placeholder="Modelo de trabajo*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="educationLevel"
          onChange={handleInputChangeJob}
          value={job.educationLevel}
          placeholder="Escolaridade*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="contractType"
          onChange={handleInputChangeJob}
          value={job.contractType}
          placeholder="Tipo de Contrato*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="salary"
          onChange={handleInputChangeJob}
          value={job.salary}
          placeholder="Sálario*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="jobDescription"
          onChange={handleInputChangeJob}
          value={job.jobDescription}
          placeholder="Descripção da Vaga*"
          required
        />
        <input
          className="advertisement__input"
          type="text"
          name="state"
          onChange={handleInputChangeJob}
          value={job.state}
          placeholder="Endereço/Cidade*"
          required
        />

        <div className="advertisement__button_submit">
          <button className="advertisement__button" type="submit">
            Cadastrar vaga?
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdvertiseVacancy;
