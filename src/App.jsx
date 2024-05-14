import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Header from "./components/common/Header"
import Inicio from './components/views/Inicio'

function App() {

  return (
    <>
      <Header></Header>
      <div className='main'>
        <Inicio></Inicio>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
