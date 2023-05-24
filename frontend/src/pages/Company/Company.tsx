import "./Company.css";
import LogoToti from "../../assets/images/icon_logo_toti.png";

function Company() {
  return (
    <div className="company">
      <h3 className="company__tittle">Perfil da Empresa</h3>

      <img className="company__image" src={LogoToti} alt="Logo Empresa" />
      <div className="company__list">
        <ul>
          <li className="company__localization">Matriz: Rio de Janeiro</li>
          <li className="company__site">Site: www.toti.com.br</li>
          <li className="company__sector">Sector: Educação</li>
          <li className="company__email">E-mail: toti@empresa.com</li>
          <li className="company__cnpj">CNPJ: 69.976.803/0001/82</li>
          <li className="company__description">
            A toti é a primeira plataforma brasileira de ensino e inculsão de
            pessoas refugiadas e migrantes no mercado de trabalho de tecnologia.
          </li>
        </ul>
      </div>

      <button className="company__vacancies" type="button">
        Voltar ás vagas
      </button>
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
