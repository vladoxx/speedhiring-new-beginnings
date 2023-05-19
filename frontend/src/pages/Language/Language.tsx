function Language() {
  return (
    <div>
      <h3>Idiomas</h3>
      <label>Idiomas*</label>


      <label>Proficiência</label>
      <select name="proficiencia">
        <option value="basico">Básico</option>
        <option value="intermediario">Intermêdiario</option>
        <option value="avancado">Avançado</option>
        <option value="nativo">Nativo</option>
      </select>
    </div>
  )
}

export default Language
