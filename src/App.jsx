import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/common/Footer'
import Header from "./components/common/Header"
import Inicio from './components/views/Inicio'
import Login from './components/views/administrador/Login'
import RutasAdministrador from './components/routes/RutasAdministrador'
import RutasProtegidas from './components/routes/RutasProtegidas'
import Error404 from './components/views/Error404'

function App() {
  
  const usuarioDelSessionStorage = JSON.parse(sessionStorage.getItem("usuarioLogueado")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioDelSessionStorage);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div className='main'>
        <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} />} /> 
            <Route path="/administrador/*" element={<RutasProtegidas><RutasAdministrador /></RutasProtegidas>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
