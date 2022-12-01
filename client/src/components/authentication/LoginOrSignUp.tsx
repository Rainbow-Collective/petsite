import React, { useContext, useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

const LoginOrSignUp = () => {



    const [loginOrSignUp, setLoginOrSignUp] = useState(true);

    const authToggle = () => {
        let buttonText = !loginOrSignUp ? "Switch to: Login" : "Switch to: Sign Up";
        return <h1
            onClick={() => { setLoginOrSignUp((cur) => (!cur)) }}
        >[{buttonText}]</h1>
    }


    const authForm = () => {
        return loginOrSignUp ? <Login
        /> :
            <SignUp
            />
    }

    return (
        <div id="auth-wrapper">
            {authToggle()}
            {authForm()}
        </div>
    );







}

export default LoginOrSignUp