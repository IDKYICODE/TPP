import React from 'react'
import {assets} from "../assets/assets"
const Navbar=({setToken})=> {
  return (
    <div className='flex items-center justify-between'>
        <img className="w-[max(10%,80px)]" src={assets.logo}/>
        <button onClick={()=>setToken('')} className='bg-gray-900 text-white px-5 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar