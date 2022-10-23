import React, {Component} from 'react'
import {Link} from "react-router-dom";


class PageNotFound extends Component {
    render() {
        return (
            <div  data-testid="PageNotFound"
                  className='container'>
                <h1>404 - Not Found!</h1>
                <Link to="/" className="btn btn-danger">HOME</Link>
            </div>
        );
    }
}

export default PageNotFound;
