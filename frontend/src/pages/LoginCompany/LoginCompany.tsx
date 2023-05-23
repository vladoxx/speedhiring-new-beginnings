import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CompanyProps } from "../../@types/company";
import { InputChange } from "../../@types/general";

import useCompany from "../../hooks/useCompany";

import * as loginService from "../../service/LoginService";

import LogoLogin from "../../assets/images/logo-login.png";

function LoginCompany() {
  let navigate = useNavigate();
  let params = useParams();

  const { loginCompany, isLoggedInCompany } = useCompany();

  const initialStateLogin = {
    cnpj: "",
    password: "",
  };

  const [companyLogin, setCompanyLogin] =
    useState<CompanyProps>(initialStateLogin);
  const [loginSucess, setLoginSucess] = useState("");

  const handleInputChangeLogin = (e: InputChange) => {
    setCompanyLogin({ ...companyLogin, [e.target.name]: e.target.value });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      try {
        const resLogin = await loginService.loginCompany(companyLogin);

        loginCompany(resLogin.data.token);

        setCompanyLogin(initialStateLogin);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || "Erro desconhecido";

        console.log("Erro de login:", errorMessage);

        setLoginSucess(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (isLoggedInCompany) {
      navigate("/company");
    }
  }, [isLoggedInCompany, navigate]);

  return (
    <div className="login">
      <img className="login__image" src={LogoLogin} alt="Logo Login" />

      <h3 className="login__title">Login</h3>

      <form
        className="login__form"
        onSubmit={handleSubmitLogin}
        action="/login-company"
      >
        <input
          className="login__input_email"
          type="text"
          name="cnpj"
          onChange={handleInputChangeLogin}
          value={companyLogin.cnpj}
          placeholder="CNPJ"
          required
        />

        <input
          className="login__input_password"
          type="Password"
          name="password"
          onChange={handleInputChangeLogin}
          value={companyLogin.password}
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

export default LoginCompany;
