import React from 'react'

function Skill() {
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-800 via-slate-900 to-gray-800">
        <div className="text-white text-center text-4xl font-serif flex flex-col gap-12 p-6 max-w-5xl">
          <h1 className="mb-4 animate-fade-in text-5xl font-bold tracking-wide">Skills</h1>

          <div className="h-auto w-full flex flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold text-blue-400 underline decoration-sky-500">Frontend Development</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">HTML</span>
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">CSS</span>
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">Tailwind CSS</span>
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">JavaScript</span>
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">ReactJS</span>
            </div>
          </div>

          <div className="h-auto w-full flex flex-col items-center gap-4">
            <h2 className="text-3xl font-semibold text-blue-400 underline decoration-sky-500">Programming for DSA</h2>
            <p className="text-lg text-justify max-w-4xl">
              I have a strong foundation in <span className="font-bold text-blue-300">Data Structures and Algorithms (DSA)</span> and have solved more than 
              <span className="font-bold text-blue-300"> 100 questions</span> on 
              {/* <a 
                href="https://leetcode.com/"  
                className="text-sky-400 hover:underline"
              > LeetCode</a>.  */}
              This experience has helped me build problem-solving skills and a deeper understanding of algorithms and their applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">C</span>
              <span className="bg-blue-900 px-4 py-2 rounded-lg text-lg font-medium">C++</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
