import cl from "../User/User.module.scss";
import { Link } from "react-router-dom";
import { UserProps } from "./users.types";

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={cl.user}>
      <div className={cl.userContainer}>
        <div className={cl.userImgbox}>
          <img
            src={user.avatarUrl ? user.avatarUrl : "/images/user.svg"}
            alt={user.name}
          />
        </div>
        <div className={cl.userInfo}>
          <div className={cl.userInfoName}>{user.name}</div>
          <div className={cl.userInfoEmail}>{user.email}</div>
        </div>
      </div>
      <Link to={`${user.id}`} className={cl.userLink} />
    </div>
  );
};

export default User;
