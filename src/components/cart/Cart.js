import React from "react"
import plus from "../../ecommerce-product-page-main/images/icon-plus.svg"
import close from "../../ecommerce-product-page-main/images/icon-minus.svg"
import cart from "../../ecommerce-product-page-main/images/icon-cart.svg"

import "./Cart.scss"

const Cart = ()=>{
    return(
        <div className="cart">
            <div className="cart__one">
                <h4>ShopBiema</h4>
                <h1>Fall Limited version</h1>
                <p>Add a screenshot of your solution. The easiest way 
                    to do this is to use Firefox to view your project, right-click
                     the page and select 
                    "Take a Screenshot". You can choose either a full-height screensho</p>
            </div>
            <div className="cart__two">
                <div className="cart__two-one">
                    <span className="price-one">$130</span>
                </div>

                <div className="cart__two-two">
                  

                    <button className="add-btn">Buy now</button>
                </div>
            </div>
        </div>
    )
}


export default Cart