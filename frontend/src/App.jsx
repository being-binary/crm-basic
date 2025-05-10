import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Attendence from './pages/Attendence'
import Salary from './pages/Salary'

function App() {
    const [data, setData] = useState([])
    const [salaryData, setSalaryData] = useState([])
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/attendence'} element={<Attendence data={data} setData={setData}/>}/>
        <Route path={'/salary'} element={<Salary data={salaryData} setData={setSalaryData}/>}/>
      </Routes>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
