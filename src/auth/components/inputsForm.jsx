import React from 'react'

export const InputsForm = ({ inputsFormLogin, focused,handleInputChange, handleFocus }) => {
    return inputsFormLogin.map(input => (
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
}
