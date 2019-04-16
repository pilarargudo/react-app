import React from 'react';

function Footer() {

  return(
    <footer className="mdl-mega-footer">
    <div className="mdl-grid mdl-mega-footer__middle-section">
      <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet">
        <h1 className="mdl-mega-footer__heading mdl-typography--text-uppercase">¿Necesitas ayuda?</h1>
        <ul className="mdl-mega-footer__link-list">
          <li><a href="/">0264 123 4567</a></li>
          <li><a href="/">hola@geekshubstravels.com</a></li>
          <li><a href="/">Lunes a viernes 9:00-19:00</a></li>
          <li><a href="/">Sábados 10:00-15:00</a></li>
        </ul>
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet">
        <h1 className="mdl-mega-footer__heading mdl-typography--text-uppercase">Información</h1>
        <ul className="mdl-mega-footer__link-list">
          <li><a href="/">Quiénes somos</a></li>
          <li><a href="/">Preguntas frecuentes</a></li>
          <li><a href="/">Política de privacidad</a></li>
          <li><a href="/">Condiciones generales</a></li>
          <li><a href="/">Aviso legal</a></li>
          <li><a href="/">Contacto</a></li>
          <li><a href="/">Programa de puntos</a></li>
        </ul>
      </div>
      <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet">
        <h1 className="mdl-mega-footer__heading mdl-typography--text-uppercase">Subscríbete a la newsletter</h1>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="newsletter" />
            <label className="mdl-textfield__label">Email...</label>
          </div>
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
            <i className="material-icons">arrow_forward_ios</i>
          </button>
        </form>
      </div>
    </div>
      <div className="mdl-mega-footer__bottom-section mdl-typography--text-center">
      <p>GeeksHubs Travel 2019 Todos los derechos reservados</p>
    </div>
    </footer>
  );

}

export default Footer;