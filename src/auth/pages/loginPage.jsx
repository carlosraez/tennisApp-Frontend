import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './auth.css';

import logoRaquet from '../../assets/raquetsLogo.jpg';
import googleIcon from '../../assets/googleIcon.png';
import facebookIcon from '../../assets/facebookIcon.jpg';

import { en } from '../../i18n/index';
import { checkingLoginAuthentication, checkingGoogleAuthentication } from '../../store/auth/thunk';

export const LoginPage = () => {
  const [emptyValues, setEmtyValues] = useState({
    state: false,
    message: en.errorEmptyInputMessage,
  });

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;
  const { errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const getFormSubmit = e => {
    e.preventDefault();
    validationEmptyFields();
    dispatch(checkingLoginAuthentication(formValues));
  };

  const handleGoogleLogin = () => {
    console.log('me he pulsado google');
    dispatch(checkingGoogleAuthentication());
  };

  const handleGoogleFacebookLogin = () => {
    console.log('me han pulsado Facebook');
  };

  const validationEmptyFields = () => {
    email === '' || password === ''
      ? setEmtyValues({ state: true, message: en.errorEmptyInputMessage })
      : setEmtyValues({ state: false, message: en.errorEmptyInputMessage });
  };

  const inputsForm = [
    {
      label: en.inputLabelUser,
      type: 'email',
      placeholder: en.inputPlaceHolderMail,
      ariaLabel: 'userEmail',
      name: 'email',
      value: email,
    },
    {
      label: en.inputLabelPassword,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'userPassword',
      value: password,
      name: 'password',
    },
  ];

  const getFormInputs = () => {
    return inputsForm.map(input => (
      <div key={input.ariaLabel}>
        <label>{input.label}</label>
        <input
          className="form-control"
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          aria-label={input.ariaLabel}
          value={input.value}
          onChange={handleInputChange}
        />
      </div>
    ));
  };

  const getGoogleLogin = () => {
    return (
      <div
        onClick={handleGoogleLogin}
        className="loginGoogle mt-4 border border-primary rounded">
        <img src={googleIcon} width={40} height={40} alt="logo" />
        <span>{en.loginButtonGoogle}</span>
      </div>
    );
  };

  const getFacebookLogin = () => {
    return (
      <div
        onClick={handleGoogleFacebookLogin}
        className="loginGoogle mt-4 border border-primary rounded">
        <img src={facebookIcon} width={45} height={40} alt="logo" />
        <span>{en.loginButtonFacebook}</span>
      </div>
    );
  };

  const getLoginButton = () => {
    return (
      <button type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.signing}
      </button>
    );
  };

  const getLinkToRegister = () => {
    return (
      <p className="linkGoToResgister">
        <Link color="inherit" to="/auth/register">
          {en.notHaveAccount}
        </Link>
      </p>
    );
  };
  
  const getError = (msg) => {
    return (
      <div className="alert alert-danger" role="alert">
        {msg}
      </div>
    );
  };

  const getLogo = () => {
    return (
      <img
        className="mb-4"
        src={logoRaquet}
        width={250}
        height={250}
        alt="logo"
      />
    );
  };

  return (
    <div className="w-100 m-auto containerLogin">
      <form onSubmit={getFormSubmit}>
      <div className='container'>
          <div className='row'> 
          <div className='col-xs-12 col-md-6'>
        {getLogo()}
        </div>
        <div className='col-xs-12 col-md-6'>
        <h1>{en.titleLogin}</h1>
        {emptyValues.state && getError(emptyValues.message) || errorMessage && getError(errorMessage)}
        {getFormInputs()}
        {getLoginButton()}
        <p className="chooseLogin">{en.chooseLogin}</p>
        {getGoogleLogin()}
        {getFacebookLogin()}
        {getLinkToRegister()}
         </div>
        </div>
        </div>
      </form>
    </div>
  );
};
