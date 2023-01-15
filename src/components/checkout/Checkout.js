import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import log from "../../assets/logo-transparent.svg";
import "./checkout.scss"
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'
import { PaystackConsumer } from 'react-paystack';


const Checkout = () => {
    const[amount, setAmount] = useState(13)
    const[number, setNumber]= useState('')
    const[email, setEmail]= useState('')
    const [info, setInfo] = useState([])
  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

    useEffect(() => {
      const getAllEntries = async () => {
        try {
          await client.getEntry('6Jg48bibzbu3SdNVBv5Ruq').then((entry) => {
            setInfo(entry)
            console.log(entry.items)
          })
        } catch (error) {
          console.log(`Error fetching authors ${error}`);
        }
      };
      getAllEntries()
    }, [info, client])

   

    const config = {
      number,
      email,
      amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a',
    };
    
    // you can call this function anything
    const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    };
    
    // you can call this function anything
    const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    }
  
  
    const componentProps = {
      ...config,
      text: 'Pay with Paystack',
      onSuccess: (reference) => handleSuccess(reference),
      onClose: handleClose
  };

  return (
    <div>
          <div className="header__onee">
              <Link to="/">
                  <img src={log} alt="shopbiema" />
              </Link>
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

            <div className=''>
               <p>Amount: {amount} Naira</p>
            </div>
          </form>  

          <div className='btn-cover'>
            <PaystackConsumer  {...componentProps} >
            {({initializePayment}) => <button className="paystack" onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
          </PaystackConsumer>
          </div>

        
    </div>
  )
}

export default Checkout;