import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import UserService from "../../../Services/UserService";
import styles from "./UserComponent.module.css"

function UsersListComponent() {

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

    const navigate = useNavigate();

    const viewUser = (id) => {
        navigate(`/users/${id}`);
    }
    const addUser = () => {
        navigate('/add-user/_add');
    }

    return (
        <div className={styles.categoryWraper}>
            <div className={styles.container2}>
                {/*<div className="container">*/}
                    <span className={styles.h1holder}>User List</span>

                    <button className={styles.addbutton} onClick={addUser}> Add User</button>

                <table className={styles.container2}>
                    <thead>
                    <tr>
                        <th><h2 className={styles.naming}>User Id</h2></th>
                        <th><h2 className={styles.naming}>User Login</h2></th>
                        <th><h2 className={styles.naming}>User Credentials</h2></th>
                        <th><h2 className={styles.naming}>User Email</h2></th>
                        <th><h2 className={styles.naming}>User Gender</h2></th>
                        <th><h2 className={styles.naming}>User birthday</h2></th>
                        <th><h2 className={styles.naming}>User Role</h2> </th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        users.map(
                            user =>
                                <tr className={styles.rows}  key={user.userId} onClick={() => viewUser(user.userId)}>
                                    <td> {user.userId}</td>
                                    <td> {user.login}</td>
                                    <td> {user.credentials}</td>
                                    <td> {user.email}</td>
                                    <td> {user.gender}</td>
                                    <td> {user.birthday ? null : 'not specified'}</td>
                                    <td> {user.role.roles}</td>
                                </tr>
                        )
                    }

                    </tbody>


                </table>

                {/*</div>*/}
            </div>
        </div>

    )
}

export default UsersListComponent