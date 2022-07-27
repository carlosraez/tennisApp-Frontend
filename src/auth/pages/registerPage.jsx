import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './auth.css';

import logoRaquet from '../../assets/raquetsLogo.jpg';

import { en } from '../../i18n/index';
import { checkingRegisterAuthentication } from '../../store/auth/thunk';

export const RegisterPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  });
  const [focused, setfocused] = useState(false)

  const dispatch = useDispatch();
  const inputRef = useRef();
  
  const { errorMessage } = useSelector(state => state.auth);

  const {name, email, password, confirmPassword } = formValues;

  const handleInputChange = ({ target }) => { 
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleFocus = () => { 
     setfocused(true)
  }

   useEffect(() => {
   formValidations()
   }, [email, name, password, confirmPassword]);

  const inputsForm = [
    {
      label: en.inputLabelUserName,
      type: 'text',
      required: true,
      placeholder: en.inputPlaceHolderUserName,
      ariaLabel: 'userName',
      name: 'name',
      value: name,
      errorMessage: en.errorInputName,
      required: true,
      pattern: '^[a-zA-Z\-]{3,15}',
    },
    {
      label: en.inputLabelUser,
      type: 'email',
      required: true,
      placeholder: en.inputPlaceHolderMail,
      ariaLabel: 'userEmail',
      name: 'email',
      value: email,
      errorMessage: en.errorInputEmail,
      required: true,
    },
    {
      label: en.passwordCreate,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'userPassword',
      value: password,
      required: true,
      errorMessage: en.errorInputPassword,
      pattern: '^[0-9]{3,6}/*$',
      name: 'password',
    },
    {
      label: en.repitePassword,
      type: 'password',
      placeholder: en.inputPlaceHolderPasswrod,
      ariaLabel: 'confirmPassword',
      value: confirmPassword,
      errorMessage: en.errorInputConfirmPassword,
      pattern: password,
      name: 'confirmPassword',
    },
  ];
 
 const formValidations = () => {
  const form = inputRef.current
  const inputsInvalid = form.querySelectorAll('input:invalid');
  if (inputsInvalid.length <= 0 && errorMessage === null) {
       setFormValid(true);
  }
 }
  
  const getFormSubmit = e => {
    e.preventDefault();
    if (formValid) {
     dispatch(checkingRegisterAuthentication(formValues));
     }
  };

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
          onChange={handleInputChange }
          onBlur={handleFocus}
          focused={focused.toString()}
          pattern={input.pattern}
          required
        />
        <span>{input.errorMessage}</span>
      </div>
    ));
  };

  const getLoginButton = () => {
    return (
      <button disabled={!formValid} type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.registerButton}
      </button>
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

  const getError = (msg) => {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
           {msg}
        </div>
      </div>
    );
  };

  const getLogo = () => {
    return (
      <img
        className="mb-4"
        src={logoRaquet}
        width={200}
        height={200}
        alt="logo"
      />
    );
  };
  
  return (
    <div className="w-100 m-auto containerLogin">
      <form ref={inputRef} onSubmit={getFormSubmit}>
        <div className='container'>
          <div className='row'> 
          <div className='col-xs-100 col-md-6'>
           {errorMessage && getError(errorMessage)}
           {getFormInputs()}
           {getLoginButton()}
          </div>
          <div className='col-xs-100 col-md-6'>
            <h1>{en.titleRegister}</h1>
            {getLogo()}
            <p className="chooseLogin">{en.chooseLogin}</p>
            {getLinkToRegister()}
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};


