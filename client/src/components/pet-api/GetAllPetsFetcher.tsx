import React, { useContext, useEffect, useState } from 'react'
import HatchPetForm from './HatchPetForm'
import ShowPets from '../game/ShowPets'
import { AllPet, PetInfo, PetInfoContextType, PetNameContextType } from "../types"
import PetCard from '../game/PetCard'
import { PetInfoContext } from '../../context/petInfoContext'
import { PetNameContext } from '../../context/petNameContext'

export const GetAllPetsFetcher = () => {


    const petNameContext = useContext(PetNameContext) as PetNameContextType
    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType


    // const [petName, setPetName] = useState("");
    const [allPets, setAllPets] = useState([] as PetInfo[]);

    //console.log({ allPets })

    useEffect(() => {


        fetch("/user_pet_relationships")
            .then((response) => response.json())
            .then((petInfo) => {
                if ("error" in petInfo) {
                    return
                }
                setAllPets(petInfo)
                petInfoContext.setMyPets(petInfo)
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
            {allPets.map((pet) => <PetCard key={`pet${pet.id}`} relationship={pet} />
            )}
        </>)
    }


    return null
}

