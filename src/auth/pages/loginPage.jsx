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
  
   /**
   * @description - This function is used to handle the input change
   * @returns {void} 
   */
  const handleInputChange = ({ target }) => { 
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  /**
   * @description - This function is used put the focus on the input when the page is loaded and load errors messages
   * @returns {void}
   */
  const handleFocus = () => { 
     setfocused(true)
  }

   useEffect(() => {
   formValidations()
   timeCheckingMessage()
   }, [email, password,]);

   /**
    * @description - This function is used to time the message of the error
    * received from the server.
    * @returns {void}
    */
   const timeCheckingMessage = () => {
      if (errorMessage) {
       const msg = ''
        setTimeout(() => {
          dispatch(checkingCredentials(msg));
        }, 3000);
       }
   }
  
  /**
   * data inputsFormLogin 
   * @type {Array}
   */
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
 
 /**
  * FormValid - checks if the form is valid
  * @returns {void}
  */
 const formValidations = () => {
  const form = inputRef.current
  const inputsInvalid = form.querySelectorAll('input:invalid');
  if (inputsInvalid.length <= 0 && errorMessage === null) {
       setFormValid(true);
  }
 }
  
 /**
  * Dispacht Login authentication
  * @param {e} e event to prevent default
  * @returns {void} dispatch checkingLoginAuthentication
  */
 const getFormSubmit = e => {
  e.preventDefault();
  if (formValid) {
    dispatch(checkingLoginAuthentication(formValues));
  }
};

   /**
   * InputsForm Login
   * @returns {JSX.Element}
   */
  const getFormInputs = () => {
    return (
    <InputsForm 
     inputsFormLogin={inputsFormLogin}  
     handleInputChange={handleInputChange}
     handleFocus={handleFocus}
     focused={focused}
    />)
  };

   /**
   * Button submit
   * @returns {JSX.Element}
   */
  const getLoginButton = () => {
    return (
      <button disabled={!formValid} type="submit" className="w-80 btn btn-lg btn-primary button-Sign">
        {en.titleLogin}
      </button>
    );
  };

  
  /**
   * Link to register page
   * @returns {JSX.Element}
   */
  const getLinkToLogin = () => {
    return (
      <p className="linkGoToResgister">
        <Link color="inherit" to="/auth/register">
          {en.notHaveAccount}
        </Link>
      </p>
    );
  };

  /**
   * Error message if user is not registered or has wrong credentials
   * @returns {JSX.Element}
   */
  const getError = (msg) => {
    return (
      <div>
        <div className="alert alert-danger" role="alert">
           {msg}
        </div>
      </div>
    );
  };

  /**
   * Logo of the application
   * @returns {JSX.Element}
   */
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