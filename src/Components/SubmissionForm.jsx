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
        teamName: '',
    }
]
  function TeamSection({reference}) {
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
    async function handleSubmit() {
      let submissionFormData = {}
      submissionFormData['Team_Name'] = formData[3].teamName;
      submissionFormData['Leader_name'] = formData[0].name;
      submissionFormData['Leader_email'] = formData[0].email;
      submissionFormData['Leader_whatsapp_number'] = formData[0].whatsapp;
      submissionFormData['mem1_name'] = formData[1].name;
      submissionFormData['mem1_email'] = formData[1].email;
      submissionFormData['mem1_whatsapp_number'] = formData[1].whatsapp;
      submissionFormData['mem2_name'] = formData[2].name;
      submissionFormData['mem2_email'] = formData[2].email;
      submissionFormData['mem2_whatsapp_number'] = formData[2].whatsapp;
      submissionFormData['abstract'] = formData[3].abstract;
      submissionFormData['uniqueness'] = formData[3].uniqueness;
      submissionFormData['features'] = formData[3].features;
      submissionFormData["fees_amount"] = 1000;
      submissionFormData["category"] = "FYP";
      submissionFormData["paid"] = false;
      submissionFormData["reference_code"] = "null";
      try{
        await fetch('https://api.acmdevday.com/addFYPRegistration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionFormData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }catch(e){
      console.log(e);
    }
    }
    return (
    <div className="flex flex-col" ref={reference}>
      <div className="justify-center flex flex-col px-8">
        <h1 className="font-Gotham text-2xl text-black font-bold mb-2 mr-8">TEAM NAME: </h1>
        <input
              value={formData[3].teamName}
              onChange={(e) => {
                  const newFormData = [...formData];
                  newFormData[3].teamName = e.target.value;
                  setFormData(newFormData);
              }
              }
              type="text"
              style={{
                  padding: '0px',
                  border: 'none',
                  borderBottom: '2px solid black',
                  backgroundColor:"transparent",
                  outline: 'none',
                  fontSize: '24px',
              }}
              className="font-Gotham"
              />
      </div>
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
                <textarea value={formData[3].abstract} maxLength={70}
                onChange={(e) => {
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
                <textarea value={formData[3].uniqueness} maxLength={70}
                onChange={(e) => {
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
                <textarea value={formData[3].features} maxLength={70} 
                onChange={(e) => {
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
        <button onClick={handleSubmit} disabled={formData.some((data) => Object.values(data).some((value) => value === ''))}
        style={{
            boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
        }}
        className="bg-white text-black font-Gotham lg:text-2xl text-md mt-8 p-2 w-32 lg:ml-[80%]">SUBMIT</button>
        </div>
      </div>
    );
  }
  
const HOCTeamSection = HOC(TeamSection);
export default HOCTeamSection;