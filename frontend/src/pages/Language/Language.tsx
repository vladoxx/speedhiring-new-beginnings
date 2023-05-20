function Language() {
  return (
    <div className="languages">
      <h3 className="languages__tittle">Idiomas</h3>
      <label className="languages__select">Idiomas*</label>

      <form action="">
        <label className="languages__select">Idiomas*</label>
        <select className="languages__select_idioma" name="idioma">
        <option value="ingles">Inglês</option>
        <option value="mandarim">Mandarim</option>
        <option value="espanhol">Espanhol</option>
        <option value="portugues">Português</option>
        <option value="frances">Francês</option>
        <option value="arabe">Árabe</option>
        <option value="russo">Russo</option>
      </select>

      <label className="languages__proficiency">Proficiência</label>
      <select className="languages__proficiency_level" name="proficiencia">
        <option value="basico">Básico</option>
        <option value="intermediario">Intermêdiario</option>
        <option value="avancado">Avançado</option>
        <option value="nativo">Nativo</option>
      </select>
      </form>
    </div>
  )
}

export default Language
