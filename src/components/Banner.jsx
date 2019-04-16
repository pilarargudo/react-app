import React from 'react';

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

export default Banner;
