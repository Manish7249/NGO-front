import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/LandingPage/Navbar';
import donarImage from '../../assets/landingPageImage/donar-image.png'
import ngoImage from '../../assets/landingPageImage/ngo-image.png'

const RoleSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRegisterMode = location.pathname === '/register';

  const handleNGOClick = () => {
    navigate(isRegisterMode ? '/register/ngo' : '/login/ngo');
  };

  const handleDonorClick = () => {
    navigate(isRegisterMode ? '/register/donor' : '/login/donor');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      
      {/* Navbar - Navbar Fixed hai isliye mt-20 ki jagah pt-20 use kiya hai */}
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50/30 pt-25">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-[44px] font-bold text-gray-900">Join as</h1>
          <p className="text-gray-500 text-xl font-medium tracking-tight">
            Choose your role to get started
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col md:flex-row gap-10 w-full max-w-4xl justify-center items-stretch">
          
          {/* DONOR CARD */}
          {/* h-full aur flex-col buttons ko align karne ke liye */}
          <div className="w-full md:w-[310px] bg-[#f7fff7] border-[1.5px] border-[#2bb64a] rounded-xl p-10 flex flex-col items-center shadow-sm hover:shadow-md transition-all">
            <div className="h-32 flex items-center justify-center">
               <img src={donarImage} alt="donarImage" className="w-28 h-auto object-contain" />
            </div>
            
            <h2 className="text-3xl font-extrabold text-[#2bb64a] mb-5 tracking-tight">Donar/User</h2>
            
            <p className="text-gray-500 text-center text-[17px] leading-relaxed mb-5 font-medium">
              Support causes and <br /> make a difference
            </p>

            {/* mt-auto ensures the button stays at the bottom */}
            <button 
              onClick={handleDonorClick}
              className="mt-auto w-full py-3.5 bg-[#2bb64a] text-white font-bold rounded-xl text-lg hover:bg-[#24a141] transition-all active:scale-95 shadow-sm"
            >
              Continue as Donar
            </button>
          </div>

          {/* NGO CARD */}
          <div className="w-full md:w-[310px] bg-[#f0f9ff] border-[1.5px] border-[#0085ff] rounded-xl p-10 flex flex-col items-center shadow-sm hover:shadow-md transition-all">
            <div className="h-32 flex items-center justify-center">
               <img src={ngoImage} alt="ngoImage" className="w-28 h-auto object-contain" />
            </div>

            <h2 className="text-3xl font-extrabold text-[#0085ff] mb-5 tracking-tight">NGO</h2>
            
            <p className="text-gray-500 text-center text-[17px] leading-relaxed mb-5 font-medium">
              Raise funds and <br /> create impact with <br /> your campaign
            </p>

            {/* mt-auto button ko donor card ke button ke barabar line mein rakhega */}
            <button 
              onClick={handleNGOClick}
              className="mt-auto w-full py-3.5 bg-[#0085ff] text-white font-bold rounded-xl text-lg hover:bg-[#0074e8] transition-all active:scale-95 shadow-sm"
            >
              Continue as NGO
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
