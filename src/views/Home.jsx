import React, { Component } from 'react';

import Banner from '../components/Banner';

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

// pruebo con npm install styled-components
// import styled from 'styled-components';
// const Content = styled.div`
//     background-image: url(${props => props.img});
// `;
// <Content img={ImagePath} />

function Travel(props) {
  const travelStyle = {
    //backgroundImage: 'url(' + imgUrl + ')',
    //background: 'url("../images/travels/{props.image}") bottom right 15% no-repeat #46B6AC'
    // TODO meter aquí el props.bg que hemos visto hoy
    backgroundImage: 'url(' + 'https://source.unsplash.com/1600x900/?nature,water' + ')',
    backgroundPosition: 'bottom right 15%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //backgroundColor: '#46B6AC',
  };
  
  return (
        <div className="mdl-cell mdl-cell--4-col">
          <div className="travel-card-event mdl-card mdl-shadow--2dp" 
               style={travelStyle}>
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

function Home(props){
  return (
    <div>  
      <Banner />     
      <section className="mdl-grid mdl-grid--no-spacing">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-cell mdl-cell--10-col">
            <section id="travels">
              <div className="mdl-grid">
                <Travel city="México" price="500" discount="30" 
                        color="red"                        
                         backgroundImage={"../images/travels/tokyo.jpg"}/>
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

export default Home;