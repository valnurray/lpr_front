import React from "react";
import styles from "./Footer.module.css"
import footerlogo from "../../../common/icons/footerlogo.png"

const Footer = () => {
    return <footer className={styles.footer}>
        <div className ={styles.footerholder}>
            {/*<h1 className = "text-center"> FOOTER </h1>*/}
            <p className={styles.copy}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. 2022(c)
            </p>
            <div className={styles.footerlogo}>
                <img className={styles.footerlogo} src={footerlogo} alt="footerlogo"/>
            </div>
        </div>
    </footer>
}

export default Footer;