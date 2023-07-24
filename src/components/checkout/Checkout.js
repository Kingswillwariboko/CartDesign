import React, { useEffect, useRef, useState } from 'react';
import { createClient } from "contentful";
import log from "../../assets/logo-transparent.svg";
import "./checkout.scss";
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import { PaystackConsumer } from 'react-paystack';
import master from "../../assets/icons8-mastercard-logo.svg";
import visa from "../../assets/icons8-visa.svg";
import verve from "../../assets/verve.svg";
import { db } from "../../firebase";
import card from "../../assets/Group 877.svg";

const Checkout = () => {
  const [amount, setAmount] = useState();
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const dataRef = useRef();

  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g" });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntry('6Jg48bibzbu3SdNVBv5Ruq').then((entry) => {
          setAmount(entry.fields.prices);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, [amount, client]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true)
  };

  const config = {
    number,
    email,
    amount: 4500000, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a',
  };

  const handleSuccess = (reference) => {
    dataRef.current.click();
    console.log(reference);
  };

  const handleClose = () => {
    console.log('closed');
  };

  const componentProps = {
    ...config,
    text: 'Pay with Paystack',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
    metadata: {
      name,
      address,
      phoneNumber: number,
      // Add any other fields you want to pass as metadata
    },
  };

  return (
    <div className='checkout'>
      <div className="header__onee">
        <Link to="/">
          <img src={log} alt="shopbiema" />
        </Link>
      </div>
      <div className='flex'>
        <div className='flexx'>
          <form onSubmit={handleSubmit}>
            <p>Kindly fill up to pay to complete purchase</p>
            <div className='inp'>
              <label>Full Name*</label>
              <input
                value={name}
                placeholder="Enter full name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='inp'>
              <label>Email*</label>
              <input
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='inp'>
              <label>Phone number*</label>
              <input
                value={number}
                placeholder="Enter phone number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className='inp'>
              <label>Address*</label>
              <input
                value={address}
                placeholder="Enter Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            {/* <div className=''>
              <p>Amount: {amount} Naira</p>
            </div> */}
            <button ref={dataRef} type="submit">Buy now</button>
          </form>
          <div className='btn-cover'>
            <PaystackConsumer  {...componentProps}>
              {({ initializePayment }) => <button disabled={false} className="paystack" onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
            </PaystackConsumer>
          </div>
        </div>
        <div className='card'>
          <img src={card} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
