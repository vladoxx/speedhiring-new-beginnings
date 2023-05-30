import { useParams } from "react-router-dom";

import Button from "../../components/Button/Button";

import "./Formation.css";

function Formation() {
  let params = useParams();

  console.log(params);

  return (
    <div className="formation">
      <h3 className="formation__title">Formação</h3>

      <form className="formation__form" action="">
        <label className="formation__country">
          Pais*
          <select className="formation__country_select" name="selectCountry">
            <option value="infoCurriculum.educationnoCountry">
              Selecione o seu país
            </option>
            <option value="infoCurriculum.educationafeganistan">
              Afeganistão
            </option>
            <option value="infoCurriculum.educationalbania">Albânia</option>
            <option value="infoCurriculum.educationalemanha">Alemanha</option>
            <option value="infoCurriculum.educationandorra">Andorra</option>
            <option value="infoCurriculum.educationangola">Angola</option>
            <option value="infoCurriculum.educationantigua-e-barbuda">
              Antígua e Barbuda
            </option>
            <option value="infoCurriculum.educationarabia-saudita">
              Arábia Saudita
            </option>
            <option value="infoCurriculum.educationargelia">Argélia</option>
            <option value="infoCurriculum.educationargentina">Argentina</option>
            <option value="infoCurriculum.educationarmenia">Armênia</option>
            <option value="infoCurriculum.educationaustralia">Austrália</option>
            <option value="infoCurriculum.educationaustria">Áustria</option>
            <option value="infoCurriculum.educationazerbaijao">
              Azerbaijão
            </option>
            <option value="infoCurriculum.educationbahamas">Bahamas</option>
            <option value="infoCurriculum.educationbahrein">Bahrein</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="barbados">Barbados</option>
            <option value="belgica">Bélgica</option>
            <option value="belize">Belize</option>
            <option value="benin">Benin</option>
            <option value="bielorrussia">Bielorrússia</option>
            <option value="bolivia">Bolívia</option>
            <option value="bosnia-e-herzegovina">Bósnia e Herzegovina</option>
            <option value="botsuana">Botsuana</option>
            <option value="brasil">Brasil</option>
            <option value="brunei">Brunei</option>
            <option value="bulgaria">Bulgária</option>
            <option value="burkina-faso">Burkina Faso</option>
            <option value="burundi">Burundi</option>
            <option value="butao">Butão</option>
            <option value="cabo-verde">Cabo Verde</option>
            <option value="camaroes">Camarões</option>
            <option value="camboja">Camboja</option>
            <option value="canada">Canadá</option>
            <option value="catar">Catar</option>
            <option value="cazaquistao">Cazaquistão</option>
            <option value="chade">Chade</option>
            <option value="chile">Chile</option>
            <option value="china">China</option>
            <option value="chipre">Chipre</option>
            <option value="colombia">Colômbia</option>
            <option value="comores">Comores</option>
            <option value="congo">Congo</option>
            <option value="coreia-do-norte">Coreia do Norte</option>
            <option value="coreia-do-sul">Coreia do Sul</option>
            <option value="cosovo">Kosovo</option>
            <option value="costa-do-marfim">Costa do Marfim</option>
            <option value="costa-rica">Costa Rica</option>
            <option value="croacia">Croácia</option>
            <option value="cuaite">Cuaite</option>
            <option value="cuba">Cuba</option>
            <option value="dinamarca">Dinamarca</option>
            <option value="djibouti">Djibouti</option>
            <option value="dominica">Dominica</option>
            <option value="egito">Egito</option>
            <option value="emirados-arabes-unidos">
              Emirados Árabes Unidos
            </option>
            <option value="equador">Equador</option>
            <option value="eritreia">Eritreia</option>
            <option value="eslovaquia">Eslováquia</option>
            <option value="eslovenia">Eslovênia</option>
            <option value="espanha">Espanha</option>
            <option value="estados-unidos">Estados Unidos</option>
            <option value="estonia">Estônia</option>
            <option value="etiopia">Etiópia</option>
            <option value="fiji">Fiji</option>
            <option value="filipinas">Filipinas</option>
            <option value="finlandia">Finlândia</option>
            <option value="franca">França</option>
            <option value="gabao">Gabão</option>
            <option value="gambia">Gâmbia</option>
            <option value="gana">Gana</option>
            <option value="georgia">Geórgia</option>
            <option value="granada">Granada</option>
            <option value="grecia">Grécia</option>
            <option value="guatemala">Guatemala</option>
            <option value="guiana">Guiana</option>
            <option value="guine">Guiné</option>
            <option value="guine-bissau">Guiné-Bissau</option>
            <option value="guine-equatorial">Guiné Equatorial</option>
            <option value="haiti">Haiti</option>
            <option value="holanda">Holanda</option>
            <option value="honduras">Honduras</option>
            <option value="hungria">Hungria</option>
            <option value="iemen">Iêmen</option>
            <option value="ilhas-marshall">Ilhas Marshall</option>
            <option value="ilhas-mauricio">Ilhas Maurício</option>
            <option value="india">Índia</option>
            <option value="indonesia">Indonésia</option>
            <option value="iraque">Iraque</option>
            <option value="ira">Irã</option>
            <option value="irlanda">Irlanda</option>
            <option value="islandia">Islândia</option>
            <option value="israel">Israel</option>
            <option value="italia">Itália</option>
            <option value="jamaica">Jamaica</option>
            <option value="japao">Japão</option>
            <option value="jordania">Jordânia</option>
            <option value="kiribati">Kiribati</option>
            <option value="kuaite">Kuait</option>
            <option value="laos">Laos</option>
            <option value="lesoto">Lesoto</option>
            <option value="letonia">Letônia</option>
            <option value="libano">Líbano</option>
            <option value="liberia">Libéria</option>
            <option value="libia">Líbia</option>
            <option value="liechtenstein">Liechtenstein</option>
            <option value="lituania">Lituânia</option>
            <option value="luxemburgo">Luxemburgo</option>
            <option value="macedonia">Macedônia</option>
            <option value="madagascar">Madagascar</option>
            <option value="malasia">Malásia</option>
            <option value="malaui">Malawi</option>
            <option value="maldivas">Maldivas</option>
            <option value="mali">Mali</option>
            <option value="malta">Malta</option>
            <option value="marrocos">Marrocos</option>
            <option value="mauritania">Mauritânia</option>
            <option value="mexico">México</option>
            <option value="mianmar">Mianmar</option>
            <option value="micronesia">Micronésia</option>
            <option value="mocambique">Moçambique</option>
            <option value="moldavia">Moldávia</option>
            <option value="monaco">Mônaco</option>
            <option value="mongolia">Mongólia</option>
            <option value="montenegro">Montenegro</option>
            <option value="namibia">Namíbia</option>
            <option value="nauru">Nauru</option>
            <option value="nepal">Nepal</option>
            <option value="nicaragua">Nicarágua</option>
            <option value="niger">Níger</option>
            <option value="nigeria">Nigéria</option>
            <option value="noruega">Noruega</option>
            <option value="nova-zelandia">Nova Zelândia</option>
            <option value="om">Omã</option>
            <option value="paises-baixos">Países Baixos</option>
            <option value="palau">Palau</option>
            <option value="panama">Panamá</option>
            <option value="papua-nova-guine">Papua-Nova Guiné</option>
            <option value="paquistao">Paquistão</option>
            <option value="paraguai">Paraguai</option>
            <option value="peru">Peru</option>
            <option value="polonia">Polônia</option>
            <option value="portugal">Portugal</option>
            <option value="quirguistao">Quirguistão</option>
            <option value="quiribati">Quiribati</option>
            <option value="reino-unido">Reino Unido</option>
            <option value="republica-centro-africana">
              República Centro-Africana
            </option>
            <option value="republica-dominicana">República Dominicana</option>
            <option value="republica-tcheca">República Tcheca</option>
            <option value="romenia">Romênia</option>
            <option value="ruanda">Ruanda</option>
            <option value="russia">Rússia</option>
            <option value="salomao">Salomão</option>
            <option value="samoa">Samoa</option>
            <option value="santa-lucia">Santa Lúcia</option>
            <option value="sao-cristovao-e-nevis">São Cristóvão e Nevis</option>
            <option value="sao-marino">São Marinho</option>
            <option value="sao-tome-e-principe">São Tomé e Príncipe</option>
            <option value="sao-vicente-e-granadinas">
              São Vicente e Granadinas
            </option>
            <option value="senegal">Senegal</option>
            <option value="serra-leoa">Serra Leoa</option>
            <option value="servia">Sérvia</option>
            <option value="seicheles">Seicheles</option>
            <option value="singapura">Singapura</option>
            <option value="siria">Síria</option>
            <option value="somalia">Somália</option>
            <option value="sri-lanka">Sri Lanka</option>
            <option value="sudao">Sudão</option>
            <option value="sudao-do-sul">Sudão do Sul</option>
            <option value="suecia">Suécia</option>
            <option value="suica">Suíça</option>
            <option value="suriname">Suriname</option>
            <option value="tadjiquistao">Tadjiquistão</option>
            <option value="tailandia">Tailândia</option>
            <option value="taiwan">Taiwan</option>
            <option value="tanzania">Tanzânia</option>
            <option value="timor-leste">Timor-Leste</option>
            <option value="togo">Togo</option>
            <option value="tonga">Tonga</option>
            <option value="trindade-e-tobago">Trindade e Tobago</option>
            <option value="tunisia">Tunísia</option>
            <option value="turcomenistao">Turcomenistão</option>
            <option value="turquia">Turquia</option>
            <option value="tuvalu">Tuvalu</option>
            <option value="ucrania">Ucrânia</option>
            <option value="uganda">Uganda</option>
            <option value="uruguai">Uruguai</option>
            <option value="uzbequistao">Uzbequistão</option>
            <option value="vanuatu">Vanuatu</option>
            <option value="vaticano">Vaticano</option>
            <option value="venezuela">Venezuela</option>
            <option value="vietna">Vietnã</option>
            <option value="zambia">Zâmbia</option>
            <option value="zimbabue">Zimbábue</option>
          </select>
        </label>

        <label className="formation__level">
          Nivel*
          <div className="select-selected"></div>
          <select className="formation__level_select" name="formationLevel">
            <option value="noGraduation">Graduação</option>
            <option value="ensinoFundamental">Ensino Fundamental</option>
            <option value="ensinoMedio">Ensino Médio</option>
            <option value="cursoTecnico">Curso Técnico</option>
            <option value="especialização">Especialização</option>
            <option value="mestrado">Mestrado</option>
            <option value="doutorado">Doutorado</option>
          </select>
        </label>

        <label className="formation__institution" htmlFor="">
          Instituição*
          <input
            className="formation__institution-input"
            type="text"
            name=""
            // onChange={handleInputChangeFormation}
            // value={infoCurriculum.education}
            required
          />
        </label>

        <label className="formation__course" htmlFor="">
          Curso*
          <input
            className="formation__institution-input"
            type="text"
            name=""
            // onChange={handleInputChangeFormation}
            // value={infoCurriculum.education}
            required
          />
        </label>

        <label className="formation__start_date" htmlFor="">
          Inicio*
          <input
            className="formation__institution-input"
            type="text"
            name=""
            // onChange={handleInputChangeFormation}
            // value={infoCurriculum.education}
            placeholder="01/2011"
            required
          />
        </label>

        <label className="formation__end_date" htmlFor="">
          Previsão/Data de Conclusão*
          <input
            className="formation__institution-input"
            type="text"
            name=""
            // onChange={handleInputChangeFormation}
            // value={infoCurriculum.education}
            placeholder="08/2013"
            required
          />
        </label>

        <label className="formation__status">
          Status*
          <select className="formation__status_select" name="status">
            <option value="infoCurriculum.educationconcluido">Concluido</option>
            <option value="infoCurriculum.educationcursando">Cursando</option>
            <option value="infoCurriculum.educationtrancado">Trancado</option>
          </select>
        </label>

        <div className="formation__form__button">
          <Button text="Salvar" />

          <Button text="Editar" className="btn-edit" />

          <Button text="Deletar" className="btn-delete" />

          <Button text="Cancelar" className="btn-cancel" />
        </div>
      </form>
    </div>
  );
}

export default Formation;
