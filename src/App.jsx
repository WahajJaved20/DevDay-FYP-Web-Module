import { useState } from 'react'
import './App.css'
import  Navbar  from './Components/Navbar';
import HOCHeader from './Components/Header';
import HOCPrizes from './Components/Prizes';
function App() {

  return (
    <>
      <Navbar />
      <HOCHeader />
      <HOCPrizes />
    </>
  )
}

export default App;