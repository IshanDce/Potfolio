import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-[85px] w-full bg-gradient-to-r from-blue-800 via-slate-900 to-gray-800 shadow-md">
      <ul className="flex justify-around items-center h-full px-8">
        <li className="font-serif text-2xl text-white transition duration-300 hover:text-yellow-400 hover:scale-110 cursor-pointer">
          <Link to='/home'>Home</Link>
        </li>
        <li className="font-serif text-2xl text-white transition duration-300 hover:text-yellow-400 hover:scale-110 cursor-pointer">
          <Link to='/about'>About</Link>
        </li>
        <li className="font-serif text-2xl text-white transition duration-300 hover:text-yellow-400 hover:scale-110 cursor-pointer">
        <Link to='/skill'>Skills</Link>
        </li>
        <li className="font-serif text-2xl text-white transition duration-300 hover:text-yellow-400 hover:scale-110 cursor-pointer">
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

