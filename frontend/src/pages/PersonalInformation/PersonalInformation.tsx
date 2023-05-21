import "./PersonalInformation.css"

function PersonalInformation() {
    return (

        <div className="personal-information">
            {/* data information */}
            <section className="personal-information__box-data">
                <h3 className="personal-information__info-tittle">Informações Pessoais</h3>
                
                <div className="personal-information__box_name_image">
                    <h4 className="personal-information__name">Nome/Sobrenome</h4>
                    <img className="personal-information__image" alt="Foto do Candidato" / >
                </div>

                <div className="personal-information__box_about_description">
                    <h4 className="personal-information__about-you-tittle">Sobre Voce</h4>
                    <textarea className="personal-information__text-area" placeholder="Nos conta um pouco sobre você..." minLength={500}></textarea>
                </div>

                <div className="personal-information__box_data-info">
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
                </div>

                <div className="personal-information__box_address">
                    <h5 className="personal-information__address-tittle">Endereço</h5>
                    <p className="personal-information__post-mail">CEP: 227770-352</p>
                    <p className="personal-information__street">Rua Emiliano Zapata, 343</p>
                    <p className="personal-information__neighborhood">Bairro: Taquara</p>
                    <p className="personal-information__city">Cidade: Rio de Janeiro</p>
                </div>

                <div>
                    <h5 className="personal-information__contact-tittle">Informações de Contato</h5>
                    <p className="personal-information__email">E-mail: blavlada@gmail.com</p>
                    <p className="personal-information__phone">Celular: (21)336998855</p>
                </div>

                <button className="personal-information__edit-button" type="button">Editar dados</button>
            </section>

            {/* formation */}
            <section className="personal-information__box-formations">
                <h3 className="personal-information__formations-tittle">Formações</h3>
                
                <div className="personal-information__box_info-formations">
                    <h4 className="personal-information__university">Universidad del Zulia</h4>
                    <p className="personal-information__career">Engenharia Ambiental</p>
                    <p className="personal-information__graduation">Graduação</p>
                    <p className="personal-information__formation-country">Venezuela</p>
                    <p className="personal-information__formation-data">2004 - 2010</p>
                    <p className="personal-information__formation-status">Concluido</p>
                </div>

                <div className="personal-information__box_info-formations">
                    <h4 className="personal-information__university">Instituto Universitario de Tecnologia de Maracaibo IUTM</h4>
                    <p className="personal-information__career">Turismo</p>
                    <p className="personal-information__graduation">Técnico</p>
                    <p className="personal-information__formation-country">Venezuela</p>
                    <p className="personal-information__formation-data">2011-2013</p>
                    <p className="personal-information__formation-status">Em andamento</p>
                </div>

                <button className="personal-information__edit-button-formation" type="button">Editar dados</button>
            </section>

            {/* professional experience */}
            <section className="personal-information__box-job-experience">
                <h3 className="personal-information__job-experience-tittle">Experiencia profissional</h3>

                <div className="personal-information__box-experiences">
                    <h4 className="personal-information__job-tittle">Professor de Química</h4>
                    <p className="personal-information__job-experience-institution">Universidad de Los Andes</p>
                    <p className="personal-information__job-country">Venezuela</p>
                    <p className="personal-information__job-data">2014-2019</p>
                    <p className="personal-information__job-responsibilities-description">Responsabilidades</p>
                    <textarea className="personal-information__job-responsibilities-description-textarea" rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>


                <div className="personal-information__box-experiences">
                    <h4 className="personal-information__job-tittle">Atendente de Caixa</h4>
                    <p className="personal-information__job-experience-institution">Assai Atacadista</p>
                    <p className="personal-information__job-country">Brasil</p>
                    <p className="personal-information__job-data">2020-2021</p>
                    <p className="personal-information__job-responsibilities-description">Responsabilidades</p>
                    <textarea className="personal-information__job-responsibilities-description-textarea" rows={4} cols={35} rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>

                <div className="personal-information__box-experiences">
                    <h4 className="personal-information__job-tittle">Serviços Gerais</h4>
                    <p className="personal-information__job-experience-institution">Hotel Hilton</p>
                    <p className="personal-information__job-country">Brasil</p>
                    <p className="personal-information__job-data">2021-2023</p>
                    <p className="personal-information__job-responsibilities-description">Responsabilidades</p>
                    <textarea className="personal-information__job-responsibilities-description-textarea" rows={4} cols={35} rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>

                <button className="personal-information__edi-button-job-experience" type="button">Editar dados</button>
            </section>

            {/* certifications */}
            <section className="personal-information__box-certifications">

                <h3 className="personal-information__certification-tittle">Cursos e Certificações</h3>

                <div className="personal-information__box-course-certification">
                    <h3 className="personal-information__certifications-institution">Geração Crescer</h3>
                    <p className="personal-information__certifications-course">Marketing</p>
                    <p className="personal-information__certifications-country">Brasil</p>
                    <p className="personal-information__certifications-data">01/2023 - 03/2023</p>
                    <textarea className="personal-information__certification-description" name="" id="" rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>

                
                <div className="personal-information__box-course-certification">
                    <h3 className="personal-information__certifications-institution">ONE Oracle Next Education</h3>
                    <p className="personal-information__certifications-course">Programação Full Stack</p>
                    <p className="personal-information__certifications-country">Brasil</p>
                    <p className="personal-information__certifications-data">04/2022 - 10/2022</p>
                    <textarea className="personal-information__certification-description" name="" id="" rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>
                
                <div className="personal-information__box-course-certification">
                    <h3 className="personal-information__certifications-institution">Toti</h3>
                    <p className="personal-information__certifications-course">Programação Full Stack</p>
                    <p className="personal-information__certifications-country">Brasil</p>
                    <p className="personal-information__certifications-data">06/2020 - 10/2020</p>
                    <textarea className="personal-information__certification-description" name="" id="" rows={4} cols={35} placeholder="Descripção"></textarea>
                </div>

                <button className="personal-information__edit-button-certifications" type="button">Editar dados</button>
            </section>

            {/* languages */}
            <section className="personal-information__language">

                <h3 className="personal-information__language-tittle">Idiomas</h3>
                
                <div className="personal-information__box-languages">                    
                    <h4 className="personal-information__language-practiced">Espanhol</h4>
                    <p className="personal-information__language-proficiency">Fluente</p>
                </div>
                
                <div className="personal-information__box-languages">
                    <h4 className="personal-information__language-practiced">Português</h4>
                    <p className="personal-information__language-proficiency">Avançãdo</p>
                </div>
                
                <div className="personal-information__box-languages">
                    <h4 className="personal-information__language-practiced">Inglês</h4>
                    <p className="personal-information__language-proficiency">Básico</p>
                </div>

                <button className="personal-information__edit-language-button" type="button">Editar dados</button>
            </section>

            {/* skills */}
            <section className="personal-information__skills">

                <h3 className="personal-information__skills-tittle">Habilidades</h3>
                
                <label className="personal-information__skills-name">Habilidade</label>
                <input className="personal-information__skill-input" type="text" placeholder="Skill"></input>
                <button className="personal-information__skills-add" type="button">+</button>
                <div className="personal-information__skill">
                    <p className="personal-information__added-skill">HTML</p>
                </div>
                <button className="personal-information__skill-button-home" type="button">Voltar ao Início</button>
            </section>
        </div>
    )
}

export default PersonalInformation
