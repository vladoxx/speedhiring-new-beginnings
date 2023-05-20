import "./Company.css"
import LogoToti from "../../assets/images/icon_logo_toti.png";

function Company() {
    return (
        <div className="company">
            <h3 className="company__tittle">Perfil da Empresa</h3>

            <img className="company__image" src={LogoToti} alt="Logo Empresa" />
            <p className="company__localization">Matriz: Rio de Janeiro</p>
            <p className="company__site">Site: www.toti.com.br</p>
            <p className="company__sector">Sector: Educação</p>
            <p className="company__email">E-mail: toti@empresa.com</p>
            <p className="company__cnpj">CNPJ: 69.976.803/0001/82</p>

            <p className="company__description">A toti é a primeira plataforma brasileira de ensino e inclusão de pessoas refugiadas e migrantes no mercado
                de trabalho de tecnologia.</p>
                
            <button className="company__vacancies" type="button">Voltar ás vagas</button>
            <button className="company__edit" type="button">Editar dados</button>
            <button className="company__register" type="button">Cadastrar vaga</button>
        </div>
    )
}

export default Company
