import "./DescriptionVacancy.css"

function DescriptionVacancy() {
  return (
    <div className="vacancy">
        <h3 className="vacancy__tittle">Descrição da Vaga</h3>
       
        <h4 className="vacancy__tittle_job">Promotor de Vendas</h4>
        <p className="vacancy__localization">Rio de Janeiro</p>
        <p className="vacancy__modality">Modalidade: Híbrido</p>
        <p className="vacancy__salary">Sálario: 1250,00</p>
        <p className="vacancy__work_day">Tempo Integral</p>

        <p className="vacancy__company">Empresa Lorem</p>
        <p className="vacancy__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            aboriosam, quos. Doloribus sit aperiam molestias numquam eaque consequatur,</p>
        <p className="vacancy__email">Email: amet@teste.com</p>

        <button className="vacancy__button_apply" type="button">Aplicar</button>
        <button className="vacancy__button_home" type="button">Voltar ao Início</button>
    </div>
  )
}

export default DescriptionVacancy
