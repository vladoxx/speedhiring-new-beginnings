import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { UserProps } from "../../@types/user";
import { InputChange } from "../../@types/general";

import useUser from "../../hooks/useUser";

import * as loginService from "../../service/LoginService";

import LogoLogin from "../../assets/images/logo-login.png";

import "./LoginUser.css";

function LoginUser() {
  let navigate = useNavigate();
  let params = useParams();

  const { tokenUser, isLoggedInUser } = useUser();

  const initialStateLogin = {
    _id: "",
    email: "",
    password: "",
  };

  const [userLogin, setUserLogin] = useState<UserProps>(initialStateLogin);
  const [loginSucess, setLoginSucess] = useState("");
  const [userId, setUserId] = useState<UserProps>(initialStateLogin);

  const handleInputChangeLogin = (e: InputChange) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      try {
        const resLogin = await loginService.loginUserBack(userLogin);

        tokenUser(resLogin.data.token);
        setUserId(resLogin.data.user._id);

        setUserLogin(initialStateLogin);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || "Erro desconhecido";

        console.log("Erro de login:", errorMessage);

        setLoginSucess(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (isLoggedInUser) {
      navigate(`/user/${userId}`);
    }
  }, [isLoggedInUser, navigate]);

  return (
    <div className="login">
      <img className="login__image" src={LogoLogin} alt="Logo Login" />

      <h3 className="login__title">Login</h3>

      <form
        className="login__form"
        onSubmit={handleSubmitLogin}
        action="/login-user"
      >
        <input
          className="login__input_email"
          type="email"
          name="email"
          onChange={handleInputChangeLogin}
          value={userLogin.email}
          placeholder="E-mail"
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

        {loginSucess && (
          <span className="login__forgot_erro">{loginSucess}</span>
        )}

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

export default LoginUser;
