import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { PetInfo, PetInfoContextType } from "../types"
import { PetInfoContext } from '../../context/petInfoContext';


export const MyPetsFetcher = () => {

    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType
    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                petInfoContext.setMyPets([petInfo])
            })
            .catch(() => petInfoContext.setMyPets([]))
    }, [])
    // console.log(petInfoContext.myPets)
    if (!petInfoContext.myPets || petInfoContext.myPets.length === 0) {
        return (<div>
            <p>u need to hatch a pet</p>
            <HatchPetForm />
        </div>
        )
    }

    return petInfoContext.myPets.length > 0 ? (<ShowPets />) : <p>loading</p>
}

