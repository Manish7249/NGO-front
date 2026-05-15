import { useState } from 'react';
import { Upload, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

const ProfileSetup = ({ onNext, onBack }) => {
  const [description, setDescription] = useState('');
  const [focusArea, setFocusArea] = useState('');
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      {/* 1. Header Section */}
      <div className="mb-5">
        <h2 className="text-md md:text-lg font-bold text-gray-800">Profile Setup</h2>
        <p className="text-gray-500 text-xs">Tell donors more about your organization</p>
      </div>

      {/* 2. Logo Upload Box - Added overflow-hidden to clip image to borders */}
      <div className="flex justify-center my-6 md:my-8">
        <label className="w-44 h-32 md:w-52 md:h-36 flex flex-col items-center justify-center bg-white border border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 transition-all shadow-[0px_3px_3px_rgba(0,0,0,0.2)] overflow-hidden relative">
          
          {logo ? (
            // Image ab poore border area ko cover karegi
            <img 
              src={logo} 
              alt="Uploaded Logo" 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Upload size={28} className="text-gray-700 mb-2" />
              <p className="text-[10px] md:text-[11px] text-gray-700 font-medium">Upload your logo here</p>
            </div>
          )}
          
          <input 
            type="file" 
            className="hidden" 
            accept="image/*" 
            onChange={handleLogoChange} 
          />
        </label>
      </div>

      {/* 3. Description Input */}
      <div className="mb-4 text-left">
        <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1">Description</label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 md:p-4 border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:ring-2 focus:ring-green-500/10 focus:border-[#1da036] outline-none transition-all placeholder:text-gray-400 text-xs md:text-sm resize-none"
          placeholder="Enter your text here"
        ></textarea>
      </div>

      {/* 4. Focus Area Dropdown */}
      <div className="mb-6 text-left">
        <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1">Focus Area</label>
        <div className="relative">
          <select
            value={focusArea}
            onChange={(e) => setFocusArea(e.target.value)}
            className="w-full p-3 md:p-4 border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] bg-white appearance-none focus:ring-2 focus:ring-green-500/10 focus:border-[#1da036] outline-none transition-all text-gray-400 text-xs md:text-sm cursor-pointer"
          >
            <option value="" disabled>Category</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="environment">Environment</option>
            <option value="women">Women Empowerment</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* 5. Responsive Buttons */}
      <div className="flex items-center justify-center gap-3 md:gap-6 mt-8 md:mt-10 w-full">
        <button
          onClick={onBack}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 md:px-10 py-3 border border-[#1da036] text-gray-800 rounded-xl font-bold hover:bg-green-50 transition-all active:scale-95 text-sm md:text-base"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          <span>Back</span>
        </button>
        
        <button
          onClick={onNext}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 md:px-10 py-3 bg-[#1da036] text-white rounded-xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95 text-sm md:text-base"
        >
          <span>Next</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;

