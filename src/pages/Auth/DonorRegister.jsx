import { Link } from 'react-router-dom';
import bgImage from '../../assets/landingPageImage/bg-image.png';

const DonorRegister = () => {
  const fields = ['Name', 'Username', 'Email address', 'Password', 'Confirm password'];

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

      {/* 2. REGISTRATION CARD */}
      <div className="relative z-10 w-full max-w-[480px] mx-4 bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-10 my-6">
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
          Register Your Account
        </h1>

        <form className="w-full max-w-[370px] space-y-4">
          
          {/* Mapping original fields - Labels removed */}
          {fields.map((field) => (
            <div key={field} className="relative">
              <input 
                type={field.toLowerCase().includes('password') ? 'password' : 'text'} 
                placeholder={field} 
                className="w-full bg-white rounded-lg border border-gray-100 px-4 py-3 md:py-3.5 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] outline-none text-gray-700 text-sm md:text-base focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>
          ))}

          {/* Sign Up Button */}
          <button 
            type="submit"
            className="w-full py-2.5 md:py-3 bg-[#3ec327] hover:bg-[#35a822] text-gray-800 font-bold rounded-lg text-base md:text-lg shadow-md transition-all active:scale-95 mt-4"
          >
            Sign up
          </button>

          {/* Footer Text */}
          <div className="text-center pt-2 md:pt-4">
            <p className="text-gray-800 font-semibold text-xs md:text-[15px]">
              Already have an account ? {' '}
              <Link to="/login/donor" className="text-[#3ec327] font-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};

export default DonorRegister;
