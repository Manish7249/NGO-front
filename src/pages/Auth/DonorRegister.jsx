import { useState } from 'react'; // 1. useState import karein
import { Link, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/landingPageImage/bg-image.png';
import LegalInformation from './LegalInformation'; // 2. Naya component import karein

const DonorRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 3. Step state banayein (1 = Form, 2 = Legal Info)
  
  const fields = ['Name', 'Username', 'Email address', 'Password', 'Confirm password'];

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/register/donor/legal-info');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} className="w-full h-full" alt="bg" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 w-full flex justify-center px-4 py-10">
        {step === 1 ? (
          /* PEHLA STEP: REGISTRATION FORM */
          <div className="w-full max-w-[480px] bg-transparent rounded-xl border border-gray-300 shadow-xl flex flex-col items-center justify-center p-6 md:p-10 backdrop-blur-md">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Register Your Account
            </h1>
            <form className="w-full max-w-[370px] space-y-4" onSubmit={handleSignUp}>
              {fields.map((field) => (
                <div key={field} className="relative">
                  <input 
                    type={field.toLowerCase().includes('password') ? 'password' : 'text'} 
                    placeholder={field} 
                    required
                    className="w-full bg-white rounded-lg border border-gray-100 px-4 py-3 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] outline-none text-gray-700 focus:ring-2 focus:ring-green-400 transition-all"
                  />
                </div>
              ))}
              <button 
                type="submit"
                className="w-full py-3 bg-[#3ec327] hover:bg-[#35a822] text-white font-bold rounded-lg text-lg shadow-md transition-all active:scale-95 mt-4"
              >
                Sign up
              </button>
            </form>
            <div className="text-center pt-4">
              <p className="text-gray-800 font-semibold text-sm">
                Already have an account? <Link to="/login/donor" className="text-[#3ec327] font-bold hover:underline">Login</Link>
              </p>
            </div>
          </div>
        ) : (
          /* DUSRA STEP: LEGAL INFORMATION (JO AAPNE PUCHA HAI) */
          <LegalInformation onNext={() => alert('Registration Complete!')} />
        )}
      </div>
    </div>
  );
};

export default DonorRegister;