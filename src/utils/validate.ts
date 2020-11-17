const mailValidation = (email: string) => {
  if (email) {
    const reg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return reg.test(String(email).toLowerCase()) ? '' : '* Введите корректный email';
  }
  return 'Поле обязательно для заполнения';
};

const phoneValidation = (phone: any) => {
  if (phone) {
    const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return reg.test(phone) ? '' : '* Введите корректный номер';
  }

  return '';
};

const nameValidation = (name: string) => {
  if (name) {
    const reg = /^[A-Za-zА-Яа-яЁё_\-_ ]+$/;
    return reg.test(name) ? '' : '* Введите корректное имя';
  }
  return '';
};

export {
  mailValidation,
  phoneValidation,
  nameValidation,
};