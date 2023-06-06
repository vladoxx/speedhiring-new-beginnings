import { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as serviceCurriculum from "../../service/CurriculumService";

import { Curriculum } from "../../@types/curriculum";
import Button from "../../components/Button/Button";
import { InputChange } from "../../@types/general";

import "./PersonalInformation.css";
import { handleButtonClick } from "../../utils/scrollTop";

function PersonalInformation() {
  let params = useParams();
  let navigate = useNavigate();

  const initialStateCurriculum = {
    personalInfo: {
      birth_date: "",
      nationality: "",
      cpf: "",
      marital_status: "",
      gender_identity: "",
      pronouns: "",
      sexual_orientation: "",
      ethnicity: "",
      disabilities: "",
      about: "",
    },
  };

  const [infoCurriculum, setInfoCurriculum] = useState<Curriculum>(
    initialStateCurriculum
  );

  const handleInputChangePersonalInformation = (e: InputChange) => {
    setInfoCurriculum({ ...infoCurriculum, [e.target.name]: e.target.value });
  };

  const handleSubmitPersonalInformation = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (params.id) {
      await serviceCurriculum.getUpdatePersonalInfoCurriculum(
        params.id,
        infoCurriculum
      );

      alert("Dados atualizados com sucesso!");
    }

    setTimeout(() => {
      navigate(-1);
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleClick = () => {
    handleButtonClick();
    navigate(-1);
  };

  const loadInfo = async (id: string) => {
    const res = await serviceCurriculum.getOneCurriculum(id);

    const {
      birth_date,
      nationality,
      cpf,
      marital_status,
      gender_identity,
      pronouns,
      sexual_orientation,
      ethnicity,
      disabilities,
      about,
    } = res.data.personalInfo;

    setInfoCurriculum({
      personalInfo: {
        birth_date,
        nationality,
        cpf,
        marital_status,
        gender_identity,
        pronouns,
        sexual_orientation,
        ethnicity,
        disabilities,
        about,
      },
    });

    console.log(res.data.personalInfo);
  };

  useEffect(() => {
    if (params.id) {
      loadInfo(params.id);
    }
  }, [params.id]);

  return (
    <div className="personal">
      <h3 className="personal__title">Informação pessoal</h3>

      <form
        className="personal__form"
        onSubmit={handleSubmitPersonalInformation}
        action="/personal-information/"
      >
        <label>
          Data de Nascimento
          <input
            className="personal__input"
            type="text"
            name="birth_date"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.birth_date}
          />
        </label>

        <label>
          Nacionalidade
          <input
            className="personal__input"
            type="text"
            name="nationality"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.nationality}
          />
        </label>

        <label>
          CPF
          <input
            className="personal__input"
            type="text"
            name="cpf"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.cpf}
          />
        </label>

        <label>
          Estado Civil
          <input
            className="personal__input"
            type="text"
            name="marital_status"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.marital_status}
          />
        </label>

        <label>
          Sua identidade de gênero
          <input
            className="personal__input"
            type="text"
            name="gender_identity"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.gender_identity}
          />
        </label>

        <label>
          Pronome
          <input
            className="personal__input"
            type="text"
            name="pronouns"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.pronouns}
          />
        </label>

        <label>
          Orientação Sexual
          <input
            className="personal__input"
            type="text"
            name="sexual_orientation"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.sexual_orientation}
          />
        </label>

        <label>
          Raça/Etnia
          <input
            className="personal__input"
            type="text"
            name="sexual_orientation"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.ethnicity}
          />
        </label>

        <label>
          Deficiência
          <input
            className="personal__input"
            type="text"
            name="disabilities"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.disabilities}
          />
        </label>

        <label>
          Sobre mim
          <textarea
            className="general-information__text-area"
            placeholder="Nos conta um pouco sobre você..."
            minLength={500}
            name="about"
            onChange={handleInputChangePersonalInformation}
            value={infoCurriculum.personalInfo.about}
          ></textarea>
        </label>

        <Button text="Atualizar" type="submit" />
      </form>
      <Button
        text="Cancelar"
        onClick={handleClick}
        className="btn-cancel"
        type="button"
      />
    </div>
  );
}

export default PersonalInformation;
