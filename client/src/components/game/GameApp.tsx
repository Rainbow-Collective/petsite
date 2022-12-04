import React, { useContext } from 'react'
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';
import { ShowPetsFetcher } from '../pet-api/ShowPetsFetcher';
import GameCanvas from '../canvas/GameCanvas';

const GameApp = () => {
    const context = useContext(IdentityContext) as IdentityContextType;

    return (
        <div>
            <h1>GameApp</h1>
            <h1>hello {context.name}</h1>
            <GameCanvas />
            <ShowPetsFetcher />
        </div>
    )
}

export default GameApp