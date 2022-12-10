import React, {useState} from "react";
import UserService from "../../../Services/UserService";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import styles from "./UserComponent.module.css"

function UserCreateComponent() {

    const [user, setUser] = useState({
        login: '',
        credentials: '',
        email: '',
        gender: '',
        birthday: '',
        role: {
            rolesId: '2',
            roles: 'User'
        },
    });

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        InsertUser();
    };

    const InsertUser = (e) => {
        debugger
        const data = {
            login: user.login,
            credentials: user.credentials,
            email: user.email,
            gender: user.gender,
            birthday: user.birthday,
            role: {
                rolesId: user.role.rolesId,
                roles: user.role.roles
            },
        };
        debugger
        UserService.createUser(data)
            .then((result) => {
                navigate('/users')
            })
        debugger
    };

    const oneChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const cancel = () => {
        navigate('/users');
    }

    return (
            <div className={styles.viewuser}>
                <div className={styles.usercreatecomponent}>
                    <div className={styles.addUserholder}>
                        <h2>ADD User</h2>
                        <div className="card-body">
                            <form
                                onSubmit={handleSubmit(onSubmit)}>

                                <div className={styles.labelholder}>
                                    <label>Login</label>
                                    <input
                                        className="form-control"
                                        {...register("login", {
                                            required: true,
                                            minLength: 1,
                                            pattern: /^[A-Za-z]+$/i
                                        })}
                                        onChange={oneChangeHandler}
                                    />
                                    {errors?.login?.type === "required" &&
                                    <p style={{color: "red"}}>Login can not be empty</p>}
                                    {errors?.login?.type === "minLength" && (
                                        <p style={{color: "red"}}>Login can not be empty</p>
                                    )}
                                    {errors?.login?.type === "pattern" && (
                                        <p style={{color: "red"}}>Alphabetical characters only</p>
                                    )}
                                </div>

                                <div className={styles.labelholder}>
                                    <label>Credentials</label>
                                    <input
                                        className="form-control"
                                        {...register("credentials", {
                                            required: true})}
                                        onChange={oneChangeHandler}
                                    />
                                    {errors?.credentials?.type === "required" &&
                                    <p style={{color: "red"}}>Credentials can not be empty</p>}
                                </div>

                                <div className={styles.labelholder}>
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        {...register("email", {
                                            required: true
                                        })}
                                        onChange={oneChangeHandler}
                                    />
                                    {errors?.email?.type === "required" &&
                                    <p style={{color: "red"}}>Email can not be empty</p>}
                                </div>

                                <div className={styles.labelholder}>
                                    <label>Gender</label>
                                    <input
                                        className="form-control"
                                        {...register("gender", {
                                            required: true
                                        })}
                                        onChange={oneChangeHandler}
                                    />
                                    {errors?.gender?.type === "required" &&
                                    <p style={{color: "red"}}>Gender can not be empty</p>}
                                </div>

                                <div className={styles.labelholder}>
                                    <label>Birthday</label>
                                    <input
                                        className="form-control"
                                        {...register("birthday", {
                                        })}
                                        onChange={oneChangeHandler}
                                    />
                                </div>

                                <div className={styles.labelholder}>
                                    <label>rolesId</label>
                                    <input
                                        className="form-control"
                                        {...register("rolesId", {
                                            required: true
                                        })}
                                        onChange={oneChangeHandler}
                                    />
                                    {errors?.rolesId?.type === "required" &&
                                    <p style={{color: "red"}}>rolesId can not be empty</p>}
                                </div>

                                <div className={styles.labelholder}>
                                    <button type="submit" className="btn btn-success">Save</button>

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

export default UserCreateComponent;