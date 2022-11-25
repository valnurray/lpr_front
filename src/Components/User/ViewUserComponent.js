import React, {useEffect, useState} from 'react'
import UserService from "../../Services/UserService";
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

function ViewUserComponent(props) {
    const [user, setUser] = useState({
        login: '',
        Credentials: '',
        email: '',
        gender: '',
        birthday: '',
        role: ''
        // role: {
        //     roles: ''
        // }
    });
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        UserService.getUserById(id).then((response) => {
            // ArticleService.getArticleById(props.match.params.id).then((response) => {
            setUser(response.data);
        });
    }


    const cancel = () => {
        navigate('/users');
    }

    return (
        <div data-testid="ViewArticleComponent"  className="container">
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View User Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> User ID: {user.userId}</label>
                    </div>
                    <div className="row">
                        <label> User Login: {user.login}</label>
                    </div>
                    <div className = "row">
                        <label> Article Credentials: {user.Credentials}</label>
                    </div>
                    <div className="row">
                        <label> User email: {user.email}</label>
                    </div>
                    <div className="row">
                        <label> User gender: {user.gender}</label>
                    </div>
                    <div className="row">
                        <label> User birthday: {user.birthday ? null : 'not specified'}</label>
                    </div>
                    <div className="row">
                        <label> User Role: {user.roleId}</label>
                        {/*<label> User Role {user.map(user => <div>{user.roles}</div>)}</label>*/}
                    </div>
                </div>
            </div>
            <button className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>HOME
            </button>
        </div>
    )
}

export default ViewUserComponent