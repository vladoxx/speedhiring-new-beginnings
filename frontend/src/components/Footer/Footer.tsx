import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";
import Logo from "../../assets/images/logo.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__container">
          <img className="footer__container__img" src={Logo} alt="" />
          <h2 className="footer__title">New Beginnings</h2>
        </div>

        <div className="footer__media">
          <img className="footer__media-img" src={Facebook} alt="Facebook" />
          <img className="footer__media-img" src={Twitter} alt="Twitter" />
          <img className="footer__media-img" src={Instagram} alt="Instagram" />
        </div>
      </div>
      <div>
        <p className="footer_paragraph">
          © 2023. Todos direitos reservados a Inclusion Squad. Este material não
          pode ser publicado, transmitido por broadcast, reescrito ou
          redistribuído sem autorização.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
