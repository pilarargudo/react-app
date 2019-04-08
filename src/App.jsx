
//se está importando la librería React y la clase Component de la cual van a heredar todos los componentes que se creen mediante clases. Éstas requieren del método render() para poder funcionar.
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/theme.css';
import './css/ui-md-alerts.css';

// OPCIÓN A: componente como clase
// className App extends Component {
//   render() {
//     return (
//       <div classNameName="App">
//         <header classNameName="App-header">
//           <img src={logo} classNameName="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             classNameName="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// OPCIÓN B: componente como función
// function App (props)

function HeaderA(props) {
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

function Banner(props){
  return (
    <div className="bannerWrapper">        
        <div className="banner-section mdl-typography--text-center">
          <div className="slogan">¡Viaja!</div>
          <div className="sub-slogan">Descubre lugares maravillosos</div>
          <a href="#travels">
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-upgraded=",MaterialButton,MaterialRipple">
              Ver destinos
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
          </a>  
    </div>
    </div>
  );
}

// TODO envolve travels
function TravelWrapper(props){
  return (
    <section className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell mdl-cell--10-col">              
          </div>
          <div className="mdl-layout-spacer"></div>
        </section>
  );
}

// TODO meter imagen como prop y style
// uso con style={travelStyle}
// pruebo con style={ { backgroundImage: `url({props.image}))` } }
const travelStyle = {
  //backgroundImage: 'url(' + imgUrl + ')',
  //background: 'url("../images/travels/{props.image}") bottom right 15% no-repeat #46B6AC'
  backgroundImage: 'url(' + 'https://source.unsplash.com/1600x900/?nature,water' + ')',
  backgroundPosition: 'bottom right 15%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  //backgroundColor: '#46B6AC',
};

// pruebo con npm install styled-components
// import styled from 'styled-components';
// const Content = styled.div`
//     background-image: url(${props => props.img});
// `;
// <Content img={ImagePath} />

function Travel(props) {
  return (
        <div className="mdl-cell mdl-cell--4-col">
          <div className="travel-card-event mdl-card mdl-shadow--2dp" style={travelStyle}>
            <div className="mdl-card__title mdl-card--expand">
              <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h4>
                    Ahorra {props.discount}%
                  </h4>
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone">
                  <h3>
                    {props.price}€
                  </h3>
                </div>
              </div>
            </div>
            <div className="mdl-card__actions mdl-card--border">
              <a href="/" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-typography--text-center">
                {props.city}
              </a>
            </div>
          </div>
        </div>    
  ); 
}

// main component
function App() {
  return (
    <div> 
      <HeaderA />
      <DrawerA />
      <Banner />
      <section className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell mdl-cell--10-col">
            <section id="travels">
              <div className="mdl-grid">
                <Travel city="México" price="500" discount="30" backgroundImage="../images/travels/tokyo.jpg"/>
                <Travel city="New York" price="700" discount="10"/>
                <Travel city="Madrid" price="150" discount="50"/>
              </div>
            </section>
          </div>
          <div className="mdl-layout-spacer"></div>
        </section>
    </div>
    
  );
}

export default App;
