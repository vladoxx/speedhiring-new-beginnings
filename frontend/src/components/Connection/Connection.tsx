import Conexao from "../../assets/images/conexao.png";
import Empresas from "../../assets/images/empresas.png";
import Migrantes from "../../assets/images/migrantes.png";

function Connection() {
  return (
    <section>
      <div>
        <img src={Migrantes} alt="" />
        <h4>Migrantes e refugiados</h4>
        <p>
          Os migrantes e refugiados podem contribuir significativamente na
          economia brasileira e em geral.
        </p>
      </div>
      <div>
        <img src={Empresas} alt="" />
        <h4>Empresas parceiras</h4>
        <p>
          Empresas brasileiras de diferentes setores que tem interesse em
          implementar a diversidade e inclusão nas suas equipes
        </p>
      </div>
      <div>
        <img src={Conexao} alt="" />
        <h4>Conexão</h4>
        <p>
          Queremos conectar pessoas em busca de novas oportunidades com empresas
          parceiras, colocando-as no mercado de trabalho brasileiro
        </p>
      </div>
    </section>
  );
}

export default Connection;
