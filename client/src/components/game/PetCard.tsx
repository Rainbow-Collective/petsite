import React from 'react'
import petInfoContext from '../../context/petInfoContext';
import { AllPet, PetInfo } from '../types'

interface PetCardProps {
    pet: AllPet;
}

const PetCard = (props: PetCardProps) => {

    console.log({ props })

    return (
        <div>[{props.pet.name}]</div>
    )
}

export default PetCard