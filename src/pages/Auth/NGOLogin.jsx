import React from 'react'; // React import ensure karo
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { Mail } from 'lucide-react';
import bgImage from '../../assets/landingPageImage/bg-image.png';

const NGOLogin = () => {
  const navigate = useNavigate(); // Hook initialize kiya

  // Login click handle karne ke liye function
  const handleLogin = (e) => {
    e.preventDefault();
    // Yahan kal ko tum apna API call (backend) check lagaoge
    // Filhal successful login maan kar OTP page par bhej rahe hain
    navigate('/login/ngo/verify-otp'); 
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          className="w-full h-full" 
          alt="bg"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. LOGIN CARD */}
      <div className="relative z-10 w-full max-w-[480px] mx-4 bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          NGO Login
        </h1>

        {/* onSubmit event add kiya */}
        <form onSubmit={handleLogin} className="w-full max-w-[370px] space-y-4 md:space-y-6">
          <div className="flex flex-col items-start space-y-1.5">
            <label className="text-gray-500 font-medium text-xs md:text-sm ml-1">Email*</label>
            <div className="w-full flex items-center bg-white rounded-lg border border-gray-100 px-3 md:px-4 py-2 md:py-2.5 shadow-sm">
              <Mail className="text-gray-400 shrink-0" size={18} />
              <div className="h-5 w-[1px] bg-gray-300 mx-2 md:mx-3"></div>
              <input 
                required
                type="email" 
                placeholder="demo@email.com" 
                className="w-full bg-transparent outline-none text-gray-700 text-sm md:text-base placeholder:text-gray-400"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 md:py-3 bg-[#3ec327] hover:bg-[#35a822] text-gray-800 font-bold rounded-lg text-base md:text-lg shadow-md transition-all active:scale-95 mt-2"
          >
            Login
          </button>

          <div className="text-center pt-2 md:pt-4">
            <p className="text-gray-800 font-semibold text-xs md:text-[15px]">
              Don't have an Account ? {' '}
              <Link to="/register/ngo" className="text-[#3ec327] font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default NGOLogin;