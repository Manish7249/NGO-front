import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-green-600">Logo</div>
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="#" className="text-green-600">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="flex space-x-4">
        <button className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">Login</button>
        <button className="px-5 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;