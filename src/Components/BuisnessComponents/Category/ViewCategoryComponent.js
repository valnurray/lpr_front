import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {useParams} from "react-router-dom";
import styles from './CategoryComponent.module.css'
import CategoryService from "../../../Services/CategoryService";

function ViewCategoryComponent() {
    const [category, setCategory] = useState({
        description: '',
        title: ''
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
        navigate('/');
    }

    return (
        <div className="container">
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View User Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Category ID: {category.userId}</label>
                    </div>
                    <div className="row">
                        <label> Category Title: {category.login}</label>
                    </div>
                    <div className="row">
                        <label> User Description: {category.credentials}</label>
                    </div>
                </div>
            </div>
            <button className={styles.homebutton} onClick={cancel}>BACK
            </button>
        </div>
    )
}

export default ViewCategoryComponent