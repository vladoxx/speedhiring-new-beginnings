import React from "react";
import Input from "../../components/Input/Input";
import "./RegisterCompany.css";

const RegisterCompany = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
  };

  return (
    <div className="register-company">
      <h3 className="register-company__title">Cadastro da Empresa</h3>
      <form className="form" onSubmit={handleSubmit}>
        <Input placeholder="Razão Social*" type="text" />
        <Input placeholder="Sector*" type="text" />
        <Input placeholder="Endereço*" type="text" />
        <Input placeholder="CNPJ*" type="text" />
        <Input placeholder="Telefone*" type="tel" />
        <Input placeholder="Website" type="text" />
        <Input placeholder="Senha*" type="password" />
        <Input placeholder="Confirmar a Senha*" type="password" />

        <button className="register-company__button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterCompany;
