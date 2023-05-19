function ChangePassword() {
  return (
    <div className="change-password">
      <h3 className="change-password__tittle">Alterar Senha</h3>

      <form action="">
        <label className="change-password__current-password">Senha Atual</label>
        <input className="change-password__input"/>
        <label className="change-password__new-password">Nova Senha</label>
        <input className="change-password__input"/>
        <label className="change-password__repeat-password">Repetir Senha</label>
        <input className="change-password__input"/>
        
        <input className="change-password__button" type="submit" value="Salvar" />
      </form>
    </div>
  )
}          


export default ChangePassword
