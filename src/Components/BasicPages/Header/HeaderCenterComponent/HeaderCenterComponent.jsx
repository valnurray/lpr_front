import React from "react";
import style from "./HeaderCenterComponent.module.css"
import 'font-awesome/css/font-awesome.min.css';
import search from '../../../../common/images/Search/search.png'

const HeaderCenterComponent = () => {
    return <div className={style.headerCenter}>
        <div className={style.box}>
            <form name="search">
                <input id="search" type="text" className={style.input} name="txt" onMouseOut="this.value = ''; this.blur();" />
            </form>
            {/*<i className="fas fa-search"/>*/}
            <i>
                <img src={search} alt={search}/>
            </i>
        </div>
    </div>


}

export default HeaderCenterComponent;