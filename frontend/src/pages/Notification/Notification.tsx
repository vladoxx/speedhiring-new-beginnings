function Notification() {
  return (
    <div className="notification">
      <h3 className="notification__tittle">Notificação de e-mail</h3>
      <span className="notification__message">Mensagens</span>
      <form action="">
        <label className="notification__alert_on" htmlFor="">
          <input className="notification__input_checkbox" type="checkbox" />
          Receber Notificações
        </label>
        <label className="notification__alert_off" htmlFor="">
          <input className="notification__input_checkbox" type="checkbox" />
          Não desejo receber e-mails
        </label>
        <input className="notification__button" type="submit" value="Salvar" />
      </form>
    </div>
  );
}

export default Notification;
