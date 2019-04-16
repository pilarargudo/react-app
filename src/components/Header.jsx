//se está importando la librería React y la clase Component de la cual van a heredar todos los componentes que se creen mediante clases. Éstas requieren del método render() para poder funcionar.
import React from 'react';

// BrowserRouter para navegador, para que hagar redireccionamiento por las url de navegador
// TODO para usar navlink necesitamos integrar el route
import { NavLink } from 'react-router-dom';

import logo from '../logo.svg';
import '../css/theme.css';
import '../css/ui-md-alerts.css';

// class Header extends React.Component {
//   render() {
//     return (
//     )
//   }
// }

// OPCIÓN B: componente como función
function Header(props) {
  return (
    <header className="mdl-layout__header mdl-layout__header--waterfall">
    <div className="mdl-layout__header-row mdl-layout--large-screen-only">
      <div className="mdl-cell mdl-cell--2-col">
        <img alt="logo" title="Logo GeeksHubs travel" src={logo} />            
        <span className="mdl-layout-title">
          <a title="Home" href="/">company</a>
        </span>
      </div>
      <div className="mdl-cell mdl-cell--7-col">
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#travels">Destinos</a>
          <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#who">Quiénes somos</a>
          <a className="mdl-navigation__link mdl-typography--text-uppercase" href="#contact">Dónde estamos</a>

          {/* TODO hash */}
          <NavLink to="#travels" 
                 className="mdl-navigation__link mdl-typography--text-uppercase"
                 activeClassName="selected">
                 Destinos</NavLink>
        </nav>
      </div>
      <div className="mdl-cell mdl-cell--3-col">
        <div className="mdl-navigation social-links">
          <a className="mdl-navigation__link" href="/"><i className="fab fa-twitter-square"></i></a>
          <a className="mdl-navigation__link" href="/"><i className="fab fa-whatsapp-square"></i></a>
          <a className="mdl-navigation__link" href="/"><i className="fab fa-twitter-square"></i></a>
          <a className="mdl-navigation__link" href="/"><i className="fab fa-instagram"></i></a>
          <a className="mdl-navigation__link" href="/"><i className="fab fa-linkedin"></i></a>
          <a className="mdl-navigation__link" href="/"><i className="fab fa-youtube-square"></i></a>
          <div className="mdl-navigation__link user-links">              
            <span>user</span>
            <div id="tt3" className="icon material-icons">person</div>
            <div className="mdl-tooltip">Accede como usuario</div>
          </div>             
          <button className="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect">
              <li className="mdl-menu__item"><a href="profile">Modificar a mi perfil</a></li>
              <li className="mdl-menu__item"><a href="logout">Salir</a></li>
              <li className="mdl-menu__item"><a href="login">Identificarme</a></li>
              <li className="mdl-menu__item"><a href="register">Registrarme</a></li>               
          </ul>
      </div>
      </div>
    </div> 
  </header>
  )  
}

export default Header;
