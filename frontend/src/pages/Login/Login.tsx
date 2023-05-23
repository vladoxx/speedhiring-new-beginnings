import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { UserProps } from "../../@types/user";
import { InputChange } from "../../@types/general";

import useUser from "../../hooks/useUser";

import * as loginService from "../../service/LoginService";

import LogoLogin from "../../assets/images/logo-login.png";

import "./Login.css";

function Login() {
  let navigate = useNavigate();
  let params = useParams();

  const { login, isLoggedIn } = useUser();

  const initialStateLogin = {
    email: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState<UserProps>(initialStateLogin);

  const handleInputChangeLogin = (e: InputChange) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await loginService.loginUser(userLogin);

      setUserLogin(initialStateLogin);
    }

    login();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="login">
      <img className="login__image" src={LogoLogin} alt="Logo Login" />

      <h3 className="login__title">Login</h3>

      <form
        className="login__form"
        onSubmit={handleSubmitLogin}
        action="/login"
      >
        <input
          className="login__input_email"
          type="email"
          name="email"
          onChange={handleInputChangeLogin}
          value={userLogin.email}
          placeholder="E-mail/CNPJ"
          required
        />

        <input
          className="login__input_password"
          type="Password"
          name="password"
          onChange={handleInputChangeLogin}
          value={userLogin.password}
          placeholder="Senha"
          required
        />

        <span className="login__forgot_password">Esqueceu sua senha?</span>

        <button className="login__button" type="submit">
          Login
        </button>
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
