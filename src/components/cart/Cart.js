import React from "react"
import plus from "../../ecommerce-product-page-main/images/icon-plus.svg"
import close from "../../ecommerce-product-page-main/images/icon-minus.svg"
import cart from "../../ecommerce-product-page-main/images/icon-cart.svg"

import "./Cart.scss"

const Cart = ()=>{

    return(
        <div className="cart">
            <div className="cart__one">
                <h4>SNEAKERS COMPANY</h4>
                <h1>Fall Limited version</h1>
                <p>Add a screenshot of your solution. The easiest way 
                    to do this is to use Firefox to view your project, right-click
                     the page and select 
                    "Take a Screenshot". You can choose either a full-height screensho</p>
            </div>
            <div className="cart__two">
                <div className="cart__two-one">
                    <span className="price-one">$125</span>
                    <span className="price-two">50%</span>
                    <span className="price-three">$250</span>
                </div>

                <div className="cart__two-two">
                    <div className="add">
                        <button><img src={plus} alt="" /></button>
                        <span>0</span>
                        <button><img src={close} alt="" /></button> <br />
                    </div>

                    <button className="add-btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}


export default Cart