import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import log from "../../assets/logo-transparent.svg";
import "./checkout.scss"
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'
import { PaystackConsumer } from 'react-paystack';


const Checkout = () => {
  const publicKey = "pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a"
    const[amount, setAmount] = useState(13)
    const[number, setNumber]= useState('')
    const[email, setEmail]= useState('')

    const componentProps = {
      email,
      amount,
      metadata: {
        number,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
      onClose: () => alert("Wait! Don't leave :("),
    }
  

  return (

    <div>
          <div className="header__onee">
                <img src={log} alt="shopbiema" />
            </div>
        <form>
            <p>Kindly fill up to pay </p>
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

            
         

            <PaystackButton className="paystack" {...componentProps} />
          </form>  
    </div>
  )
}

export default Checkout;