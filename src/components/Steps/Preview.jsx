import { useState, useRef } from 'react';
import { CheckCircle2, Upload, ArrowLeft } from 'lucide-react';

const Preview = ({ onBack, onSubmit }) => {
  // State for 1 Logo + 4 grid fields
  const [previews, setPreviews] = useState({
    logo: null,
    "Registration Certificate": null,
    "PAN Card": null,
    "80G Certificate": null,
    "Campaign Images": null
  });

  const fileInputRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleEditClick = (category) => {
    setActiveCategory(category);
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && activeCategory) {
      const url = URL.createObjectURL(file);
      setPreviews(prev => ({
        ...prev,
        [activeCategory]: url
      }));
    }
  };

  return (
    <div className="w-full animate-fadeIn pb-10">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*" 
      />
      
      {/* 1. Header Section */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="text-left">
          <h2 className="text-md md:text-lg font-bold text-gray-800">Please review your details before submission</h2>
          <p className="text-gray-500 text-xs">Tell donors more about your organization</p>
          
          <div className="mt-6">
            <h3 className="text-sm md:text-base font-bold text-gray-900">Shiksha Foundation</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-[11px] md:text-xs text-gray-600">sikshaf@shikshafoundation.org</span>
              <div className="w-px h-3 bg-gray-300"></div>
              <span className="text-[11px] md:text-xs text-gray-600">+91 9369078612</span>
            </div>
            <p className="text-[11px] md:text-xs text-gray-600 mt-1">Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* Logo Section - Full Border Coverage */}
        <div className="w-full md:w-auto flex justify-center">
            <div 
              onClick={() => handleEditClick('logo')}
              className="w-36 h-28 border border-gray-400 rounded-xl flex flex-col items-center justify-center bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer hover:bg-gray-50 transition-all relative"
            >
                {previews.logo ? (
                  <img 
                    src={previews.logo} 
                    alt="Logo" 
                    // object-cover aur w-full h-full image ko poora border tak set karega
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <>
                    <Upload size={20} strokeWidth={1.5} className="text-gray-700 mb-2" />
                    <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">Logo</span>
                  </>
                )}
            </div>
        </div>
      </div>

      {/* 2. Documents Section */}
      <div className="text-left mb-8">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Documents</h4>
        <div className="space-y-3">
          {["Registration Certificate", "PAN Card", "80G Certificate"].map((doc) => (
            <div key={doc} className="flex items-center gap-6">
              <span className="text-xs text-gray-700 w-40 md:w-48">{doc}</span>
              <CheckCircle2 size={18} className="text-[#1da036]" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Bank Details */}
      <div className="text-left mb-8">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Bank Details</h4>
        <div className="space-y-2">
          {[
            { label: "Account Holder Name", value: "Shiksha Foundation" },
            { label: "Account Number", value: "ACC12323456" },
            { label: "IFSC Code", value: "BOI2324567686" },
            { label: "Bank Name", value: "Bank Of India" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-row items-start">
              <span className="text-xs text-gray-800 w-40 md:w-48 shrink-0">{item.label}</span>
              <span className="text-xs text-gray-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Projects/ Campaigns */}
      <div className="text-left mb-8">
        <h4 className="text-sm font-bold text-gray-900 mb-3">Projects/ Campaigns</h4>
        <div className="flex flex-row items-start">
          <span className="text-xs text-gray-800 w-40 md:w-48 shrink-0">Har Ghar shiksha Campaign</span>
          <span className="text-xs text-gray-800 flex-1 leading-relaxed">
            Provided education to children in every household in rural areas.
          </span>
        </div>
      </div>

      {/* 5. Uploaded Images Grid - Full Border Coverage */}
      <div className="text-left mb-10">
        <h4 className="text-sm font-bold text-gray-900 mb-4">Uploaded Images</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {Object.keys(previews).filter(k => k !== 'logo').map((title) => (
            <div key={title} className="flex flex-col items-center">
                <div 
                  className="w-full h-48 md:h-56 border border-gray-400 rounded-xl bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden relative"
                >
                   {previews[title] ? (
                     <img 
                       src={previews[title]} 
                       alt={title} 
                       // Padding zero and object-cover to fill all corners
                       className="w-full h-full object-cover" 
                     />
                   ) : (
                     <span className="text-xs text-gray-700 font-medium text-center px-4">{title}</span>
                   )}
                </div>
                <button 
                  onClick={() => handleEditClick(title)}
                  className="text-[#1da036] font-bold text-xs mt-3 hover:underline"
                >
                  Edit
                </button>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Navigation Buttons */}
      <div className="flex items-center justify-center gap-3 md:gap-6 mt-10 w-full">
        <button
          onClick={onBack}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 md:px-10 py-3 border border-[#1da036] text-gray-800 rounded-xl font-bold hover:bg-green-50 transition-all active:scale-95 text-sm md:text-base"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          <span>Back</span>
        </button>
        
        <button
          onClick={onSubmit}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 md:px-10 py-3 bg-[#1da036] text-white rounded-xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95 text-sm md:text-base"
        >
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};

export default Preview;