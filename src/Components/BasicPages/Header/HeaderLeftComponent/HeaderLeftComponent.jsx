import React from "react";
import style from "./HeaderLeftComponent.module.css"
import logo from "../../../../common/images/Logo/logo-cast.png"

const HeaderLeftComponent = () => {
    return <div className={style.headLeft}>
        <img src={logo} alt={logo}/>
    </div>

}

export default HeaderLeftComponent;