import React from 'react'
import PropTypes from 'prop-types';
import { en } from '../i18n';

export const InputsForm = ({ inputsForm, focused,handleInputChange, handleFocus }) => {
   
   const getInput = (input) => {
     return (
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
        required={input.required}
       />
     )
   }

   /**
    * @describe input type select
    * @param {array} input data
    * @returns select input
    */
   const getSelectInput = (input) => { 
      return (
      <select pattern={input.pattern} name={input.name}  aria-label={input.ariaLabel} focused={focused.toString()} onBlur={handleFocus} onChange={handleInputChange} className="form-select">
       <option defaultValue>{en.selectInputInfo}</option>
       {input.options.map((option, index) => {
          return (
            <option value={option} key={index}>{option}</option>
          )
       })}
      </select>
      )
   }

    /**
     * @description - Returns the inputs form, and choose if select input or regular input
     * @returns {JSX.Element}
     */
    return inputsForm.map(input => (
        <div key={input.ariaLabel}>
          <label>{input.label}</label>
          {
            input.isSelect ? getSelectInput(input) : getInput(input)
          }
          <span>{input.errorMessage}</span>
        </div>
      ));
}

InputsForm.propTypes = {
  inputsFormLogin: PropTypes.array,
  focused: PropTypes.bool,
  handleInputChange: PropTypes.func,
  handleFocus: PropTypes.func,
};