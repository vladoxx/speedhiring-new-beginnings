import { Link } from "react-router-dom";
import LogoLogin from "../../assets/images/logo-login.png";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <form action="">
        <img className="login__image" src={LogoLogin} alt="Logo Login" />
        <h3 className="login__tittle">Login</h3>
        
        <div className="login__inputs">
          <input className="login__input_email" type="email" placeholder="E-mail/CNPJ" required/>
          <input className="login__input_password" type="Password" placeholder="Senha" required/>
        </div>
        
        <p className="login__register">Não tem cadastro? <Link to={"/register"}>Clique aqui</Link></p>
        <p className="login__forgot_password">Esqueceu sua senha?</p>
        
        <input className="login__button" type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login

