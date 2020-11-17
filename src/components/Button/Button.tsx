import React from 'react';

import { IButtonProps } from '../interfaces';

const Button: React.FC<IButtonProps> = ({
  btnType = 'button',
  name = '',
  onClick,
  disabled = false,
}) => {
  if (btnType === 'submit') return (
    <button className="button" type="submit" onClick={onClick} disabled={disabled}>
      {name && <span>{name}</span>}
    </button>
  );

  return (
    <button className="button" type="button" onClick={onClick} disabled={disabled}>
      {name && <span>{name}</span>}
    </button>
  );
};

export default Button;
