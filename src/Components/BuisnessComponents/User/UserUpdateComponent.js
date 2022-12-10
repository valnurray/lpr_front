import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import UserService from "../../../Services/UserService";
import styles from "./UserComponent.module.css";


function UserUpdateComponent(props) {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
            (async () => {
                const {data: fetchedUser} = await UserService.getUserById(id);
                setUser(fetchedUser);
            })()
        },
        []
    )

    const oneChangeHandler = (e) => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value});
    }

    const UpdateUser = (e) => {
        e.preventDefault();

        UserService.updateUser(user)
            .then((result) => {
                navigate(`/users/${user.userId}`)
            });
    };

    const cancel = () => {
        navigate(`/users/${user.userId}`);
    }


    if (!user) {
        return <div>
            loading...
        </div>
    }
    return (
        <div className={styles.viewuser}>
            <div className={styles.usercreatecomponent}>
                <div className={styles.addUserholder}>
                    <h2>Update {user.login}</h2>
                    <div className="card-body">

                        <form>
                            <div className={styles.labelholder}>
                                <label> Login: </label>
                                <input placeholder="Login" name="login" className="form-control"
                                       value={user.login}
                                       onChange={oneChangeHandler}
                                />
                            </div>

                            <div className={styles.labelholder}>
                                <label> Credentials: </label>
                                <input placeholder="Credentials" name="credentials" className="form-control"
                                       value={user.credentials}
                                       onChange={oneChangeHandler}
                                />
                            </div>


                            <div className={styles.labelholder}>
                                <label> Email: </label>
                                <input placeholder="Email" name="email" className="form-control"
                                       value={user.email}
                                       onChange={oneChangeHandler}
                                />
                            </div>

                            <div className={styles.labelholder}>
                                <label> Gender: </label>
                                <input placeholder="Gender" name="gender" className="form-control"
                                       value={user.gender}
                                       onChange={oneChangeHandler}
                                />
                            </div>

                            <div className={styles.labelholder}>
                                <label> Birthday: </label>
                                <input placeholder="Birthday" name="birthday" className="form-control"
                                       value={user.birthday}
                                       onChange={oneChangeHandler}
                                />
                            </div>

                            <div className={styles.labelholder}>
                                <label> RolesId: </label>
                                <input placeholder="RolesId" name="rolesId" className="form-control"
                                       value={user.role.rolesId}
                                       onChange={oneChangeHandler}
                                />
                            </div>

                            <div className={styles.labelholder}>
                                <button className="btn btn-success" onClick={UpdateUser}>Save</button>

                                <button className="btn btn-danger" onClick={cancel}
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserUpdateComponent;