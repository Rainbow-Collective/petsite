import React, { useContext } from 'react'
import { IdentityContext } from '../../context/identityContext';
import { IdentityContextType } from '../types';

const GameApp = () => {
    const context = useContext(IdentityContext) as IdentityContextType;

    return (
        <div>
            <h1>GameApp</h1>
            <h1>hello {context.name}</h1>
        </div>
    )
}

export default GameApp