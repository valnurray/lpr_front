import React from "react";
import style from "./Header.module.css";

import HeaderRightComponent from "./HeaderRightComponent/HeaderRightComponent";
import HeaderCenterComponent from "./HeaderCenterComponent/HeaderCenterComponent";
import HeaderLeftComponent from "./HeaderLeftComponent/HeaderLeftComponent";

const Header = () => {
    return <header className={style.header}>
        <div className={style.headKeeper}>
            <HeaderRightComponent/>
            <HeaderCenterComponent/>
            <HeaderLeftComponent/>
        </div>

    </header>
}

export default Header;