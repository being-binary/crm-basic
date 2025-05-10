import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full h-[65px] bg-[#2d4e83]'>
            <div className='w-full h-full flex flex-row justify-between items-center px-10 text-white capitalize'>
                <h1 className='text-2xl uppercase font-semibold tracking-wider'>crm</h1>
                <ul className='flex flex-row gap-3'>
                    <li><Link to={'/'}>Add New Employee</Link></li>
                    <li><Link to={'/attendence'}>Attendence</Link></li>
                    <li><Link to={'/salary'}>Salary</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
