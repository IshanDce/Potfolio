import React from 'react'
import { Link } from 'react-router-dom' 

function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-blue-800 via-slate-900 to-gray-800">
      <div className="text-white text-center text-4xl font-serif flex flex-col items-center">
        <p className="mb-4 animate-fade-in">Hello! My name is <span className="text-yellow-400">Ishan Sharma</span></p>
        <p className="mb-8 animate-fade-in-delay">A Passionate Student</p>
        <div className="h-auto w-full flex justify-center gap-8">
          <div className="mt-2 rounded-lg h-[50px] w-[120px] flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 shadow-lg text-xl font-serif cursor-pointer transform transition-all duration-300 hover:scale-105">
            <Link to='/hire'>Engage me</Link>
          </div>
          <div className="mt-2 rounded-lg h-[50px] w-[160px] flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 shadow-lg text-xl font-serif cursor-pointer transform transition-all duration-300 hover:scale-105">
            Download
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

