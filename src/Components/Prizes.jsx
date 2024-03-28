import React from "react";
import HOC from "./HOC";
import { firstPrize, secondPrize, thirdPrize } from "../assets";

function PrizesList(){
    const names = ["Winner", "1st Runner Up", "2nd Runner Up"]
    const images = {"Winner": firstPrize, "1st Runner Up": secondPrize, "2nd Runner Up": thirdPrize}
    return (
        <div className="flex lg:flex-row md:flex-row flex-col lg:m-16 md:m-8 m-4 justify-center">
            {
                names.map((name, index) => (
                    <div key={index} className="flex flex-col">
                        <p className="text-lg font-bold">{name}</p>
                        <img src={images[name]} className="h-36 w-auto"/>
                    </div>
                ))
            }
        </div>
    )
}

const HOCPrizes = HOC(PrizesList)
export default HOCPrizes;