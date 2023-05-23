import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CompanyProps } from "../../@types/company";
import { InputChange } from "../../@types/general";

import * as companyService from "../../service/CompanyService";

import "./RegisterCompany.css";

function RegisterCompany() {
  let navigate = useNavigate();
  let params = useParams();

  const initialStateCompany = {
    corporate_name: "",
    sector: "",
    cnpj: "",
    email: "",
    website: "",
    address: "",
    phone: "",
    password: "",
    confirm_password: "",
    receivedCurriculums: [],
    jobs: [],
  };

  const [company, setCompany] = useState<CompanyProps>(initialStateCompany);

  const handleInputChangeCompany = async (e: InputChange) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmitCompany = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await companyService.createCompany(company);

      setCompany(initialStateCompany);
    }

    navigate("/login");
  };

  const getCompany = async (id: string) => {
    const res = await companyService.getOneCompany(id);

    const {
      corporate_name,
      sector,
      cnpj,
      email,
      website,
      address,
      phone,
      password,
      confirm_password,
      receivedCurriculums,
      jobs,
    } = res.data;

    setCompany({
      corporate_name,
      sector,
      cnpj,
      email,
      website,
      address,
      phone,
      password,
      confirm_password,
      receivedCurriculums,
      jobs,
    });
  };

  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
  }, []);

  return (
    <div className="register-company">
      <h3 className="register-company__title">Cadastro da Empresa</h3>

      <form
        className="register__company-form"
        onSubmit={handleSubmitCompany}
        action="/register-company"
      >
        <input
          className="register-company__input corporate_name"
          type="text"
          name="corporate_name"
          onChange={handleInputChangeCompany}
          value={company.corporate_name}
          placeholder="Razão Social*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          name="sector"
          onChange={handleInputChangeCompany}
          value={company.sector}
          placeholder="Sector*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          name="address"
          onChange={handleInputChangeCompany}
          value={company.address}
          placeholder="Endereço*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          name="cnpj"
          onChange={handleInputChangeCompany}
          value={company.cnpj}
          placeholder="CNPJ*"
          required
        />
        <input
          className="register-company__input"
          type="tel"
          name="phone"
          onChange={handleInputChangeCompany}
          value={company.phone}
          placeholder="Telefone*"
          required
        />
        <input
          className="register-company__input"
          type="email"
          name="email"
          onChange={handleInputChangeCompany}
          value={company.email}
          placeholder="E-mail*"
          required
        />
        <input
          className="register-company__input"
          type="text"
          name="website"
          onChange={handleInputChangeCompany}
          value={company.website}
          placeholder="Website"
          required
        />
        <input
          className="register-company__input"
          type="password"
          name="password"
          onChange={handleInputChangeCompany}
          value={company.password}
          placeholder="Senha*"
          required
        />
        <input
          className="register-company__input"
          type="password"
          name="confirm_password"
          onChange={handleInputChangeCompany}
          value={company.confirm_password}
          placeholder="Confirmar a Senha*"
          required
        />
        <button className="register-company__button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterCompany;
