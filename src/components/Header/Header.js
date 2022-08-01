import React, {useState} from "react"
import icon from "../../ecommerce-product-page-main/images/icon-menu.svg";
import logo from "../../ecommerce-product-page-main/images/logo.svg";
import cart from "../../ecommerce-product-page-main/images/icon-cart.svg";
import avatar from "../../ecommerce-product-page-main/images/image-avatar.png";
import cancel from "../../ecommerce-product-page-main/images/icon-close.svg";

import "./header.scss"

const Header = () => {
    const[active, setActive] = useState(false)

    return(
        <>
        {active && <div onClick={() =>setActive(prev => false)} className="backdrop"></div>}
        <header className="header">
            <div className="header__one">
                <img onClick={() => setActive(prev => true)}src={icon} alt=""/>
                <img src={logo} alt=""/>
            </div>

            <div className="header__two">
                <img className="cart" src={cart}  alt=""/>
                <img className="avatar" src={avatar} alt=""/>
            </div>

            <div className={active ? "header__nav" : "header__active"}>

                <ul>
                    <li>Collection</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                </ul>
            </div>
            {
                active && (
                    <div className="header__close">
                      <img onClick={(e) => setActive(prev => false)} className="img" src={cancel} alt=""/>
                    </div>
                )
            }
        </header>
        </>
    )
}



export default Header;