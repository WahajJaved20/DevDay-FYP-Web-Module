import React, {useState} from "react";
import HOC from "./HOC";
import { useDropzone } from 'react-dropzone'
import { RxCross2 } from "react-icons/rx";
import { abstractIcon, uniquenessIcon, featuresIcon } from "../assets";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./CardUI";
function PaymentInfo(){

  const info = {
      title: "Muhammad Shahmir Raza",
      number: "03188409943",
      amount:1000, 
      // iban: "PK94FAYS0169007900161339",
      // bcode: "169",
      bank_name: "Nayapay",
  }

  return (
      <div className=' flex flex-col gap-1 md:gap-2 my-2 md:my-3 rounded-xl text-white p-3 md:p-5 bg-gray-800'>
          <div className='text-lg md:text-xl mb-5'>Pay Fees in the following Account and upload the receipt</div>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>Bank Name: </div>
              <div className=''>{info.bank_name}</div>
          </div>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>Account Title: </div>
              <div className=''>{info.title}</div>
          </div>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>Account Number: </div>
              <div className=''>{info.number}</div>
          </div>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>Amount: </div>
              <div className=''>{info.amount}</div>
          </div>
{/*             <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>IBAN: </div>
              <div className=''>{info.iban}</div>
          </div>
          <div className='flex flex-row gap-5'>
              <div className='text-gray-400'>Branch Code: </div>
              <div className=''>{info.bcode}</div>
          </div> */}
      </div>
  )
}

function UploadCloudIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M12 12v9" />
          <path d="m16 16-4-4-4 4" />
      </svg>
  )
}


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
        university: '',
    }
]
  function TeamSection({reference}) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: 'image/png, image/jpeg',
      maxFiles: 1,
      onDrop: (acceptedFiles) => {
          setFiles(acceptedFiles[0])
      },
  })

    const [formData, setFormData] = React.useState(formContent);
    const [files, setFiles] = useState(null)
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
      submissionFormData["university_name"] = formData[3].university;
      submissionFormData["fees_amount"] = 1000;
      submissionFormData["category"] = "FYP";
      submissionFormData["paid"] = false;
      submissionFormData["reference_code"] = "null";
      if (files === null) {
        alert('Please upload a payment receipt')
        return
    }
      try{
        const reader = new FileReader()
            reader.readAsDataURL(files)
            reader.onload = async () => {
                const base64Image = reader.result
                submissionFormData["payment_receipt"] = base64Image
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
          return true;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
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
      <div className="mt-8 justify-center flex flex-col px-8">
        <h1 className="font-Gotham text-2xl text-black font-bold mb-2 mr-8">UNIVERSITY NAME: </h1>
        <input
              value={formData[3].university}
              onChange={(e) => {
                  const newFormData = [...formData];
                  newFormData[3].university = e.target.value;
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
        <Card className="bg-white border-4 border-black mx-2  my-2">
                    <CardHeader>
                        <CardTitle className="text-headerColorTwo mx-auto mb-3">
                            UPLOAD PAYMENT RECEIPT
                        </CardTitle>
                        <CardDescription>
                            <PaymentInfo/>
                            Drag and drop your image or click the button below
                            to select file.
                        </CardDescription>
                    </CardHeader>
                    <CardContent
                        {...getRootProps()}
                        className={`flex flex-col items-center justify-center border-2 m-1  ${
                            isDragActive
                                ? 'border-blue-500'
                                : 'border-zinc-500 dark:border-zinc-800'
                        } border-dashed rounded-lg space-y-3`}
                    >
                        <input {...getInputProps()} />

                        {isDragActive ? (
                            <p className="text-blue-500">
                                Drop the file here...
                            </p>
                        ) : (
                            <>
                                <UploadCloudIcon className="w-16 h-16 text-zinc-500 dark:text-zinc-400 " />
                                <p className="text-gray-500 ">
                                    Drag & drop image here, or click to
                                    select image
                                </p>
                            </>
                        )}

                        {files && files.type && files.name && (
                            <div className="relative h-44 md:h-72 overflow-hidden round-md">
                                <img
                                    src={
                                        files.type.startsWith('image/')
                                            ? URL.createObjectURL(files)
                                            : ''
                                    }
                                    alt={files.name}
                                    className="rounded-lg"
                                />
                               <div
                                    className="border absolute top-2 right-2 m-1 rounded-full p-2 z-1000"
                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2e4f7cdb')}
                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                        setFiles(null)
                                    }}
                                >
                                    <RxCross2 className="text-black text-xl" />
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
        <div>
        <button onClick={()=>{
            if(handleSubmit()){
            alert("Registration Successful")
            window.location.reload();
            }else{
            alert("Registration Unsuccessful. Please try again later.")
            }
        }} 
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