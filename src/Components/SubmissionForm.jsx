import React from "react";
import HOC from "./HOC";
function TeamMember({ header, name, email, whatsapp }) {
    const [emailID, setEmailID] = React.useState('');
    return (
      <div className="flex flex-col py-8 px-4">
        <h1 className="font-Gotham text-4xl text-black font-bold mb-2">{header}</h1>
        <p className="font-Gotham text-black font-bold">{name}</p>
        <input value={emailID} onChange={(e)=>{setEmailID(e.target.value)}}
          className="border-b  bg-transparent  border-black outline-none" type="text" />
        <p className="font-Gotham text-black font-bold">{email}</p>
        <p className="font-Gotham text-black font-bold">{whatsapp}</p>
      </div>
    );
  }

  function TeamSection() {
    const teamMembers = [
      {
        header: 'TEAM LEADER',
        name: "NAME",
        email: 'EMAIL',
        whatsapp: 'WHATSAPP NUMBER',
      },
      {
        header: 'MEMBER 1',
        name: "NAME",
        email: 'EMAIL',
        whatsapp: 'WHATSAPP NUMBER',
      },
      {
        header: 'MEMBER 2',
        name: "NAME",
        email: 'EMAIL',
        whatsapp: 'WHATSAPP NUMBER',
      },
      
    ];
  
    return (
      <div className="grid grid-cols-1 border-none md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    );
  }
  
const HOCTeamSection = HOC(TeamSection);
export default HOCTeamSection;