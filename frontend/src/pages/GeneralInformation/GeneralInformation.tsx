import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserProps } from "../../@types/user";
import { Curriculum } from "../../@types/curriculum";
import { handleButtonClick } from "../../utils/scrollTop";

import Button from "../../components/Button/Button";
import ChipComponent from "../../components/ChipComponent/ChipComponent";

import * as serviceUser from "../../service/UserService";
import * as serviceCurriculum from "../../service/CurriculumService";

import "./GeneralInformation.css";

export default function GeneralInformation() {
  let navigate = useNavigate();
  let userId = sessionStorage.getItem("user_id");
  let curriculumId = sessionStorage.getItem("curriculum_id");

  const [infoUser, setInfoUser] = useState<UserProps>();
  const [infoCurriculum, setInfoCurriculum] = useState<Curriculum>();

  const loadUser = async (id: string) => {
    try {
      const resUser = await serviceUser.getOneUser(id);

      setInfoUser(resUser.data);

      if (curriculumId) {
        const resCurriculum = await serviceCurriculum.getOneCurriculum(
          curriculumId
        );

        setInfoCurriculum(resCurriculum.data);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao carregar o usuário:", error);
    }
  };

  const handleClick = (path: string) => {
    handleButtonClick();
    navigate(path);
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
  ) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (userId) {
      loadUser(userId);
    }
  }, []);

  return (
    <div className="general-information">
      <h3 className="general-information__info-title">Informações Pessoais</h3>
      {/* data information */}
      <section className="general-information__box-data">
        <div className="general-information__box_name_image">
          <h4 className="general-information__name">{infoUser?.name}</h4>
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            className="general-information__image"
            alt="Foto do Candidato"
          />
        </div>

        <div className="general-information__box_about_description">
          <h4 className="general-information__about-you-title">Sobre Mim</h4>
          <textarea
            className="general-information__text-area"
            minLength={500}
            defaultValue={infoCurriculum?.personalInfo?.about}
            onMouseDown={handleMouseDown}
          />
        </div>

        <div className="general-information__box_data-info">
          <div>
            <h5 className="general-information__data-info-title">
              Dados Pessoais
            </h5>
            <p className="personal__information-paragraph">
              Data de Nascimento: {infoCurriculum?.personalInfo?.birthDate}
            </p>
            <p className="personal__information-paragraph">
              Nacionalidade: {infoCurriculum?.personalInfo?.nationality}
            </p>
            <p className="personal__information-paragraph">
              CPF: {infoCurriculum?.personalInfo?.cpf}
            </p>
            <p className="personal__information-paragraph">
              Estado Civil: {infoCurriculum?.personalInfo?.maritalStatus}
            </p>
            <p className="personal__information-paragraph">
              Sua identidade de gênero:{" "}
              {infoCurriculum?.personalInfo?.genderIdentity}
            </p>
            <p className="personal__information-paragraph">
              Pronome: {infoCurriculum?.personalInfo?.pronouns}
            </p>
            <p className="personal__information-paragraph">
              Orientação Sexual:{" "}
              {infoCurriculum?.personalInfo?.sexualOrientation}
            </p>
            <p className="personal__information-paragraph">
              Raça/Etnia: {infoCurriculum?.personalInfo?.ethnicity}
            </p>
            <p className="personal__information-paragraph">
              Deficiência: {infoCurriculum?.personalInfo?.disabilities}
            </p>
          </div>

          <div className="general-information__box_address">
            <h5 className="general-information__address-title">Endereço</h5>
            <p className="personal__information-paragraph">
              CEP: {infoUser?.cep}
            </p>
            <p className="personal__information-paragraph">
              {infoUser?.address}
            </p>
            <p className="personal__information-paragraph">
              Bairro: {infoUser?.city}
            </p>
            <p className="personal__information-paragraph">
              Cidade: {infoUser?.state}
            </p>
          </div>

          <div className="general-information__box-contact">
            <h5 className="general-information__contact-title">
              Informações de Contato
            </h5>
            <p className="personal__information-paragraph">
              E-mail: {infoUser?.email}
            </p>
            <p className="personal__information-paragraph">
              Celular: {infoUser?.phone}
            </p>
          </div>
        </div>

        {/* /personal-information/${infoUser?.curriculumId */}

        <div className="personal__information-containerBtns">
          <Button
            text="Editar dados"
            onClick={() => handleClick(`/personal-information`)}
          />
        </div>
      </section>

      <hr />

      {/* formation */}
      <section className="general-information__box-formations">
        <h3 className="general-information__info-title">Formações</h3>

        <div>
          {infoCurriculum?.education &&
            infoCurriculum?.education.map((item) => {
              return (
                <div
                  key={item._id}
                  className="general-information__box_info-formations"
                >
                  <h4 className="general-information__university">
                    {item.institution}
                  </h4>
                  <p className="general-information__career">
                    {item.fieldOfStudy}
                  </p>
                  <p className="personal__information-paragraph">
                    {item.level}
                  </p>
                  <p className="general-information__formation-country">
                    {item.country}
                  </p>
                  <p className="general-information__formation-data">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              );
            })}
        </div>

        <Button
          text="Editar dados"
          onClick={() => handleClick(`/formations`)}
        />
      </section>

      <hr />

      {/* professional experience */}
      <section className="general-information__box-job-experience">
        <h3 className="general-information__info-title">
          Experiencia profissional
        </h3>

        <div>
          {infoCurriculum?.professionalExperience &&
            infoCurriculum?.professionalExperience.map((item) => {
              return (
                <div
                  key={item._id}
                  className="general-information__box-experiences"
                >
                  <h4 className="general-information__job-title">
                    {item.jobTitle}
                  </h4>
                  <p className="general-information__job-experience-institution">
                    {item.company}
                  </p>
                  <p className="general-information__job-country">
                    {item.country}
                  </p>
                  <p className="general-information__job-data">
                    {item.startDate} - {item.endDate}
                  </p>
                  <p className="general-information__job-responsibilities-description">
                    Responsabilidades
                  </p>
                  <textarea
                    className="general-information__job-responsibilities-description-textarea"
                    rows={4}
                    cols={35}
                    defaultValue={item.jobDescription}
                    onMouseDown={handleMouseDown}
                  />
                </div>
              );
            })}
        </div>

        <Button
          text="Editar dados"
          onClick={() =>
            handleClick(`/professional-experience/${infoUser?.curriculumId}`)
          }
        />
      </section>

      <hr />

      {/* certifications */}
      <section className="general-information__box-certifications">
        <h3 className="general-information__info-title">
          Cursos e Certificações
        </h3>

        <div>
          {infoCurriculum?.courses &&
            infoCurriculum?.courses.map((item) => {
              return (
                <div
                  key={item._id}
                  className="general-information__box-course-certification"
                >
                  <h3 className="general-information__certifications-institution">
                    {item.institution}
                  </h3>
                  <p className="general-information__certifications-course">
                    {item.courseName}
                  </p>
                  <p className="general-information__certifications-country">
                    {item.country}
                  </p>
                  <p className="general-information__certifications-data">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
              );
            })}
        </div>

        <Button
          text="Editar dados"
          onClick={() =>
            handleClick(`/courses-certifications/${infoUser?.curriculumId}`)
          }
        />
      </section>

      <hr />

      {/* languages */}
      <section className="general-information__language">
        <h3 className="general-information__info-title">Idiomas</h3>

        <div>
          {infoCurriculum?.languages &&
            infoCurriculum?.languages.map((item) => {
              return (
                <div
                  key={item._id}
                  className="general-information__box-languages"
                >
                  <h4 className="general-information__language-practiced">
                    {item.language}
                  </h4>
                  <p className="general-information__language-proficiency">
                    {item.proficiency}
                  </p>
                </div>
              );
            })}
        </div>

        <Button
          text="Editar dados"
          onClick={() => handleClick(`/language/${infoUser?.curriculumId}`)}
        />
      </section>

      <hr />

      {/* skills */}
      <section className="general-information__skills">
        <h3 className="general-information__info-title">Habilidades</h3>

        <div className="general-information__box-skills-information">
          <div className="general-information__box-skill-input">
            <input
              className="general-information__skill-input"
              type="text"
              placeholder="Habilidade"
            ></input>

            <button className="general-information__skills-add-button">
              +
            </button>
          </div>
          <div className="general-information__skill">
            <ChipComponent skills={infoCurriculum?.skills} />
          </div>
        </div>
      </section>

      <div className="general-information__box-home-button">
        <Button text="Voltar ao Início" onClick={() => handleButtonClick()} />
      </div>
    </div>
  );
}
