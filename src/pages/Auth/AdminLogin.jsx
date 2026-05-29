import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import bgImage from '../../assets/landingPageImage/bg-image.png';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  email: '',
  password: '',
});

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      'http://localhost:3000/api/admin/login',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {

      // TOKEN SAVE
      localStorage.setItem(
        'adminToken',
        data.token
      );

      alert('Admin Login Successful');

      navigate('/admin/dashboard');

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

    alert('Server Error');
  }
};

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* 1. BACKGROUND IMAGE - same object-cover for responsiveness */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          className="w-full h-full" 
          alt="bg"
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. LOGIN CARD - matching NGOLogin's responsive padding and border style */}
      <div className="relative z-10 w-full max-w-[480px] mx-4 bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-12">
        
        {/* Heading - Responsive text size */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="w-full max-w-[370px] space-y-4 md:space-y-6">
          
          {/* User Name Field */}
          <div className="flex flex-col items-start space-y-1.5">
            <label className="text-gray-500 font-medium text-xs md:text-sm ml-1">Admin Email*</label>
            <input
              type="email"
              placeholder="Admin Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full bg-white rounded-lg border border-gray-100 px-3 md:px-4 py-2 md:py-2.5 shadow-sm outline-none text-gray-700 text-sm md:text-base focus:ring-2 focus:ring-green-400 transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col items-start space-y-1.5">
            <label className="text-gray-500 font-medium text-xs md:text-sm ml-1">Password*</label>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              className="w-full bg-white rounded-lg border border-gray-100 px-3 md:px-4 py-2 md:py-2.5 shadow-sm outline-none text-gray-700 text-sm md:text-base focus:ring-2 focus:ring-green-400 transition-all"
            />
          </div>

          {/* Forgot Password - Aligned like the photo */}
          <div className="w-full text-center">
            <a href="#" className="text-green-600 font-bold text-xs md:text-sm hover:underline transition-all">
              Forgot Password?
            </a>
          </div>

          {/* Login Button - Matching Donor's Green color with responsive padding */}
          <button 
            type="submit"
            className="w-full py-2.5 md:py-3 bg-[#3ec327] hover:bg-[#35a822] text-white font-bold rounded-lg text-base md:text-lg shadow-md transition-all active:scale-95 mt-2"
          >
            Login
          </button>

          {/* Footer Text - Responsive spacing and font size */}
          <div className="text-center pt-2 md:pt-4">
            <p className="text-gray-800 font-semibold text-xs md:text-[15px]">
              Don't have an Account ? {' '}
              <Link to="/register/donor" className="text-green-600 font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AdminLogin;