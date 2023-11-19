import React from 'react'

export default function AppBar() {
  return (
    <nav className='flex flex-row justify-between p-2 bg-black m-2 rounded-lg items-center '>
        <img src="/public/logo.svg" alt="Logo of milespin" />
        <div>
            <img src="/public/hamburger.svg" alt="hamburger icon" />
        </div>
    </nav>
  )
}
