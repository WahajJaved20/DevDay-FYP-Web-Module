import { useState } from 'react'
import './App.css'
import  Navbar  from './Components/Navbar';
import HOCHeader from './Components/Header';
function App() {

  return (
    <>
      <Navbar />
      <HOCHeader />
    </>
  )
}

export default App;