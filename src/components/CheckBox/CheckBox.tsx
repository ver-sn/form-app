import React from 'react';

import { ICheckBoxProps } from '../interfaces';

const CheckBox: React.FC<ICheckBoxProps> = ({ id, label = '', isChecked, onChange }) => {
  return (
    <label className="checkboxField" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkboxField__label" />
      {label && label}
    </label>
  );
};

export default CheckBox;
