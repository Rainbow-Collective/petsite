import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { SignUpProps } from '../types'

const LoginOrSignUp = ({ name, setUsername, password, setPassword, spriteSelect, setSpriteSelect }: SignUpProps) => {



    const [loginOrSignUp, setLoginOrSignUp] = useState(true);

    const authToggle = () => {
        let buttonText = !loginOrSignUp ? "Switch to: Login" : "Switch to: Sign Up";
        return <h1
            onClick={() => { setLoginOrSignUp((cur) => (!cur)) }}
        >[{buttonText}]</h1>
    }


    const authForm = () => {
        return loginOrSignUp ? <Login
            name={name}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        /> :
            <SignUp
                name={name}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                spriteSelect={spriteSelect}
                setSpriteSelect={setSpriteSelect}

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