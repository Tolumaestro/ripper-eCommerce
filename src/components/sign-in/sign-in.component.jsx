import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import FormInput   from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { selectUserSignInError, selectUserSignInStart } from "../../redux/user/user.selectors";
import "./sign-in.styles.scss"

const SignIn = ({ emailSignInStart, googleSignInStart, error, start}) => {

    const [userCredential, setUserCredential] = useState({ email: '', password: '' });
    const messageClass = "error"
    
    const { email, password } = userCredential;
    
    const handleSubmit = async event => {
        event.preventDefault();
        await emailSignInStart(email, password)
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
            <span>Sign in with your email and password</span>
            {error && <span className={messageClass}>{error}</span> }
            {start && <span className="success">{start}</span> }

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
    start: selectUserSignInStart,
    error: selectUserSignInError
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    }))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)