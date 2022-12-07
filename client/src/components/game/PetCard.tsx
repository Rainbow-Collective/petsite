import React from 'react'
import { PetInfoContext } from '../../context/petInfoContext';
import { AllPet, PetInfo } from '../types'

//TODO: ask maddie and rei about how this interface worked
interface PetCardProps {
    pet: AllPet;
}

const PetCard = (props: PetCardProps) => {

    console.log({ PetInfoContext })
    let petSelectLink = <span>[{props.pet.name}]</span>

    return (
        <div>[{props.pet.name}]</div>
    )
}

export default PetCard