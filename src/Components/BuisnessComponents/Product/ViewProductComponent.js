import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "../../../Services/ProductService";
import styles from "../Product/ProductComponent.module.css";
import ing from "../../../common/images/Products/LifeBeyond/life beyond_2.jpg"

function ViewProductComponent() {
    const [product, setProduct] = useState({
        title: '',
        visibility: '',
        price: '',
        imgpath: '',
        info: '',
        contents: [{
            contentId: '',
            title: '',
            info: '',
            link: ''
        }]

    });
    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        ProductService.getProductById(id).then((response) => {
            setProduct(response.data);
        });
    }
    const viewBascet = (id) => {
        console.log(`${id}`)
        navigate(`/bascet/${id}`);
    }

    const cancel = () => {
        navigate('/category');
    }

    return (
        <div className={styles.content}>
            <div className={styles.productholder}>
                <div className={styles.producttitle}>
                    {product.title}
                </div>
                <div className={styles.productinfo}>
                    {product.info}
                </div>
                <div className={styles.productprice}>
                    {product.price} $
                </div>
                <button className={styles.buybutton} onClick={() => viewBascet(product.productId)}>BUY
                </button>
            </div>

            <div className={styles.productdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={styles.productdescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className={styles.simpleContent}>
                {
                    product.contents.map(
                        content =>
                            <div className={styles.videoResponsive} key={content.contentId}>
                                <div className={styles.contenttitle}> {content.title}</div>
                                <div className={styles.contentinfo}> {content.info}</div>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        width="100%"
                                        height="480"
                                        src={content.link}
                                        frameBorder="1"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                    )
                }
            </div>

            <button className={styles.homebutton} onClick={cancel}>BACK
            </button>
        </div>
    )
}

export default ViewProductComponent