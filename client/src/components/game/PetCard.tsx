import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { PetInfoContext } from '../../context/petInfoContext';
import { AllPet, PetInfo, PetInfoContextType } from '../types'

//TODO: ask maddie and rei about how this interface worked
interface PetCardProps {
    relationship: PetInfo;
}

const PetCard = (props: PetCardProps) => {
    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType

    let petSelectLink = <NavLink to={"/Play"}>
        <button onClick={() => {
            petInfoContext.setSelectedPetId(props.relationship.pet.id)
            console.log({ petID: petInfoContext.selectedPetId, clickedPetID: props.relationship.pet.id })
        }}
            className="block mx-auto">[{props.relationship.pet.name}]</button>
    </NavLink>

    return (
        <>
            {petSelectLink}
        </>
    )
}

export default PetCard