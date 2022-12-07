import React, { useState } from 'react'
import { PetInfo, PetInfoContextType } from '../components/types';

type PetNameContextProviderProps = {
    children: JSX.Element
}


export const PetNameContext = React.createContext<string | null>(null)


export const PetNameProvider: React.FC<PetNameContextProviderProps> = ({ children }) => {
    const [name, setPetName] = useState("");
    return (
        <PetNameContext.Provider value={name}>{children}</PetNameContext.Provider>
    )
}
