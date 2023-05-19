function Language() {
  return (
    <div>
      <h3>Idiomas</h3>

      <form action="">
        <label>Idiomas*</label>

        <label>Proficiência*</label>
        <select name="proficiencia">
          <option value="basico">Básico</option>
          <option value="intermediario">Intermêdiario</option>
          <option value="avancado">Avançado</option>
          <option value="nativo">Nativo</option>
        </select>

        <input className="" type="submit" value="Salvar" />
        <input className="" type="submit" value="Editar" />
        <input className="" type="submit" value="Deletar" />
        <button className="" type="button">Cancelar</button>
      </form>
    </div>
  )
}

export default Language
