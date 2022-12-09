import React, { useState } from 'react'
import { PetInfo, PetInfoContextType } from '../components/types';

type PetInfoContextProviderProps = {
    children: JSX.Element
}


export const PetInfoContext = React.createContext<PetInfoContextType | null>(null)


export const PetInfoProvider: React.FC<PetInfoContextProviderProps> = ({ children }) => {
    const [myPets, setMyPets] = useState([] as PetInfo[]);
    const [selectedPetId, setSelectedPetId] = useState(null as number | null);
    return (
        <PetInfoContext.Provider value={{ myPets, selectedPetId, setMyPets, setSelectedPetId }}>{children}</PetInfoContext.Provider>
    )
}
