import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='bg-green-200 p-4 flex justify-between'>
                <p className='font-bold text-green-900 text-xl'>Movies.DB</p>

                <div className='flex space-x-4'>
                    <Link to='/' className='font-bold text-green-900'>Home</Link>
                    <Link to='/favorites' className='font-bold text-green-900'>Favorites</Link>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar
