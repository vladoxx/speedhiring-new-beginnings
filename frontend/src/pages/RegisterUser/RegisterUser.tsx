function RegisterUser() {
  return (
    <div>
      <h3>Cadastro do Candidato</h3>
      <input type="name" placeholder="Nome Completo*" required/>
      <input type="email" placeholder="E-mail*" required/>
      <input type="text" placeholder="Endereço*" required/>
      <input type="number" placeholder="CEP*" required/>
      <input type="tel" placeholder="Telefone*" required/>
      <input type="text" placeholder="Cidade*" required/>
      <input type="text" placeholder="Estado" required/>
      <input type="text" placeholder="Função/Cargo*" required/>
      <input type="password" placeholder="Senha*" required/>
      <input type="password" placeholder="Confirmar a Senha*" required/>
      <button>Cadastrar</button>

    </div>
  )
}

export default RegisterUser
