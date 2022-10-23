import React, {useState, useEffect} from 'react'
import UserService from "../../Services/UserService";

function UserComponent() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {

        UserService.getUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        });
    };

    return (
        <div className="app-wrapper-content">
            <div className="container">

                <h1 className="text-center"> User List</h1>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th> User Id</th>
                        <th> User Login</th>
                        <th> User Credentials</th>
                        <th> User Email</th>
                        <th> User Gender</th>
                        <th> User birthday</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        users.map(
                            user =>
                                <tr key={user.userId}>
                                    <td> {user.userId}</td>
                                    <td> {user.login}</td>
                                    <td> {user.credentials}</td>
                                    <td> {user.email}</td>
                                    <td> {user.gender}</td>
                                    <td> {user.birthday ? null : 'not specified'}</td>
                                </tr>
                        )
                    }

                    </tbody>


                </table>

            </div>
        </div>

    )
}

export default UserComponent