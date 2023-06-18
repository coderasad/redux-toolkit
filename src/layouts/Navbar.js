import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center bg-green-600 text-white py-4 gap-5'>
      <Link className='hover:bg-white hover:text-green-600 px-3 rounded-sm py-2 transition-all duration-300' to="/">Home</Link>

      <Link className='hover:bg-white hover:text-green-600 px-3 rounded-sm py-2 transition-all duration-300' to="/show-books">Show Books</Link>

      <Link className='hover:bg-white hover:text-green-600 px-3 rounded-sm py-2 transition-all duration-300' to="/add-book">Add Book</Link>
    </nav>
  )
}

export default Navbar