import React, { useEffect, lazy, Suspense } from 'react';

import { Routes, Route, Navigate} from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';
import { selectCurrentUser } from "./redux/user/user.selectors"

import { checkUserSession } from './redux/user/user.actions';

import WithSpinner from './components/with-spinner/with-spinner.component';
import Payment from "./pages/payment/payment.component"

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() =>import('./pages/shop/shop.component') )
const SignInAndSignOut = lazy(() => import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component'))
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"))



const App = ({ currentUser, checkUserSession }) => {
  
  useEffect(()=> {
    checkUserSession()
  }, [checkUserSession]);

  const PaymentWithSpinner = WithSpinner(Payment)
  
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <ErrorBoundary>
        <Suspense fallback= {<Spinner />}>
          <Routes>
            <Route path='/' element= {<HomePage />} />
            <Route path='/shop/*' element= {<ShopPage />} />
            <Route path='/checkout' element= {<CheckoutPage />} />

            <Route path='/signin' element = {currentUser ? (<Navigate to= "/" />) : <SignInAndSignOut /> } /> */
            <Route path='/payment' element= {<PaymentWithSpinner  />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
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
