import React, {Component} from 'react'
import {Link} from "react-router-dom";




class LoginPage extends Component {
    render() {
        return (
            <div className="app-wrapper-content">
                <Link to="/category">
                    <h2 className="text-center"> Login page </h2>
                </Link>
                {/*<Link to="/" className={styles.homebutton}>HOME</Link>*/}
            </div>
        );
    }
}

export default LoginPage;