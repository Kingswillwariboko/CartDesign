import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import log from "../../assets/logo-transparent.svg";


import "./checkout.scss"
import { Link } from 'react-router-dom';

const Checkout = () => {
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
  }, [])

    // const[name, setName] = useState('')
    // const[number, setNumber]= useState('')
    // const[email, setEmail]= useState('')

  //   const handleSubmit = (e) =>{
  //     e.preventDefault();
 
    
  //     db.collection("contacts")
  //    .add({
  //       email,
  //       name,
  //       number,
  //    }).then(()=>{
  //        console.log('success')
  //        setTimeout(() => {
  //          }, 5000); 
  //          setEmail("")
  //          setName('')
  //          setNumber('')
  //    }).catch((error)=>{
  //       console.log(error.message)
  //    })
  // }

  return (
    <div>
          <div className="header__one">
                <img src={log} alt="shopbiema" />
            </div>
        <form>
            {/* <p>Kindly fill up to pay </p>
            <div className='inp'>
                <label>Full Name*</label> 
                <input
                        value={name}
                        placeholder="Full Name"
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
            </div>
            <div className='inp'>
                <label>Email*</label> 
                <input
                        value={email}
                        placeholder="Enter phone number"
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
            </div>

            <div className='inp'>
                <label>Phone number*</label> 
                <input
                        value={number}
                        placeholder="Enter phone number"
                        onChange={(e)=> setNumber(e.target.value)}
                        required
                    />
            </div>
             */}
      <div className='button'>
      <PayPalScriptProvider>
        <PayPalButtons type="submit"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
      </div>
          </form>
    </div>
  )
}

export default Checkout