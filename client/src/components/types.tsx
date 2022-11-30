import React, { Dispatch, SetStateAction, useState } from 'react';


//https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript
type Dispatcher<S> = Dispatch<SetStateAction<S>>;


type LoginProps = {
    name: string
    password: string
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
}

type SignUpProps = {
    name: string
    password: string
    spriteSelect: number | null
    setUsername: Dispatcher<string>
    setPassword: Dispatcher<string>
    setSpriteSelect: Dispatcher<number | null>
}

export { type LoginProps, type SignUpProps };