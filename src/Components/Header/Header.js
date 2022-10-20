import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return <header className={classes.header}>
        <div className = "container">
            <h1 className = "text-center"> HEADER </h1>
        </div>
    </header>
}

export default Header;