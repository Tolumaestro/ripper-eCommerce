import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PaystackButton } from "react-paystack";

import { selectCartTotal } from "../../redux/cart/cart.selectors";


import './payment.styles.scss'

const Payment = ({ total }) => {

    const getUsername = async state => {
      const result = await state.user.currentUser.displayName
      return result
    }

    const userName = useSelector( state => getUsername(state))
    console.log(userName);
    // const userName = useSelector( async state =>  await state.user.currentUser.displayName)
    const userEmail = useSelector( async state => await state.user.currentUser.email)
    

    const publicKey = "pk_test_02478df80f5a281efbcf42c2e23ac6d6617ce570"
    const amount = total * 100;
    const [email, setEmail] = useState(userEmail)
    const [name, setName] = useState(userName)
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [info, setInfo] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
          address,
          info
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
    }

    return (
      <div className="App">
        <div className="container">
            <div className="item">
                <div className="overlay-effect"></div>
                <img
                  className="item-image"
                  src="https://drive.google.com/uc?export=view&id=1xHYL-bbn2Bk2_2W5B1tbvTcH7W4Wnw9T"
                  alt="logo"
                />
                <div className="item-details">
                  <p className="item-details__title">Your total is</p>
                  <p className="item-details__amount">&#8358;{ total }</p>
                </div>
            </div>
            <div className="checkout">
                <div className="checkout-form">
                      <div className="checkout-field">
                          <label>Name</label>
                          <input
                            value={userName}
                            type="text"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                          />
                      </div>
                      <div className="checkout-field">
                          <label>Email</label>
                          <input
                            value={userEmail}
                            type="text"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                      </div>
                      <div className="checkout-field">
                          <label>Phone</label>
                          <input
                            type="text"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                      </div>
                      <div className="checkout-field">
                          <label>Address</label>
                          <textarea
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                          ></textarea> 
                      </div>
                      <div className="checkout-field">
                          <label>Additional Info</label>
                          <textarea
                            id="info"
                            onChange={(e) => setInfo(e.target.value)}
                          ></textarea> 
                      </div>

                      <PaystackButton className="paystack-button" {...componentProps} />
                </div>
            </div>
        </div>
      </div>
    )
}

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
})

export default connect(mapStateToProps)(Payment);