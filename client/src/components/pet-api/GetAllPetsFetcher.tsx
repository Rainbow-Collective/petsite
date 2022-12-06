import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { AllPet, PetInfo } from "../types"
import PetCard from '../game/PetCard'

export const GetAllPetsFetcher = () => {

    // const [petName, setPetName] = useState("");
    const [allPets, setAllPets] = useState([] as AllPet[]);

    console.log({ allPets })

    useEffect(() => {


        fetch("/pets")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                setAllPets(petInfo)
            })
            .catch(() => setAllPets([]))
    }, [])

    if (!allPets || allPets.length === 0) {
        return (<div>
            No pets were found in the world. This is an error, and we're looking into it. Thanks for your patience!
        </div>
        )
    }
    else {
        //this <> syntax is a react fragment. it is not rendered in the DOM a normal div but will be evaluated as HTML. technically more performant
        return (<>
            {allPets.map((pet) => <PetCard key={`pet${pet.id}`} pet={pet} />
            )}
        </>)
    }


    return null
}

