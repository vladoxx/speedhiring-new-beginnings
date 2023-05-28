import Objetivo from "../../assets/images/objetivo1.jpg";
import Conexao from "../../assets/images/conexao.png";
import Empresas from "../../assets/images/empresas.png";
import Migrantes from "../../assets/images/migrantes.png";
import Usaid from "../../assets/images/New-USAID-logo.jpg";
import Toti from "../../assets/images/icon_logo_toti.png";
import Caritas from "../../assets/images/pares_caritas.jpg";
import CadastroUser from "../../assets/images/candidata.png";
import Recrutadores from "../../assets/images/trabajadores.png";

import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


function Home() {

  const goToTheTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <>
      <section className="about">
        <div className="about__content">
          <h3 className="about__title">Sobre</h3>
          <p className="about__paragraph">
            O nosso projeto é focado em ajudar imigrantes e refugiados a se
            inserirem no mercado de trabalho do país. Sabemos que esse processo
            pode ser difícil e desafiador, e por isso, estamos aqui para
            auxiliar em cada etapa.
          </p>
        </div>
      </section>

      <section className="objective">
        <div className="objective__content">
          <h3 className="objective__title">Objetivo</h3>
          <p className="about__paragraph">
            A nosso objetivo é facilitar a procura por emprego para imigrantes e
            refugiados, oferecendo informações, ferramentas e oportunidades que
            permitam a eles se inserirem no mercado de trabalho. Queremos ser um
            guia para imigrantes que buscam uma vida melhor e mais digna em
            nosso país.
          </p>
          <img
            className="objective__image"
            src={Objetivo}
            alt="Imagem Objetivo"
          />
        </div>
      </section>

      <section className="connection">
        <div className="connection__content">
          <div className="connection__container">
            <img
              className="connection__immigrant_logo"
              src={Migrantes}
              alt="Logo de Pessoas"
            />
            <h4 className="connection__immigrant__title">
              Migrantes e refugiados
            </h4>
            <p className="connection__immigrant_paragraph">
              Os imigrantes e refugiados podem contribuir significativamente na
              economia brasileira e em geral.
            </p>
          </div>
          <div className="connection__container">
            <img
              className="connection__companies_logo"
              src={Empresas}
              alt="Logo de Empresas"
            />
            <h4 className="connection__companies__title">Empresas parceiras</h4>
            <p className="connection__companies_paragraph">
              Empresas brasileiras de diferentes setores que tem interesse em
              implementar a diversidade e inclusão nas suas equipes.
            </p>
          </div>
          <div className="connection__container">
            <img
              className="connection__link_logo"
              src={Conexao}
              alt="Logo de Conexão"
            />
            <h4 className="connection__link__title">Conexão</h4>
            <p className="connection__link_paragraph">
              Queremos conectar pessoas em busca de novas oportunidades com
              empresas parceiras, colocando-as no mercado de trabalho
              brasileiro.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__content">
          <h3 className="services__title">Cadastros</h3>
          <div className="services__container">
            <Link to="/register-company">
              <div className="services__companies">
                <h4 className="services__companies_title">Para empresas</h4>
                <img
                  className="services__companies_image"
                  src={Recrutadores}
                  alt="Imagem Cumprimento"
                />
              </div>
            </Link>
            <div className="services__candidate">
              <Link to={"/register-user"}>
                <h4 className="services__candidate_title">Para candidatos</h4>
                <img
                  className="services__candidate_image"
                  src={CadastroUser}
                  alt="Imagem de Usuário"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="virtues">
        <h3 className="virtues__title">Nossos Valores</h3>

        <div className="virtues__container">
          <div className="virtues__inclusion">
            <h4 className="virtues__inclusion_title">Inclusão</h4>
            <p className="virtues__inclusion_paragraph">
              Acreditamos na importância de incluir todos os indivíduos na
              sociedade, independentemente de sua origem ou condição social.
            </p>
          </div>

          <div className="virtues__empathy">
            <h4 className="virtues__empathy__title">Empatía</h4>
            <p className="virtues__empathy_paragraph">
              Valorizamos a empatia e a compaixão em nossas interações com os
              outros.
            </p>
          </div>

          <div className="virtues__respect">
            <h4 className="virtues__respect__title">Respeito</h4>
            <p className="virtues__respect_paragraph">
              Respeitamos a diversidade de opiniões e de culturas, e valorizamos
              a ética e a integridade em nossas relações.
            </p>
          </div>
        </div>
      </section>

      <section className="partners">
        <h3 className="partners__title">Empresas parceiras</h3>

        <div className="partners__list">
          <div className="partners__list_container">
            <img
              className="partners__image"
              src={Toti}
              alt="Logo da Empresa - "
            />
            <h3 className="partner__companie">Toti</h3>
            <p className="partners__companie_description">
              Startup que forma migrantes e refugiados em programação no Brasil.
            </p>
          </div>

          <div className="partners__list_container">
            <img
              className="partners__image"
              src={Usaid}
              alt="Logo da Empresa - "
            />
            <h3 className="partner__companie">Usaid</h3>
            <p className="partners__companie_description">
              Agência mundial de desenvolvimento internacional, Usaid.
            </p>
          </div>

          <div className="partners__list_container">
            <img
              className="partners__image"
              src={Caritas}
              alt="Logo da Empresa - "
            />
            <h3 className="partner__companie">Pares CaritasRJ</h3>
            <p className="partners__companie_description">
              Primeiro trabalho sistematizado de atendimento a refugiados no
              Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__content">
          <h3 className="contact__title">Contato</h3>
          <p className="contact__text">
            Se você é um imigrante em busca de emprego ou deseja saber mais
            sobre nossos serviços, entre em contato conosco através do telefone
            (xx) xxxxx-xxxx ou pelo email contato@nomedaempresa.com. Teremos o
            maior prazer em ajudá-lo em sua busca por uma vida melhor em nosso
            país.
          </p>
        </div>
      </section>

      <Button className="home__return_button"  text="Voltar ao Topo" onClick={goToTheTop} />
    </>
  );
}

export default Home;
