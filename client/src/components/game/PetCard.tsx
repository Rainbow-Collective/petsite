import React, { useContext } from 'react'
import { PetInfoContext } from '../../context/petInfoContext';
import { AllPet, PetInfo, PetInfoContextType } from '../types'

//TODO: ask maddie and rei about how this interface worked
interface PetCardProps {
    pet: AllPet;
}

const PetCard = (props: PetCardProps) => {

    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType

    let petSelectLink = <button onClick={() => {
        petInfoContext.setSelectedPetId(props.pet.id)
    }}
        className="block mx-auto">[{props.pet.name}]</button>

    return (
        <>
            {petSelectLink}
        </>
    )
}

export default PetCard