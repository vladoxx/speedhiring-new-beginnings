function Notification() {
    return (
        <div className="notification">
            <h3 className="notification__tittle">Notificação de Email</h3>
            <p className="notification__message">Mensagens</p>
            <input className="notification__input_checkbox" type="checkbox"></input>
            <p className="notification__alert_on">Receber Notificações</p>
            <input className="notification__input_checkbox" type="checkbox"></input>
            <p className="notification__alert_off">Não desejo receber emails</p>

            <button className="notification__button" type="button">Salvar</button>
        </div>
    )
}

export default Notification
