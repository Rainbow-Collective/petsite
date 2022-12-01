import React, { useState } from 'react';
import { IdentityContextType } from '../components/types';


//https://blog.logrocket.com/how-to-use-react-context-typescript/

export const IdentityContext = React.createContext<IdentityContextType | null>(null);

type IdentityContextProviderProps = {
    children: JSX.Element
}

export const IdentityProvider: React.FC<IdentityContextProviderProps> = ({ children }) => {
    const [name, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [spriteSelect, setSpriteSelect] = useState<number>(1)
    const onLogout = () => {
        fetch("/logout", {
            method: "DELETE",
        })
            .then(() => {
                setUsername(null);
            });
    }

    //TODO: return login form here
    // if (name === null || password === null) { return <p>u need to log in</p> }

    return (<IdentityContext.Provider value={{ name, onLogout, password, spriteSelect, setUsername, setPassword, setSpriteSelect }}>{children}</IdentityContext.Provider>)

}
// const identityContext = () => {
//     return (
//         <div>identityContext</div>
//     )
// }


// export type IdentityContextType = {
//     identity: {
//         name: string
//         password: string
//         spriteSelect: number | null
//     }
//     setUsername: Dispatcher<string>
//     setPassword: Dispatcher<string>
//     setSpriteSelect: Dispatcher<number | null>
// }