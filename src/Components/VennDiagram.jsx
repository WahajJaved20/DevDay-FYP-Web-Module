import React from "react";

import HOC from "./HOC";
import { vennDiagram } from "../assets";

function vennDiagramComponent(){
    return (
        <>
            <img src={vennDiagram} alt="Venn Diagram" />
            <div className="w-full bg-dashColor ml-4 mr-4 text-[1px]">-</div>
        </>
    );
}

const HOCVennDiagram = HOC(vennDiagramComponent);
export default HOCVennDiagram;