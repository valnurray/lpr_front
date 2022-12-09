import React, {useState, useEffect} from 'react'
import ProductService from "../../../Services/ProductService";
import styles from "./ProductComponent.module.css";
import {useNavigate} from "react-router-dom";

function ProductListComponent() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {

        ProductService.getProducts().then((response) => {
            setProducts(response.data)
            console.log(response.data);
        });
    };
    const navigate = useNavigate();

    const viewProduct = (id) => {
        console.log(`${id}`)
        navigate(`/products/${id}`);
    }

    return (
        <div className={styles.categoryWraper}>
            <div>

                <h1 className = "text-center"> Products </h1>

                <table className={styles.container2}>
                    <thead>

                    <tr>
                        <th><h2 className={styles.naming}>Product Id</h2></th>
                        <th><h2 className={styles.naming}>Title</h2></th>
                        <th><h2 className={styles.naming}>Price</h2></th>
                        <th><h2 className={styles.naming}>Info</h2></th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        products.map(
                            product =>
                                <tr className={styles.rows} key={product.productId}
                                    onClick={() => viewProduct(product.productId)}>
                                    <td> {product.productId}</td>
                                    <td> {product.title}</td>
                                    <td> {product.price}</td>
                                    <td> {product.info}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductListComponent