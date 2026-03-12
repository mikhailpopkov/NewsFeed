import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import FetchUsers from "../API/FetchUsers";

function Users() {
    const [users, setUsers] = useState([]);
    const [fetching, isError, isLoading] = useFetching(async () => {
        const res = await FetchUsers.getUsers();
        setUsers(res.data);
    })

    useEffect(() => {
        fetching();
    }, [])

    return (
        <div className="b-users">
            <h1>Список пользователей</h1>
            <div className="users__wrapper">
                {
                    users.map(item => 
                        <div className="users__block" key={item.id}>
                            <div className="users__block-name">
                                {item.name}
                            </div>
                            <div className="users__block-mail">
                                {item.email}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Users;