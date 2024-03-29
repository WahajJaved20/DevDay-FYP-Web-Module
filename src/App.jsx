import { useState } from 'react'
import './App.css'
import  Navbar  from './Components/Navbar';
import HOCHeader from './Components/Header';
import HOCPrizes from './Components/Prizes';
import HOCCallout from './Components/Callout';
import HOCTimeline from './Components/Timeline';
function App() {

  return (
    <>
      <Navbar />
      <HOCHeader />
      <HOCPrizes />
      <HOCCallout />
      <HOCTimeline />
    </>
  )
}

export default App;