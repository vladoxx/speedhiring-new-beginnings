import Objetivo from "../../assets/images/objetivo1.jpg";
import Conexao from "../../assets/images/conexao.png";
import Empresas from "../../assets/images/empresas.png";
import Migrantes from "../../assets/images/migrantes.png";
import Candidato from "../../assets/images/cadastro_candidato.png";
import Empresa from "../../assets/images/cadastro_empresa.png";

function Home() {
  return (
    <>
      <section>
        <h3>Sobre</h3>

        <p>
          O nosso projeto é focado em ajudar imigrantes e refugiados a se
          inserirem no mercado de trabalho do país. Sabemos que esse processo
          pode ser difícil e desafiador, e por isso, estamos aqui para auxiliar
          em cada etapa.
        </p>
      </section>

      <section>
        <h3>Objetivo</h3>

        <p>
          A nosso objetivo é facilitar a procura por emprego para imigrantes e
          refugiados, oferecendo informações, ferramentas e oportunidades que
          permitam a eles se inserirem no mercado de trabalho. Queremos ser um
          guia para imigrantes que buscam uma vida melhor e mais digna em nosso
          país.
        </p>

        <img src={Objetivo} alt="Imagem Objetivo" />
      </section>

      <section>
        <div>
          <img src={Migrantes} alt="" />
          <h4>Migrantes e refugiados</h4>
          <p>
            Os imigrantes e refugiados podem contribuir significativamente na
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
            Queremos conectar pessoas em busca de novas oportunidades com
            empresas parceiras, colocando-as no mercado de trabalho brasileiro
          </p>
        </div>
      </section>

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

      <section>
        <h3>Nossos Valores</h3>

        <div>
          <div>
            <h4>Inclusão</h4>
            <p>
              Acreditamos na importância de incluir todos os indivíduos na
              sociedade, independentemente de sua origem ou condição social.
            </p>
          </div>
          <div>
            <h4>Empatía</h4>
            <p>
              Valorizamos a empatia e a compaixão em nossas interações com os
              outros.
            </p>
          </div>
          <div>
            <h4>Respeito</h4>
            <p>
              Respeitamos a diversidade de opiniões e de culturas, e valorizamos
              a ética e a integridade em nossas relações.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>Empresas parceiras</h3>

        <div>
          <div>Toti</div>
          <div>USAID</div>
          <div>Pares Cáritas Rj</div>
        </div>
      </section>

      <section>
        <h3>Contacto</h3>

        <p>
          Se você é um imigrante em busca de emprego ou deseja saber mais sobre
          nossos serviços, entre em contato conosco através do telefone (xx)
          xxxxx-xxxx ou pelo email contato@nomedaempresa.com. Teremos o maior
          prazer em ajudá-lo em sua busca por uma vida melhor em nosso país.
        </p>
      </section>
    </>
  );
}

export default Home;
