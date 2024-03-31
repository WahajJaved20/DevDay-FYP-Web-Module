import React from 'react';
import { rocketLaunch } from '../assets';
import HOC from './HOC';
function Header ({scrollToTeamSection}){
    return (
        <div className='' >
        <div className='flex flex-row mx-auto justify-center relative'>
          <img
            src={rocketLaunch} // Replace with your image path
            alt="Innovation Showcase Rocket"
            className="object-cover lg:w-64 md:w-56 w-36 lg:h-64 md:h-56 h-36 opacity-100 z-0 relative"
          />
          <div className='flex flex-col ml-[-120px]'>
          <h1 className="text-[60px] text-primaryColor font-Gotham text-center lg:mt-16 md:mt-8 mt-4">FUTURE UNVEILED</h1>
          <p className="text-[30px] font-Gotham font-bold text-secondaryColor text-center">A SHOWCASE OF INNOVATION</p>
          
          </div>
          
        </div>
        <p className="text-md font-circularStd text-black text-center relative z-10 lg:ml-[25%] md:ml-[20%] lg:mr-[20%] md:mr-[15%]">
          Future Unveiled: A Showcase of Innovation invites final year students to unleash their creativity 
          and ingenuity in a dynamic competition resembling an innovation hackathon. As participants unveil 
          their groundbreaking projects before a panel of esteemed judges, the event becomes a nexus of 
          visionary ideas and cutting-edge technologies. Each project is meticulously evaluated on the 
          basis of its uniqueness, novelty, and innovative features, setting the stage for a thrilling 
          display of forward-thinking solutions poised to shape the future.
          </p>
          <div className="flex justify-center mt-10">
            <button onClick={scrollToTeamSection}
            className="bg-headerButton font-Gotham text-white hover:bg-gray-200 py-2 px-4 rounded-full shadow-md">
              Register Now!
            </button>
          </div>
        </div>
      );
};
const HOCHeader = HOC(Header);
export default HOCHeader;
