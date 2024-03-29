import { useState } from 'react'
import './App.css'
import  Navbar  from './Components/Navbar';
import HOCHeader from './Components/Header';
import HOCPrizes from './Components/Prizes';
import HOCCallout from './Components/Callout';
import HOCTimeline from './Components/Timeline';
import HOCVennDiagram from './Components/VennDiagram';
import HOCTeamSection from './Components/SubmissionForm';
function App() {

  return (
    <>
      <Navbar />
      <HOCHeader />
      <HOCPrizes />
      <HOCCallout />
      <HOCTimeline />
      <HOCVennDiagram />
      <HOCTeamSection />
    </>
  )
}

export default App;