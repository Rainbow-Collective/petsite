import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HatchPetForm from "./HatchPetForm";
import { Bar } from "@nivo/bar";
import { PetActionForm } from "./PetActionForm";
import { IdentityContext } from "../../context/identityContext";
import { IdentityContextType } from "../types";


//TODO: remove this after serializing out the digest
export type PetInfo = {
    id: number
    bio: string
    relationship?: number
    player: {
        id: number
        name: string
        password_digest: string
    }
    tama_character: {
        id: number
        name: string
        hunger: number
        attention: number
        sick: boolean
        weight: number
        height: number
    }

}
type Dispatcher<S> = Dispatch<SetStateAction<S>>;


type ShowPetsProps = {
    myPets: PetInfo[]
    setMyPets: Dispatcher<PetInfo[]>
}

export default function ShowPets({ myPets, setMyPets }: ShowPetsProps) {
    const context = useContext(IdentityContext) as IdentityContextType;

    const [selectedPet, setSelectedPet] = useState(0);

    const [hunger, setHunger] = useState(myPets[selectedPet].tama_character.hunger)
    const [attention, setAttention] = useState(myPets[selectedPet].tama_character.attention)


    //data={[{ label: 'selectedPet', hunger: 4 }, { label: 'myotherpet', hunger: 6 }]}
    const barChartData = myPets.length > 0 ? [
        { label: 'hunger', value: hunger },
        { label: 'attention', value: attention },
        { label: 'weight', value: myPets[selectedPet].tama_character.weight },
        { label: 'height', value: myPets[selectedPet].tama_character.height }
    ] : [];
    if (myPets.length == 0) {
        return null;
    }
    return (<div>
        <p>
            hello {myPets[selectedPet].player.name}
        </p>
        <PetActionForm
            myPets={myPets}
            selectedPet={selectedPet}
            hunger={hunger}
            attention={attention}
            setHunger={setHunger}
            setAttention={setAttention}
        />
        <p>
            this is your pet {myPets[selectedPet].tama_character.name}'s stats
        </p>
        <Bar
            width={400}
            height={400}
            data={barChartData}
            indexBy='label'
            keys={['value']}
            minValue={0}
            maxValue={10}
            groupMode="grouped"
            layout="horizontal"
            colors={{ scheme: "pastel1" }}
            colorBy={"indexValue"}
            labelTextColor="#aaaaaa"
            theme={{ 'legends': { 'text': { 'fill': '#aaaaaa' } } }}
            legends={[
                {
                    dataFrom: 'indexes',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 100,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in pet vital statistic: " + e.indexValue }}
        />
    </div>)
}

