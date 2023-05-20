import { Link } from "react-router-dom";
import LogoLogin from "../../assets/images/logo-login.png";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img className="login__image" src={LogoLogin} alt="Logo Login" />

      <h3 className="login__title">Login</h3>

      <form className="login__form" action="">
        <input
          className="login__input_email"
          type="email"
          placeholder="E-mail/CNPJ"
          required
        />

        <input
          className="login__input_password"
          type="Password"
          placeholder="Senha"
          required
        />

        <span className="login__forgot_password">Esqueceu sua senha?</span>

        <input className="login__button" type="submit" value="Login" />
      </form>

      <span className="login__register">
        Não tem cadastro?{" "}
        <Link to={"/register"} className="login__register-link">
          Clique aqui
        </Link>
      </span>
    </div>
  );
}

export default Login;
