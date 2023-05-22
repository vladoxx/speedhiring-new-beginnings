import "./ProfessionalExperience.css";

function ProfessionalExperience() {
  return (
    <div className="professional__experience">
      <h3 className="professional__experience-title">
        Experiência Profissional
      </h3>

      <form className="professional__experience-form" action="">
        <label className="professional__company">
          Empresa*
          <input className="professional__input-company"></input>
        </label>

        <label className="professional__country">
          Pais*
          <select className="professional__country_select" name="pais">
            <option value="noCountry">Selecione o seu país</option>
            <option value="afeganistan">Afeganistão</option>
            <option value="albania">Albânia</option>
            <option value="alemanha">Alemanha</option>
            <option value="andorra">Andorra</option>
            <option value="angola">Angola</option>
            <option value="antigua-e-barbuda">Antígua e Barbuda</option>
            <option value="arabia-saudita">Arábia Saudita</option>
            <option value="argelia">Argélia</option>
            <option value="argentina">Argentina</option>
            <option value="armenia">Armênia</option>
            <option value="australia">Austrália</option>
            <option value="austria">Áustria</option>
            <option value="azerbaijao">Azerbaijão</option>
            <option value="bahamas">Bahamas</option>
            <option value="bahrein">Bahrein</option>
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

        <label className="professional__sector">
          Setor*
          <select className="professional__sector_select" name="setor">
            <option value="educacao">Educação</option>
            <option value="informatica-comunicacao">
              Informática e Comunicação
            </option>
            <option value="programacao">Programação</option>
            <option value="desing">Desing</option>
            <option value="advocacia">Advocacia</option>
            <option value="mecanica">Mecânica</option>
            <option value="transporte-logistica">Transporte e Logística</option>
            <option value="telemarketing-atendimendo">
              Telemarketing e Atendimento ao Cliente
            </option>
            <option value="vendas-comercio">Vendas e Comércio</option>
            <option value="seguranca">Segurança</option>
            <option value="limpeza">Limpeza</option>
            <option value="turismo">Turismo</option>
            <option value="financas">Finanças</option>
            <option value="saude">Saúde</option>
            <option value="restaurantes">Restaurantes e Bares</option>
          </select>
        </label>

        <label>
          Nivel*
          <select name="nivel">
            <option value="ceo">CEO</option>
            <option value="presidente">Presidente</option>
            <option value="diretor">Diretor</option>
            <option value="gerente">Gerente</option>
            <option value="coordinador">Coordinador</option>
            <option value="analista" selected>
              Analista
            </option>
            <option value="assistente">Assistente</option>
            <option value="auxiliar">Auxiliar</option>
          </select>
        </label>

        <label className="professional__site_company">
          Site da Empresa*
          <input className="professional__"></input>
        </label>
        <label className="professional__responsability_description">
          Responsabilidades*
          <textarea className="professional__responsability-textarea"></textarea>
        </label>

        <label className="professional__position">
          Cargo*
          <input className="professional__"></input>
        </label>

        <label className="professional__seniority">
          Nivel*
          <select className="professional__seniority_select" name="nivel">
            <option value="ceo">CEO</option>
            <option value="presidente">Presidente</option>
            <option value="diretor">Diretor</option>
            <option value="gerente">Gerente</option>
            <option value="coordinador">Coordinador</option>
            <option value="analista" selected>
              Analista
            </option>
            <option value="assistente">Assistente</option>
            <option value="auxiliar">Auxiliar</option>
          </select>
        </label>

        <label className="professional__area">
          Área
          <select className="professional__area_select" name="area">
            <option value="">area</option>
          </select>
        </label>

        <label className="professional__work_started">
          De*
          <input
            className="professional__"
            type="text"
            placeholder="01/2011"
            required
          />
        </label>

        <label className="professional__work_ending">
          Até*
          <input
            className="professional__"
            type="text"
            placeholder="01/2013"
            required
          />
        </label>

        <label>
          <input className="professional__charge" type="checkbox" />
          Meu cargo atual
        </label>

        <div className="formation__form__button">
          <button className="formation__btn save_button" type="submit">
            Salvar
          </button>
          <button
            className="formation__btn certifications__edit_button"
            type="submit"
          >
            Editar
          </button>
          <button
            className="formation__btn certifications__delete_button"
            type="submit"
          >
            Deletar
          </button>
          <button className="formation__btn certifications__cancel_button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfessionalExperience;
