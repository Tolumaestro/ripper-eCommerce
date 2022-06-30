import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {

    const [newUser, setNewUser] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword: ''}
    )

    const [message, setMessage] = useState("")
    const [messageClass, setMessageClass] = useState("")

    
    const { displayName, email, password, confirmPassword} = newUser;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            setTimeout(function(){
                setMessage("")
                setMessageClass('')
            }, 1500)
            setMessage("Passwords don't match");
            setMessageClass("error")
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword( email, password );

            createUserProfileDocument(user, {displayName});

            setNewUser({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            } )

            setTimeout(function(){
                setMessage("")
                setMessageClass('')
            }, 1500)
            setMessage("Signed up successfully")
            setMessageClass("success")
            
        } catch(error){
            
            setMessage(error.message)
            setMessageClass("error")

            return;
        }
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
            <span className={messageClass}>{ message }</span>
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

export default SignUp