import React from "react";
import classes from "./Navbar.module.css"
import CategoryComponent from "../CategoryComponent";

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className = "container">
            <div className={classes.navbar}>
                <div className= "container">
                    <h3 className = "text-center"> Title1 </h3>
                </div>

                <div className= "container">
                    <h3 className = "text-center"> Title2 </h3>
                </div>

                <div className= "container">
                    <h3 className = "text-center"> Title3 </h3>
                </div>

            </div>
        </div>
    </nav>
}

export default Navbar;