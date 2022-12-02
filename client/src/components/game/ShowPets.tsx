import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HatchPetForm from "../pet-api/HatchPetForm";
import { Bar } from "@nivo/bar";
import { PetActionForm } from "../pet-api/PetActionForm";
import { IdentityContext } from "../../context/identityContext";
import { IdentityContextType, PetInfo } from "../types";


type Dispatcher<S> = Dispatch<SetStateAction<S>>;


type ShowPetsProps = {
    myPets: PetInfo[]
    setMyPets: Dispatcher<PetInfo[]>
}

export default function ShowPets({ myPets, setMyPets }: ShowPetsProps) {
    const context = useContext(IdentityContext) as IdentityContextType;

    const [selectedPet, setSelectedPet] = useState(0);

    const [hunger, setHunger] = useState(myPets[selectedPet].pet.hunger)
    const [attention, setAttention] = useState(myPets[selectedPet].pet.attention)


    //data={[{ label: 'selectedPet', hunger: 4 }, { label: 'myotherpet', hunger: 6 }]}
    const barChartData = myPets.length > 0 ? [
        { label: 'hunger', value: hunger },
        { label: 'attention', value: attention },
        { label: 'relationship', value: myPets[selectedPet].relationship },
        { label: 'weight', value: myPets[selectedPet].pet.weight },
        { label: 'height', value: myPets[selectedPet].pet.height }
    ] : [];
    if (myPets.length == 0) {
        return null;
    }
    return (<div>
        <img src={process.env.PUBLIC_URL + "/images/Notes_221202_103856.jpg"} className="mx-auto w-80" alt="canvas  placeholder" />

        <PetActionForm
            myPets={myPets}
            selectedPet={selectedPet}
            hunger={hunger}
            attention={attention}
            setHunger={setHunger}
            setAttention={setAttention}
        />
        <p>
            this is your pet {myPets[selectedPet].pet.name}'s stats
        </p>
        <Bar
            width={600}
            height={600}
            data={barChartData}
            indexBy='label'
            keys={['value']}
            minValue={0}
            maxValue={10}
            groupMode="grouped"
            colors={{ scheme: "pastel1" }}
            colorBy={"indexValue"}
            labelTextColor="#aaaaaa"
            theme={{ 'legends': { 'text': { 'fill': '#aaaaaa' } } }}
            legends={[
                {
                    dataFrom: 'indexes',
                    anchor: 'top-right',
                    direction: 'row',
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

