import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import plus from "../../ecommerce-product-page-main/images/icon-plus.svg"
import close from "../../ecommerce-product-page-main/images/icon-minus.svg"
import cart from "../../ecommerce-product-page-main/images/icon-cart.svg"

import "./Cart.scss"

const Cart = ()=>{

  const [info, setInfo] = useState([])
  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries)
          setInfo(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [])


    return(
        <>
         {info?.items?.map((post) => (
        <div className="cart">
            <div className="cart__one">
                <h4>{post.fields.firstTitle}</h4>
                <h1>{post.fields.secondTitle}</h1>
                <p>{post.fields.description}</p>
            </div>
            <div className="cart__two">
                <div className="cart__two-one">
                    <span className="price-one">$130</span>
                </div>

                <div className="cart__two-two">
                  

                    <button className="add-btn">Buy now</button>
                </div>
            </div>
        </div>))}
        </>
    )
}


export default Cart