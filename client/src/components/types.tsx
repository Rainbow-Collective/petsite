import React, { Dispatch, SetStateAction, useState } from 'react';


//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export type IdentityContextType = {
    name: string | null
    password: string | null
    spriteSelect: number
    onLogout: () => void
    setUsername: Dispatcher<string | null>
    setPassword: Dispatcher<string | null>
    setSpriteSelect: Dispatcher<number>
}

export type PetInfoContextType = {
    id: number
    bio: string
    relationship?: number
    player: {
        id: number
        name: string
        password_digest: string
    }
    pet: {
        id: number
        name: string
        hunger: number
        attention: number
        sick: boolean
        weight: number
        height: number
    }
}


//TODO: remove this after serializing out the digest
export type PetInfo = {
    id: number
    bio: string
    relationship: number
    user: {
        id: number
        name: string
        password_digest: string
    }
    pet: {
        id: number
        name: string
        hunger: number
        attention: number
        sick: boolean
        weight: number
        height: number
    }


}

export type AllPet = {
    attention: number | null
    diet: string | null
    height: number
    hunger: number
    id: number
    name: string
    species: string | null
    sprite: number
    weight: number
}


export type AllPetsResponse = {


}