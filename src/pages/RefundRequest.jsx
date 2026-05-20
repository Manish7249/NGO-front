import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Upload, Check } from 'lucide-react';

const RefundRequest = () => {
  const navigate = useNavigate();
  const hiddenDateRef = useRef(null);
  
  const [paymentDate, setPaymentDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  // 1. Initial state 'false' rakha hai taaki shuru me blank rahe
  const [isUploaded, setIsUploaded] = useState(false); 

  const handleTextChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    let formatted = "";
    if (val.length > 0) {
      formatted += val.substring(0, 2);
      if (val.length > 2) formatted += "-" + val.substring(2, 4);
      if (val.length > 4) formatted += "-" + val.substring(4, 8);
    }
    setPaymentDate(formatted);
  };

  const handleDateSelection = (e) => {
    const dateValue = e.target.value; 
    if (dateValue) {
      const [year, month, day] = dateValue.split("-");
      setPaymentDate(`${day}-${month}-${year}`);
    }
  };

  // 2. File select hone par state 'true' karne ka logic
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploaded(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center p-6 font-sans">
      
      {/* BACK BUTTON - Outside border */}
      <div className="w-full max-w-[950px] mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 font-bold text-lg hover:text-gray-800 transition-all active:scale-95"
        >
          <ArrowLeft size={22} /> Back
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="w-full max-w-[800px] bg-white rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] border border-gray-100 p-5 md:p-10 animate-fadeIn">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-[28px] md:text-[40px] font-bold text-gray-900 mb-2">
            Apply for a refund
          </h1>
          
          {/* INFO ICON - Red outline, no background */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-7 h-7 rounded-full border-2 border-[#ff4d4d] flex items-center justify-center text-[#ff4d4d] text-sm font-black italic shrink-0">
              i
            </div>
            <p className="text-[15px] md:text-[18px] font-bold text-gray-800">
              Your Registration fee will be <span className="text-[#1da036]">refunded</span> to your original payment method
            </p>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid gap-6 max-w-[750px] mx-auto">
          
          <input 
            type="text" 
            placeholder="NGO Name" 
            className="w-full p-3.5 md:p-4 bg-white border border-gray-400 rounded-xl text-sm shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400" 
          />

          <input 
            type="text" 
            placeholder="Transaction ID" 
            className="w-full p-3.5 md:p-4 bg-white border border-gray-400 rounded-xl text-sm shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400" 
          />

          {/* Date Field */}
          <div className="relative">
            <input 
              type="text" 
              placeholder={isFocused && !paymentDate ? "dd-mm-yyyy" : "Payment Date"}
              value={paymentDate}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={handleTextChange}
              maxLength="10"
              className="w-full p-3.5 md:p-4 bg-white border border-gray-400 rounded-xl text-sm shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400" 
            />
            <button 
              type="button"
              onClick={() => hiddenDateRef.current.showPicker()}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-800 hover:text-[#1da036]"
            >
              <Calendar size={22} />
            </button>
            <input 
              ref={hiddenDateRef}
              type="date"
              onChange={handleDateSelection}
              className="absolute opacity-0 pointer-events-none"
              style={{ width: 0, height: 0 }}
            />
          </div>

          {/* Upload Section */}
          <div>
            <p className="text-gray-600 text-[15px] font-semibold mb-3 ml-1">
              Upload your transaction receipt screenshot or image
            </p>
            
            {/* 3. Hidden File Input linked with label */}
            <input 
              type="file" 
              id="refund-file" 
              className="hidden" 
              accept="image/*"
              onChange={handleFileChange} 
            />
            
            <label 
              htmlFor="refund-file"
              className="flex items-center justify-between py-5 mt-1 px-6 border border-gray-400 rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-gray-50 transition-all"
            >
              <div className="flex items-center gap-4">
                <Upload className="text-gray-700" size={28} />
                <span className="text-base font-semibold text-gray-800">Upload Image</span>
              </div>

              {/* 4. Conditional Rendering: Only shows when isUploaded is true */}
              {isUploaded && (
                <div className="flex items-center gap-2 text-[#1da036] font-bold text-lg animate-popIn">
                  <span>Uploaded</span>
                  <Check size={26} strokeWidth={4} /> 
                </div>
              )}
            </label>
          </div>

          {/* Proceed Button */}
          <div className="mt-4 flex justify-center">
            <button 
              className="w-full max-w-[220px] py-4 bg-[#1da036] text-white rounded-2xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95 text-xl"
            >
              Proceed
            </button>
          </div>

          <div className="text-center space-y-1">
            <p className="text-gray-500 text-base font-medium italic">Expected refund :</p>
            <p className="text-gray-900 font-bold text-[17px] md:text-[19px]">
              Your refund will be processed within 5-7 working days
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundRequest;