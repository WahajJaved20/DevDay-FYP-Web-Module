import React from "react";
import HOC from "./HOC";
import { teamwork } from "../assets";

function Callout() {
    return (
        <div>
            <div className='flex lg:flex-row md:flex-row flex-col mx-auto justify-center relative'>
          <img
            src={teamwork} // Replace with your image path
            alt="Innovation Showcase Rocket"
            className="object-cover lg:ml-64 md:ml-64 lg:w-64 md:w-56 w-48 lg:h-64 md:h-56 h-48 opacity-100 z-0 relative"
          />
          <div className='flex flex-col ml-4'>
          <h1 className="lg:text-[60px] md:text-[50px] text-[40px] text-innovationColor font-Gotham mt-4">Innovation</h1>
          <p className="text-[30px] font-Gotham font-bold text-subInnovation">has multiple roots!</p>
          <p className="text-md font-circularStd text-black text-left md:mr-[15%]">
            Your proposed product or solution may draw inspiration from various sources, 
            including social impact, industry challenges, governmental operations, or educational 
            tools, and may originate from any domain.
            <br/>
            What matters most is that your solution effectively tackles a real-world problem!</p>
          
          </div>
          
        </div>
        </div>
    );
}

const HOCCallout = HOC(Callout);
export default HOCCallout;