import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';

import logoRaquet from '../../assets/raquetsLogo.jpg';
import googleIcon from '../../assets/googleIcon.png';
import facebookIcon from '../../assets/facebookIcon.jpg';

import { en } from '../../i18n/index';
import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {
  const [emptyValues, setEmtyValues] = useState({
    state: false,
    message: en.errorEmptyInputMessage,
  });

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password, password2 } = formValues;

  const getFormSubmit = e => {
    e.preventDefault();
    console.log('me ejecuto');
    validationEmptyFields();
    console.log(formValues);
  };

  const handleGoogleLogin = () => {
    console.log('me he pulsado google');
  };

  const handleGoogleFacebookLogin = () => {
    console.log('me han pulsado Facebook');
  };

  const validationEmptyFields = () => {
    email === '' || password === ''
      ? setEmtyValues({ state: true, message: en.errorEmptyInputMessage })
      : setEmtyValues({ state: false, message: en.errorEmptyInputMessage });
  };

  console.log(emptyValues);

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
      label: en.passwordCreate,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'userPassword',
      value: password,
      name: 'password',
    },
    {
      label: en.repitePassword,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'userPassword',
      value: password2,
      name: 'password2',
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

  const getLoginButton = () => {
    return (
      <button type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.registerButton}
      </button>
    );
  };

  const getGoogleLogin = () => {
    return (
      <div
        onClick={handleGoogleLogin}
        className="loginGoogle mt-4 border border-primary rounded">
        <img src={googleIcon} width={40} height={40} alt="logo" />
        <span>{en.registerGoogle}</span>
      </div>
    );
  };

  const getFacebookLogin = () => {
    return (
      <div
        onClick={handleGoogleFacebookLogin}
        className="loginGoogle mt-4 border border-primary rounded">
        <img src={facebookIcon} width={45} height={40} alt="logo" />
        <span>{en.registerFacebook}</span>
      </div>
    );
  };

  const getLinkToRegister = () => {
    return (
      <p className="linkGoToResgister">
        <Link color="inherit" to="/auth/login">
          {en.haveAccount}
        </Link>
      </p>
    );
  };

  const getError = () => {
    return (
      <div className="alert alert-danger" role="alert">
        {emptyValues.state && emptyValues.message}
      </div>
    );
  };

  const getLogo = () => {
    return (
      <img
        className="mb-4"
        src={logoRaquet}
        width={250}
        height={200}
        alt="logo"
      />
    );
  };

  return (
    <div className="w-100 m-auto containerLogin">
      <form onSubmit={getFormSubmit}>
        {getLogo()}
        <h1>{en.titleRegister}</h1>
        {emptyValues.state && getError()}
        {getFormInputs()}
        {getLoginButton()}
        <p className="chooseLogin">{en.chooseLogin}</p>
        {getGoogleLogin()}
        {getFacebookLogin()}
        {getLinkToRegister()}
      </form>
    </div>
  );
};
