import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { CompanyProps } from "../../@types/company";

import useCompany from "../../hooks/useCompany";

import * as serviceCompany from "../../service/CompanyService";

import "./Company.css";

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

      <div className="company__container">
        <ul className="company__list__ul">
          <li>
            <strong>Nome:</strong> {company?.corporate_name}
          </li>
          <li className="company__localization">
            <strong>Matriz:</strong> {company?.address}
          </li>
          {company?.website && (
            <li className="company__site">
              <strong>Site:</strong> {company?.website}
            </li>
          )}
          <li className="company__sector">
            <strong>Sector:</strong> {company?.sector}
          </li>
          <li className="company__email">
            <strong>E-mail:</strong> {company?.email}
          </li>
          <li className="company__cnpj">
            <strong>CNPJ:</strong> {company?.cnpj}
          </li>
          <li className="company__description">
            <strong>Telefone:</strong> {company?.phone}
          </li>
          <li className="company__description">
            <strong>Vagas cadastradas:</strong> {company?.jobs?.length}
          </li>
          {company?.description_company && (
            <li className="company__description">
              <strong>Descrição:</strong> {company?.description_company}
            </li>
          )}
        </ul>

        <div className="buttons__company-container">
          <Link
            to={"/company-vacancies"}
            className="buttons__company company__vacancies"
          >
            Administrar vagas
          </Link>
          <Link to={""} className="buttons__company company__edit">
            Editar dados
          </Link>
          <Link
            to={"/advertise-vacancy"}
            className="buttons__company company__register"
          >
            Cadastrar vaga
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Company;
