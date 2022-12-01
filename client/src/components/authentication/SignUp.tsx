//https://learning.flatironschool.com/courses/5230/pages/authenticating-users?module_item_id=486270
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';




export default function SignUp() {
    const context = useContext(IdentityContext) as IdentityContextType;
    const history = useHistory();
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    //https://www.kindacode.com/article/react-typescript-handling-form-onsubmit-event/
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: context.name,
                password: context.password,
                password_confirmation: passwordConfirmation,
                sprite_id: context.spriteSelect
            }),
        })
            .then((response) => response.json())
            .then(() => {
                context.setUsername(context.name)
                history.push("/play")
            });
    }

    //TODO: replace this with a sprite request and selector
    useEffect(() => {
        context.setSpriteSelect(1)
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <h1>Welcome to the Guild of the Magi! </h1>
            <h1>Create an Account</h1>
            <div>
                <div>
                    <div className='p-4'>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            // This is called "null coalescence" and it makes one popular with the ladies
                            value={context.name ?? ""}
                            onChange={(event) => context.setUsername(event.target.value)}
                        />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={context.password ?? ""}
                            onChange={(event) => context.setPassword(event.target.value)}
                        />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="password_confirmation">Confirm Password:</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(event) => setPasswordConfirmation(event.target.value)}
                        />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="user_sprite_select">Select Character:</label>
                        <input
                            type="dropdown"
                            id="user_sprite_select"
                            value={1}
                            onChange={(event) => context.setSpriteSelect((current) => {
                                return parseInt(event.target.value);
                            })}
                        />
                    </div>
                    <div>
                        <button type="submit" className='hover:bg-slate-400'>[Submit]</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
