import React, { useState } from 'react';

import { SelectIcon } from '../../assets/icons';
import { ISelectProps, IOption } from '../interfaces';

const Select: React.FC<ISelectProps> = ({
  label,
  options,
  placeholder,
  selectedOption,
  selectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectContentStyle = isOpen ? "select__content" : "select__content hidden";

  const onSelectClickHandler = () => setIsOpen(prev => !prev);
  const onOptionClickHandler = (opt: IOption) => {
    selectOption(opt);
    setIsOpen(false);
  };

  return (
    <div className="selectField">
      {label && <p className="label">{label}</p>}
      <div className="select">
        <div className="select__header" onClick={onSelectClickHandler}>
          {selectedOption
            ? <span className="select__current">{selectedOption}</span>
            : <span className="select__placeholder">{placeholder}</span>
          }
        </div>
        <div className="select__icon">
          <SelectIcon />
        </div>
        <div className={selectContentStyle}>
          {options.map(item => (
            <div key={item.id} className="select__option" onClick={() => onOptionClickHandler(item)}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
