import cl from '../Header/Header.module.scss'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <Link to="/">Главная</Link>
                <Link to="/news">Новости</Link>
            </div>
        </div>
    )
}

export default Header