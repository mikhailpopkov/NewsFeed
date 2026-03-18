import { useSelector } from "react-redux";
import cl from './NavUser.module.scss';
import { useEffect, useRef, useState } from "react";
import NavUserMenu from "../NavUserMenu/NavUserMenu";

function NavUser({openModal}) {
    const {isAuth, user} = useSelector(state => state.user);
    const [openMenu, setOpenMenu] = useState(false);
    const ref = useRef(null);

   useEffect(() => {
    function handleClick(e) {
        if (!ref.current.contains(e.target)) {
            setOpenMenu(false)
        }

    }
    document.addEventListener('pointerdown',handleClick)

    return () => {
        document.removeEventListener('pointerdown', handleClick)
    }
   }, [])

    return (
        <>
            {!isAuth ? 
            <button onClick={() => openModal()} className={cl.authBtn}>
                Sing in / Sing up
            </button> : 
            <div ref={ref} className={cl.authProfile}>
                <button onClick={() => setOpenMenu(!openMenu)} className={cl.authProfileBtn}>
                    <img src={user.avatarUrl ? user.avatarUrl : '/images/user.svg'} alt={user?.name}/>
                </button>
                {openMenu && <NavUserMenu/>}
            </div>
            }
        </>
    )
}

export default NavUser;