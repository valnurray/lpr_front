import React, {useState, useEffect} from 'react'
import ProductService from "../../../Services/ProductService";
import styles from "./ProductComponent.module.css";

function ProductComponent() {
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
    return (
        <div className="app-wrapper-content">
            <div>

                <h1 className="text-center"> Products </h1>

                <table className="table table-striped">
                    <thead>

                    <tr>
                        <th> Product Id</th>
                        <th> Title</th>
                        <th> Price</th>
                        <th> Info</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        products.map(
                            product =>
                                <tr key={product.productId}>
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
export default ProductComponent