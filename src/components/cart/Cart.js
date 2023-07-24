import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import msg from "../../assets/whatsapp.png"
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

  const handleWhatsAppClick = () => {
    // Replace YOUR_MESSAGE with the pre-defined message you want to send
    const message = encodeURIComponent('hi welcome to shop biema');
    window.open(`https://api.whatsapp.com/send?phone=7646464&text=${message}`, '_blank');
  };

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
                    <span className="price-one">N{post.fields.prices}</span>
                </div>

                <div className="cart__two-two">
                  
                <Link to='/checkout'>
                    <button className="add-btn">
                      Buy now  
                    </button>
                  </Link>
                </div>
            </div>
        </div>))}

        <button onClick={handleWhatsAppClick}className="float">
            <img src={msg} alt=""/>
         </button>
                          

        </>
    )
}


export default Cart