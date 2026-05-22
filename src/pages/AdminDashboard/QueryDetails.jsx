import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const QueryDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn pb-10 font-sans max-w-5xl mx-auto px-4 md:px-0 text-left">
      
      {/* 1. BACK BUTTON */}
      <div className="mb-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-700 transition-all active:scale-95"
        >
          <ArrowLeft size={22} /> <span className="text-lg">Back</span>
        </button>
      </div>

      {/* 2. FROM SECTION */}
      <div className="mb-10 px-2">
        <h3 className="text-xl font-bold text-gray-700 mb-6 uppercase tracking-wider">From:</h3>
        <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center">
          <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-2">
            Shiksha Foundation
          </h2>
          <div className="space-y-3 text-gray-500 font-semiBold text-lg md:text-lg">
            <p>Applied On: <span className="text-gray-800 ml-1">20 May 2026</span></p>
            <p>Registration No. <span className="text-gray-800">NGO -1099-2024</span></p>
          </div>
        </div>
      </div>

      {/* 3. QUERY SECTION */}
      <div className="mb-10 px-2">
        <h3 className="text-xl font-bold text-gray-700 mb-6 uppercase tracking-wider">Query:</h3>
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] min-h-[150px]">
          <div className="text-gray-800 font-semiBold text-lg md:text-xl space-y-4 leading-relaxed">
            <p>Hello Admin,</p>
            <p>I uploaded all the required documents 5 days ago, but my NGO verification status is still showing as "Under Review".</p>
            <p>Could you please check and update the status?</p>
            <p>Thank you.</p>
          </div>
        </div>
      </div>

      {/* 4. RESPONSE SECTION */}
      <div className="mb-10 px-2">
        <h3 className="text-xl font-bold text-gray-700 mb-6 uppercase tracking-wider">Response:</h3>
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] min-h-[150px]">
          <div className="text-gray-800 font-semiBold text-lg md:text-xl space-y-4 leading-relaxed">
            <p>Hello Green Earth Foundation,</p>
            <p>Thank you for contacting support.</p>
            <p>We are currently reviewing your submitted documents. Your verification process is in the final stage and will be updated within 24-48 hours.</p>
            <p>If any additional documents are required, our team will notify you.</p>
            <p>Thank you for your patience.</p>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM SEND BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#22c55e] hover:bg-green-700 text-white px-16 py-4 rounded-xl font-black text-xl shadow-lg shadow-green-100 transition-all active:scale-95">
           Send Message
        </button>
      </div>

    </div>
  );
};

export default QueryDetails;