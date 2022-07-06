import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";
import { selectUserSignUpError } from "../../redux/user/user.selectors";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart, error, done }) => {

    const [newUser, setNewUser] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword: ''}
    )

    const [message, setMessage] = useState("")
    const messageClass = "error"

    
    const { displayName, email, password, confirmPassword } = newUser;

    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword) {
            setMessage("Passwords don't match");
            return;
        }
        
        signUpStart({ displayName, email, password })
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    return(
        <div className="sign-up">
            <h2 className="title">
                I do not have an account
            </h2>
            <span>Sign up with your email and password</span>
            {error || message ? <span className={messageClass}>{ error } { message }</span> : ""}
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text"
                    name="displayName"
                    value= {displayName}
                    onChange={handleChange}
                    label="User Name"
                    required
                />
                <FormInput 
                    type="email"
                    name="email"
                    value= {email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput 
                    type="password"
                    name="password"
                    value= {password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput 
                    type="password"
                    name="confirmPassword"
                    value= {confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit">Sign Up</CustomButton>
            
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    error: selectUserSignUpError
})

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)