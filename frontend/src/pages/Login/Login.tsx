import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <img className="login__image" src="" alt="Logo Login" />

      <h3 className="login__tittle">Login</h3>
      
      <input className="login__input_email" type="email" placeholder="E-mail/CNPJ" required/>
      <input className="login__input_password" type="Password" placeholder="Senha" required/>
      
      <p className="login__register">Não tem cadastro? <Link to={"/register"}>Clique aqui</Link></p> 
      <p className="login__forgot_password">Esqueceu sua senha?</p>
      
      <button className="login__button" type="button">Login</button>
    </div>
  )
}

export default Login

