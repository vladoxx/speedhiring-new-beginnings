import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <img src="" alt="Logo Login" />

      <h3>Login</h3>
      
      <input type="email" placeholder="E-mail/CNPJ" required/>
      <input type="Password" placeholder="Senha" required/>
      
      <p>Não tem cadastro? <Link to={"/register"}>Clique aqui</Link></p> 
      <p>Esqueceu sua senha?</p>
      
      <button>Login</button>
    </div>
  )
}

export default Login

