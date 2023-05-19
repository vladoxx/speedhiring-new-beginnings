function PersonalInformation() {
    return (
        <div className="personal-information">
            <div className="personal-information__box-info">
                <h3 className="personal-information__info-tittle">Informações Pessoais</h3>
                <h4 className="personal-information__name">Nome/Sobrenome</h4>
                <input className="personal-information__input???" type=""></input>
                <h4 className="personal-information__about-you-tittle">Sobre Voce</h4>
                <input className="personal-information__input???" type=""></input>

                <h5 className="personal-information__data-info-tittle">Dados Pessoais</h5>
                <p className="personal-information__date-of-birth">Data de Nascimento: 20/02/1980</p>
                <p className="personal-information__nationality">Nacionalidade: Venezuelana</p>
                <p className="personal-information__cpf">CPF:3698542255</p>
                <p className="personal-information__state">Estado Civil: Soltera(0)</p>
                <p className="personal-information__gender">Sua identidade de genero: Mulher</p>
                <p className="personal-information__pronoun">Pronome: Ela/Ele</p>
                <p className="personal-information__sexual-orientation">Orientação Sexual: Heterosexual</p>
                <p className="personal-information__skin-breed-ethnicity">Raçã/Etnia: Parda</p>
                <p className="personal-information__physical-deficiency">Deficiencia: Nenhuma</p>

                <h5 className="personal-information__contact-tittle">Informações de Contato</h5>
                <p className="personal-information__email">E-mail: blavlada@gmail.com</p>
                <p className="personal-information__phone">Celular: (21)336998855</p>

                <h5 className="personal-information__address-tittle">Endereço</h5>
                <p className="personal-information__post-mail">CEP: 227770-352</p>
                <p className="personal-information__street">Rua Emiliano Zapata, 343</p>
                <p className="personal-information__neighborhood">Bairro: Taquara</p>
                <p className="personal-information__city">Cidade: Rio de Janeiro</p>

                <button className="personal-information__edit-button" type="button">Editar dados</button>
            </div>

            <div>
                <h3 className="personal-information__formations-tittle">Formações</h3>
                <h4 className="personal-information__university">Universidad del Zulia</h4>
                <p className="personal-information__career">Engenharia Ambiental</p>
                <p className="personal-information__graduation">Graduação</p>
                <p className="personal-information__country">Venezuela</p>
                <p className="personal-information__?"></p>
                <p className="personal-information__?"></p>
                <p>2004-2010</p>
                <p>Concluído</p>

                <h4>Instituto Universitario de Tecnologia de Maracaibo IUTM</h4>
                <p>Turismo</p>
                <p>Técnico</p>
                <p>Venezuela</p>
                <p>2011-2013</p>
                <p>Em andamento</p>

                <button>Editar dados</button>
            </div>

            <div>
                <h3>Experiencia profissional</h3>
                <h4>Professor de Química</h4>
                <p>Universidad de Los Andes</p>
                <p>Venezuela</p>
                <p>2014-2019</p>
                <p>Responsabilidades</p>
                <input></input>

                <h4>Atendente de Caixa</h4>
                <p>Assai Atacadista</p>
                <p>Brasil</p>
                <p>2020-2021</p>
                <p>Responsabilidades</p>
                <input></input>

                <h4>Serviços Gerais</h4>
                <p>Hotel Hilton</p>
                <p>Brasil</p>
                <p>2021-2023</p>
                <p>Responsabilidades</p>
                <input></input>

                <button>Editar dados</button>
            </div>

            <div>
                <h3>Cursos e Certificações</h3>
                <h4>Geração Crescer</h4>
                <p>Marketing</p>
                <p>Brasil</p>
                <p>01/2023 - 03/2023</p>
                <input></input>
             
                <h3>ONE Oracle Next Education</h3>
                <h4>Programação Full Stack</h4>
                <p>Brasil</p>
                <p>04/2022 - 10/2022</p>
                <input></input>
                
                <h3>Toti</h3>
                <h4>Programação Full Stack</h4>
                <p>Brasil</p>
                <p>06/2020 - 10/2020</p>
                <input></input>

                <button>Editar dados</button>
            </div>

            <div>
                <h3>Idiomas</h3>
                <h4>Espanhol</h4>
                <p>Fluente</p>
                <h4>Português</h4>
                <p>Avançãdo</p>
                <h4>Inglês</h4>
                <p>Básico</p>
                <button>Editar dados</button>
            </div>

            <div>
                <h3>Habilidades</h3>
                <label>*Habilidade</label>
                <input></input>
                <button>+</button>
                <p>HTML</p>
                <button>Voltar ao Início</button>
            </div>
        </div>
    )
}

export default PersonalInformation
