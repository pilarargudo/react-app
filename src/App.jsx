
//se está importando la librería React y la clase Component de la cual van a heredar todos los componentes que se creen mediante clases. Éstas requieren del método render() para poder funcionar.
import React, { Component } from 'react';
// BrowserRouter para navegador, para que hagar redireccionamiento por las url de navegador
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import './css/theme.css';
import './css/ui-md-alerts.css';

// components
import Footer from './components/Footer';
import Header from './components/Header';


// importamos el componente que queremos incluir en la ruta
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'


function DrawerA(props) {
  return (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
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
  )  
}

function Navbar(props) {
  return (
    <div className="wrapperNavbar">
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
  )  
}
// TODO ¿se puede? según la doc si, creo que el tema está en el props
function HeaderB() {
  return (
  <header className="mdl-layout__header mdl-layout__header--waterfall">
    <div className="mdl-layout__header-row mdl-layout--large-screen-only">
      <Navbar/>
    </div> 
  </header>
  )  
}

function DrawerB() {
  return (
    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
    <Navbar />      
    </div> 
  )  
}

// main component
function App() {
  return (

    <Router>
    <div>
      <Header />
      <DrawerA />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} exact />
        <Route exact path="/register" component={Register} exact />
      </Switch>

      <Footer/>
    </div>
  </Router>

    
  );
}

export default App;
