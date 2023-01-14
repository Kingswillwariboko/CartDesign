import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"


import "./Cart.scss"
import { Link } from 'react-router-dom'

const Cart = ()=>{

  const [info, setInfo] = useState([])
  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setInfo(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [info, client])


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
                    <span className="price-one">{post.fields.price}</span>
                </div>

                <div className="cart__two-two">
                  

                    <button className="add-btn">
                     <Link to="/checkout"> Buy now </Link> 
                    </button>
                </div>
            </div>
        </div>))}
        </>
    )
}


export default Cart