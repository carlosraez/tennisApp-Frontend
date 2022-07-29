import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import './auth.css';
import logoRaquet from '../../assets/raquetsLogo.jpg';
import { en } from '../../i18n/index';
import { checkingRegisterAuthentication } from '../../store/auth/thunk';
import { checkingCredentials } from '../../store/auth/authSlice';
import { InputsForm } from '../../components/inputsForm';

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
   }, [email, name, password, confirmPassword]);

    /**
    * @description - This function is used to time the message of the error
    * received from the server.
    * @returns {void}
    */
   const timeCheckingMessage = () => {
    if (errorMessage) {
      console.log('me ejcuto');
      const msg = ''
      console.log(msg);
      setTimeout(() => {
        dispatch(checkingCredentials(msg));
      }, 3000);
     }
   }

  /**
  * data inputsFormRegister 
  * @type {Array}
  */
  const inputsFormRegister = [
    {
      label: en.inputLabelUserName,
      type: 'text',
      placeholder: en.inputPlaceHolderUserName,
      ariaLabel: 'userName',
      name: 'name',
      value: name,
      errorMessage: en.errorInputName,
      pattern: '^[A-z]{3,16}/*$',
      required: true,
    },
    {
      label: en.inputLabelUser,
      type: 'email',
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
      errorMessage: en.errorInputPassword,
      pattern: '^[0-9]{6,6}/*$',
      name: 'password',
      required: true,
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
      required: true,
    },
  ];

 /**
  * FormValid - checks if the form is valid
  * @returns {void}
  */
 const formValidations = () => {
  const form = inputRef.current
  const inputsInvalid = form.querySelectorAll('input:invalid');
  if (inputsInvalid.length <= 0 && errorMessage === null || errorMessage === '') {
       setFormValid(true);
  }
 }
  
  /**
  * Dispacht Register authentication
  * @param {e} e event to prevent default
  * @returns {void} dispatch checkingLoginAuthentication
  */
  const getFormSubmit = e => {
    e.preventDefault();
    if (formValid) {
     dispatch(checkingRegisterAuthentication(formValues));
     }
  };

  /**
   * InputsForm Login
   * @returns {JSX.Element}
   */
  const getFormInputs = () => {
    return (
      <InputsForm
       inputsForm={inputsFormRegister}  
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
        {en.registerButton}
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
        <Link color="inherit" to="/auth/login">
          {en.haveAccount}
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
           {getFormInputs() }
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


