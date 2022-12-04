import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import { NavLink } from "react-router-dom";
import { PetInfo } from "../types"

type Dispatcher<S> = Dispatch<SetStateAction<S>>;


type PetActionFormProps = {
    myPets: PetInfo[]
    selectedPet: number
    hunger: number
    attention: number
    setHunger: Dispatcher<number>
    setAttention: Dispatcher<number>
}

export const PetActionForm = ({ myPets, selectedPet, hunger, setHunger, attention, setAttention }: PetActionFormProps) => {


    function clampValue(boundedNumber: number) {
        return Math.min(Math.max(boundedNumber, 0), 10)
    }

    let postData = {
        "pet": {
            name: myPets[selectedPet].pet.name,
            hunger: hunger,
            attention: attention
        },
        "user_pet_relationship": {
            relationship: clampValue(myPets[selectedPet].relationship + 1) //TODO: this needs to go to a special route that will handle this param appropriately
        }
    }

    function postPetStats() {
        console.log(postData.pet.attention)
        postData.pet.hunger = clampValue(postData.pet.hunger);
        postData.pet.attention = clampValue(postData.pet.attention);
        fetch(`/pets/${myPets[selectedPet].pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((response) => {
            if (response.ok) {
                response.json().then((newPetInfo) => {
                    console.log(newPetInfo)
                });
            }
            else {
                //     response.json().then((errorData) => setErrors(errorData.errors));
                response.json().then((errorData) => console.log(errorData.errors));
            }
        });
    }
    function handlePetActionClick(option: number) {
        switch (option) {
            case 1:
                //u fed the pet
                // postData.hunger -= 1
                setHunger((cur: number) => {
                    return clampValue(cur -= 1)
                })
                postPetStats()
                break;
            case 2:
                // pay attention to the pet!!
                // postData.attention += 1
                setAttention((cur: number) => {
                    return clampValue(cur += 1)
                })
                postPetStats()
                break;
            case 3:
                // statement N
                console.log("How? Why?")
                break;
            default:
                // 
                console.log("haha u borked it")
                break;
        }

    }
    //check to see how much time has passed
    //TODO: move this logic to backend
    // useEffect(() => {

    //     if (hunger === null || attention === null) { return }

    //     let last_accessed_cookie = checkCookie('last_accessed')
    //     let last_accessed_date = last_accessed_cookie ? Date.parse(last_accessed_cookie) : 0;
    //     let now = Date.now()

    //     let time_passed = now - last_accessed_date
    //     if (time_passed > (4 * 3600000)) { // four hours

    //         if (postData.attention >= 0) postData.attention -= 1;
    //         if (postData.hunger < 10) postData.hunger += 1;

    //     }
    //     postPetStats()
    // }, [hunger, attention])





    return (
        <div className="display: flex; align-items: center; justify-content: center; p-10">
            <p>take care of your pet</p>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(1)}>[Feed]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Pay ATTENTION!!]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Cuddles!]</button></NavLink>
            <NavLink to="#"><button className="p-2 hover:bg-slate-400 " onClick={() => handlePetActionClick(2)} >[Play with me!]</button></NavLink>


        </div>
    )
}
