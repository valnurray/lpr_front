import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"
import users from "../../../common/icons/users.png"
import about from "../../../common/icons/about.png"



const Navbar = () => {
    return <nav className={classes.navbar}>
        <div>
            <div className={styles.navsholder}>
                <div className={styles.navbarblock}>
                    <NavLink className={styles.navlink} to ="/users" >
                        <img className={styles.icon} src={users} alt="icon"/>
                        <h3 className={styles.naming}>Users</h3>
                    </NavLink>
                </div>

                <div className={styles.navbarblock}>
                    <NavLink className={styles.navlink} to ="/support" >
                        <img className={styles.icon} src={users} alt="icon"/>
                        <h3 className={styles.naming}>Users</h3>
                    </NavLink>
                </div>

                <div className={styles.navbarblock}>
                    <NavLink className={styles.navlink} to ="/about" >
                        <img className={styles.icon} src={about} alt="icon"/>
                        <h3 className={styles.naming}>About</h3>
                    </NavLink>
                </div>

                {/*<div>*/}
                {/*    <NavLink to ="/about" >About</NavLink>*/}
                {/*</div>*/}

                {/*<div className={classes.titlesFromNavbar}>*/}
                {/*    <NavLink to ="/settings" >Settings</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.titlesFromNavbar}>*/}
                {/*    <BgColor/>*/}
                {/*</div>*/}

                {/*<div className= "container">*/}
                {/*    <h3 className = "text-center"> Title3 </h3>*/}
                {/*</div>*/}

            </div>
        </div>
    </nav>
}

export default Navbar;