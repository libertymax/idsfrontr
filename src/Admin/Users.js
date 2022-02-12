import React, {useState, useEffect} from "react";
import { isAuthenticated } from "../auth";
import { listUsers, deleteUsers } from "./apiAdmin";
import moment from "moment";

const Users = () => {
    const [users, setUsers] = useState([]);

    const {user, token} = isAuthenticated();

    const loadUsers = () => {
        listUsers(user._id, token).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                setUsers(data);
            }
        });
    };

    useEffect(() => {
        loadUsers()
    }, []);

    const destroy = usersId => {
        deleteUsers(usersId, user._id, token).then(data => {
            if(data.error) {
                console.log(data.error);
            } else {
                loadUsers();
            }
        })
    }

    const showUsersLength = () => {
        if (users.length > 0) {
            return (
                <h1>Total Clients: {users.length}</h1>
            )
        } else {
            return <h1>No Clients</h1>
        }
    };

    return (
        <>
            <div>
                <div>
                    {showUsersLength()}

                        {users.map((u, uIndex) => {
                            return (
                                <div className="" key={uIndex}>
                                    <h2>
                                        <span>Name: {u.name}</span>
                                    </h2>

                                    <ul>
                                        <li>
                                            Phone Number: {u.phone}
                                        </li>
                                        <li>
                                            email: {u.email}
                                        </li>
                                        <li>
                                            Gender: {u.gender}
                                        </li>
                                        <li>
                                            Date of Birth: {u.dob}
                                        </li>
                                        <li>
                                            State Of Origin: {u.sof}
                                        </li>
                                        <li>
                                            Certificate Enrolled For: {u.cef}
                                        </li>
                                        <li>
                                            Driving Experience: {u.de}
                                        </li>
                                        <li>
                                            Registered: {moment(u.createdAt).fromNow()}
                                        </li>
                                    </ul>
                                    <span onClick={() => destroy(u._id)} className="btn btn-primary btn-lg">Delete</span>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Users;