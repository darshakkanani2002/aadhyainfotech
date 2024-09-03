import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Back_to_top from './Component/Back_to_top'

function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar></Navbar>
      <Footer></Footer>
      <Back_to_top></Back_to_top>
    </div>
  )
}

export default App
