import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RefundApplicationDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn font-sans max-w-5xl mx-auto px-4 md:px-0">
      
      {/* 1. BACK BUTTON (Top Left - Image Match) */}
      <div className="mb-5">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-700 transition-all active:scale-95"
        >
          <ArrowLeft size={22} /> <span className="text-lg">Back</span>
        </button>
      </div>

      {/* 2. PAGE TITLE */}
      <div className="mb-5 text-left">
        <h1 className="text-[24px] md:text-[30px] font-semiBold text-gray-800 tracking-tight">
          Refund Application Details
        </h1>
      </div>

      {/* 3. NGO SUMMARY CARD (Centered Text) */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center mb-8">
        <h2 className="text-[20px] md:text-[24px] font-semiBold text-gray-800 mb-3">
            Green Earth Foundation
        </h2>
        <div className="space-y-3 text-gray-500 font-semiBold text-[10px] md:text-[15px] uppercase tracking-wide">
            <p>Applied On: <span className="text-gray-800 ml-1">20 May 2026</span></p>
            <p>Registration No. <span className="text-gray-800 ml-4 tracking-tighter">NGO -1099-2024</span></p>
        </div>
      </div>

      {/* 4. VERIFICATION REJECTION DETAILS (Pink Box) */}
      <div className="bg-[#fde8e8] border border-red-100 rounded-xl p-4 md:p-8 shadow-sm mb-8 text-left relative overflow-hidden">
        
        <h4 className="text-[#ef4444] font-bold text-xl mb-3">Verification Rejection Details</h4>
        <div className="space-y-3">
            <DetailGrid label="Rejection reason :" value="Verification Criteria not met." />
            <DetailGrid label="Rejection On :" value="22nd May 2026" />
            <DetailGrid label="Rejected By :" value="Admin" />
        </div>
      </div>

      {/* 5. MAIN DETAILS CARD (Payment + Bank + Documents) */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] space-y-10 text-left mb-8">
        
        {/* Payment Details Section */}
        <div>
          <h4 className="text-gray-900 font-black text-xl mb-3 tracking-tight">Payment Details</h4>
          <div className="space-y-3">
             <DetailGrid label="Payment ID" value="PAY_7G8H9J2K1L" />
             <DetailGrid label="Amount Paid" value="₹999" />
             <DetailGrid label="Payment Date" value="10 May 2024, 11:45 AM" />
             <DetailGrid label="Payment Method" value="Razorpay (UPI)" />
          </div>
        </div>

        {/* Bank Details Section */}
        <div>
          <h4 className="text-gray-900 font-black text-xl mb-3 tracking-tight">Bank Details</h4>
          <div className="space-y-3">
             <DetailGrid label="Account Holder Name" value="Shiksha Foundation" />
             <DetailGrid label="Account Number" value="ACC12323456" />
             <DetailGrid label="IFSC Code" value="BOI2324567686" />
             <DetailGrid label="Bank Name" value="Bank Of India" />
          </div>
        </div>

        {/* Documents Section (Image Match) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
           <span className="text-gray-900 font-black text-xl tracking-tight">Documents Uploaded</span>
           <button className="text-[#22c55e] font-black text-xl hover:underline transition-all w-fit">
             View Documents
           </button>
        </div>
      </div>

      {/* 6. BOTTOM APPROVE BUTTON */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#22c55e] hover:bg-green-700 text-white px-14 py-3.5 rounded-xl font-black text-xl shadow-lg shadow-green-100 transition-all active:scale-95">
           Approve Refund
        </button>
      </div>

    </div>
  );
};

// Reusable Grid Component taaki alignment ekdum vertical line me rahe (Image Match)
const DetailGrid = ({ label, value }) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 items-start">
        {/* Label Part */}
        <span className="md:col-span-4 text-gray-500 md:text-gray-600 font-bold text-[16px] md:text-[18px]">
            {label}
        </span>
        {/* Value Part */}
        <span className="md:col-span-8 text-gray-800 font-bold text-[16px] md:text-[18px]">
            {value}
        </span>
    </div>
);

export default RefundApplicationDetail;