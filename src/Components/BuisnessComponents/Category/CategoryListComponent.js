import React, {useState, useEffect} from 'react'
import CategoryService from "../../../Services/CategoryService";
import styles from "./CategoryComponent.module.css"
import {useNavigate} from "react-router-dom";


function CategoryListComponent() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {

        CategoryService.getCategory().then((response) => {
            setCategory(response.data)
            console.log(response.data);
        });
    };

    const navigate = useNavigate();

    const viewCategory = (id) => {
        console.log(`${id}`)
        navigate(`/category/${id}`);
    }

    return (
        <div className={styles.categoryWraper}>
            <div>
                <table className={styles.container2}>
                    <thead>
                    <tr>
                        <th><h2 className={styles.naming}>Category Id</h2> </th>
                        <th><h2 className={styles.naming}>Category Title</h2> </th>
                        <th><h2 className={styles.naming}>Description</h2></th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        category.map(
                            category =>
                                <tr className={styles.rows}  key={category.categoryId} onClick={() => viewCategory(category.categoryId)} >
                                    <td> {category.categoryId}</td>
                                    <td> {category.title}</td>
                                    <td> {category.description}</td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default CategoryListComponent