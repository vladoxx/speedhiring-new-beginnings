import "./RegisterUser.css";

function RegisterUser() {
  return (
    <div className="registerUser">
      <h3 className="registerUser__title">Cadastro do Candidato</h3>

      <form className="registerUser__form" action="">
        <input
          className="registerUser__input"
          type="name"
          placeholder="Nome Completo*"
          required
        />
        <input
          className="registerUser__input"
          type="email"
          placeholder="E-mail*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          placeholder="Endereço*"
          required
        />
        <input
          className="registerUser__input"
          type="number"
          placeholder="CEP*"
          required
        />
        <input
          className="registerUser__input"
          type="tel"
          placeholder="Telefone*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          placeholder="Cidade*"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          placeholder="Estado"
          required
        />
        <input
          className="registerUser__input"
          type="text"
          placeholder="Função/Cargo*"
          required
        />
        <input
          className="registerUser__input"
          type="password"
          placeholder="Senha*"
          required
        />
        <input
          className="registerUser__input"
          type="password"
          placeholder="Confirmar a Senha*"
          required
        />

        <button className="registerUser__button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
