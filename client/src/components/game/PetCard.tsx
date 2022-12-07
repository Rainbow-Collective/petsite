import React, { useContext } from 'react'
import { PetInfoContext } from '../../context/petInfoContext';
import { AllPet, PetInfo, PetInfoContextType } from '../types'

//TODO: ask maddie and rei about how this interface worked
interface PetCardProps {
    pet: AllPet;
}

const PetCard = (props: PetCardProps) => {


    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType


    console.log({ petInfoContext })
    let petSelectLink = <span>[{props.pet.name}]</span>

    return (
        <div>[{props.pet.name}]</div>
    )
}

export default PetCard