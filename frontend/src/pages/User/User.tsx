import "./User.css"

function User() {
  return (
    <div className="user">
      <h3 className="register-use__tittle">Perfil do candidato</h3>

      <button className="buttons register-user__button-personal-info" type="button">Informações Pessoais</button>
      <button className="buttons register-user__button-candidatures" type="button">Minhas Candidaturas</button>
      <button className="buttons register-user__button-privacy" type="button">Privacidade</button>
      <button className="buttons register-user__button-account" type="button">Conta</button>
      <button className="buttons register-user__button-vacancies" type="button">Area de Vagas</button>
    </div>
  )
}

export default User
