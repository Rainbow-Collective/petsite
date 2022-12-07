import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { PetInfoContext } from '../../context/petInfoContext';
import { PetNameContext } from '../../context/petNameContext';
import { PetInfoContextType, PetNameContextType } from '../types';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type HatchPetProps = {
    petName: string
    setPetName: Dispatcher<string>
}



export default function HatchPetForm() {

    const petNameContext = useContext(PetNameContext) as PetNameContextType
    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType


    const history = useHistory();

    function onCreatePet() {
        history.push("/");
    }
    function getNumber() {
        // Returns a random integer from 1 to 10:
        return Math.floor(Math.random() * 10) + 1;
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch("/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: petNameContext,
                hunger: getNumber(),
                attention: 5,
                sick: false,
                weight: getNumber(),
                height: getNumber()
            }),
        })
            .then((response) => response.json())
            .then(() => onCreatePet());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Hatch A New Pet</h1>
            <label htmlFor="petName" className='p-2'>Speak a Name to Summon an Egg:</label>
            <input
                type="text"
                id="petName"
                value={petNameContext.petName ? petNameContext.petName : ""}
                onChange={(event) => petNameContext.setPetName(event.target.value)}
            />
            <button type="submit" className='p-4 hover:bg-slate-400'>[Summon An Egg]</button>
        </form>
    );
}