import React from 'react'

function Hire() {
  const handle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-800 via-slate-900 to-gray-800">
      <div className="w-full max-w-lg">
        <h1 className="font-serif text-3xl text-white text-center mb-6">Contact Me</h1>
        <form
          onSubmit={handle}
          className="flex flex-col bg-gray-200 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="6"
            placeholder="Description"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white rounded-lg p-3 hover:bg-blue-900 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hire;
