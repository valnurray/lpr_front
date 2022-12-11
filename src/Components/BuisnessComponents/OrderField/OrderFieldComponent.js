import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import styles from "../Product/ProductComponent.module.css";
import OrderfieldService from "../../../Services/OrderfieldService";


function OrderFieldComponent() {
    const [orderfield, setOrderField] = useState({
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

    });
    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        getOrderField()
    }, [])

    const getOrderField = () => {
        OrderfieldService.getOrderfieldById(id).then((response) => {
            setOrderField(response.data);
        });
    }
    // const viewBascet = (id) => {
    //     console.log(`${id}`)
    //     navigate(`/bascet/${id}`);
    // }

    const cancel = () => {
        navigate('/category');
    }

    return (
        <div className={styles.content}>

        </div>
    )
}

export default OrderFieldComponent