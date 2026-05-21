import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Upload } from 'lucide-react';

const NGOReviewDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn pb-5 font-sans max-w-6xl mx-auto px-4 md:px-0">
      
      {/* 1. HEADER SECTION */}
      <div className="flex items-center gap-6 mb-8 pt-6">
        <button 
          onClick={() => navigate(-1)} 
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-all shadow-sm active:scale-90"
        >
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          Shiksha Foundation <span className="font-medium text-gray-600 ml-2">(Reference ID: NID123456)</span>
        </h1>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT & CENTER: NGO INFO */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Details */}
          <section className="text-left">
            <h4 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Details</h4>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-gray-900">Shiksha Foundation</h3>
              <div className="flex flex-wrap items-center gap-4 text-[15px] font-bold text-gray-600">
                <span>sikshaf@shikshafoundation.org</span>
                <span className="hidden md:block w-px h-6 bg-gray-300"></span>
                <span>+91 9369078612</span>
              </div>
              <p className="text-[15px] font-bold text-gray-500">Mumbai, Maharashtra</p>
              <p className="text-[15px] font-bold text-gray-500">Applied on: 12/05/2026</p>
            </div>
          </section>

          {/* Documents Check */}
          <section className="text-left">
            <h4 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Documents</h4>
            <div className="space-y-4">
              {["Registration Certificate", "PAN Card", "80G Certificate"].map((doc) => (
                <div key={doc} className="flex items-center gap-10">
                  <span className="text-[16px] font-bold text-gray-700 w-48">{doc}</span>
                  <CheckCircle2 size={24} className="text-[#22c55e]" fill="#dcfce7" />
                </div>
              ))}
            </div>
          </section>

          {/* Bank Details */}
          <section className="text-left">
            <h4 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Bank Details</h4>
            <div className="grid grid-cols-2 gap-y-4 text-[16px]">
              <div className="text-gray-500 font-bold">Account Holder Name</div>
              <div className="text-gray-900 font-bold">Shiksha Foundation</div>
              <div className="text-gray-500 font-bold">Account Number</div>
              <div className="text-gray-900 font-bold tracking-widest">ACC12323456</div>
              <div className="text-gray-500 font-bold">IFSC Code</div>
              <div className="text-gray-900 font-bold uppercase">BOI2324567686</div>
              <div className="text-gray-500 font-bold">Bank Name</div>
              <div className="text-gray-900 font-bold">Bank Of India</div>
            </div>
          </section>

          {/* Projects */}
          <section className="text-left">
            <h4 className="text-gray-900 font-black text-lg mb-6 uppercase tracking-wider">Projects/ Campaigns</h4>
            <div className="flex gap-10">
              <span className="text-[16px] font-bold text-gray-800 w-48 shrink-0">Har Ghar shiksha Campaign</span>
              <p className="text-[15px] font-medium text-gray-500 leading-relaxed">
                Provided education to children in every household in rural areas.
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE: LOGO BOX */}
        <div className="flex justify-center lg:justify-end items-start pt-12 lg:pt-0">
          <div className="w-52 h-44 border border-gray-300 rounded-2xl shadow-lg flex flex-col items-center justify-center bg-white">
             <Upload size={32} className="text-gray-400 mb-2" />
             <span className="text-gray-800 font-black text-sm uppercase tracking-tight">Logo</span>
          </div>
        </div>
      </div>

      {/* 3. UPLOADED IMAGES GRID */}
      <section className="text-left mt-16">
        <h4 className="text-gray-900 font-black text-lg mb-8 uppercase tracking-wider">Uploaded Images</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {["Registration Certificate", "PAN Card", "80G Certificate", "Campaign Images"].map((title) => (
            <div key={title} className="bg-white border border-gray-300 rounded-3xl h-64 md:h-72 shadow-md flex items-center justify-center text-gray-400 font-bold text-center px-4">
              {title}
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACTION BUTTONS */}
      <div className="flex flex-col md:flex-row justify-center gap-10 mt-20">
        <button className="w-full md:w-64 py-4 bg-[#1da036] hover:bg-green-700 text-white font-black rounded-2xl text-2xl shadow-lg shadow-green-100 transition-all active:scale-95">
          Verify
        </button>
        <button className="w-full md:w-64 py-4 bg-[#ff5a5a] hover:bg-red-600 text-white font-black rounded-2xl text-2xl shadow-lg shadow-red-100 transition-all active:scale-95">
          Reject
        </button>
      </div>

    </div>
  );
};

export default NGOReviewDetail;