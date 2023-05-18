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
            </div>
        </div>
    )
}

export default PersonalInformation
