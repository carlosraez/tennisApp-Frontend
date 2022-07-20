import React from 'react';
import './loginPage.css';

import logoRaquet from '../../assets/raquetsLogo.jpg';
import { en } from '../../i18n/index';

export const LoginPage = () => {
  const getFormSubmit = e => {
    e.preventDefault();
    console.log('soy el submit');
  };

  const inputsForm = [
    {
      label: en.inputLabelUser,
      type: 'text',
      placeholder: en.inputPlaceHolderMail,
      ariaLabel: 'userName',
      ariaDescribedby: 'user-login',
    },
    {
      label: en.inputLabelPassword,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'userPassword',
      ariaDescribedby: 'user-password',
    },
  ];

  const getFormInputs = () => {
    return inputsForm.map(input => (
      <div key={input.ariaLabel}>
        <label>{input.label}</label>
        <input
          className="form-control"
          type={input.type}
          placeholder={input.placeholder}
          aria-label={input.ariaLabel}
          aria-ariaDescribedby={input.ariaDescribedby}
        />
      </div>
    ));
  };

  const getLoginButton = () => {
    return (
      <button type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.signing}
      </button>
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
        <h1>{en.titleLogin}</h1>
        {getFormInputs()}
        {getLoginButton()}
      </form>
    </div>
  );
};
