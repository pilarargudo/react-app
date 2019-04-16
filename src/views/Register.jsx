import React, { Component } from 'react';
import './Register.scss';

//import isEmail from 'validator/lib/isEmail';
//import validator from 'validator';

class Register extends Component {

  state = {
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
    // TODO el input type submit tiene un name?
    errorName: undefined,
    errorSurname: undefined,
    errorEmail: undefined,
    errorPassword: undefined,
    errorPassword2: undefined
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
    if( this.state.password !== this.state.password2){
      this.setState({ errorPassword2: 'las contraseñas no coinciden'});
      console.log('no coinciden');
    } else {
      this.setState({ errorPassword2: undefined});
      console.log(' coinciden');      
    }

  }

  render() {

    // TODO if isValidate
    // apuntes slides
    // const isLoggedIn = props.isLoggedIn;
    // if (isLoggedIn) {
    // return <h1>Registro hecho!</h1>;
    // }

    const {name, surname, email, password, password2, errorName, errorSurname, errorEmail, errorPassword, errorPassword2} = this.state

    return (
      <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-cell mdl-cell--6-col">
          {/* metemos el onSubmit sobre el form */}
          <form className="register" onSubmit={this.handleSubmit}>
            <div className="mdl-card__supporting-text">
              <div className=" mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" name="name" id="name"
                        value={name}
                        onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Name</label>
              </div>
              <div className={ errorName ? 'alert alert-danger': 'hidden'}>{errorName}</div>

              <div className=" mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" name="surname" id="surname"
                         value={surname}
                         onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Surname</label>
              </div>
              <div className={ errorSurname ? 'alert alert-danger': 'hidden'}>{errorSurname}</div>

              <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input className="mdl-textfield__input" name="email" id="email"
                         value={email}
                         onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Email</label>
              </div>
              <div className={ errorEmail ? 'alert alert-danger': 'hidden'}>{errorEmail}</div>
              
              <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input type="password" className="mdl-textfield__input" name="password" id="password"
                         value={password}
                         onChange={this.handleChange}/>
                  <label className="mdl-textfield__label">Password</label>
              </div>
              <div className={ errorPassword ? 'alert alert-danger': 'hidden'}>{errorPassword}</div>

              <div className="mdl-cell mdl-cell--12-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <input type="password" className="mdl-textfield__input" name="password2" id="password2"
                         value={password2}
                         onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlFor="password2">Repeat password</label>
              </div>
              <div className={ errorPassword2 ? 'alert alert-danger': 'hidden' }>{errorPassword2}</div>              
              {/* OPCIÓN B  */}
              {/* <div className={ "alert alert-danger " + (errorPassword2 ? '': 'invisible')}>{errorPassword2}</div> */}
              { /* OPCIÓN C */}
              {/* { errorPassword2 ?  <div className="alert alert-danger">{errorPassword2}</div> : null } */}
              <div className="mdl-card__actions">
                    <div className="mdl-grid">
                        <input type="submit"
                        className="mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                        value="Registrarme" />
                        <div className="mdl-cell mdl-cell--12-col">
                            <a href="/login" className="mdl-color-text--primary">¿Ya estás registrado?</a>
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

export default Register;
