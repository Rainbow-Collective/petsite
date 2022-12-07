import React, { useState } from 'react'
import { PetInfo, PetNameContextType } from '../components/types';

type PetNameContextProviderProps = {
    children: JSX.Element
}


export const PetNameContext = React.createContext<PetNameContextType | null>(null)


export const PetNameProvider: React.FC<PetNameContextProviderProps> = ({ children }) => {
    const [petName, setPetName] = useState<string | null>(null);
    return (
        <PetNameContext.Provider value={{ petName, setPetName }}>{children}</PetNameContext.Provider>
    )
}
