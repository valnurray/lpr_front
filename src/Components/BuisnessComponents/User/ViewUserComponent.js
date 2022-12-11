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
        orderFields: [{
            orderInt: '',
            timeOrder: '',
            totalPrice: '',
            product: {
                productId: '',
                title: '',
                visibility: '',
                price: '',
                info: '',
                imgpath: '',
                contents: [{
                    contentId: '',
                    title: '',
                    info: '',
                    link: ''
                }
                ]
            },
            bascet: {
                bascetId: '',
                countOrders: '',
                totalOrderPrice: ''
            }
        }]
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

    const editUser = (id) => {
        navigate(`/update-user/${id}`);
    }

    const cancel = () => {
        navigate('/users');
    }

    const viewProduct = (id) => {
        console.log(`${id}`)
        navigate(`/products/${id}`);
    }

    const viewOrder = (id) => {
        console.log(`${id}`)
        navigate(`/orderfield/${id}`);
    }

    return (
        <div className={styles.viewuser}>
            <div>
                <h3 className="text-center">{user.login}</h3>
                <div>
                    <div className={styles.userinfo}>
                        <button onClick={() => editUser(user.userId)}
                                className={styles.editUserButton}>Update {user.login}
                        </button>
                        <div className={styles.userinfoholder}>
                            <label> User ID: {user.userId}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User Login: {user.login}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User Credentials: {user.credentials}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User email: {user.email}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User gender: {user.gender}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User birthday: {user.birthday ? null : 'not specified'}</label>
                        </div>
                        <div className={styles.userinfoholder}>
                            <label> User Role: {user.role.roles}</label>
                        </div>
                    </div>

                    <h2 className={styles.productstitleholder}>Products {user.login}</h2>
                    {
                        user.productMembers.map((item) =>
                            <div className={styles.productdiv} key={item.productMembersId}
                                 onClick={() => viewProduct(item.product.productId)}>
                                <div className={styles.allin}>
                                    <div className={styles.producttitle}>{item.product.title}</div>
                                </div>
                                <div className={styles.info}>{item.product.info}</div>
                                <p className={styles.producttext}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliqua.
                                    Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nunc mi
                                    ipsum faucibus vitae
                                    aliquet nec ullamcorper sit amet.
                                    A cras semper auctor neque vitae tempus quam. Mi ipsum faucibus vitae aliquet nec
                                    ullamcorper sit amet
                                    risus.
                                    At augue eget arcu dictum varius duis.
                                    Commodo quis imperdiet massa tincidunt. Pellentesque elit ullamcorper dignissim cras
                                    tincidunt lobortis.
                                    Id neque aliquam vestibulum morbi blandit cursus risus.
                                    Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Elementum integer enim
                                    neque volutpat ac
                                    tincidunt vitae semper quis.
                                    Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Eleifend
                                    quam adipiscing vitae
                                    proin sagittis nisl rhoncus.
                                    Justo nec ultrices dui sapien. Mattis aliquam faucibus purus in massa. Ac tortor
                                    vitae purus faucibus
                                    ornare.
                                </p>
                            </div>
                        )
                    }

                    <h2 className={styles.productstitleholder}>{user.login} Orders </h2>
                    {
                        user.orderFields.map((order) =>
                            <div className={styles.orderdiv} key={order.orderInt}
                                 onClick={() => viewOrder(order.orderInt)}>
                                <div className={styles.orderintdiv}>
                                    Your order id : {order.orderInt}
                                </div>
                                <div className={styles.totalPrice}>
                                    <span className={styles.totalinfo}> Total : </span>
                                    <span>{order.totalPrice} $ </span>
                                </div>
                                <div className={styles.titleorder}>
                                    {order.product.title}
                                </div>
                                <div className={styles.productprice}>
                                    <span className={styles.totalinfo}> Product : </span>
                                    <span> {order.product.price} $ </span>
                                </div>
                                <div className={styles.orderinfo}>
                                    {order.product.info}
                                </div>


                            </div>
                        )
                    }

                </div>
            </div>

            <button className={styles.homebutton} onClick={cancel}>BACK
            </button>
        </div>
    )
}

export default ViewUserComponent