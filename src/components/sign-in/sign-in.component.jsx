import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput   from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss"

const SignIn = (props) => {

    const [userCredential, setUserCredential] = useState({ email: '', password: '' });
    

    const { email, password } = userCredential;
    
    const handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = props
        
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredential({
            ...userCredential, 
            [name]:value
        })
    }

    
    const { googleSignInStart } = props
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
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

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    }))
})

export default connect(null, mapDispatchToProps)(SignIn)