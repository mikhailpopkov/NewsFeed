import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import FetchUsers from "../../API/FetchUsers";
import User from "./UsersBlock";

function UsersList({ title }) {
  const [users, setUsers] = useState([]);
  const [fetching, isLoading, isError] = useFetching(async () => {
    const res = await FetchUsers.getUsers();
    setUsers(res.data);
  });

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      {isError && <h1>Произошла ошибка загрузки пользователей</h1>}
      {isLoading ? (
        <h1>Загрузка пользователей</h1>
      ) : (
        <div className="b-users">
          <h1>{title}</h1>
          <div className="users__wrapper">
            {users.map((item) => (
              <User key={item.id} user={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default UsersList;
