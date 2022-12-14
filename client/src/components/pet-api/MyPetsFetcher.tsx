import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { PetInfo, PetInfoContextType, PetNameContextType } from "../types"
import { PetInfoContext } from '../../context/petInfoContext';
import { PetNameContext } from '../../context/petNameContext';


export const MyPetsFetcher = () => {

    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType
    useEffect(() => {

        if (!petInfoContext.selectedPetId) {

            fetch("/mypets")
                .then((response) => response.json())
                .then((petInfo) => {
                    if ("error" in petInfo) {
                        return
                    }
                    petInfoContext.setMyPets([petInfo])
                    petInfoContext.setSelectedPetId(petInfo.pet.id)

                })
                .catch(() => petInfoContext.setMyPets([]))
        }

    }, [])

    if (!petInfoContext.myPets || petInfoContext.myPets.length === 0) {
        return (<div>
            <p>u need to hatch a pet</p>
            <HatchPetForm />
        </div>
        )
    }

    return (petInfoContext.myPets.length > 0 && petInfoContext.selectedPetId) ? (<ShowPets />) : <p>loading</p>
}

