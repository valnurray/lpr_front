import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import styles from './CategoryComponent.module.css'
import CategoryService from "../../../Services/CategoryService";
import img from "../../../common/images/Products/LifeBeyond/life beyond_2.jpg"

function ViewCategoryComponent() {
    const [category, setCategory] = useState({
        title: '',
        description: '',
        products: [{
            title: '',
            visibility: '',
            price: '',
            info: '',
            imgpath: ''
        }]
    });


    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        CategoryService.getCategoryById(id).then((response) => {
            setCategory(response.data);
        });
    }

    const cancel = () => {
        navigate('/category');
    }

    const viewProduct = (id) => {
        console.log(`${id}`)
        navigate(`/products/${id}`);
    }

    const viewBascet = (id) => {
        console.log(`${id}`)
        navigate(`/bascet/${id}`);
    }

    return (
        <div className={styles.categoryWraper}>
            <h2 className={styles.title}>{category.title}</h2>
            <h3 className={styles.description}>{category.description}</h3>
            <div className={styles.pholder}>
                <p className={styles.textp}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                    Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nunc mi ipsum faucibus
                    vitae
                    aliquet nec ullamcorper sit amet.
                    A cras semper auctor neque vitae tempus quam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                    amet
                    risus.
                    At augue eget arcu dictum varius duis.
                    Commodo quis imperdiet massa tincidunt. Pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis.
                    Id neque aliquam vestibulum morbi blandit cursus risus.
                    Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Elementum integer enim neque volutpat ac
                    tincidunt vitae semper quis.
                    Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Eleifend quam adipiscing
                    vitae
                    proin sagittis nisl rhoncus.
                    Justo nec ultrices dui sapien. Mattis aliquam faucibus purus in massa. Ac tortor vitae purus
                    faucibus
                    ornare.
                </p>
                <p className={styles.textp}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                    Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nunc mi ipsum faucibus
                    vitae
                    aliquet nec ullamcorper sit amet.
                    A cras semper auctor neque vitae tempus quam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                    amet
                    risus.
                    At augue eget arcu dictum varius duis.
                    Commodo quis imperdiet massa tincidunt. Pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis.
                    Id neque aliquam vestibulum morbi blandit cursus risus.
                    Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Elementum integer enim neque volutpat ac
                    tincidunt vitae semper quis.
                    Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Eleifend quam adipiscing
                    vitae
                    proin sagittis nisl rhoncus.
                    Justo nec ultrices dui sapien. Mattis aliquam faucibus purus in massa. Ac tortor vitae purus
                    faucibus
                    ornare.
                </p>
            </div>
            <h3 className={styles.description}> Products : </h3>

            <div className={styles.productholder}> {
                category.products.map((product =>
                        <div className={styles.productdiv} key={product.productId}
                             onClick={() => viewProduct(product.productId)}>
                            <div className={styles.allin}>
                                <div className={styles.producttitle}>{product.title}</div>
                                <button className={styles.buybutton} onClick={() => viewBascet(product.productId)}>BUY
                                </button>
                                <div className={styles.price}>{product.price} $</div>
                                <div className={styles.info}>{product.info}</div>
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
                        </div>
                ))
            }
            </div>
        </div>
    )
}

export default ViewCategoryComponent