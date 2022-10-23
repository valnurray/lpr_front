import React, {useState, useEffect} from 'react'
import CategoryService from "../../Services/CategoryService";

function CategoryComponent () {
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
        <div className="app-wrapper-content">
            <div className = "container">

                <h1 className = "text-center"> Category List</h1>

                <table className = "table table-striped">
                    <thead>
                    <tr>
                        <th> Category Id</th>
                        <th> Category Title</th>
                        <th> Category Description</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        category.map(
                            category =>
                                <tr key = {category.categoryId}>
                                    <td> {category.categoryId}</td>
                                    <td> {category.title }</td>
                                    <td> {category.description }</td>
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