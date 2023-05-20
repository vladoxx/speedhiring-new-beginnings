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
            dolores autem, alias vel earum veniam minus quos delectus excepturi
            obcaecati eos nesciunt deserunt, in dicta consequatur repellat
            corporis eaque corrupti.
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
            dolores autem, alias vel earum veniam minus quos delectus excepturi
            obcaecati eos nesciunt deserunt, in dicta consequatur repellat
            corporis eaque corrupti.
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

        <div className="candidatures__box_input_home">
          <input
            className="candidatures__button_home"
            type="submit"
            value="Voltar ao Início"
      />
        </div>
    </div>
  );
}

export default Candidatures;
