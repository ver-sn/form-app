export interface IButtonProps {
  btnType?: string;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export interface IInputProps {
  inputType?: 'text' | 'number';
  label?: string;
  placeholder?: string;
  name: string;
  validate?: (value: string) => string | undefined;
  setFormErrors?: React.Dispatch<React.SetStateAction<IField[]>>;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface ICheckBoxProps {
  id: string;
  label?: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IOption {
  id: number;
  value: string | number;
  label: string;
}

export interface ISelectProps {
  options: IOption[];
  label?: string;
  placeholder?: string;
  selectedOption?: string;
  selectOption: React.Dispatch<React.SetStateAction<IOption | undefined>>;
}

export interface IFormValues {
  name?: string;
  value?: string;
}

export interface IField {
  name?: string;
  error?: string;
}