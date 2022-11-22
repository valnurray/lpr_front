import React from "react";
import BgColor from "../../BackgroundColorSwitcher/BgColor";
import style from "./HeaderLeftComponent.module.css"

const HeaderLeftComponent = () => {
    return <div className={style.headLeft}>
        <BgColor />
    </div>

}

export default HeaderLeftComponent;