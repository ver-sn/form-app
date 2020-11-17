import React from 'react';

import { IInputProps } from '../interfaces';

const Input: React.FC<IInputProps> = ({
  inputType = 'text',
  label,
  placeholder = '',
  name,
  validate,
  setFormErrors,
  error,
  onChange,
  value,
}) => {
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    if (validate && setFormErrors) {
      setFormErrors(prev => {
        if (prev.some(i => i?.name === inputName)) {
          return [...prev.filter(item => item.name !== inputName), {
            name: inputName, error: validate(event.target.value) }]
        } return [...prev, { name: inputName, error: validate(event.target.value), }]
      })
    }
  };

  return (
    <div className="inputField">
      {label && <label className="label">{label}</label>}
      <input
        className="input"
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        name={name}
      />
      <span className="error">{error && error}</span>
    </div>
  );
};

export default Input;
