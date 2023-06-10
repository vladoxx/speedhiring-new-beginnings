import { FormEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as curriculumService from "../../service/CurriculumService";
import { EducationProps } from "../../@types/curriculum";
import { InputChange } from "../../@types/general";

import Button from "../../components/Button/Button";

import "./Formation.css";

function Formation() {
  let params = useParams();
  let navigate = useNavigate();

  let formationId = params.formationId;
  let curriculumId = sessionStorage.getItem("curriculum_id");

  const initialStateFormation = {
    institution: "",
    country: "",
    level: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    status: "",
  };

  const [formation, setFormation] = useState<EducationProps>(
    initialStateFormation
  );

  const handleInputChangeFormation = (e: InputChange) => {
    setFormation({ ...formation, [e.target.name]: e.target.value });
  };

  const handleSubmitEducation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (formationId && curriculumId) {
        await curriculumService.updateEducation(
          curriculumId,
          formationId,
          formation
        );
      } else if (curriculumId) {
        await curriculumService.addEducation(curriculumId, formation);
      }

      navigate(-1);
    } catch (error) {
      console.log("Erro ao adicionar formação:", error);
    }
  };

  const getFormation = async (id: string) => {
    if (curriculumId) {
      const res = (
        await curriculumService.getOneCurriculum(curriculumId)
      ).data.education?.find((item) => item._id === id);

      if (res) {
        setFormation(res);
      }
    }
  };

  useEffect(() => {
    if (formationId) {
      getFormation(formationId);
    }
  }, []);

  return (
    <div className="formation">
      <h3 className="formation__title">Formação</h3>

      <form
        className="formation__form"
        onSubmit={handleSubmitEducation}
        action="/formation"
      >
        <label className="formation__country">
          Pais*
          <select
            className="formation__country_select"
            name="country"
            onChange={handleInputChangeFormation}
            value={formation.country}
          >
            <option value="Selecione o seu país">Selecione o seu país</option>
            <option value="Afeganistão">Afeganistão</option>
            <option value="Albânia">Albânia</option>
            <option value="Alemanha">Alemanha</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antígua e Barbuda">Antígua e Barbuda</option>
            <option value="Arábia Saudita">Arábia Saudita</option>
            <option value="Argélia">Argélia</option>
            <option value="Argentina">Argentina</option>
            <option value="Armênia">Armênia</option>
            <option value="Austrália">Austrália</option>
            <option value="Áustria">Áustria</option>
            <option value="Azerbaidjão">Azerbaidjão</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrein">Bahrein</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Bélgica">Bélgica</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bielorrússia">Bielorrússia</option>
            <option value="Bolívia">Bolívia</option>
            <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
            <option value="Botsuana">Botsuana</option>
            <option value="Brasil">Brasil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgária">Bulgária</option>
            <option value="Burundi">Burundi</option>
            <option value="Butão">Butão</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Camarões">Camarões</option>
            <option value="Camboja">Camboja</option>
            <option value="Canadá">Canadá</option>
            <option value="Catar">Catar</option>
            <option value="Cazaquistão">Cazaquistão</option>
            <option value="Chade">Chade</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Chipre">Chipre</option>
            <option value="Colômbia">Colômbia</option>
            <option value="Comores">Comores</option>
            <option value="Congo">Congo</option>
            <option value="Coreia do Norte">Coreia do Norte</option>
            <option value="Coreia do Sul">Coreia do Sul</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Costa do Marfim">Costa do Marfim</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croácia">Croácia</option>
            <option value="Cuba">Cuba</option>
            <option value="Dinamarca">Dinamarca</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Egito">Egito</option>
            <option value="Emirados Árabes Unidos">
              Emirados Árabes Unidos
            </option>
            <option value="Equador">Equador</option>
            <option value="Eritreia">Eritreia</option>
            <option value="Eslováquia">Eslováquia</option>
            <option value="Eslovênia">Eslovênia</option>
            <option value="Espanha">Espanha</option>
            <option value="Estados Unidos">Estados Unidos</option>
            <option value="Estônia">Estônia</option>
            <option value="Etiópia">Etiópia</option>
            <option value="Fiji">Fiji</option>
            <option value="Filipinas">Filipinas</option>
            <option value="Finlândia">Finlândia</option>
            <option value="França">França</option>
            <option value="Gabão">Gabão</option>
            <option value="Gâmbia">Gâmbia</option>
            <option value="Gana">Gana</option>
            <option value="Geórgia">Geórgia</option>
            <option value="Granada">Granada</option>
            <option value="Grécia">Grécia</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guiana">Guiana</option>
            <option value="Guiné">Guiné</option>
            <option value="Guiné-Bissau">Guiné-Bissau</option>
            <option value="Guiné Equatorial">Guiné Equatorial</option>
            <option value="Haiti">Haiti</option>
            <option value="Holanda">Holanda</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungria">Hungria</option>
            <option value="Iêmen">Iêmen</option>
            <option value="Ilhas Marshall">Ilhas Marshall</option>
            <option value="Ilhas Maurício">Ilhas Maurício</option>
            <option value="Índia">Índia</option>
            <option value="Indonésia">Indonésia</option>
            <option value="Iraque">Iraque</option>
            <option value="Irã">Irã</option>
            <option value="Irlanda">Irlanda</option>
            <option value="Islândia">Islândia</option>
            <option value="Israel">Israel</option>
            <option value="Itália">Itália</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japão">Japão</option>
            <option value="Jordânia">Jordânia</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Laos">Laos</option>
            <option value="Lesoto">Lesoto</option>
            <option value="Letônia">Letônia</option>
            <option value="Líbano">Líbano</option>
            <option value="Libéria">Libéria</option>
            <option value="Líbia">Líbia</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lituânia">Lituânia</option>
            <option value="Luxemburgo">Luxemburgo</option>
            <option value="Macedônia">Macedônia</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malásia">Malásia</option>
            <option value="Malawi">Malawi</option>
            <option value="Maldivas">Maldivas</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marrocos">Marrocos</option>
            <option value="Mauritânia">Mauritânia</option>
            <option value="México">México</option>
            <option value="Micronésia">Micronésia</option>
            <option value="Moçambique">Moçambique</option>
            <option value="Moldávia">Moldávia</option>
            <option value="Mônaco">Mônaco</option>
            <option value="Mongólia">Mongólia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Namíbia">Namíbia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Nicarágua">Nicarágua</option>
            <option value="Níger">Níger</option>
            <option value="Nigéria">Nigéria</option>
            <option value="Noruega">Noruega</option>
            <option value="Nova Zelândia">Nova Zelândia</option>
            <option value="Omã">Omã</option>
            <option value="Países Baixos">Países Baixos</option>
            <option value="Palau">Palau</option>
            <option value="Panamá">Panamá</option>
            <option value="Papua-Nova Guiné">Papua-Nova Guiné</option>
            <option value="Paquistão">Paquistão</option>
            <option value="Paraguai">Paraguai</option>
            <option value="Peru">Peru</option>
            <option value="Polônia">Polônia</option>
            <option value="Portugal">Portugal</option>
            <option value="Quirguistão">Quirguistão</option>
            <option value="Quiribati">Quiribati</option>
            <option value="Reino Unido">Reino Unido</option>
            <option value="República Centro-Africana">
              República Centro-Africana
            </option>
            <option value="República Dominicana">República Dominicana</option>
            <option value="República Tcheca">República Tcheca</option>
            <option value="Romênia">Romênia</option>
            <option value="Ruanda">Ruanda</option>
            <option value="Rússia">Rússia</option>
            <option value="Salomão">Salomão</option>
            <option value="Samoa">Samoa</option>
            <option value="Santa Lúcia">Santa Lúcia</option>
            <option value="São Cristóvão e Nevis">São Cristóvão e Nevis</option>
            <option value="São Marinho">São Marinho</option>
            <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
            <option value="São Vicente e Granadinas">
              São Vicente e Granadinas
            </option>
            <option value="Senegal">Senegal</option>
            <option value="Serra Leoa">Serra Leoa</option>
            <option value="Sérvia">Sérvia</option>
            <option value="Seicheles">Seicheles</option>
            <option value="Singapura">Singapura</option>
            <option value="Síria">Síria</option>
            <option value="Somália">Somália</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudão">Sudão</option>
            <option value="Sudão do Sul">Sudão do Sul</option>
            <option value="Suécia">Suécia</option>
            <option value="Suíça">Suíça</option>
            <option value="Suriname">Suriname</option>
            <option value="Tadjiquistão">Tadjiquistão</option>
            <option value="Tailândia">Tailândia</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tanzânia">Tanzânia</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trindade e Tobago">Trindade e Tobago</option>
            <option value="Tunísia">Tunísia</option>
            <option value="Turcomenistão">Turcomenistão</option>
            <option value="Turquia">Turquia</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Ucrânia">Ucrânia</option>
            <option value="Uganda">Uganda</option>
            <option value="Uruguai">Uruguai</option>
            <option value="Uzbequistão">Uzbequistão</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vaticano">Vaticano</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnã">Vietnã</option>
            <option value="Zâmbia">Zâmbia</option>
            <option value="Zimbábue">Zimbábue</option>
          </select>
        </label>

        <label className="formation__level">
          Nível*
          <select
            className="formation__level_select"
            name="level"
            onChange={handleInputChangeFormation}
            value={formation.level}
          >
            <option value="Sem nível">Selecione o nível</option>
            <option value="Ensino Fundamental">Ensino Fundamental</option>
            <option value="Ensino Médio">Ensino Médio</option>
            <option value="Curso Técnico">Curso Técnico</option>
            <option value="Especialização">Especialização</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
          </select>
        </label>

        <label className="formation__institution" htmlFor="">
          Instituição*
          <input
            className="formation__institution-input"
            type="text"
            name="institution"
            onChange={handleInputChangeFormation}
            value={formation.institution}
            required
          />
        </label>

        <label className="formation__course" htmlFor="">
          Curso*
          <input
            className="formation__institution-input"
            type="text"
            name="fieldOfStudy"
            onChange={handleInputChangeFormation}
            value={formation.fieldOfStudy}
            required
          />
        </label>

        <label className="formation__start_date">
          Inicio*
          <input
            className="formation__institution-input"
            type="text"
            name="startDate"
            onChange={handleInputChangeFormation}
            value={formation.startDate}
            placeholder="01/2011"
            required
          />
        </label>

        <label className="formation__end_date" htmlFor="">
          Previsão/Data de Conclusão*
          <input
            className="formation__institution-input"
            type="text"
            name="endDate"
            onChange={handleInputChangeFormation}
            value={formation.endDate}
            placeholder="08/2013"
            required
          />
        </label>

        <label className="formation__status">
          Status*
          <select
            className="formation__status_select"
            name="status"
            onChange={handleInputChangeFormation}
            value={formation.status}
          >
            <option value="Sem status">Selecione o status</option>
            <option value="Concluído">Concluído</option>
            <option value="Cursando">Cursando</option>
            <option value="Trancado">Trancado</option>
          </select>
        </label>

        <div className="formation__form__button">
          <Button text="Salvar" />

          <Button
            text="Cancelar"
            className="btn-cancel"
            onClick={() => navigate(-1)}
          />
        </div>
      </form>
    </div>
  );
}

export default Formation;
