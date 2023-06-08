import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as serviceCurriculum from "../../service/CurriculumService";

import { Curriculum } from "../../@types/curriculum";
import Button from "../../components/Button/Button";
import { InputChange } from "../../@types/general";

import "./PersonalInformation.css";
import { handleButtonClick } from "../../utils/scrollTop";

function PersonalInformation() {
  let navigate = useNavigate();
  let curriculumId = sessionStorage.getItem("curriculum_id");

  const initialStatePersonalInfo = {
    birthDate: "",
    nationality: "",
    cpf: "",
    maritalStatus: "",
    genderIdentity: "",
    pronouns: "",
    sexualOrientation: "",
    ethnicity: "",
    disabilities: "",
    about: "",
  };

  const [infoPersonal, setInfoPersonal] = useState<Curriculum["personalInfo"]>(
    initialStatePersonalInfo
  );

  const handleInputChangePersonalInformation = (e: InputChange) => {
    setInfoPersonal({ ...infoPersonal, [e.target.name]: e.target.value });
  };

  const handleSubmitPersonalInformation = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (curriculumId) {
      await serviceCurriculum.getUpdateCurriculum(curriculumId, infoPersonal);

      alert("Dados atualizados com sucesso!");
    }

    setTimeout(() => {
      navigate(-1);
      window.scrollTo(0, 0);
    }, 1000);

    console.log(infoPersonal);
  };

  const handleClick = () => {
    handleButtonClick();
    navigate(-1);
  };

  const loadInfo = async (id: string) => {
    const res = await serviceCurriculum.getOneCurriculum(id);

    setInfoPersonal(res.data.personalInfo);
  };

  useEffect(() => {
    if (curriculumId) {
      loadInfo(curriculumId);
    }
  }, []);

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
            name="birthDate"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.birthDate}
          />
        </label>

        <label>
          Nacionalidade
          <input
            className="personal__input"
            type="text"
            name="nationality"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.nationality}
          />
        </label>

        <label>
          CPF
          <input
            className="personal__input"
            type="text"
            name="cpf"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.cpf}
          />
        </label>

        <label>
          Estado Civil
          <input
            className="personal__input"
            type="text"
            name="maritalStatus"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.maritalStatus}
          />
        </label>

        <label>
          Sua identidade de gênero
          <input
            className="personal__input"
            type="text"
            name="genderIdentity"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.genderIdentity}
          />
        </label>

        <label>
          Pronome
          <input
            className="personal__input"
            type="text"
            name="pronouns"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.pronouns}
          />
        </label>

        <label>
          Orientação Sexual
          <input
            className="personal__input"
            type="text"
            name="sexualOrientation"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.sexualOrientation}
          />
        </label>

        <label>
          Raça/Etnia
          <input
            className="personal__input"
            type="text"
            name="ethnicity"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.ethnicity}
          />
        </label>

        <label>
          Deficiência
          <input
            className="personal__input"
            type="text"
            name="disabilities"
            onChange={handleInputChangePersonalInformation}
            value={infoPersonal?.disabilities}
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
            value={infoPersonal?.about}
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
