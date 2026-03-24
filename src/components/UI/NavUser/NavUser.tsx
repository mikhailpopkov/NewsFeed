import cl from "./NavUser.module.scss";
import { useEffect, useRef, useState } from "react";
import NavUserMenu from "../NavUserMenu/NavUserMenu.tsx";
import { NavUserProps } from "./navuser.types";
import { useAppSelector } from "@/store/store.ts";

const NavUser: React.FC<NavUserProps> = ({ openModal }) => {
  const { isAuth, user } = useAppSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("pointerdown", handleClick);

    return () => {
      document.removeEventListener("pointerdown", handleClick);
    };
  }, []);

  return (
    <>
      {!isAuth ? (
        <button onClick={() => openModal()} className={cl.authBtn}>
          Sing in / Sing up
        </button>
      ) : (
        <div ref={ref} className={cl.authProfile}>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={cl.authProfileBtn}
          >
            <img
              src={
                user?.user.avatarUrl ? user?.user.avatarUrl : "/images/user.svg"
              }
              alt={user?.user.name}
            />
          </button>
          {openMenu && <NavUserMenu />}
        </div>
      )}
    </>
  );
};

export default NavUser;
