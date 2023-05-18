function Candidatures() {
    return (
        <div className="candidatures">
            <h3 className="candidatures__tittle">Minhas Candidaturas</h3>
            <div className="candidatures__box_container">
                <h4 className="candidatures__role">Atendente de Caixa</h4>
                <p className="candidatures__city">Rio de Janeiro</p>
                <p className="candidatures__company">Empresa Lorem</p>
                <p className="candidatures__job_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam dolores autem, alias vel earum veniam minus quos delectus
                    excepturi obcaecati eos nesciunt deserunt, in dicta consequatur
                    repellat corporis eaque corrupti.</p>
                <button className="candidatures__button_job" type="button">Ver vaga</button>
            </div>

            <button className="candidatures__button_home" type="button">Voltar ao Início</button>
        </div>
    )
}

export default Candidatures
