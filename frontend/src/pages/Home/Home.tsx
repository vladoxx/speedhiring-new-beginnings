import Objetivo from "../../assets/images/objetivo1.jpg";
import Conexao from "../../assets/images/conexao.png";
import Empresas from "../../assets/images/empresas.png";
import Migrantes from "../../assets/images/migrantes.png";
import Candidato from "../../assets/images/cadastro_candidato.png";
import Empresa from "../../assets/images/cadastro_empresa.png";

function Home() {
  return (
    <>
      <section className="about">
        <h3 className="about__tittle">Sobre</h3>

        <p className="about__paragraph">
          O nosso projeto é focado em ajudar imigrantes e refugiados a se
          inserirem no mercado de trabalho do país. Sabemos que esse processo
          pode ser difícil e desafiador, e por isso, estamos aqui para auxiliar
          em cada etapa.
        </p>
      </section>

      <section className="objective">
        <h3 className="objective__tittle">Objetivo</h3>

        <p className="objective__paragraph">
          A nosso objetivo é facilitar a procura por emprego para imigrantes e
          refugiados, oferecendo informações, ferramentas e oportunidades que
          permitam a eles se inserirem no mercado de trabalho. Queremos ser um
          guia para imigrantes que buscam uma vida melhor e mais digna em nosso
          país.
        </p>

        <img className="objective__image" src={Objetivo} alt="Imagem Objetivo" />
      </section>

      <section className="connection">
        <div className="connection__immigrant_people">
          <img className="connection__immigrant_logo" src={Migrantes} alt="Logo de Pessoas" />
          <h4 className="connection__immigrant_tittle">Migrantes e refugiados</h4>
          <p className="connection__immigrant_paragraph">
            Os imigrantes e refugiados podem contribuir significativamente na
            economia brasileira e em geral.
          </p>
        </div>
        <div className="connection__companies">
          <img className="connection__companies_logo" src={Empresas} alt="Logo de Empresas" />
          <h4 className="connection__companies_tittle">Empresas parceiras</h4>
          <p className="connection__companies_paragraph">
            Empresas brasileiras de diferentes setores que tem interesse em
            implementar a diversidade e inclusão nas suas equipes
          </p>
        </div>
        <div className="connection__link">
          <img className="connection__link_logo" src={Conexao} alt="Logo de Conexão" />
          <h4 className="connection__link_tittle">Conexão</h4>
          <p className="connection__link_paragraph">
            Queremos conectar pessoas em busca de novas oportunidades com
            empresas parceiras, colocando-as no mercado de trabalho brasileiro
          </p>
        </div>
      </section>

      <section className="services">
        <h3 className="services__tittle">Cadastros</h3>

        <div className="services__companies">
          <h4 className="services__companies_titlle">Para empresas</h4>
          <img className="services__companies_image" src={Empresa} alt="Imagem Cumprimento" />
        </div>

        <div className="services__candidate">
          <h4 className="services__candidate_tittle">Para candidatos</h4>
          <img className="services__candidate_image" src={Candidato} alt="Imagem de Usuário" />
        </div>
      </section>

      <section className="virtues">
        <h3 className="virtues__tittle">Nossos Valores</h3>

        <div className="virtues__container">
          <div className="virtues__inclusion">
            <h4 className="virtues__inclusion_tittle">Inclusão</h4>
            <p className="virtues__inclusion_paragraph">
              Acreditamos na importância de incluir todos os indivíduos na
              sociedade, independentemente de sua origem ou condição social.
            </p>
          </div>
          <div className="virtues__empathy">
            <h4 className="virtues__empathy_tittle">Empatía</h4>
            <p className="virtues__empathy_paragraph">
              Valorizamos a empatia e a compaixão em nossas interações com os
              outros.
            </p>
          </div>
          <div className="virtues__respect">
            <h4 className="virtues__respect_tittle">Respeito</h4>
            <p className="virtues__respect_paragraph">
              Respeitamos a diversidade de opiniões e de culturas, e valorizamos
              a ética e a integridade em nossas relações.
            </p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h3 className="partners_tittle">Empresas parceiras</h3>

        <div className="partners__list">
          <div className="partners__list_1">
            <img className="partners__image1" src="" alt="Logo da Empresa - " />
            <h3 className="partner__companie">Toti</h3>
            <p className="partners__companie_description">
              Startup que forma migrantes e refugiados programação.
            </p>
          </div>
          <div className="partners__list_2">
            <img className="partners__image2" src="" alt="Logo da Empresa - " />
            <h3 className="partner__companie">Usaid</h3>
            <p className="partners__companie_description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam illo itaque excepturi!
            </p>
          </div>
          <div className="partners__list_3">
            <img className="partners__image3" src="" alt="Logo da Empresa - " />
            <h3 className="partner__companie">Pares CaritasRJ</h3>
            <p className="partners__companie_description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h3 className="contact__tittle">Contacto</h3>

        <p className="contact__text">
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