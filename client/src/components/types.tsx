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