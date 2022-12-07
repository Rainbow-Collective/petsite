import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HatchPetForm from "../pet-api/HatchPetForm";
import { Bar } from "@nivo/bar";
import { PetActionForm } from "../pet-api/PetActionForm";
import { IdentityContext } from "../../context/identityContext";
import { IdentityContextType, PetInfo, PetInfoContextType, PetNameContextType } from "../types";
import { PetInfoContext } from "../../context/petInfoContext";
import { PetNameContext } from "../../context/petNameContext";


type Dispatcher<S> = Dispatch<SetStateAction<S>>;


export default function ShowPets() {
    const context = useContext(IdentityContext) as IdentityContextType;

    const petNameContext = useContext(PetNameContext) as PetNameContextType
    const petInfoContext = useContext(PetInfoContext) as PetInfoContextType



    const [selectedPet, setSelectedPet] = useState(0);

    const [hunger, setHunger] = useState(petInfoContext.myPets[selectedPet].pet.hunger)
    const [attention, setAttention] = useState(petInfoContext.myPets[selectedPet].pet.attention)


    //data={[{ label: 'selectedPet', hunger: 4 }, { label: 'myotherpet', hunger: 6 }]}
    const barChartData = petInfoContext.myPets.length > 0 ? [
        { label: 'hunger', value: hunger },
        { label: 'attention', value: attention },
        { label: 'relationship', value: petInfoContext.myPets[selectedPet].relationship },
        { label: 'weight', value: petInfoContext.myPets[selectedPet].pet.weight },
        { label: 'height', value: petInfoContext.myPets[selectedPet].pet.height }
    ] : [];
    if (petInfoContext.myPets.length == 0) {
        return null;
    }
    return (<div>
        <PetActionForm
            myPets={petInfoContext.myPets}
            selectedPet={selectedPet}
            hunger={hunger}
            attention={attention}
            setHunger={setHunger}
            setAttention={setAttention}
        />
        <p>
            this is the pet {petInfoContext.myPets[selectedPet].pet.name}'s stats
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

