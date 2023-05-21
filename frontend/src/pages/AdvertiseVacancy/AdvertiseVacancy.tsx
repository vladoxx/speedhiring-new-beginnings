import "./AdvertiseVacancy.css"

function AdvertiseVacancy() {
  return (
    <div className="advertisement">
      <h3 className="advertisement__tittle">Anuncie sua Vaga</h3>
      <form action="">
        <input
         className="advertisement__input" 
         type="text" 
         placeholder="Cargo da Vaga*" 
         required
         />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Nome da Empresa*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Area Profissional*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Nivel Herárquico*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Jornada*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Modelo de trabajo*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Escolaridade*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Tipo de Contrato*" 
        required/>
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Sálario*" 
        required
        />
        <input 
        className="advertisement__input" 
        type="text" 
        placeholder="Descripção da Vaga*" 
        required
        />
        
        <div className="advertisement__button_submit" >
          <input
          className="advertisement__button"
          type="submit"
          value="Cadastrar ou Anunciar?"
          />
        </div>
      </form>
    </div>
  )
}

export default AdvertiseVacancy
