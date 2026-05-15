import { ArrowRight, ArrowLeft } from 'lucide-react';

const BankDetails = ({ onNext, onBack }) => {
  return (
    <div className="w-full animate-fadeIn">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">Bank Details</h2>
        <p className="text-gray-600 text-sm">Please provide your bank details</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 md:space-y-5">
        <input
          type="text"
          placeholder="Account Holder Name"
          className="w-full p-4 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
        />
        
        <input
          type="text"
          placeholder="Account Number"
          className="w-full p-4 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
        />

        <input
          type="text"
          placeholder="IFSC Code"
          className="w-full p-4 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
        />

        <input
          type="text"
          placeholder="Bank Name"
          className="w-full p-4 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400 text-sm md:text-base"
        />
      </div>

      {/* Responsive Buttons: Mobile par flex-col ya small horizontal */}
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

export default BankDetails;
