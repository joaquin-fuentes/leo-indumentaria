import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import Header from "./components/common/Header"
import Inicio from './components/views/Inicio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className='main'>
          <Inicio></Inicio>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
