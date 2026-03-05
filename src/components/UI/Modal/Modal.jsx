import AuthUsers from "../../../API/AuthUser";
import Button from "../Button/Button";
import cl from "./Modal.module.scss";
import { useState } from "react";
function Modal({isVisible, closeModal}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    async function register(email, password, name) {
        try {
            const res = await AuthUsers.registration(email, password, name);
            closeModal();
            console.log(res)
        } catch(e) {
            console.log(e.message)
        }
    }
    
    if (!isVisible) return null;

    return (
        <div className={cl.modal} onClick={() => closeModal()}>
            <div className={cl.modalContainer} onClick={e => e.stopPropagation()}>
                <h2>Регистрация</h2>
                <div className={cl.modalContent}>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="ФИО"/>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль"/>
                    <Button onClick={() => register(email, password, name)}>Войти</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal