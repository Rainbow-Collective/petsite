import React, { useContext } from 'react'
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';
import { ShowPetsFetcher } from './ShowPetsFetcher';

const GameApp = () => {
    const context = useContext(IdentityContext) as IdentityContextType;

    return (
        <div>
            <h1>GameApp</h1>
            <h1>hello {context.name}</h1>
            <ShowPetsFetcher />
        </div>
    )
}

export default GameApp