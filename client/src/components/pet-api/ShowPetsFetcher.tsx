import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { PetInfo } from "../types"

export const ShowPetsFetcher = () => {

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

