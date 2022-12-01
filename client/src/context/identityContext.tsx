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

    return (<IdentityContext.Provider value={{ name, onLogout, password, spriteSelect, setUsername, setPassword, setSpriteSelect }}>{children}</IdentityContext.Provider>)

}
