import { useState, useRef } from 'react';
import { Check, ArrowRight, Upload, CircleCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Redirection ke liye
import bgImage from '../../assets/landingPageImage/bg-image.png';
import streamLineImage from "../../assets/NGORegisterImage/streamline-sharp-color_view-document-files.png";

const LegalInformation = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false); // Pop-up control
  const [uploadedFiles, setUploadedFiles] = useState({
    photo: null,
    aadhar: null,
    pan: null,
  });

  const handleFileChange = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [key]: file }));
    }
  };

  const handleNext = () => {
    // Check if all files are uploaded
    if (uploadedFiles.photo && uploadedFiles.aadhar && uploadedFiles.pan) {
      setShowSuccess(true);
    } else {
      alert("Please upload all documents first!");
    }
  };

  const DocumentRow = ({ title, docKey, fileData }) => {
    const fileInputRef = useRef(null);
    return (
      <div 
        onClick={() => fileInputRef.current.click()}
        className="flex items-center justify-between p-3.5 border border-gray-300 rounded-xl shadow-[0px_2px_5px_rgba(0,0,0,0.08)] bg-white mb-4 cursor-pointer hover:bg-gray-50 transition-all"
      >
        <input 
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*,.pdf" 
          onChange={(e) => handleFileChange(docKey, e)}
        />
        <div className="flex items-center gap-3">
          <div className="shrink-0 p-2.5 bg-white rounded-lg shadow-sm border border-gray-100">
            <img src={streamLineImage} alt="icon" className='w-6 h-6 md:w-7 md:h-7' />
          </div>
          <div className="max-w-[150px] md:max-w-[250px]">
            <h4 className="text-sm md:text-[15px] font-bold text-black leading-tight">{title}</h4>
            <p className="text-[10px] md:text-xs text-gray-500 truncate mt-0.5">
              {fileData ? fileData.name : "Click to upload (PDF/Image)"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#24b037] font-bold text-xs md:text-sm shrink-0">
          {fileData ? (
            <div className="flex items-center gap-1.5 animate-in fade-in zoom-in">
              <span>Uploaded</span>
              <Check size={18} strokeWidth={4} /> 
            </div>
          ) : (
            <Upload size={18} className="text-gray-400" />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* BACKGROUND - Blur fixed to 1px */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} className="w-full h-full" alt="bg" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
      </div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-[580px] mx-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-10">
        <h2 className="text-lg md:text-xl font-bold text-black mb-8 border-b border-gray-50 pb-2">
          Legal Information
        </h2>

        <div className="space-y-1">
          <DocumentRow title="Photo" docKey="photo" fileData={uploadedFiles.photo} />
          <DocumentRow title="Aadhar Card" docKey="aadhar" fileData={uploadedFiles.aadhar} />
          <DocumentRow title="PAN Card" docKey="pan" fileData={uploadedFiles.pan} />
        </div>

        <div className="mt-10 flex justify-center">
          <button 
            onClick={handleNext}
            className="flex items-center justify-center gap-3 px-14 py-3 bg-[#1db13a] hover:bg-[#168a2d] rounded-xl font-bold text-white text-base md:text-lg shadow-md transition-all active:scale-95"
          >
            <span>Next</span>
            <ArrowRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* SUCCESS POP-UP MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-[400px] rounded-[35px] p-10 shadow-2xl flex flex-col items-center animate-in zoom-in duration-300">
            {/* Green Check Circle */}
            <div className="bg-[#1db13a] p-4 rounded-full mb-6">
              <Check size={50} color="white" strokeWidth={4} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1db13a] mb-8 text-center">
              Verification Successful
            </h2>

            <button 
              onClick={() => navigate('/donor/dashboard')} // Login ke bajaye seedha Dashboard par
              className="px-12 py-2.5 bg-[#1db13a] hover:bg-[#168a2d] text-white font-bold rounded-xl text-lg shadow-md transition-all active:scale-95"
              >
                OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default LegalInformation;