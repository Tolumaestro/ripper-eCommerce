import React, { useState } from "react";

import FormInput   from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss"

const SignIn = () => {

    const [userCredential, setUserCredential] = useState({ email: '', password: '' })

    const { email, password } = userCredential;
    
    const handleSubmit = async event => {
        event.preventDefault();

        try{
            await auth.signInWithEmailAndPassword(email, password);

            setUserCredential({email: "", password: ""});
        } catch(error){
            alert(error.code);
            return;
        }

        setUserCredential({email: "", password:""})
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
                    <CustomButton onClick= {signInWithGoogle} isGoogleSignIn>Sign in with google </CustomButton>
                </div>

            </form>
        </div>

    )
    
}


export default SignIn