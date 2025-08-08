import React from 'react'
import { Link } from 'react-router-dom'
import {MapPin} from 'lucide-react'
import {FaCaretDown} from 'react-icons/fa'

const Navbar = () => {
  const location=false
  return (
    <div className='bg-white py-3 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
          {/* logo section */}
          <div className='flex gap-7 items-center'>
          <Link to={'/'}><h1 className='font-bold text-2xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
          <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
             <MapPin className='text-red-500'/>
             <span className='font-semibold' >{location ? <div></div>:"Add Adress"}</span>

             <FaCaretDown/>
             </div>
          </div>
          {/* manue sating */}
          
       </div>

    </div>
  )
}

export default Navbar
