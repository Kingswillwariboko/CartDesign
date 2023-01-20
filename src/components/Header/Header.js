import React, {useState} from "react"
import log from "../../assets/logo-transparent.svg";

import "./header.scss"

const Header = () => {
    const[active, setActive] = useState(false)

    return(
        <>
        {active && <div onClick={() =>setActive(prev => false)} className="backdrop"></div>}
        <header className="header">
            <div className="header__one">
                <img src={log} alt="shopbiema" />
            </div>

            <div>
                <button>Contact</button>
            </div>    

            {/* <div className="header__two">
                <img className="cart" src={cart}  alt=""/>
                <img className="avatar" src={avatar} alt=""/>
            </div> */}

           {/* <div className={active ? "header__nav" : "header__active"}>
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
                )e]
            } */}
        </header>
        </>
    )
}



export default Header;