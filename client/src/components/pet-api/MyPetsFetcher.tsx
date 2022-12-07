import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { PetInfo, PetInfoContextType } from "../types"
import { PetInfoContext } from '../../context/petInfoContext';
import { PetNameContext } from '../../context/petNameContext';


export const MyPetsFetcher = () => {

    const petNameContext = useContext(PetNameContext) as string | null
    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType | null
    const [petName, setPetName] = useState("");
    const [myPets, setMyPets] = useState([] as PetInfo[]);
    useEffect(() => {


        fetch("/mypets")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                setMyPets([petInfo])
            })
            .catch(() => setMyPets([]))
    }, [])

    console.log({ myPets })
    if (!myPets || myPets.length === 0) {
        return (<div>
            <p>u need to hatch a pet</p>
            <HatchPetForm
                petName={petName}
                setPetName={setPetName}
            />
        </div>
        )
    }

    return myPets.length > 0 ? (<ShowPets
        myPets={myPets}
        setMyPets={setMyPets}
    />) : <p>loading</p>
}

