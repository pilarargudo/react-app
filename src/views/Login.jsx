import React, { Component } from 'react';
import './Login.scss';

//import isEmail from 'validator/lib/isEmail';
//import validator from 'validator';

class Login extends Component {

  state = {
    name: '',
    password: '',
    errorName: undefined,
    errorPassword: undefined,
  }
  handleChange = (event) => {
    this.setState( {
      [event.target.name]: event.target.value
      // TODO pista del código de Juan:[event.target.name]: event.target.value.trim()
    }, () =>  {
      console.log( this.state )
      //validamos ante cualquier cambio, pero lo tenemos que añadir dentro del callback
      this.validate();

    })
   
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO validar que no hay mensajes de error y que los campos no están vacíos al enviar
  }

  validate = () => {
    console.log('hola, estamos validando!');
    // if( this.status.name === null){
    //   console.log('campo vacío');
    // }
  }

  render() {

    // TODO if isValidate
    // apuntes slides
    // const isLoggedIn = props.isLoggedIn;
    // if (isLoggedIn) {
    // return <h1>Registro hecho!</h1>;
    // }

    const {name, password, errorName, errorPassword} = this.state

    return (
      <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-cell mdl-cell--6-col">
          {/* metemos el onSubmit sobre el form */}
          <form className="login" onSubmit={this.handleSubmit}>          
            <div className="mdl-card__supporting-text">
              <div className=" mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" name="name" id="name"
                        value={name}
                        onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Name</label>                  
              </div>
              <div className={ errorName ? 'alert alert-danger': 'hidden'}>{errorName}</div>

              <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input type="password" className="mdl-textfield__input" name="password" id="password"
                         value={password}
                         onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Password</label>
              </div>
              <div className={ errorPassword ? 'alert alert-danger': 'hidden'}>{errorPassword}</div>

              <div className="mdl-card__actions">
                <div className="mdl-grid">
                    <button type="submit"
                    className="mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                      Entrar
                    </button>
                    <div className="mdl-cell mdl-cell--6-col">
                      <a href="/register" className="mdl-color-text--primary">¡Registrarme!</a>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-typography--text-right">
                      <a href="/recovery" className="mdl-color-text--primary">¿Has olvidado tu contraseña?</a>
                    </div>
                </div>
              </div>
            </div>
         </form>         
        </div>
        <div className="mdl-layout-spacer"></div>
      </div>
    )
  }
}

export default Login;
