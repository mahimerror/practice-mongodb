import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const handleDelete = (id) => {
        console.log("delete", id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            })
    }

    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers);

    return (
        <div>
            <h3>{users.length}</h3>
            <ul className="">
                {
                    users.map(user => <li key={user._id}>{user.name} : {user.email} : {user._id}
                        <Link to={`/update/${user._id}`}>
                            <button>update</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;