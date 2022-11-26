import React, {useState, useEffect} from 'react'
import CategoryService from "../../../Services/CategoryService";
import styles from "./CategoryComponent.module.css"


function CategoryComponent() {
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

    return (
        <div className={styles.categoryWraper}>
            <div>
                <table className={styles.container2}>
                    <thead>
                    <tr>
                        <th><h1>Category Id</h1> </th>
                        <th><h1>Category Title</h1> </th>
                        <th><h1>Description</h1></th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        category.map(
                            category =>
                                <tr key={category.categoryId}>
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

export default CategoryComponent