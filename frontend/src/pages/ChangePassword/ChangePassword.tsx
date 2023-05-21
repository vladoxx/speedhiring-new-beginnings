import "./ChangePassword.css";

function ChangePassword() {
  return (
    <div className="change__password">
      <h3 className="change__password__title">Alterar Senha</h3>

      <form className="change__password-form" action="">
        <label className="change__password__current-password">
          Senha Atual
          <input className="change__password__input" type="password" />
        </label>
        <label className="change__password__new-password">
          Nova Senha
          <input className="change__password__input" type="password" />
        </label>
        <label className="change__password__repeat-password">
          Repetir Senha
          <input className="change__password__input" type="password" />
        </label>

        <button className="change__password__button" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
