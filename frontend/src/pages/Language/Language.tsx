function Language() {
  return (
    <div className="languages">
      <h3 className="languages__tittle">Idiomas</h3>
      <label className="languages__select">Idiomas*</label>


      <label className="languages__proficiency">Proficiência</label>
      <select className="languages__proficiency_level" name="proficiencia">
        <option value="basico">Básico</option>
        <option value="intermediario">Intermêdiario</option>
        <option value="avancado">Avançado</option>
        <option value="nativo">Nativo</option>
      </select>
    </div>
  )
}

export default Language
