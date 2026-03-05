import cl from '../Header/Header.module.scss'
import { Link } from 'react-router-dom';

function Header({openModal}) {
    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.menu}>
                    <Link to="/">Главная</Link>
                    <Link to="/news">Новости</Link>
                </div>
                <button onClick={() => openModal()} className={cl.auth}>
                    <img src='/images/authentication.svg' alt="Авторизация"/>
                </button>
            </div>
        </div>
    )
}

export default Header