import cl from '../Header/Header.module.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavUser from '../UI/NavUser/NavUser';
import NavUserMenu from '../UI/NavUserMenu/NavUserMenu';

function Header({openModal}) {
    const isAuth = useSelector((state) => state.user.isAuth);

    return (
        <div className={cl.header}>
            <div className={cl.wrapper}>
                <div className={cl.menu}>
                    <Link to="/">Главная</Link>
                    <Link to="/news">Новости</Link>
                    <Link to="/users">Список пользователей</Link>
                </div>
                <NavUser openModal={openModal}/>
                <NavUserMenu />
            </div>
        </div>
    )
}

export default Header