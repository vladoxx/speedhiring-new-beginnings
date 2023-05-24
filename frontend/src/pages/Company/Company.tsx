import { useEffect, useState } from "react";
import * as serviceCompany from "../../service/CompanyService";

import LogoToti from "../../assets/images/icon_logo_toti.png";

import useCompany from "../../hooks/useCompany";

import "./Company.css";
import { CompanyProps } from "../../@types/company";
import { Link } from "react-router-dom";

function Company() {
  const [company, setCompany] = useState<CompanyProps>();
  const { companyId, isLoggedInCompany } = useCompany();

  const loadCompany = async (id: string) => {
    const res = await serviceCompany.getOneCompany(id);

    setCompany(res.data);
  };

  useEffect(() => {
    if (companyId) {
      loadCompany(companyId);
    }
  }, [isLoggedInCompany]);

  return (
    <div className="company">
      <h3 className="company__tittle">Perfil da Empresa</h3>

      <img className="company__image" src={LogoToti} alt="Logo Empresa" />
      <div className="company__list">
        <ul>
          <li>{company?.corporate_name}</li>
          <li className="company__localization">Matriz: Rio de Janeiro</li>
          <li className="company__site">Site: {company?.website}</li>
          <li className="company__sector">Sector: {company?.sector}</li>
          <li className="company__email">E-mail: {company?.email}</li>
          <li className="company__cnpj">CNPJ: {company?.cnpj}</li>
          <li className="company__description">
            {company?.description_company}
          </li>
        </ul>
      </div>

      <Link to={"/vacancy"}>
        <button className="company__vacancies" type="button">
          Voltar ás vagas
        </button>
      </Link>
      <button className="company__edit" type="button">
        Editar dados
      </button>
      <button className="company__register" type="button">
        Cadastrar vaga
      </button>
    </div>
  );
}

export default Company;
