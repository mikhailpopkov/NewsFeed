import { Link } from 'react-router-dom';
import cl from '../NavUserMenu/NavUserMenu.module.scss';
import { useSelector } from 'react-redux';


function NavUserMenu() {
    const user = useSelector(state => state.user.user);

    if (!user) return null;

    return (
        <div className={cl.userModal}>
            <div className={cl.userModalHeader}>
                <div className={cl.userModalImg}>
                    <img src={user?.avatarUrl ? user.avatarUrl : '/images/user.svg'} alt={user.name} />
                </div>
                <div className={cl.userModalInfo}>
                    <div className={cl.userModalInfoName}>
                        {user.name}
                    </div>
                    <div className={cl.userModalInfoEmail}>
                        {user.email}
                    </div>
                </div>
            </div>
            <div className={cl.userModalMenu}>
                <ul>
                    <li><Link to="">Профиль</Link></li>
                    <li><Link to="">Настройки</Link></li>
                    <li><Link to="">Выйти</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavUserMenu;