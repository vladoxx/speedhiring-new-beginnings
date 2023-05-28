import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChipComponent from "../../components/ChipComponent/ChipComponent";

import * as serviceUser from "../../service/UserService";
import * as serviceCurriculum from "../../service/CurriculumService";

import "./PersonalInformation.css";
import { UserProps } from "../../@types/user";
import { Curriculum } from "../../@types/curriculum";

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
      {/* data information */}
      <section className="personal-information__box-data">
        <h3 className="personal-information__info-title">
          Informações Pessoais
        </h3>

        <div className="personal-information__box_name_image">
          <h4 className="personal-information__name">{infoUser?.name}</h4>
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            className="personal-information__image"
            alt="Foto do Candidato"
          />
        </div>

        <div className="personal-information__box_about_description">
          <h4 className="personal-information__about-you-title">Sobre Voce</h4>
          <textarea
            className="personal-information__text-area"
            placeholder="Nos conta um pouco sobre você..."
            minLength={500}
            value={infoCurriculum?.personalInfo.about}
          ></textarea>
        </div>

        <div className="personal-information__box_data-info">
          <h5 className="personal-information__data-info-title">
            Dados Pessoais
          </h5>
          <p className="personal-information__date-of-birth">
            Data de Nascimento: {infoCurriculum?.personalInfo.birth_date}
          </p>
          <p className="personal-information__nationality">
            Nacionalidade: {infoCurriculum?.personalInfo.nationality}
          </p>
          <p className="personal-information__cpf">
            CPF: {infoCurriculum?.personalInfo.cpf}
          </p>
          <p className="personal-information__state">
            Estado Civil: {infoCurriculum?.personalInfo.marital_status}
          </p>
          <p className="personal-information__gender">
            Sua identidade de genero:{" "}
            {infoCurriculum?.personalInfo.gender_identity}
          </p>
          <p className="personal-information__pronoun">
            Pronome: {infoCurriculum?.personalInfo.pronouns}
          </p>
          <p className="personal-information__sexual-orientation">
            Orientação Sexual: {infoCurriculum?.personalInfo.sexual_orientation}
          </p>
          <p className="personal-information__skin-breed-ethnicity">
            Raçã/Etnia: {infoCurriculum?.personalInfo.ethnicity}
          </p>
          <p className="personal-information__physical-deficiency">
            Deficiencia: {infoCurriculum?.personalInfo.disabilities}
          </p>
        </div>

        <div className="personal-information__box_address">
          <h5 className="personal-information__address-title">Endereço</h5>
          <p className="personal-information__post-mail">
            CEP: {infoUser?.cep}
          </p>
          <p className="personal-information__street">{infoUser?.address}</p>
          <p className="personal-information__neighborhood">
            Bairro: {infoUser?.city}
          </p>
          <p className="personal-information__city">
            Cidade: {infoUser?.state}
          </p>
        </div>

        <div className="personal-information__box-contact">
          <h5 className="personal-information__contact-title">
            Informações de Contato
          </h5>
          <p className="personal-information__email">
            E-mail: {infoUser?.email}
          </p>
          <p className="personal-information__phone">
            Celular: {infoUser?.phone}
          </p>
        </div>

        <div className="personal-information__box-button-data">
          <button className="personal-information__edit-button" type="button">
            Editar dados
          </button>
        </div>
      </section>

      {/* formation */}
      <section className="personal-information__box-formations">
        <h3 className="personal-information__formations-title">Formações</h3>

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
                <p className="personal-information__graduation">{item.level}</p>
                <p className="personal-information__formation-country">
                  {item.country}
                </p>
                <p className="personal-information__formation-data">
                  {item.start_date} - {item.end_date}
                </p>
              </div>
            );
          })}

        <div className="personal-information__box-button-formation">
          <button
            className="personal-information__edit-button-formation"
            type="button"
          >
            Editar dados
          </button>
        </div>
      </section>

      {/* professional experience */}
      <section className="personal-information__box-job-experience">
        <h3 className="personal-information__job-experience-title">
          Experiencia profissional
        </h3>

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
                  placeholder="Descripção"
                  value={item.job_description}
                ></textarea>
              </div>
            );
          })}

        <div className="personal-information__box-button_experiences">
          <button
            className="personal-information__edit-button-job-experience"
            type="button"
          >
            Editar dados
          </button>
        </div>
      </section>

      {/* certifications */}
      <section className="personal-information__box-certifications">
        <h3 className="personal-information__certification-title">
          Cursos e Certificações
        </h3>

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
                  placeholder="Descripção"
                  value={item.}
                ></textarea> */}
              </div>
            );
          })}

        <div className="personal-information__box-button-certification">
          <button
            className="personal-information__edit-button-certifications"
            type="button"
          >
            Editar dados
          </button>
        </div>
      </section>

      {/* languages */}
      <section className="personal-information__language">
        <h3 className="personal-information__language-title">Idiomas</h3>

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
        <h3 className="personal-information__skills-title">Habilidades</h3>

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
            <ChipComponent />
          </div>
        </div>
      </section>

      <div className="personal-information__box-home-button">
        <button className="personal-information__home-button" type="button">
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}

export default PersonalInformation;
