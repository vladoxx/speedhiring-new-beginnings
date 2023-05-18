function RegisterCompany() {
  return (
    <div>
       <h3>Cadastro da Empresa</h3>
      <input type="text" placeholder="Razão Social*" required/>
      <input type="text" placeholder="Sector*" required/>
      <input type="text" placeholder="Endereço*" required/>
      <input type="text" placeholder="CNPJ*" required/>
      <input type="tel" placeholder="Telefone*" required/>
      <input type="text" placeholder="Website" required/>
      <input type="password" placeholder="Senha*" required/>/
      <input type="password" placeholder="Confirmar a Senha*" required/>
      <button>Cadastrar</button>
    </div>
  )
}

export default RegisterCompany
