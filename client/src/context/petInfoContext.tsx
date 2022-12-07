import React, { useState } from 'react'
import { PetInfo, PetInfoContextType } from '../components/types';

type PetInfoContextProviderProps = {
    children: JSX.Element
}


export const PetInfoContext = React.createContext<PetInfo[] | null>(null)


export const PetInfoProvider: React.FC<PetInfoContextProviderProps> = ({ children }) => {
    const [myPets, setMyPets] = useState([] as PetInfo[]);
    return (
        <PetInfoContext.Provider value={myPets}>{children}</PetInfoContext.Provider>
    )
}
