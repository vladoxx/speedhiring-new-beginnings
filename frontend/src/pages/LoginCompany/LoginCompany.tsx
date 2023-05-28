import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CompanyProps } from "../../@types/company";
import { InputChange } from "../../@types/general";

import useCompany from "../../hooks/useCompany";

import * as loginService from "../../service/LoginService";

import LogoLoginCompany from "../../assets/images/logo-login.png";

function LoginCompany() {
  let navigate = useNavigate();
  let params = useParams();

  const {
    tokenCompany,
    isLoggedInCompany,
    getIdCompany,
    companyId,
    getNameCompany,
  } = useCompany();

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
        const resLoginCompany = await loginService.loginCompanyBack(
          companyLogin
        );

        tokenCompany(resLoginCompany.data.token);
        getIdCompany(resLoginCompany.data.company._id);
        getNameCompany(resLoginCompany.data.company.corporate_name);

        setCompanyLogin(initialStateLogin);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || error.response.data.errors[0].msg;

        console.log("Erro de login:", errorMessage);
        console.log("Error", error);

        setLoginSucess(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (isLoggedInCompany) {
      navigate(`/company/${companyId}`);
    }
  }, [isLoggedInCompany, navigate]);

  console.log(isLoggedInCompany);

  return (
    <div className="login">
      <img className="login__image" src={LogoLoginCompany} alt="Logo Login" />

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
          // required
        />

        <input
          className="login__input_password"
          type="Password"
          name="password"
          onChange={handleInputChangeLogin}
          value={companyLogin.password}
          placeholder="Senha"
          // required
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
        <Link to={"/register-company"} className="login__register-link">
          Clique aqui
        </Link>
      </span>
    </div>
  );
}

export default LoginCompany;
