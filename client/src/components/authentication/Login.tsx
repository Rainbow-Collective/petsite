import React, { Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from "react-router-dom";
//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type LoginProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

export default function Login({ name, setUsername, password, setPassword }: LoginProps) {
    const [controlledFormName, setControlledFormName] = useState(null as string | null);
    const [controlledFormPassword, setControlledFormPassword] = useState(null as string | null);

    const history = useHistory();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("http://localhost:3000/login", {
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
                setUsername(name.name)
                setControlledFormName(null)
                setControlledFormPassword(null)
                history.push("/testing");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <h1>hello {name}</h1>
            <div>
                <div className='p-4'>
                    <label htmlFor="name" className='p-4'>Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={controlledFormName ? controlledFormName : "username"}
                        onChange={(event) => setControlledFormName(event.target.value)}
                    />
                </div>
                <div className='p-4'>
                    <label htmlFor="password" className='p-4'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={controlledFormPassword ? controlledFormPassword : "pass"}
                        onChange={(event) => setControlledFormPassword(event.target.value)}
                    />
                </div>
                <button type="submit" className='p-4 hover:bg-slate-400'>Login</button>
            </div>
        </form>
    );
}