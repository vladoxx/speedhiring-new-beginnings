import "./Candidatures.css";

function Candidatures() {
  return (
    <div className="candidatures">
      <h3 className="candidatures__tittle">Minhas Candidaturas</h3>

      <div className="candidatures__container">
        <div className="candidatures__box_jobs">
          <h4 className="candidatures__role">Atendente de Caixa</h4>
          <p className="candidatures__city">Rio de Janeiro</p>
          <hr />
          <p className="candidatures__company">Empresa Lorem</p>
          <p className="candidatures__job_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dolores autem, alias vel earum veniam minus quos delectus excepturi.
          </p>

          <div className="candidatures__box_input_job">
            <input
                className="candidatures__button_job"
                type="submit"
                value="Ver vaga"
            />
          </div>
        </div>
        <div className="candidatures__box_jobs">
          <h4 className="candidatures__role">Administrador</h4>
          <p className="candidatures__city">Rio de Janeiro</p>
          <hr />
          <p className="candidatures__company">Empresa Lorem</p>
          <p className="candidatures__job_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            dolores autem, alias vel earum veniam minus quos delectus excepturi.
          </p>

          <div className="candidatures__box_input_job">
            <input
                className="candidatures__button_job"
                type="submit"
                value="Ver vaga"
            />
          </div>
        </div>
      </div>

        <div className="candidatures__box_button_home">
          <button
            className="candidatures__button_home"
            type="button">
              Voltar ao Início
          </button>
        </div>
    </div>
  );
}

export default Candidatures;
