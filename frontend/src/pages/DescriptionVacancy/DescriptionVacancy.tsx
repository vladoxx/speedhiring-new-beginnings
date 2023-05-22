import "./DescriptionVacancy.css"

function DescriptionVacancy() {
  return (
    <div className="vacancy">
      <h3 className="vacancy__tittle">Descrição da Vaga</h3>

      <div className="vacancy__list">
        <ul>
          <li>
            <h4 className="vacancy__tittle_job">Promotor de Vendas</h4>
          </li>
          <li className="vacancy__localization">Rio de Janeiro</li>
          <li className="vacancy__modality">Modalidade: Híbrido</li>
          <li className="vacancy__salary">Sálario: 1250,00</li>
          <li className="vacancy__work_day">Tempo Integral</li>
          <li className="vacancy__company"><strong>Empresa Lorem</strong></li>
          <li className="vacancy__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            aboriosam, quos. Doloribus sit aperiam molestias numquam eaque consequatur,</li>
          <li className="vacancy__email"><strong>Email:</strong> amet@teste.com</li>
        </ul>
      </div>

      <button className="vacancy__button_apply" type="button">Aplicar</button>
      <button className="vacancy__button_home" type="button">Voltar ao Início</button>
    </div>
  )
}

export default DescriptionVacancy
