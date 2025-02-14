import React from 'react'

function About() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-slate-900 to-gray-800 p-6">
      <h1 className="text-3xl w-full  font-serif text-white position top-2 left-10 animate-pulse cursor-pointer">About Me</h1>
      
     
      <div className="text-white font-serif text-md leading-relaxed text-center max-w-3xl bg-gray-900 bg-opacity-50 p-6 rounded-lg shadow-lg">
        <p>
          Hi, I'm <span className="text-blue-400 font-semibold">Ishan Sharma</span>, a passionate and dedicated learner pursuing my studies at 
          <span className="text-blue-400 font-semibold"> Dronacharya College of Engineering</span>. 
          I’m currently diving deep into the exciting world of <span className="text-blue-400 font-semibold">frontend development</span>, where I enjoy transforming creative ideas into functional and visually appealing web experiences.
        </p>
        <p className="mt-4">
          With a keen interest in technology and problem-solving, I strive to learn and grow every day. I’m particularly enthusiastic about crafting user-friendly interfaces and exploring modern tools and frameworks to enhance my skills.
        </p>
        <p className="mt-4">
          When I’m not coding or studying, you might find me exploring new tech trends, brainstorming innovative ideas, or collaborating with peers on exciting projects. I'm always eager to connect, learn, and make a meaningful impact in the tech world.
        </p>
      </div>
      <div className="text-white font-sans text-base mt-8 p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg space-y-3">
        <p>
          <span className="font-semibold text-blue-400">Name:</span> Ishan Sharma
        </p>
        <p>
          <span className="font-semibold text-blue-400">Age:</span> 19
        </p>
        <p>
          <span className="font-semibold text-blue-400">Address:</span> India (Delhi)
        </p>
        <p>
          <span className="font-semibold text-blue-400">Email:</span> Sharmaishan74481@gmail.com
        </p>
        <p>
          <span className="font-semibold text-blue-400">Contact No:</span> +91 8076574241
        </p>
      </div>
      </div>
  );
}

export default About;
