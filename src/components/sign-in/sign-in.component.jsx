import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import FormInput   from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart, signInMessage } from "../../redux/user/user.actions";
import { selectUserError } from "../../redux/user/user.selectors";
import UserActionTypes from "../../redux/user/user.types"



import "./sign-in.styles.scss"

const SignIn = ({ emailSignInStart, googleSignInStart, error, signInMessage}) => {

    useEffect(()=>{
        signInMessage()
    },[signInMessage] )

    const [userCredential, setUserCredential] = useState({ email: '', password: '' });
    const [message, setMessage] = useState("")
    const [messageClass, setMessageClass] = useState("")
    

    const { email, password } = userCredential;
    
    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSignInStart(email, password)

        if(UserActionTypes.SIGN_IN_MESSAGE){
            setTimeout(function(){
                setMessage(error);
                setMessageClass("error")
            }, 1500)
            // console.log(error);
            // setMessage(error);
            // setMessageClass("error")
            return; 
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredential({
            ...userCredential, 
            [name]:value
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span className={messageClass}>{ message }</span>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email"
                type="email" 
                value={email} 
                onChange={handleChange} 
                label= "Email"
                required 
                /> 
                

                <FormInput 
                name="password" 
                type="password" 
                value={password} 
                onChange={handleChange} 
                label="Password"
                required 
                /> 
                
                <div className="buttons">
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton type="button" onClick= {googleSignInStart} isGoogleSignIn>Sign in with google </CustomButton>
                </div>

            </form>
        </div>

    )
    
}

const mapStateToProps = createStructuredSelector({
    error: selectUserError
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    })),
    signInMessage: () => dispatch(signInMessage())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)