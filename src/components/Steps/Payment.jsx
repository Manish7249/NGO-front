import { useState } from 'react';
import { ShieldCheck, Lock, Landmark, Wallet } from 'lucide-react';

// Aapke Assets
import gpayImage from "../../assets/NGORegisterImage/logos_google-pay.png";
import phonePayImage from "../../assets/NGORegisterImage/simple-icons_phonepe.png";
import paytmImage from "../../assets/NGORegisterImage/Vector (1).png";
import visaImage from "../../assets/NGORegisterImage/logos_visa.png";
import masterCardImage from "../../assets/NGORegisterImage/logos_mastercard.png";

const Payment = ({ onNext }) => {
  const [selectedMethod, setSelectedMethod] = useState('upi');

  return (
    // Padding p-2 ko p-4 kiya taaki mobile edges se touch na ho
    <div className="w-full max-w-lg mx-auto text-center font-sans bg-white pb-4">
      
      {/* 1. Security Shield & Lock Icon - Size responsive kiya */}
      <div className="flex justify-center mb-2 mt-2">
        <div className="relative">
          <ShieldCheck size={65} md={75} strokeWidth={1.2} className="text-[#1da036]" />
          <div className="absolute bottom-0 right-0 bg-black p-1 rounded-md border-2 border-white">
            <Lock size={14} md={16} className="text-white fill-current" />
          </div>
        </div>
      </div>

      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Payment for registration</h2>
      {/* px-10 ko responsive kiya taaki mobile par text ko jagah mile */}
      <p className="text-gray-600 text-xs md:text-sm px-4 md:px-10 mb-6 md:mb-8 leading-tight">
        To complete your NGO registration, please pay the platform verification & onboarding fee.
      </p>

      {/* 2. Pricing Section - Text size responsive kiya */}
      <div className="border-t border-gray-400 pt-3">
        <p className="text-gray-900 font-bold text-sm md:text-lg">Registration Fee</p>
        <h1 className="text-3xl md:text-4xl text-[#1da036] mt-1 mb-4 font-medium"><span className='text-gray-700'>₹</span> 999</h1>
      </div>
      <div className="border-b border-gray-400 mb-6 md:mb-8"></div>

      {/* 3. Payment Methods */}
      <div className="text-left mb-6">
        <p className="text-[12px] md:text-[13px] font-bold text-gray-800 mb-4 ml-1">Select Payment Method</p>
        
        <div className="space-y-3">
          {/* UPI Row */}
          <div 
            onClick={() => setSelectedMethod('upi')}
            className={`flex items-center justify-between p-3 md:p-4 border rounded-xl cursor-pointer transition-all shadow-[0px_3px_3px_rgba(0,0,0,0.2)]
            ${selectedMethod === 'upi' ? 'border-[#1da036]' : 'border-gray-400'}`}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'upi' ? 'border-[#1da036]' : 'border-gray-400'}`}>
                {selectedMethod === 'upi' && <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#1da036] rounded-full"></div>}
              </div>
              <span className="text-sm md:text-[15px] font-bold text-gray-800">UPI</span>
            </div>
            {/* Logo container ko wrap allow kiya taaki chhote mobile pe dikat na ho */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <img src={gpayImage} alt="GPay" className="h-3 md:h-4 object-contain" />
              <img src={phonePayImage} alt="PhonePe" className="h-5 md:h-6 object-contain" />
              <img src={paytmImage} alt="Paytm" className="h-3 md:h-3.5 object-contain" />
            </div>
          </div>

          {/* Card Row */}
          <div 
            onClick={() => setSelectedMethod('card')}
            className={`flex items-center justify-between p-3 md:p-4 border rounded-xl cursor-pointer transition-all shadow-[0px_3px_3px_rgba(0,0,0,0.2)]
            ${selectedMethod === 'card' ? 'border-[#1da036]' : 'border-gray-400'}`}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'card' ? 'border-[#1da036]' : 'border-gray-400'}`}>
                {selectedMethod === 'card' && <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#1da036] rounded-full"></div>}
              </div>
              <span className="text-sm md:text-[15px] font-bold text-gray-800 leading-none">Credit / Debit Card</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <img src={visaImage} alt="Visa" className="h-2.5 md:h-3 object-contain" />
              <img src={masterCardImage} alt="Mastercard" className="h-5 md:h-6 object-contain" />
            </div>
          </div>

          {/* Net Banking Row */}
          <div 
            onClick={() => setSelectedMethod('netbanking')}
            className={`flex items-center justify-between p-3 md:p-4 border rounded-xl cursor-pointer transition-all shadow-[0px_3px_3px_rgba(0,0,0,0.2)]
            ${selectedMethod === 'netbanking' ? 'border-[#1da036]' : 'border-gray-400'}`}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'netbanking' ? 'border-[#1da036]' : 'border-gray-400'}`}>
                {selectedMethod === 'netbanking' && <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#1da036] rounded-full"></div>}
              </div>
              <span className="text-sm md:text-[15px] font-bold text-gray-800">Net Banking</span>
            </div>
            <Landmark size={20} md={24} strokeWidth={1.5} className="text-gray-800 shrink-0" />
          </div>

          {/* Other Wallets Row */}
          <div 
            onClick={() => setSelectedMethod('wallets')}
            className={`flex items-center justify-between p-3 md:p-4 border rounded-xl cursor-pointer transition-all shadow-[0px_3px_3px_rgba(0,0,0,0.2)]
            ${selectedMethod === 'wallets' ? 'border-[#1da036]' : 'border-gray-400'}`}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className={`shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${selectedMethod === 'wallets' ? 'border-[#1da036]' : 'border-gray-400'}`}>
                {selectedMethod === 'wallets' && <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#1da036] rounded-full"></div>}
              </div>
              <span className="text-sm md:text-[15px] font-bold text-gray-800">Other Wallets</span>
            </div>
            <Wallet size={20} md={24} strokeWidth={1.5} className="text-gray-800 shrink-0" />
          </div>
        </div>
      </div>

      {/* 4. Security Note Box */}
      <div className="bg-[#e4f4e9] border border-[#d4efdb] rounded-lg p-3 mb-8 flex gap-3 items-center text-left shadow-[0px_3px_3px_rgba(0,0,0,0.2)]">
        <ShieldCheck className="text-[#1da036] shrink-0" size={22} md={24} strokeWidth={1.5} />
        <p className="text-[10px] md:text-[11px] text-gray-700 leading-tight font-medium">
          Your payment is completely secure and encrypted. <br className="hidden md:block" />
          This fee helps us verify NGOs and maintain a trusted donation ecosystem.
        </p>
      </div>

      {/* 5. Big Pay Button - ISKO NAHI CHHEDA HAI */}
      <button 
        onClick={onNext}
        className="w-full bg-[#1da036] hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg shadow-[0px_3px_3px_rgba(0,0,0,0.2)] active:scale-95 transition-all"
      >
        Pay 999 and continue..
      </button>
    </div>
  );
};

export default Payment;