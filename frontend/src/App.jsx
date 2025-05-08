import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Attendence from './pages/Attendence'

function App() {
    const [data, setData] = useState([])
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/attendence'} element={<Attendence data={data} setData={setData}/>}/>
      </Routes>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
