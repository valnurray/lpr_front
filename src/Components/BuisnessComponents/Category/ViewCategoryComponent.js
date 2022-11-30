import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import styles from './CategoryComponent.module.css'
import CategoryService from "../../../Services/CategoryService";

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

    return (
        <div className={styles.categoryWraper}>
                <h3 className="text-center">{category.title}</h3>
                <div className="card-body">
                        <h2 className={styles.naming}> About:  {category.description}</h2>
                    <div className="row">
                        {
                            category.products.map(( item =>
                            <div className={styles.productdiv} key={item.productId} onClick={() => viewProduct(item.productId)}>
                                <div>{item.title}</div>
                                <div>{item.price}</div>
                                <div>{item.info}</div>
                                <div>{item.imgpath}</div>
                                <div>{item.visibility}</div>
                            </div>
                            ))
                        }
                    {/*    <label> Category Title: {category.}</label>*/}
                    </div>
                    {/*<div className="row">*/}
                    {/*    <label> Category Description: {category.credentials}</label>*/}
                    {/*</div>*/}
                </div>

            <button className={styles.homebutton} onClick={cancel}>BACK
            </button>
        </div>
    )
}

export default ViewCategoryComponent