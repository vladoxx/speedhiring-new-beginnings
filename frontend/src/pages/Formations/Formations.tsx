import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Curriculum, EducationProps } from "../../@types/curriculum";
import * as serviceCurriculum from "../../service/CurriculumService";

import Button from "../../components/Button/Button";

import "./Formations.css";

export default function Formations() {
  let navigate = useNavigate();

  let curriculumId = sessionStorage.getItem("curriculum_id");

  const [formations, setFormations] = useState<Curriculum["education"]>([]);

  const getFormations = async (id: string) => {
    const res = (await serviceCurriculum.getOneCurriculum(id)).data.education;

    setFormations(res);
  };

  const formationDelete = async (curriculumId: string, formationId: string) => {
    await serviceCurriculum.deleteEducation(curriculumId, formationId);

    getFormations(curriculumId);
  };

  useEffect(() => {
    if (curriculumId) {
      getFormations(curriculumId);
    }
  }, []);

  return (
    <div className="formations">
      <h2 className="formations__title">Formações</h2>

      <div className="formations__container">
        {formations &&
          formations.map((formation: EducationProps) => {
            return (
              <div key={formation._id} className="formations__card">
                <h3 className="formations__card__title">
                  {formation.institution}
                </h3>
                <p className="formations__card__paragraph">
                  {formation.fieldOfStudy}
                </p>
                <p className="formations__card__paragraph">{formation.level}</p>
                <p className="formations__card__paragraph">
                  {formation.country}
                </p>
                <p className="formations__card__paragraph">
                  {formation.startDate} - {formation.endDate}
                </p>

                <div className="formations__card__container__buttons">
                  <Button
                    text="Editar"
                    className="btn-edit"
                    onClick={() =>
                      navigate(`/formation/${curriculumId}/${formation._id}`)
                    }
                  />
                  <Button
                    text="Deletar"
                    className="btn-delete"
                    onClick={() =>
                      curriculumId && formation._id
                        ? formationDelete(curriculumId, formation._id)
                        : alert("Não existe parâmetros")
                    }
                  />
                </div>
              </div>
            );
          })}
      </div>

      <div className="formations__container__buttons">
        <Button text="Voltar" onClick={() => navigate(-1)} />
        <Button
          text="Adicionar formação"
          className="btn-open"
          onClick={() => navigate(`/formation/${curriculumId}`)}
        />
      </div>
    </div>
  );
}
