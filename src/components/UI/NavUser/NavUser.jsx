import { useSelector } from "react-redux";
import cl from './NavUser.module.scss';

function NavUser({openModal}) {
    const {isAuth, user} = useSelector(state => state.user);

    return (
        <>
            {!isAuth ? 
            <button onClick={() => openModal()} className={cl.authBtn}>
                Sing in / Sing up
            </button> : 
            <div className={cl.authProfile}>
                <button className={cl.authProfileBtn}>
                    <img src={user.avatarUrl ? user.avatarUrl : '/images/user.svg'} alt={user?.name}/>
                </button>
            </div>
            }
        </>
    )
}

export default NavUser;