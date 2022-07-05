import React, { useEffect } from 'react';

import { Routes, Route, Navigate} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from "./redux/user/user.selectors"

import { checkUserSession } from './redux/user/user.actions';

import WithSpinner from './components/with-spinner/with-spinner.component';
import Payment from "./pages/payment/payment.component"

const App = ({ currentUser, checkUserSession }) => {
  
  useEffect(()=> {
    checkUserSession()
  }, [checkUserSession]);

  const PaymentWithSpinner = WithSpinner(Payment)
  
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path='/' element= {<HomePage />} />
        <Route path='/shop/*' element= {<ShopPage />} />
        <Route path='/checkout' element= {<CheckoutPage />} />

        <Route path='/signin' element = {currentUser ? (<Navigate to= "/" />) : <SignInAndSignOut /> } />
        <Route path='/payment' element= {<PaymentWithSpinner  />} />
      </Routes>
    </div> 
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
