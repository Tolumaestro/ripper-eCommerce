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

import { fetchCurrentUserStartAsync } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selectors"
import { selectIsCurrentUserFetching } from './redux/user/user.selectors';

import WithSpinner from './components/with-spinner/with-spinner.component';
import Payment from "./pages/payment/payment.component"

const App = ({ fetchCurrentUserStartAsync, currentUser, isCurrentUserFetching }) => {
  useEffect(() => {
    fetchCurrentUserStartAsync()
  }, [fetchCurrentUserStartAsync]);

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
        <Route path='/payment' element= {<PaymentWithSpinner isLoading={isCurrentUserFetching} />} />
      </Routes>
    </div> 
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCurrentUserFetching: selectIsCurrentUserFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCurrentUserStartAsync: user => dispatch(fetchCurrentUserStartAsync(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
