import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
