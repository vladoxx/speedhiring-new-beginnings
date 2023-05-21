import { useNavigate } from "react-router-dom";
import "./Vacancy.css";

function Vacancy() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div className="vacant">
      <h2 className="vacant__title">Vagas</h2>

      <div className="vacant__container">
        <div className="vacant__box_info">
          <div className="vacant__box_info-header">
            <h3 className="vacant__job_title">Promotor de Vendas</h3>
            <span className="vacant__localization">Rio de Janeiro</span>
          </div>
          <div className="vacant__description-container">
            <span className="vacant__description-empresa">Empresa</span>
            <p className="vacant__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              distinctio fugiat facere voluptatibus dolore cumque, quia eaque
              sequi laudantium sapiente aspernatur quod dignissimos incidunt
              quam. Et a officia architecto adipisci!
            </p>
            <button className="vacant__box_info-button" type="submit" value="">
              Ver Vaga
            </button>
          </div>
        </div>

        <div className="vacant__box_info">
          <div className="vacant__box_info-header">
            <h3 className="vacant__job_title">Promotor de Vendas</h3>
            <span className="vacant__localization">Rio de Janeiro</span>
          </div>
          <div className="vacant__description-container">
            <span className="vacant__description-empresa">Empresa</span>
            <p className="vacant__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              distinctio fugiat facere voluptatibus dolore cumque, quia eaque
              sequi laudantium sapiente aspernatur quod dignissimos incidunt
              quam. Et a officia architecto adipisci!
            </p>
            <button className="vacant__box_info-button" type="submit" value="">
              Ver Vaga
            </button>
          </div>
        </div>

        <div className="vacant__box_info">
          <div className="vacant__box_info-header">
            <h3 className="vacant__job_title">Promotor de Vendas</h3>
            <span className="vacant__localization">Rio de Janeiro</span>
          </div>
          <div className="vacant__description-container">
            <span className="vacant__description-empresa">Empresa</span>
            <p className="vacant__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              distinctio fugiat facere voluptatibus dolore cumque, quia eaque
              sequi laudantium sapiente aspernatur quod dignissimos incidunt
              quam. Et a officia architecto adipisci!
            </p>
            <button className="vacant__box_info-button" type="submit">
              Ver Vaga
            </button>
          </div>
        </div>
      </div>

      <button
        className="vacant__button"
        type="button"
        onClick={handleButtonClick}
      >
        Voltar ao Inicio
      </button>
    </div>
  );
}

export default Vacancy;
