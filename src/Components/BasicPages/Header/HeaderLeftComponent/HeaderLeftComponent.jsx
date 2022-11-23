import React from "react";
import style from "./HeaderLeftComponent.module.css"
import logo from "../../../../common/images/Logo/logo-cast.png"
import {Link} from "react-router-dom";

const HeaderLeftComponent = () => {
    return <div className={style.headLeft}>
        <Link to="/">
             <span className={style.headLeft}>
                 <img src={logo} alt={logo}/>
             </span>
        </Link>
    </div>

}

export default HeaderLeftComponent;