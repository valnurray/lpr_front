import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={classes.navbar}>
        <div className = "container">
            <div className={classes.navbar}>
                <div  className={classes.titlesFromNavbar}>
                    <NavLink to ="/users" >Users</NavLink>
                </div>

                <div className={classes.titlesFromNavbar}>
                    <NavLink to ="/about" >About</NavLink>
                </div>

                <div className= "container">
                    <h3 className = "text-center"> Title3 </h3>
                </div>

            </div>
        </div>
    </nav>
}

export default Navbar;