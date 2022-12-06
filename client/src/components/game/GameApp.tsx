import React, { useContext } from 'react'
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';
import { MyPetsFetcher } from '../pet-api/MyPetsFetcher';
import GameCanvas from '../canvas/GameCanvas';

const GameApp = () => {
    const context = useContext(IdentityContext) as IdentityContextType;

    return (
        <div>
            <h1>hello {context.name}</h1>
            <GameCanvas />
            <MyPetsFetcher />
        </div>
    )
}

export default GameApp