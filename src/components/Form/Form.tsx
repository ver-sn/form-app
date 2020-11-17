import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import CheckBox from '../CheckBox';

import { languages } from '../../constants';
import { IFormValues, IField, IOption } from '../interfaces';
import { mailValidation, phoneValidation, nameValidation } from '../../utils/validate';

const Form: React.FC = () => {
  const [values, setValues] = useState<IFormValues[]>([]);
  const [errors, setErrors] = useState<IField[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOption | undefined>();

  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => {
      if (prev.some(i => i?.name === e.target.name)) {
        return [...prev.filter(item => item.name !== e.target.name), {
          name: e.target.name, value: e.target.value, }]
      } return [...prev, { name: e.target.name, value: e.target.value, }]
    })
  }

  const formIsValid = !errors.some(item => item?.error !== '') && values.length === 3
    && selectedOption && isChecked;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__header">
        <h2 className="title">Регистрация</h2>
        <p className="text">У вас уже есть аккаунт? <a href='/' className="link">Войти</a></p>
      </div>
      <div className="form__row">
        <Input
          label="Имя"
          name="name"
          placeholder="Введите Ваше имя"
          validate={nameValidation}
          setFormErrors={setErrors}
          error={errors.find(item => item?.name === 'name')?.error}
          value={values.find(item => item?.name === 'name')?.value}
          onChange={onChange}
        />
      </div>
      <div className="form__row">
        <Input
          label="Email"
          name="email"
          validate={mailValidation}
          placeholder="Введите ваш email"
          setFormErrors={setErrors}
          error={errors.find(item => item?.name === 'email')?.error}
          value={values.find(item => item?.name === 'email')?.value}
          onChange={onChange}
        />
      </div>
      <div className="form__row">
        <Input
          label="Номер телефона"
          name="phone"
          validate={phoneValidation}
          placeholder="Введите ваш номер телефона"
          setFormErrors={setErrors}
          error={errors.find(item => item?.name === 'phone')?.error}
          value={values.find(item => item?.name === 'phone')?.value}
          onChange={onChange}
        />
      </div>
      <div className="form__row">
        <Select
          options={languages}
          label="Язык"
          placeholder="Язык"
          selectedOption={selectedOption?.label}
          selectOption={setSelectedOption}
        />
      </div>
      <div className="form__checkbox">
        <p className="form__text">Принимаю <a className="link" href="/">условия</a> использования</p>
        <CheckBox
          id="accept"
          isChecked={isChecked}
          onChange={onChecked}
        />
      </div>
      <div className="form__row">
        <Button
          name="Зарегестрироваться"
          btnType="submit"
          disabled={!formIsValid}
        />
      </div>
    </form>
  );
};

export default Form;
