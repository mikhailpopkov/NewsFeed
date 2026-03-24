import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import FetchUsers from "../../API/FetchUsers.ts";
import UserBlock from "./UsersBlock.tsx";
import { UsersListProps } from "./users.types";
import { User } from "@/API/types/auth.types.ts";

const UsersList: React.FC<UsersListProps> = ({ title }) => {
  const [users, setUsers] = useState<User[]>();
  const [fetching, isLoading, isError] = useFetching(async () => {
    const res = await FetchUsers.getUsers();
    setUsers(res.data);
  });

  useEffect(() => {
    fetching();
  }, []);

  if (isError) return "Произошла ошибка при загрузке пользователей";

  if (isLoading || !users) return "Загрузка пользователей...";

  return (
    <div className="b-users">
      <h1>{title}</h1>
      <div className="users__wrapper">
        {users.map((item) => (
          <UserBlock key={item.id} user={item} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
