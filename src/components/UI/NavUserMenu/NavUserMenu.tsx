import { Link } from "react-router-dom";
import cl from "../NavUserMenu/NavUserMenu.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { logoutUser } from "../../../store/slices/userSlice.ts";

const NavUserMenu: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  if (!user) return null;

  return (
    <div className={cl.userModal}>
      <div className={cl.userModalHeader}>
        <div className={cl.userModalImg}>
          <img
            src={
              user.user?.avatarUrl ? user.user.avatarUrl : "/images/user.svg"
            }
            alt={user.user.name}
          />
        </div>
        <div className={cl.userModalInfo}>
          <div className={cl.userModalInfoName}>{user.user.name}</div>
          <div className={cl.userModalInfoEmail}>{user.user.email}</div>
        </div>
      </div>
      <div className={cl.userModalMenu}>
        <ul>
          <li>
            <Link to="">Профиль</Link>
          </li>
          <li>
            <Link to="">Настройки</Link>
          </li>
          <li>
            <Link onClick={() => dispatch(logoutUser())} to="">
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavUserMenu;
