import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import BascetService from "../../../Services/BascetService";
import styles from "./BascetViewComponent.module.css"


function BascetViewComponent() {
    const [bascet, setBascet] = useState({
        countOrders: '',
        totalOrderPrice: '',
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
                }]
            }
        }
        ]

    });
    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        getBascetField()
    }, [])

    const getBascetField = () => {
        BascetService.getBascetbyId(id).then((response) => {
            setBascet(response.data);
        });
    }

    const viewOrder = (id) => {
        console.log(`${id}`)
        navigate(`/products/${id}`);
    }


    const cancel = () => {
        navigate('/category');
    }

    return (
        <div className={styles.bascetWraper}>
            <h2 className={styles.bascettitle}> Your Orders </h2>

            <div className={styles.bascetinformation}>
                <div className={styles.bascetId}>
                </div>
                <div className={styles.totalOrderPrice}>Total Cost {bascet.totalOrderPrice} $</div>
            </div>

            {
                bascet.orderFields.map((order) =>
                    <div className={styles.orderFields}
                         onClick={() => viewOrder(order.product.productId)}
                    >
                        <div className={styles.orderInt}>Order ID {order.orderInt}</div>
                        <div className={styles.totalPrice}>Order price {order.totalPrice} $</div>
                        <div className={styles.title}>{order.product.title}</div>
                        <div className={styles.info}>{order.product.info}</div>
                        <div className={styles.textinfo}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default BascetViewComponent