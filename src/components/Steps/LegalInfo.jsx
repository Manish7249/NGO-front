import { useState, useRef } from 'react';
import { Check, ArrowRight, ArrowLeft, Upload } from 'lucide-react';
import streamLineImage from "../../assets/NGORegisterImage/streamline-sharp-color_view-document-files.png";

const LegalInfo = ({ onNext, onBack }) => {
  // State to store files separately so they don't overwrite each other
  const [uploadedFiles, setUploadedFiles] = useState({
    registration: null,
    pan: null,
    cert80g: null,
  });

  // File change handler with "prev" to prevent refresh issue
  const handleFileChange = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => ({
        ...prev,
        [key]: file
      }));
    }
  };

  const DocumentRow = ({ title, docKey, fileData }) => {
    const fileInputRef = useRef(null);

    return (
      <div 
        onClick={() => fileInputRef.current.click()}
        className="flex items-center justify-between p-3 border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] bg-white mb-3 cursor-pointer hover:bg-gray-50 transition-all"
      >
        {/* Hidden File Input */}
        <input 
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileChange(docKey, e)}
        />

        <div className="flex items-center gap-3 overflow-visible">
          <div className="shrink-0 p-2 bg-white rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)]">
            <img src={streamLineImage} alt="streamLineImage" className='w-5 h-5 md:w-6 md:h-6' />
          </div>
          <div className="truncate">
            <h4 className="text-[13px] md:text-sm font-bold text-gray-800 truncate">{title}</h4>
            <p className="text-[10px] text-gray-500 truncate">
              {fileData ? fileData.name : "No file chosen"}
            </p>
          </div>
        </div>

        {/* Status Section: Changed from Radio look to Plain Check */}
        <div className="flex items-center gap-1 text-[#1da036] font-bold text-[10px] md:text-xs shrink-0 pl-2">
          {fileData ? (
            <div className="flex items-center gap-1">
              <span>Uploaded</span>
              {/* Plain checkmark icon as per your image */}
              <Check size={18} strokeWidth={4} /> 
            </div>
          ) : (
            <Upload size={16} className="text-gray-700" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full animate-fadeIn">
      <div className="mb-5">
        <h2 className="text-md md:text-lg font-bold text-gray-800">Legal Information</h2>
        <p className="text-gray-600 text-xs">Upload legal documents of your NGO</p>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1">NGO Type</label>
        <input type="text" className="input-responsive" placeholder="Enter NGO Type" />
      </div>

      <div className="space-y-1">
        <DocumentRow 
          title="Registration Certificate" 
          docKey="registration" 
          fileData={uploadedFiles.registration} 
        />
        <DocumentRow 
          title="PAN Card" 
          docKey="pan" 
          fileData={uploadedFiles.pan} 
        />
        <DocumentRow 
          title="80G Certificate" 
          docKey="cert80g" 
          fileData={uploadedFiles.cert80g} 
        />
      </div>

      {/* Buttons (Original Design) */}
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

export default LegalInfo;

