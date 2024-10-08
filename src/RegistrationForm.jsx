import "./Registration_form.css";
import React, { useState } from "react";
import InputField from "./inputField";
import CheckboxField from "./CheckboxField";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    password: "",
    passwordRepeat: "",
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Имя обязательно";
    if (!form.surname.trim()) newErrors.surname = "Фамилия обязательна";
    if (!form.telephone.trim()) newErrors.telephone = "Телефон обязателен";
    if (!form.email.trim()) newErrors.email = "Email обязателен";
    if (!form.password.trim()) newErrors.password = "Пароль обязателен";
    if (!form.passwordRepeat.trim()) newErrors.passwordRepeat = "Повторите пароль обязателен";
    if (form.password !== form.passwordRepeat) newErrors.passwordRepeat = "Пароли не совпадают";
    return newErrors;
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(validationErrors)
      return;
    } else {
      alert(
        `Имя: ${form.name}\nФамилия: ${form.surname}\nТелефон: ${form.telephone}\nEmail: ${form.email}\nPassword: ${form.password}\nPasswordRepeat: ${form.passwordRepeat}\nConfirmPassword: ${form.confirmPassword}`
      );
    }
    setForm({
      name: "",
      surname: "",
      telephone: "",
      email: "",
      password: "",
      passwordRepeat: "",
      confirmPassword: false,
    });

    setErrors({});
    
  }

  return (
    <div className="container-form">
      <h2>Создание аккаунта</h2>
      <p>Введите свои данные, чтобы создать аккаунт в сервисе</p>
      <form className="form">
      <InputField name="name" type="text" placeholder="Имя" value={form.name} onChange={handleChange} error={errors.name} />
      <InputField name="surname" type="text" placeholder="Фамилия" value={form.surname} onChange={handleChange} error={errors.surname} />
      <InputField name="telephone" type="number" placeholder="Номер телефона" value={form.telephone} onChange={handleChange} error={errors.telephone} />
      <InputField name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />    
      <InputField name="password" type="password" placeholder="Пароль" value={form.password} onChange={handleChange} error={errors.password} />
      <InputField name="passwordRepeat" type="password" placeholder="Повторить пароль" value={form.passwordRepeat} onChange={handleChange} error={errors.passwordRepeat} />

      <CheckboxField type="checkbox" name="confirmPassword" checked={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword}/>


        <button type="submit" className="button" onClick={handleSubmit}>
          Продолжить
        </button>
      </form>
      <p>
        Уже есть аккаунт ? <a href="#">Войти</a>
      </p>
    </div>
  );
}

export default RegistrationForm;
