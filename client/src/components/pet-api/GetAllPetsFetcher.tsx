import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { PetInfo } from "../types"

export const GetAllPetsFetcher = () => {

    // const [petName, setPetName] = useState("");
    const [allPets, setAllPets] = useState([] as PetInfo[]);
    useEffect(() => {


        fetch("/pets")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                setAllPets([petInfo])
            })
            .catch(() => setAllPets([]))
    }, [])

    console.log({ allPets })
    // if (!allPets || allPets.length === 0) {
    //     return (<div>
    //         <p>u need to hatch a pet</p>
    //         <HatchPetForm
    //             petName={petName}
    //             setPetName={setPetName}
    //         />
    //     </div>
    //     )
    // }

    return null
}

