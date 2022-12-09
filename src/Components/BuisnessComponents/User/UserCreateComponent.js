import React, {useState} from "react";
import UserService from "../../../Services/UserService";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

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
        <div data-testid="UserCreateComponent">
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2>ADD User</h2>
                        <div className="card-body">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
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

                                <label>Credentials</label>
                                <input
                                    className="form-control"
                                    {...register("credentials", {
                                        required: true})}
                                    onChange={oneChangeHandler}
                                />
                                {errors?.credentials?.type === "required" &&
                                <p style={{color: "red"}}>Credentials can not be empty</p>}

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

                                <label>Birthday</label>
                                <input
                                    className="form-control"
                                    {...register("birthday", {
                                    })}
                                    onChange={oneChangeHandler}
                                />

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


                                <button type="submit" className="btn btn-success">Save</button>

                                <button className="btn btn-danger" onClick={cancel}
                                        style={{marginLeft: "10px"}}>Cancel
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default UserCreateComponent;