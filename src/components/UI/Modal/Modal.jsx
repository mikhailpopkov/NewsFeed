import ButtonForm from "../ButtonForm/ButtonForm";
import cl from "./Modal.module.scss";
import { useState } from "react";
import { registrationUser } from "../../../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

function Modal({isVisible, closeModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const {status, isAuth} = useSelector(state => state.user);

    function handleRegistration () {
        dispatch(registrationUser({email, password, name}))
        closeModal();
    }
    
    if (!isVisible) return null;

    return (
            <div className={cl.form} onClick={() => closeModal()}>
                <div className={cl.formContainer} onClick={e => e.stopPropagation()}>
                    <div className={cl.formWrapper}>
                        <h2>Создать аккаунт</h2>
                        <div className={cl.formContent}>
                            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="ФИО"/>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                            <ButtonForm className={cl.btnForm} onClick={handleRegistration}>Зарегистрироваться</ButtonForm>
                        </div>
                    </div>
                    <div className={cl.formBanner}>
                        <div className={cl.formBannerTitle}>
                            Добро пожаловать!
                        </div>
                        <div className={cl.formBannerText}>
                            Введите свои личные данные, чтобы использовать все функции сайта
                        </div>
                        <ButtonForm className={`${cl.btnForm} ${cl.btnFormAnimate}`}>Войти</ButtonForm>
                    </div>
                </div>
            </div>
    )
}

export default Modal