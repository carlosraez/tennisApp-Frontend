import React from 'react'
import PropTypes from 'prop-types';
import { en } from '../i18n';

export const InputsForm = ({ inputsForm, focused,handleInputChange, handleFocus, isUpdate }) => {
   const getInput = (input) => {
     return (
      <input
        disabled={isUpdate && input.name === 'name'} 
        className="form-control"
        name={input.name}
        type={input.type}
        placeholder={input.placeholder}
        aria-label={input.ariaLabel}
        defaultValue={input.value}
        onChange={handleInputChange }
        onBlur={handleFocus}
        focused={focused.input === input.name ?  'true' : 'false'}
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
      <select 
        pattern={input.pattern}
        name={input.name} 
        required={input.required}  
        aria-label={input.ariaLabel} 
        focused={focused.input === input.name ?  'true' : 'false'} 
        onBlur={handleFocus} 
        onChange={handleInputChange}
        className="form-select">
       <option  defaultValue={isUpdate ? input.value : ''}>{isUpdate ? input.value : en.selectInputInfo}</option>
       {input.options.map((option, index) => 
            isUpdate ?
            input.value !== option 
            ? <option key={index} defaultValue={option}>{option}</option>
            : null :
             <option key={index} defaultValue={option}>{option}</option>)}
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
  focused: PropTypes.object,
  handleInputChange: PropTypes.func,
  handleFocus: PropTypes.func,
};
