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
            {/*<NavLink to="/category" activeClassName={styles.activelink}>CATEGORIES</NavLink>*/}
            <NavLink to="/category" className = { navData => navData.isActive ? styles.active : styles.navlinkholder }>CATEGORIES</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={products} alt="icon"/>
            </div>
            <NavLink to="/products">PRODUCTS</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={users} alt="icon"/>
            </div>
            <NavLink to="/users">USERS</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={support} alt="icon"/>
            </div>
            <NavLink to="/support">SUPPORT</NavLink>
        </div>

        <div className={styles.navlinkholder}>
            <div className={styles.imageholder}>
                <img src={about} alt="icon"/>
            </div>
            <NavLink to="/about">ABOUT</NavLink>
        </div>

        {/*<NavLink className={styles.navlink} to="/category">*/}
        {/*    <div className={styles.imageholder}>*/}
        {/*        <img src={category} alt="icon"/>*/}
        {/*    </div>*/}
        {/*    <div className={styles.titleholder} >*/}
        {/*        <span className={styles.naming} >CATEGORIES</span>*/}
        {/*    </div>*/}
        {/*</NavLink>*/}

        {/*<NavLink className={styles.navlink} to="/products">*/}
        {/*    <div className={styles.imageholder}>*/}
        {/*        <img src={products} alt="icon"/>*/}
        {/*    </div>*/}
        {/*    <div className={styles.titleholder}>*/}
        {/*        <span className={styles.naming}>PRODUCTS</span>*/}
        {/*    </div>*/}
        {/*</NavLink>*/}

        {/*<NavLink className={styles.navlink} to="/users">*/}
        {/*        <div className={styles.imageholder}>*/}
        {/*            <img  src={users} alt="icon"/>*/}
        {/*        </div>*/}
        {/*        <div className={styles.titleholder}>*/}
        {/*            <span className={styles.naming}>USERS</span>*/}
        {/*        </div>*/}
        {/*</NavLink>*/}

        {/*<NavLink className={styles.navlink} to="/support">*/}
        {/*        <div className={styles.imageholder}>*/}
        {/*            <img src={support} alt="icon"/>*/}
        {/*        </div>*/}
        {/*        <div className={styles.titleholder}>*/}
        {/*            <span className={styles.naming}>SUPPORT</span>*/}
        {/*        </div>*/}
        {/*</NavLink>*/}

        {/*<NavLink className={styles.navlink} to="/about">*/}
        {/*        <div className={styles.imageholder}>*/}
        {/*            <img src={about} alt="icon"/>*/}
        {/*        </div>*/}
        {/*        <div className={styles.titleholder}>*/}
        {/*            <span className={styles.naming}>ABOUT</span>*/}
        {/*        </div>*/}
        {/*</NavLink>*/}
    </nav>
}

export default Navbar;