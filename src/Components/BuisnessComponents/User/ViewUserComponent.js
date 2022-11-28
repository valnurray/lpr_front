import React, {useEffect, useState} from 'react'
import UserService from "../../../Services/UserService";
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import styles from './UserComponent.module.css'
import RoleService from "../../../Services/RoleService";

function ViewUserComponent() {
    const [user, setUser] = useState({
        login: '',
        Credentials: '',
        email: '',
        gender: '',
        birthday: '',
        role: {
            rolesId: '',
            roles: ''
        },
        productMembers: [{
            orderTime: '',
            product: {
                productId: '',
                title: '',
                visibility: '',
                price: '',
                info: ''
            }
        }],
        orderFields: {

        }
    });


    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        UserService.getUserById(id).then((response) => {
            setUser(response.data);
        });
    }

    const cancel = () => {
        navigate('/users');
    }

    const viewUser = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="container">
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
                    <div className="row">
                        <label> User Credentials: {user.credentials}</label>
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
                        <label> User Role: {user.role.roles}</label>
                    </div>
                    <div className="row">
                        <label>Products : </label>
                        {
                            user.productMembers.map((item) =>
                            <div className={styles.productdiv} key={item.productMembersId} onClick={() => viewUser(item.productId)}>
                                <div className={styles.subrow}>{item.product.title}</div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <button className={styles.homebutton} onClick={cancel}>BACK
            </button>
        </div>
    )
}

export default ViewUserComponent