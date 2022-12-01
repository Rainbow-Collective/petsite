import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';



export default function Login() {
    const [controlledFormName, setControlledFormName] = useState(null as string | null);
    const [controlledFormPassword, setControlledFormPassword] = useState(null as string | null);
    const context = useContext(IdentityContext) as IdentityContextType;


    const history = useHistory();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: controlledFormName,
                password: controlledFormPassword
            }),
        })
            .then((response) => response.json())
            .then((name) => {
                console.log({ name })
                context.setUsername(name.name)
                setControlledFormName(null)
                setControlledFormPassword(null)
                history.push("/testing");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <h1>hello {context.name}</h1>
            <div>
                <div className='p-4'>
                    <label htmlFor="name" className='p-4'>Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={controlledFormName ? controlledFormName : ""}
                        onChange={(event) => setControlledFormName(event.target.value)}
                    />
                </div>
                <div className='p-4'>
                    <label htmlFor="password" className='p-4'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={controlledFormPassword ? controlledFormPassword : ""}
                        onChange={(event) => setControlledFormPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className='p-4 hover:bg-slate-400'>[Login]</button>
            </div>
        </form>
    );
}