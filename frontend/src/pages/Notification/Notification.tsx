import "./Notification.css";

function Notification() {
  return (
    <div className="notification">
      <h3 className="notification__title">Notificação de e-mail</h3>

      <div>
        <span className="notification__message">Mensagens</span>

        <form className="notification__form" action="">
          <label className="notification__alert_on">
            <input className="notification__input_checkbox" type="checkbox" />
            Receber Notificações
          </label>
          <label className="notification__alert_off">
            <input className="notification__input_checkbox" type="checkbox" />
            Não desejo receber e-mails
          </label>
          <div className="formation__form__button">
            <button className="formation__btn save_button" type="submit">
              Salvar
            </button>
            <button
              className="formation__btn certifications__edit_button"
              type="submit"
            >
              Editar
            </button>
            <button
              className="formation__btn certifications__delete_button"
              type="submit"
            >
              Deletar
            </button>

            <button className="formation__btn certifications__cancel_button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Notification;
