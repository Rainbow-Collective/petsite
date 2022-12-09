import React, { useState } from 'react'
import { PetInfo, PetNameContextType } from '../components/types';

type PetNameContextProviderProps = {
    children: JSX.Element
}
//TODO: create a GameContext to store selected pet ID as well as other game-related contexts

export const PetNameContext = React.createContext<PetNameContextType | null>(null)


export const PetNameProvider: React.FC<PetNameContextProviderProps> = ({ children }) => {
    const [petName, setPetName] = useState<string | null>(null);
    return (
        <PetNameContext.Provider value={{ petName, setPetName }}>{children}</PetNameContext.Provider>
    )
}
