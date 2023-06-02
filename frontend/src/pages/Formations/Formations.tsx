import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as serviceCurriculum from "../../service/CurriculumService";

import Button from "../../components/Button/Button";

import "./Formations.css";
import { Curriculum, EducationProps } from "../../@types/curriculum";

export default function Formations() {
  let navigate = useNavigate();
  let params = useParams();

  const [formations, setFormations] = useState<Curriculum["education"]>([]);
  const [idUser, setIdUser] = useState("");

  const getFormations = async (id: string) => {
    const res = (await serviceCurriculum.getOneCurriculum(id)).data.education;

    setFormations(res);
  };

  const formationDelete = async (curriculumId: string, formationId: string) => {
    await serviceCurriculum.deleteEducation(curriculumId, formationId);

    getFormations(curriculumId);
  };

  useEffect(() => {
    if (params.id) {
      getFormations(params.id);
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
                  {formation.field_of_study}
                </p>
                <p className="formations__card__paragraph">{formation.level}</p>
                <p className="formations__card__paragraph">
                  {formation.country}
                </p>
                <p className="formations__card__paragraph">
                  {formation.start_date} - {formation.end_date}
                </p>

                <div className="formations__card__container__buttons">
                  <Button
                    text="Editar"
                    className="btn-edit"
                    onClick={() =>
                      navigate(`/formation/${params.id}/${formation._id}`)
                    }
                  />
                  <Button
                    text="Deletar"
                    className="btn-delete"
                    onClick={() =>
                      params.id && formation._id
                        ? formationDelete(params.id, formation._id)
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
          onClick={() => navigate(`/formation/${params.id}`)}
        />
      </div>
    </div>
  );
}
