import React, {Component} from 'react'
import {Link} from "react-router-dom";
import styles from "./PageNotFound.module.css";
import notfound from "../../../common/images/notfound/notfound.jpg"
import style from "../Header/HeaderLeftComponent/HeaderLeftComponent.module.css";
import logo from "../../../common/images/Logo/logo-cast.png";



class PageNotFound extends Component {
    render() {
        return (
            <div className={styles.categoryWraper}>
                <Link to="/">
                    <img src={notfound} alt={notfound}/>
                </Link>
                {/*<Link to="/" className={styles.homebutton}>HOME</Link>*/}
            </div>
        );
    }
}

export default PageNotFound;
