import React from 'react'
import { Link } from 'react-router-dom'
import BgImg from  "../../assets/images/background/page-header-bg-1-1.jpg"

const Breadcumb = ({ Title, Breadcumb, backgroundImage }) => {
    return (
        <div className="page-header">
            <div className="page-header__bg"
                style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="container">
                <ul className="thm-breadcrumb list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li>{Breadcumb && Breadcumb}</li>
                </ul>
                <h2 className="page-header__title">{Title && Title}</h2>
            </div>
        </div>
    )
}

export default Breadcumb