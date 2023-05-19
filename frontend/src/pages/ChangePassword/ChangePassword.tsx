function ChangePassword() {
  return (
    <div className="change-password">
      <h3 className="change-password__tittle">Alterar Senha</h3>
      <label className="change-password__current-password">Senha Atual</label>
      <input className="change-password__input"></input>
      <label className="change-password__new-password">Nova Senha</label>
      <input className="change-password__input"></input>
      <label className="change-password__repeat-password">Repetir Senha</label>
      <input className="change-password__input"></input>
      <button className="change-password__button" type="button">Salvar</button>
    </div>
  )
}

export default ChangePassword
