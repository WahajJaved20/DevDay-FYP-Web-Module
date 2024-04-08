import { useRef } from 'react'
import './App.css'
import  Navbar  from './Components/Navbar';
import HOCHeader from './Components/Header';
import HOCPrizes from './Components/Prizes';
import HOCCallout from './Components/Callout';
import HOCTimeline from './Components/Timeline';
import HOCVennDiagram from './Components/VennDiagram';
import HOCTeamSection from './Components/SubmissionForm';
import { Analytics } from "@vercel/analytics/react"
function App() {
  const teamSectionRef = useRef(null);

  const scrollToTeamSection = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Analytics />
      <Navbar />
      <HOCHeader scrollToTeamSection={scrollToTeamSection}/>
      {/* <HOCPrizes /> */}
      <HOCCallout />
      <HOCTimeline />
      <HOCVennDiagram />
      <HOCTeamSection reference={teamSectionRef} />
    </>
  )
}

export default App;