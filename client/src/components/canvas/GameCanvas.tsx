import { setPriority } from 'os'
import React, { useEffect, useRef, useState } from 'react'
import { Context } from 'vm'

const GameCanvas = () => {
    //public ref example
    //<img src={process.env.PUBLIC_URL + "/images/Notes_221202_103856.jpg"} className="mx-auto w-80" alt="canvas  placeholder" />

    //bind spritesheet to var
    //char spritesheet
    let char_spriteSheet = <img src={process.env.PUBLIC_URL + "/images/Cute RPG - Sprites 2/Characters/Character_045.png"} className="spritesheet" alt="spritesheet" />

    //pet spritesheet
    const [pet_spriteSheet, setPet_spriteSheet] = useState(null as HTMLImageElement | null)
    // set the pet spritesheet when the image is loaded
    useEffect(() => {
        let image = new Image();
        // image.src = process.env.PUBLIC_URL + "/images/Cute RPG - Free/16x16/pets/Pet06_04.png";
        image.src = "/images/CuteRPG-Free/16x16/pets/Pet06_04.png";
        image.onload = () => { setPet_spriteSheet(image) }
    }, [])

    //defining canvas and ref
    const canvasRef = useRef(null as HTMLCanvasElement | null)


    const draw = (ctx: CanvasRenderingContext2D, spriteSheet: HTMLImageElement) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
        ctx.fillText(`Canvas Width: ${ctx.canvas.width}`, 20, 20)

        type TestSpriteParams = {
            sheetX: number
            sheetY: number
            width: number
            height: number

            canvasX: number
            canvasY: number
            scaleWidth: number
            scaleHeight: number
        }
        //https://stackoverflow.com/questions/26015497/how-to-resize-then-crop-an-image-with-canvas
        //TODO: put this as an export somewhere
        const drawSprite = (params: TestSpriteParams) => {
            ctx.drawImage(spriteSheet, params.sheetX, params.sheetY, params.width, params.height, params.canvasX, params.canvasY, params.scaleWidth, params.scaleHeight)
        }
        let testSpriteParamsObj = {
            sheetX: 6,
            sheetY: 8,
            width: 16,
            height: 16,
            canvasX: 30,
            canvasY: 30,
            scaleWidth: 32,
            scaleHeight: 32
        }
        drawSprite(testSpriteParamsObj)
    }

    useEffect(() => {
        if (canvasRef.current !== null) {
            const context = canvasRef.current.getContext("2d");
            if (context !== null && pet_spriteSheet !== null) {
                draw(context, pet_spriteSheet)
            }
        }
    }, [draw])


    return (
        <div className="border-gray-600 border" >
            <canvas ref={canvasRef} width={400} height={600} />
        </div >
    )
}

export default GameCanvas