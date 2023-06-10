import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { CompanyProps } from "../../@types/company";

import * as serviceCompany from "../../service/CompanyService";

import "./Company.css";
import Button from "../../components/Button/Button";

function Company() {
  const [company, setCompany] = useState<CompanyProps>();
  const companyId = sessionStorage.getItem("company_id");

  let navigate = useNavigate();
  const loadCompany = async (id: string) => {
    const res = await serviceCompany.getOneCompany(id);

    setCompany(res.data);
  };

  useEffect(() => {
    if (companyId) {
      loadCompany(companyId);
    }
  }, [companyId]);

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
          <Button
            text="Administrar vagas"
            onClick={() => navigate("/company-vacancies")}
          />

          <Button
            text="Editar dados"
            onClick={() => navigate("/")}
            className="btn-edit"
          />

          <Button
            text="Cadastrar vaga"
            onClick={() => navigate("/advertise-vacancy")}
            className="btn-open"
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
