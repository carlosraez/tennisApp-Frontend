import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import './auth.css';
import logoRaquet from '../../assets/raquetsLogo.jpg';
import { en } from '../../i18n/index';
import { checkingLoginAuthentication } from '../../store/auth/thunk';
import { checkingCredentials } from '../../store/auth/authSlice';
import { InputsForm } from '../components/inputsForm';

export const LoginPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    email:'',
    password:'',
  });
  const [focused, setfocused] = useState(false)

  const dispatch = useDispatch();
  const inputRef = useRef();
  
  const { errorMessage } = useSelector(state => state.auth);

  const { email, password } = formValues;

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
   timeCheckingMessage()
   }, [email, password,]);

   const timeCheckingMessage = () => {
      if (errorMessage) {
       const msg = ''
        setTimeout(() => {
          dispatch(checkingCredentials(msg));
        }, 3000);
       }
   }
  
  const inputsFormLogin = [
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
    dispatch(checkingLoginAuthentication(formValues));
  }
};

  const getFormInputs = () => {
    return (
    <InputsForm 
     inputsFormLogin={inputsFormLogin}  
     handleInputChange={handleInputChange}
     handleFocus={handleFocus}
     focused={focused}
    />)
  };

  const getLoginButton = () => {
    return (
      <button disabled={!formValid} type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.titleLogin}
      </button>
    );
  };

  const getLinkToLogin = () => {
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
            {getLinkToLogin()}
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};