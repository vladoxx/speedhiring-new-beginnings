import "./RegisterUser.css";

function RegisterUser() {
  return (
    <div className="register-user">
      <form action="">
        <h3 className="register-user__tittle">Cadastro do Candidato</h3>
        <input
          className="register-user__input"
          type="name"
          placeholder="Nome Completo*"
          required
        />
        <input
          className="register-user__input"
          type="email"
          placeholder="E-mail*"
          required
        />
        <input
          className="register-user__input"
          type="text"
          placeholder="Endereço*"
          required
        />
        <input
          className="register-user__input"
          type="number"
          placeholder="CEP*"
          required
        />
        <input
          className="register-user__input"
          type="tel"
          placeholder="Telefone*"
          required
        />
        <input
          className="register-user__input"
          type="text"
          placeholder="Cidade*"
          required
        />
        <input
          className="register-user__input"
          type="text"
          placeholder="Estado"
          required
        />
        <input
          className="register-user__input"
          type="text"
          placeholder="Função/Cargo*"
          required
        />
        <input
          className="register-user__input"
          type="password"
          placeholder="Senha*"
          required
        />
        <input
          className="register-user__input"
          type="password"
          placeholder="Confirmar a Senha*"
          required
        />
        <input
          className="register-user__button"
          type="submit"
          value="Cadastrar"
        />
      </form>
    </div>
  );
}

export default RegisterUser;
