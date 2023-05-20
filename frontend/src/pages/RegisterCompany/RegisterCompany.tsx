import "./RegisterCompany.css"

function RegisterCompany() {
  return (
    <form action="">
      <div className="register-company">
         <h3 className="register-company__tittle">Cadastro da Empresa</h3>
        <input className="register-company__input" type="text" placeholder="Razão Social*" required/>
        <input className="register-company__input" type="text" placeholder="Sector*" required/>
        <input className="register-company__input" type="text" placeholder="Endereço*" required/>
        <input className="register-company__input" type="text" placeholder="CNPJ*" required/>
        <input className="register-company__input" type="tel" placeholder="Telefone*" required/>
        <input className="register-company__input" type="text" placeholder="Website" required/>
        <input className="register-company__input" type="password" placeholder="Senha*" required/>
        <input className="register-company__input" type="password" placeholder="Confirmar a Senha*" required/>
        <input className="register-company__button" type="submit" value="Cadastrar"/>
      </div>
    </form>
  )
}

export default RegisterCompany
