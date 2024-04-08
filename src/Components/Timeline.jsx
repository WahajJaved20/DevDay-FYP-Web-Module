import React from "react";
import HOC from "./HOC";
import { timelineCircleOne, timelineCircleTwo, timelineCircleThree } from "../assets";
function Timeline() {
    return(
        <>
            <ol class="items-start flex flex-col lg:flex-row">
                <li class="mb-6 sm:mb-0 mt-4">
                    <div class="hidden lg:block mt-3 sm:pe-8 flex flex-col justify-center">
                        <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                            Register your team here. Teams may have upto 3 members.</p>
                    </div>
                    <div class="flex items-center">
                        <img src={timelineCircleOne} className="w-16 h-16"></img>
                        <div class="hidden lg:block w-full bg-dashColor h-0.5"></div>
                    </div>
                    <div class="mt-3 flex flex-col justify-center">
                        <h1 class="text-lg font-circularStd text-black ">Initial Recognition</h1>
                        <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                        <h1 class="block mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                        <div class="block lg:hidden mt-3 sm:pe-8 flex flex-col justify-center">
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                Register your team here. Teams may have upto 3 members.</p>
                        </div>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0">
                    <div class="hidden lg:block sm:pe-8 flex flex-col justify-center">
                    <h1 class="mt-6 mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                    <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                    <h1 class="text-lg font-circularStd text-black mb-4">Submissions</h1>
                    </div>
                    <div class="flex items-center">
                        <img src={timelineCircleTwo} className="w-16 h-16"></img>
                        <div class="hidden lg:block w-full bg-dashColor h-0.5"></div>
                    </div>
                    <div class="mt-3 flex flex-col justify-center">
                        <div className="flex flex-col block lg:hidden">
                            <h1 class="text-lg font-circularStd text-black ">Submissions</h1>
                            <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                            <h1 class="block mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                Submit Your Report and Source Code</p>
                        </div>
                        
                        <div class="hidden lg:block mt-3 sm:pe-8 flex flex-col justify-center">
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                Submit Your Report and Source Code</p>
                        </div> 
                    </div>
                </li>
                <li class=" mb-6 sm:mb-0 mt-4">
                    <div class="hidden lg:block mt-3 sm:pe-8 flex flex-col justify-center">
                        <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                        On April 20th, check your emails to verify selection.</p>
                    </div>
                    <div class="flex items-center">
                        <img src={timelineCircleThree} className="w-16 h-16"></img>
                        <div class="hidden lg:block w-full bg-dashColor h-0.5"></div>
                    </div>
                    <div class="mt-3 flex flex-col justify-center">
                        <h1 class="text-lg font-circularStd text-black ">Selection</h1>
                        <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                        <h1 class="block mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                        <div class="block lg:hidden mt-3 sm:pe-8 flex flex-col justify-center">
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                On April 20th, check your emails to verify selection.</p>
                        </div>
                    </div>
                </li>
                <li class=" mb-6 sm:mb-0">
                    <div class="hidden lg:block mt-3 sm:pe-8 flex flex-col justify-center">
                    <h1 class="mb-2 text-sm font-circularStd leading-none mt-6 text-dateColor">April-2024</h1>
                    <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                    <h1 class="text-lg font-circularStd text-black mb-4">Presentations Schedule</h1>
                    </div>
                    <div class="flex items-center">
                        <img src={timelineCircleTwo} className="w-16 h-16"></img>
                        <div class="hidden lg:block w-full bg-dashColor h-0.5"></div>
                    </div>
                    <div class="mt-3 flex flex-col justify-center">
                        <div className="flex flex-col block lg:hidden">
                            <h1 class="text-lg font-circularStd text-black ">Presentations Schedule</h1>
                            <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                            <h1 class="block mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                Join us as we recognize the innovative submissions</p>
                        </div>
                        
                        <div class="hidden lg:block  mt-3 sm:pe-8 flex flex-col justify-center">
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                            Join us as we recognize the innovative ideas</p>
                        </div> 
                    </div>
                </li>
                <li class=" mb-6 mt-4 sm:mb-0">
                    <div class="hidden lg:block mt-3 sm:pe-8 flex flex-col justify-center">
                        <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                        Award the best of them. Meet us on 25th April.</p>
                    </div>
                    <div class="flex items-center">
                        <img src={timelineCircleOne} className="w-16 h-16"></img>
                    </div>
                    <div class="mt-3 flex flex-col justify-center">
                        <h1 class="text-lg font-circularStd text-black ">Award Ceremony</h1>
                        <div className="font-bold bg-dashColor h-2 w-8 mb-4"></div>
                        <h1 class="block mb-2 text-sm font-circularStd leading-none text-dateColor">April-2024</h1>
                        <div class="block lg:hidden mt-3 sm:pe-8 flex flex-col justify-center">
                            <p class="text-base font-circularStd text-black mr-[30%] mb-4">
                                Award the best of them. Meet us on 25th April</p>
                        </div>
                    </div>
                </li>
            </ol>


        </>
    );
}

const HOCTimeline  = HOC(Timeline);
export default HOCTimeline;