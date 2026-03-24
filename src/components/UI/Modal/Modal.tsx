import ButtonForm from "../ButtonForm/ButtonForm";
import cl from "./Modal.module.scss";
import { useState } from "react";
import {
  registrationUser,
  loginUser,
} from "../../../store/slices/userSlice.ts";
import { ModalProps } from "./modal.types";
import { useAppDispatch } from "@/store/store.ts";

const Modal: React.FC<ModalProps> = ({ isVisible, closeModal }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<boolean>(true);

  function handleRegistration() {
    dispatch(registrationUser({ email, password, name }));
    closeModal();
  }

  function handleLogin() {
    dispatch(loginUser({ email, password }));
    closeModal();
  }

  if (!isVisible) return null;

  return (
    <div className={cl.form} onClick={() => closeModal()}>
      <div className={cl.formContainer} onClick={(e) => e.stopPropagation()}>
        <div className={cl.formWrapper}>
          <div
            className={`${cl.formItem} ${cl.formRegistration} ${active ? cl.active : ""}`}
          >
            <h2>Создать аккаунт</h2>
            <div className={cl.formContent}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="ФИО"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
              />
              <ButtonForm className={cl.btnForm} onClick={handleRegistration}>
                Зарегистрироваться
              </ButtonForm>
            </div>
          </div>
          <div
            className={`${cl.formItem} ${cl.formLogin} ${active ? "" : cl.active}`}
          >
            <h2>Войти в аккаунт</h2>
            <div className={cl.formContent}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
              />
              <ButtonForm className={cl.btnForm} onClick={handleLogin}>
                Войти
              </ButtonForm>
            </div>
          </div>
        </div>
        <div className={cl.formBanner}>
          <div
            className={`${cl.formBannerItem} ${cl.formBannerLogin} ${active ? "" : cl.active}`}
          >
            <div className={cl.formBannerTitle}>Привет, Друг !</div>
            <div className={cl.formBannerText}>
              Введите свои личные данные, чтобы использовать все функции сайта
            </div>
            <ButtonForm
              onClick={() => setActive(!active)}
              className={`${cl.btnForm} ${cl.btnFormAnimate}`}
            >
              Зарегестрироваться
            </ButtonForm>
          </div>
          <div
            className={`${cl.formBannerItem} ${cl.formBannerRegistration} ${active ? cl.active : ""}`}
          >
            <div className={cl.formBannerTitle}>Добро пожаловать!</div>
            <div className={cl.formBannerText}>
              Введите свои личные данные, чтобы использовать все функции сайта
            </div>
            <ButtonForm
              onClick={() => setActive(!active)}
              className={`${cl.btnForm} ${cl.btnFormAnimate}`}
            >
              Войти
            </ButtonForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
