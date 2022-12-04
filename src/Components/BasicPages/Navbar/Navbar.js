import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"
import users from "../../../common/icons/users.png"
import about from "../../../common/icons/about.png"
import support from "../../../common/icons/support.png"
import products from "../../../common/icons/products.png"
import category from "../../../common/icons/category.png"

const Navbar = () => {
    return <nav className={classes.navbar}>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={category} alt="icon"/>
            </div>
            <NavLink to="/category" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>CATEGORIES</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={products} alt="icon"/>
            </div>
            <NavLink to="/products" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>PRODUCTS</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={users} alt="icon"/>
            </div>
            <NavLink to="/users" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>USERS</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={support} alt="icon"/>
            </div>
            <NavLink to="/support" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>SUPPORT</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={about} alt="icon"/>
            </div>
            <NavLink to="/about" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>ABOUT</NavLink>
        </div>

    </nav>
}

export default Navbar;