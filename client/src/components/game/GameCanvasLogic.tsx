import React, { useEffect, useCallback, useState } from 'react'
import GameCanvas from '../canvas/GameCanvas'

const GameLogic = () => {

    const [petPosition, setPetPosition] = useState({
        x: 30,
        y: 30
    })
    // const petPosition = {
    //     x: 30,
    //     y: 30
    // }

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        handleKey(event);
    }, []);


    const handleKey = (e: KeyboardEvent) => {
        switch (e.keyCode) {
            case 38:
            case 87:
                //up
                setPetPosition((current) => ({
                    x: current.x,
                    y: current.y - 16
                }))
                break;
            case 68:
            case 39:
                //right
                setPetPosition((current) => ({
                    x: current.x + 16,
                    y: current.y
                }))
                break;
            case 83:
            case 40:
                //down
                setPetPosition((current) => ({
                    x: current.x,
                    y: current.y + 16
                }))
                break;
            case 65:
            case 37:
                //left
                setPetPosition((current) => ({
                    x: current.x - 16,
                    y: current.y
                }))
                break;
        }
    };

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);





    return (
        <GameCanvas petPosition={petPosition} />
    )
}

export default GameLogic