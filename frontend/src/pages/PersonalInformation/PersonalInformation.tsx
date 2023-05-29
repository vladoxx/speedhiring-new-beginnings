import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChipComponent from "../../components/ChipComponent/ChipComponent";

import * as serviceUser from "../../service/UserService";
import * as serviceCurriculum from "../../service/CurriculumService";

import "./PersonalInformation.css";
import { UserProps } from "../../@types/user";
import { Curriculum } from "../../@types/curriculum";
import Button from "../../components/Button/Button";

function PersonalInformation() {
  let params = useParams();

  const [infoUser, setInfoUser] = useState<UserProps>();
  const [infoCurriculum, setInfoCurriculum] = useState<Curriculum>();

  const loadUser = async (id: string) => {
    try {
      const resUser = await serviceUser.getOneUser(id);

      const idCurriculum = resUser.data.curriculumId;

      setInfoUser(resUser.data);

      if (idCurriculum) {
        const resCurriculum = await serviceCurriculum.getOneCurriculum(
          idCurriculum
        );

        setInfoCurriculum(resCurriculum.data);
      }
    } catch (error) {
      console.error("Ocorreu um erro ao carregar o usuário:", error);
    }
  };

  useEffect(() => {
    if (params.id) {
      loadUser(params.id);
    }
  }, []);

  // console.log("User:", infoUser);
  // console.log("Curriculum:", infoCurriculum);

  return (
    <div className="personal-information">
      <h3 className="personal-information__info-title">Informações Pessoais</h3>
      {/* data information */}
      <section className="personal-information__box-data">
        <div className="personal-information__box_name_image">
          <h4 className="personal-information__name">{infoUser?.name}</h4>
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            className="personal-information__image"
            alt="Foto do Candidato"
          />
        </div>

        <div className="personal-information__box_about_description">
          <h4 className="personal-information__about-you-title">Sobre Mim</h4>
          <textarea
            className="personal-information__text-area"
            placeholder="Nos conta um pouco sobre você..."
            minLength={500}
            value={infoCurriculum?.personalInfo.about}
          ></textarea>
        </div>

        <div className="personal-information__box_data-info">
          <div>
            <h5 className="personal-information__data-info-title">
              Dados Pessoais
            </h5>
            <p className="personal__information-paragraph">
              Data de Nascimento: {infoCurriculum?.personalInfo.birth_date}
            </p>
            <p className="personal__information-paragraph">
              Nacionalidade: {infoCurriculum?.personalInfo.nationality}
            </p>
            <p className="personal__information-paragraph">
              CPF: {infoCurriculum?.personalInfo.cpf}
            </p>
            <p className="personal__information-paragraph">
              Estado Civil: {infoCurriculum?.personalInfo.marital_status}
            </p>
            <p className="personal__information-paragraph">
              Sua identidade de gênero:{" "}
              {infoCurriculum?.personalInfo.gender_identity}
            </p>
            <p className="personal__information-paragraph">
              Pronome: {infoCurriculum?.personalInfo.pronouns}
            </p>
            <p className="personal__information-paragraph">
              Orientação Sexual:{" "}
              {infoCurriculum?.personalInfo.sexual_orientation}
            </p>
            <p className="personal__information-paragraph">
              Raça/Etnia: {infoCurriculum?.personalInfo.ethnicity}
            </p>
            <p className="personal__information-paragraph">
              Deficiência: {infoCurriculum?.personalInfo.disabilities}
            </p>
          </div>

          <div className="personal-information__box_address">
            <h5 className="personal-information__address-title">Endereço</h5>
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

          <div className="personal-information__box-contact">
            <h5 className="personal-information__contact-title">
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

        <button className="personal-information__edit-button" type="button">
          Editar dados
        </button>
      </section>

      {/* formation */}
      <section className="personal-information__box-formations">
        <h3 className="personal-information__info-title">Formações</h3>

        <div>
          {infoCurriculum?.education &&
            infoCurriculum?.education.map((item) => {
              return (
                <div
                  key={item._id}
                  className="personal-information__box_info-formations"
                >
                  <h4 className="personal-information__university">
                    {item.institution}
                  </h4>
                  <p className="personal-information__career">
                    {item.field_of_study}
                  </p>
                  <p className="personal__information-paragraph">
                    {item.level}
                  </p>
                  <p className="personal-information__formation-country">
                    {item.country}
                  </p>
                  <p className="personal-information__formation-data">
                    {item.start_date} - {item.end_date}
                  </p>
                </div>
              );
            })}
        </div>

        <button
          className="personal-information__edit-button-formation"
          type="button"
        >
          Editar dados
        </button>
      </section>

      {/* professional experience */}
      <section className="personal-information__box-job-experience">
        <h3 className="personal-information__info-title">
          Experiencia profissional
        </h3>

        <div>
          {infoCurriculum?.professional_experience &&
            infoCurriculum?.professional_experience.map((item) => {
              return (
                <div
                  key={item._id}
                  className="personal-information__box-experiences"
                >
                  <h4 className="personal-information__job-title">
                    {item.job_title}
                  </h4>
                  <p className="personal-information__job-experience-institution">
                    {item.company}
                  </p>
                  <p className="personal-information__job-country">
                    {item.country}
                  </p>
                  <p className="personal-information__job-data">
                    {item.start_date} - {item.end_date}
                  </p>
                  <p className="personal-information__job-responsibilities-description">
                    Responsabilidades
                  </p>
                  <textarea
                    className="personal-information__job-responsibilities-description-textarea"
                    rows={4}
                    cols={35}
                    placeholder="Descrição"
                    value={item.job_description}
                  ></textarea>
                </div>
              );
            })}
        </div>

        <button
          className="personal-information__edit-button-job-experience"
          type="button"
        >
          Editar dados
        </button>
      </section>

      {/* certifications */}
      <section className="personal-information__box-certifications">
        <h3 className="personal-information__info-title">
          Cursos e Certificações
        </h3>

        <div>
          {infoCurriculum?.courses &&
            infoCurriculum?.courses.map((item) => {
              return (
                <div
                  key={item._id}
                  className="personal-information__box-course-certification"
                >
                  <h3 className="personal-information__certifications-institution">
                    {item.institution}
                  </h3>
                  <p className="personal-information__certifications-course">
                    {item.courseName}
                  </p>
                  <p className="personal-information__certifications-country">
                    {item.country}
                  </p>
                  <p className="personal-information__certifications-data">
                    {item.startDate} - {item.endDate}
                  </p>
                  {/* <textarea
                    className="personal-information__certification-description"
                    name=""
                    id=""
                    rows={4}
                    cols={35}
                    placeholder="Descrição"
                    value={item.}
                  ></textarea> */}
                </div>
              );
            })}
        </div>

        <button
          className="personal-information__edit-button-certifications"
          type="button"
        >
          Editar dados
        </button>
      </section>

      {/* languages */}
      <section className="personal-information__language">
        <h3 className="personal-information__info-title">Idiomas</h3>

        {infoCurriculum?.languages &&
          infoCurriculum?.languages.map((item) => {
            return (
              <div
                key={item._id}
                className="personal-information__box-languages"
              >
                <h4 className="personal-information__language-practiced">
                  {item.language}
                </h4>
                <p className="personal-information__language-proficiency">
                  {item.proficiency}
                </p>
              </div>
            );
          })}

        <div className="personal-information__box-button-language">
          <button
            className="personal-information__edit-language-button"
            type="button"
          >
            Editar dados
          </button>
        </div>
      </section>

      {/* skills */}
      <section className="personal-information__skills">
        <h3 className="personal-information__info-title">Habilidades</h3>

        <div className="personal-information__box-skills-information">
          <div className="personal-information__box-skill-input">
            <input
              className="personal-information__skill-input"
              type="text"
              placeholder="Habilidade"
            ></input>

            <button className="personal-information__skills-add-button">
              +
            </button>
          </div>
          <div className="personal-information__skill">
            <ChipComponent skills={infoCurriculum?.skills} />
          </div>
        </div>
      </section>

      <div className="personal-information__box-home-button">
        <Button text="Voltar ao Início" />
      </div>
    </div>
  );
}

export default PersonalInformation;
