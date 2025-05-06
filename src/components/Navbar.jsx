import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-[65px] bg-[#2d4e83]'>
            <div className='w-full h-full flex flex-row justify-between items-center px-10 text-white capitalize'>
                <h1>crm</h1>
                <ul className='flex flex-row gap-3'>
                    <li>Campaigns</li>
                    <li>Leads</li>
                    <li>Accounts</li>
                    <li>Contacts</li>
                    <li>Opportunities</li>
                    <li>Quotes</li>
                    <li>Invoices</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
