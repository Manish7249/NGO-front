import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InvitationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans p-4 md:p-8 animate-fadeIn relative overflow-hidden">
      
      {/* Main Invitation Card */}
      <div className="relative bg-white w-full max-w-[550px] border border-gray-200 rounded-[3rem] shadow-2xl overflow-hidden p-8 md:p-14 text-center flex flex-col items-center">
        
        {/* --- ABSTRACT BACKGROUND CIRCLES (Top Left) --- */}
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-green-100 rounded-full opacity-60 z-0"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 border-[15px] border-white rounded-full z-10"></div>
        
        {/* --- ABSTRACT BACKGROUND CIRCLES (Bottom Right) --- */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-60 z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-44 h-44 border-[15px] border-white rounded-full z-10 shadow-inner"></div>

        {/* BACK BUTTON (Top Left Position) */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 text-gray-400 hover:text-[#24b037] transition-all z-20"
        >
          <ArrowLeft size={30} strokeWidth={2.5} />
        </button>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-20 mt-6 w-full">
          
          {/* Headings */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#24b037] mb-1">
              Invitation For Shiksha’s
            </h2>
            <h1 className="text-2xl md:text-3xl font-[900] text-gray-800 leading-tight">
              “Book Distribution Event”
            </h1>
          </div>

          {/* Message Body */}
          <div className="space-y-5 text-gray-700 font-medium text-lg leading-relaxed px-2 mb-10">
            <p>Dear Donor,</p>
            <p>
              Your support is helping us spread the joy of education! We warmly invite you to join our 
              Book Distribution Event and witness the impact of your contribution on young minds.
            </p>
          </div>

          {/* Event Metadata (Emoji based as per Image) */}
          <div className="mb-10 space-y-3 text-left w-fit mx-auto font-bold text-gray-800 text-lg md:text-xl">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📅</span> 
              <span>Date: 18th May</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">⏰</span> 
              <span>Time: 10am - 5pm</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span> 
              <span>Venue: Anand Vidyalay</span>
            </div>
          </div>

          {/* Closing Text */}
          <p className="text-gray-800 font-bold text-lg mb-10">
            Thank you for being a part of this meaningful journey.
          </p>

          {/* Sign-off */}
          <div className="mb-12">
             <p className="text-gray-700 font-bold italic">Warm Regards,</p>
             <p className="text-gray-800 font-[900] text-2xl mt-1 tracking-tight">
               Shiksha Foundation
             </p>
          </div>

          {/* Action Button (Styled like the bottom code) */}
          {/* <button 
            onClick={() => navigate(-1)} // Clicking this just goes back or can be used for 'Accept'
            className="w-full max-w-[200px] py-4 bg-[#24b037] text-white font-bold rounded-2xl text-xl shadow-lg hover:bg-green-600 transition-all active:scale-95 shadow-green-200"
          >
            I'll Attend
          </button> */}
        </div>

      </div>
    </div>
  );
};

export default InvitationPage;