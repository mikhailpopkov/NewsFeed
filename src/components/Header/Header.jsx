import cl from '../Header/Header.module.scss'
import { Link } from 'react-router-dom';
import NavUser from '../UI/NavUser/NavUser';

function Header({openModal}) {

    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.menu}>
                    <Link to="/">Главная</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/users">Список пользователей</Link>
                </div>
                <NavUser openModal={openModal}/>
            </div>
        </div>
    )
}

export default Header