import "./Language.css";

function Language() {
  return (
    <div className="languages">
      <h3 className="languages__title">Idiomas</h3>

      <form className="languages__form" action="">
        <label className="languages__select">
          Idiomas*
          <select className="languages__select_idioma" name="idioma">
            <option value="ingles">Inglês</option>
            <option value="mandarim">Mandarim</option>
            <option value="espanhol">Espanhol</option>
            <option value="portugues">Português</option>
            <option value="frances">Francês</option>
            <option value="arabe">Árabe</option>
            <option value="russo">Russo</option>
          </select>
        </label>

        <label className="languages__proficiency">
          Proficiência*
          <select className="languages__proficiency_level" name="proficiencia">
            <option value="basico">Básico</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
            <option value="nativo">Nativo</option>
          </select>
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

export default Language;
