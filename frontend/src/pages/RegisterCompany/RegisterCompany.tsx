import "./RegisterCompany.css";

function RegisterCompany() {
  return (
    <div className="register-company">
      <h3 className="register-company__title">Cadastro da Empresa</h3>
      <form className="form" action="">
        <input
          className="register-company__input"
          type="text"
          placeholder="Razão Social*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          placeholder="Sector*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          placeholder="Endereço*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          placeholder="CNPJ*"
          required
        />
        <input
          className="register-company__input"
          type="tel"
          placeholder="Telefone*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          placeholder="Website"
          required
        />
        <input
          className="register-company__input"
          type="password"
          placeholder="Senha*"
          required
        />
        <input
          className="register-company__input"
          type="password"
          placeholder="Confirmar a Senha*"
          required
        />
        <button className="register-company__button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterCompany;
