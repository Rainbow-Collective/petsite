import React, { useState } from 'react';
import { IdentityContextType } from '../components/types';


//https://blog.logrocket.com/how-to-use-react-context-typescript/

export const IdentityContext = React.createContext<IdentityContextType | null>(null);

type IdentityContextProviderProps = {
    children: JSX.Element
}


const IdentityContextProvider: React.FC<IdentityContextProviderProps> = ({ children }) => {
    const [name, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [spriteSelect, setSpriteSelect] = useState(1)

    //TODO: return login form here
    if (name === null || password === null) { return <p>u need to log in</p> }

    return (<IdentityContext.Provider value={{ name, password, spriteSelect }}>{children}</IdentityContext.Provider>)

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