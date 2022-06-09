import React, { useEffect } from 'react';

import { Routes, Route, Navigate} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Payment from './pages/payment/payment.component';

import { GlobalStyle } from './global.styles';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      } 
      
      setCurrentUser(userAuth) 
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])
  
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/shop/*' element= {<ShopPage />} />
        <Route path='/checkout' element= {<CheckoutPage />} />

        <Route path='/signin' element = {currentUser ? (<Navigate to= "/" />) : <SignInAndSignOut /> } />
        <Route path='/payment' element= {<Payment />} />
      </Routes>
    </div> 
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
