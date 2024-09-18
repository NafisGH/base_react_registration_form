import "./registration_form.css";
import React, { useState } from "react";

function Registration_form() {
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

    if (!form.name.trim()) {
      newErrors.name = "Имя обязательно";
    }

    if (!form.surname.trim()) {
      newErrors.surname = "Фамилия обязательна";
    }

    if (!form.telephone.trim()) {
      newErrors.telephone = "Телефон обязателен";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email обязателен";
    }

    if (!form.password.trim()) {
      newErrors.password = "Пароль обязателен";
    }

    if (!form.passwordRepeat.trim()) {
      newErrors.passwordRepeat = "Повторите пароль обязателен";
    }

    if (form.password !== form.passwordRepeat) {
      newErrors.passwordRepeat = "Пароли не совпадают";
    }
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
        <label>
          <input type="text" name="name" value={form.name} placeholder="Имя" onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          <input type="text" name="surname" value={form.surname} placeholder="Фамилия" onChange={handleChange} />
          {errors.surname && <p className="error">{errors.surname}</p>}
        </label>

        <label>
          <input
            type="number"
            name="telephone"
            value={form.telephone}
            placeholder="Номер телефона"
            onChange={handleChange}
          />
          {errors.telephone && <p className="error">{errors.telephone}</p>}
        </label>

        <label>
          <input type="email" name="email" value={form.email} placeholder="Email" onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          <input type="password" name="password" value={form.password} placeholder="Пароль" onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </label>

        <label>
          <input
            type="password"
            name="passwordRepeat"
            value={form.passwordRepeat}
            placeholder="Повторить пароль"
            onChange={handleChange}
          />
          {errors.passwordRepeat && <p className="error">{errors.passwordRepeat}</p>}
        </label>

        <label className="checkbox-label">
          <input type="checkbox" name="confirmPassword" checked={form.confirmPassword} onChange={handleChange} />
          <span className="checkbox-text">Подтверждаю пароль</span>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </label>

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

export default Registration_form;
