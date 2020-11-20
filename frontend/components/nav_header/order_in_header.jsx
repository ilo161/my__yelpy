import React from "react";
import {Link, withRouter} from "react-router-dom"


class OrderInHeader extends React.Component {
        constructor(props){
            super(props)
        }


        render() {

            return (

                <nav className="order-in-nav-container">
                    <div className="nav-content-container">
                        <img src={window.foodbag}></img>
                        <div className="content-separator"></div>
                        <Link to="/login" className="small-nav-link-text"/><p>Deliver</p>
                        <Link to="/" className="small-nav-link-text"> Pizza Delivery </Link>
                        <Link to="/" className="small-nav-link-text"> Chinesse Food Deliver </Link>
                    </div>

                </nav>
            )
        }
}

export default withRouter(OrderInHeader);