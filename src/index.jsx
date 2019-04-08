// creamos la variable para poder emplearla en el scope, aunque no la incluyamos todavía.
// más adelante la emplearemos para extender componentes
import React from 'react';

import ReactDOM from 'react-dom';

// componente principal
import App from './App';

// no lo emplearemos de momento
//import * as serviceWorker from './serviceWorker';

// incluimos html en el js, nos lo permite jsx = <app />
// recibe como primer parámetro el componente a renderizar y como segundo el elemento del DOM donde el componente va ser renderizado
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// no lo emplearemos de momento
//serviceWorker.unregister();

