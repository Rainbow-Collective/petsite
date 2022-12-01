import React, { Dispatch, SetStateAction, useState } from 'react';


//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

//TODO: this is going away
export type LoginProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

export type IdentityContextType = {
    name: string
    password: string
    spriteSelect: number
}


// export type IdentityContextType = {
//     identity: {
//         name: string
//         password: string
//         spriteSelect: number | null
//     }
//     setUsername: Dispatcher<string>
//     setPassword: Dispatcher<string>
//     setSpriteSelect: Dispatcher<number | null>
// }