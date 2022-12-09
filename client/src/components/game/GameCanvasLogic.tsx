import React from 'react'
import GameCanvas from '../canvas/GameCanvas'

const GameLogic = () => {

    const petPosition = {
        x: 30,
        y: 30
    }

    return (
        <GameCanvas petPosition={petPosition} />
    )
}

export default GameLogic