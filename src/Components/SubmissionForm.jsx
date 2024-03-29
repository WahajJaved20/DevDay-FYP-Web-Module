import React from "react";
import HOC from "./HOC";
import { abstractIcon, uniquenessIcon, featuresIcon } from "../assets";
  const formContent = [
    {
        header: 'TEAM LEADER',
        name: "",
        email: '',
        whatsapp: '',
    },
    {
        header: 'MEMBER 1',
        name: "",
        email: '',
        whatsapp: '',
    },
    {
        header: 'MEMBER 2',
        name: "",
        email: '',
        whatsapp: '',
    },
    {
        abstract: "",
        uniqueness: '',
        features: '',
    }
]
  function TeamSection() {
    const [formData, setFormData] = React.useState(formContent);
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
    <div className="flex flex-col">
      <div className="grid grid-cols-1 border-none md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {teamMembers.map((member, index) => (
          <div className="flex flex-col py-8 px-4">
          <h1 className="font-Gotham text-4xl text-black font-bold mb-2">{member.header}</h1>
          <p className="font-Gotham text-black font-bold mb-2 mt-2">{member.name}</p>
          <input
              value={formData[index].name}
              onChange={(e) => {
                  const newFormData = [...formData];
                  newFormData[index].name = e.target.value;
                  setFormData(newFormData);
              }
              }
              type="text"
              style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '2px solid black',
                  backgroundColor:"transparent",
                  outline: 'none',
              }}
              className="font-Gotham"
              />
          <p className="font-Gotham text-black font-bold mt-2 mb-2">{member.email}</p>
          <input
              type="text"
              value={formData[index].email}
                onChange={(e) => {
                    const newFormData = [...formData];
                    newFormData[index].email = e.target.value;
                    setFormData(newFormData);
                }
                }
              style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '2px solid black',
                  backgroundColor:"transparent",
                  outline: 'none',
              }}
              className="font-Gotham"
              />
          <p className="font-Gotham text-black font-bold mt-2 mb-2">{member.whatsapp}</p>
          <input
              type="text"
            value={formData[index].whatsapp}
                onChange={(e) => {
                    const newFormData = [...formData];
                    newFormData[index].whatsapp = e.target.value;
                    setFormData(newFormData);
                }
                }
              style={{
                  width: '100%',
                  padding: '10px',
                  border: 'none',
                  borderBottom: '2px solid black',
                  backgroundColor:"transparent",
                  outline: 'none',
              }}
              className="font-Gotham"
              />
        </div>
        ))}

      </div>
      <div className="mt-16">
              <div className="flex flex-col">
                <div className="flex flex-row">
                    <img src={abstractIcon} alt="abstractIcon" className="h-32 w-32" />
                    <div className="flex flex-col mt-8 w-full ">
                        <h1 className="text-primaryColor font-Gotham text-2xl"> PROJECT ABSTRACT </h1>
                        <p className="font-circularStd max-w-full">[1] Outline the brief summary of your Project.</p>
                <textarea value={formData[3].abstract} onChange={(e) => {
                    const newFormData = [...formData];
                    newFormData[3].abstract = e.target.value;
                    setFormData(newFormData);
                }}
                className="w-[100%] font-circukarStd h-32 mt-4 p-4 bg-transparent rounded-8" placeholder="Type here..." />

                    </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                    <img src={uniquenessIcon} alt="abstractIcon" className="h-32 w-32" />
                    <div className="flex flex-col mt-8 w-full">
                        <h1 className="text-primaryColor font-Gotham text-2xl"> UNIQUENESS </h1>
                        <p className="font-circularStd max-w-full">[2] What makes your project unique or Standout - the WOW Factor.</p>
                <textarea value={formData[3].uniqueness} onChange={(e) => {
                    const newFormData = [...formData];
                    newFormData[3].uniqueness = e.target.value;
                    setFormData(newFormData);
                }}
                className="w-[100%] font-circukarStd h-32 mt-4 p-4 bg-transparent rounded-8" placeholder="Type here..." />

                    </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                    <img src={featuresIcon} alt="abstractIcon" className="h-32 w-32 sm:ml-[-10px] ml-[-32px]" />
                    <div className="flex flex-col mt-8 w-full">
                        <h1 className="text-primaryColor font-Gotham text-2xl"> FEATURES AND FUNCTIONALITY </h1>
                        <p className="font-circularStd max-w-full">[3] What are the main features that drive your project and functionalities that fulfill its' purpose.</p>
                <textarea value={formData[3].features} onChange={(e) => {
                    const newFormData = [...formData];
                    newFormData[3].features = e.target.value;
                    setFormData(newFormData);
                }
                }
                className="w-[100%] font-circukarStd h-32 mt-4 p-4 bg-transparent rounded-8" placeholder="Type here..." />

                    </div>
                </div>
              </div>
         
        </div>
        <div>
        <button style={{
            boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
        }}
        className="bg-white text-black font-Gotham lg:text-2xl text-md mt-8 p-2 w-32 lg:ml-[80%]">SUBMIT</button>
        </div>
      </div>
    );
  }
  
const HOCTeamSection = HOC(TeamSection);
export default HOCTeamSection;