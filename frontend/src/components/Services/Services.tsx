import Candidato from "../../assets/images/cadastro_candidato.png";
import Empresa from "../../assets/images/cadastro_empresa.png";

function Services() {
  return (
    <section>
      <h3>Cadastros</h3>

      <div>
        <h4>Para empresas</h4>
        <img src={Empresa} alt="" />
      </div>

      <div>
        <h4>Para candidatos</h4>
        <img src={Candidato} alt="" />
      </div>
    </section>
  );
}

export default Services;
