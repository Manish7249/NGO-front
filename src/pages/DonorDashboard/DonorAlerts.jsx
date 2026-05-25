import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DonorAlerts = () => {
  const navigate = useNavigate();
  // 🟢 State to toggle between Alerts List and Invitation View
  const [showInvitation, setShowInvitation] = useState(false);

  // --- SUB-COMPONENT: INVITATION VIEW (BILKUL PHOTO JAISA) ---
  const InvitationView = () => (
    <div className="relative min-h-[85vh] bg-white rounded-[30px] shadow-sm p-6 md:p-12 flex flex-col items-center animate-fadeIn overflow-hidden">
      
      {/* Back Button */}
      <button 
        onClick={() => setShowInvitation(false)}
        className="absolute top-6 left-6 md:top-10 md:left-10 text-gray-800 hover:scale-110 transition-transform"
      >
        <ArrowLeft size={32} strokeWidth={2.5} />
      </button>

      {/* Invitation Content */}
      <div className="mt-16 md:mt-20 flex flex-col items-center text-center max-w-2xl mx-auto z-10">
        <h2 className="text-[#24b037] text-2xl md:text-3xl font-bold mb-1">
          Invitation For Shiksha’s
        </h2>
        <h1 className="text-gray-900 text-3xl md:text-4xl font-black mb-12">
          “Book Distribution Event”
        </h1>

        <div className="space-y-6 text-gray-800 text-lg md:text-xl font-medium leading-relaxed px-4">
          <p>Dear Donor,</p>
          <p>
            Your support is helping us spread the joy of education! We warmly invite you to join our 
            Book Distribution Event and witness the impact of your contribution on young minds.
          </p>
        </div>

        {/* Event Details with Icons */}
        <div className="mt-12 space-y-4 text-left inline-block">
          <div className="flex items-center gap-4 text-lg md:text-xl font-bold text-gray-800">
            <span role="img" aria-label="date">📅</span>
            <p>Date: 18th May</p>
          </div>
          <div className="flex items-center gap-4 text-lg md:text-xl font-bold text-gray-800">
            <span role="img" aria-label="time">⏰</span>
            <p>Time: 10am - 5pm</p>
          </div>
          <div className="flex items-center gap-4 text-lg md:text-xl font-bold text-gray-800">
            <span role="img" aria-label="venue">📍</span>
            <p>Venue: Anand Vidyalay</p>
          </div>
        </div>

        <p className="mt-16 text-lg md:text-xl font-bold text-gray-800">
          Thank you for being a part of this meaningful journey.
        </p>

        <div className="mt-12 text-lg md:text-xl font-bold text-gray-800">
          <p>Warm Regards,</p>
          <p>Shiksha Foundation</p>
        </div>
      </div>

      {/* 🟢 Bottom Right Decorative Circles (Same as Photo) */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#cbf4c9] rounded-full opacity-60"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[25px] border-white rounded-full z-20"></div>
      <div className="absolute -bottom-5 -right-5 w-56 h-56 bg-[#a7e8a4] rounded-full z-10"></div>
    </div>
  );

  // --- MAIN RENDER LOGIC ---
  if (showInvitation) {
    return <div className="p-4 md:p-10"><InvitationView /></div>;
  }

  return (
    <div className="p-6 md:p-10 bg-white min-h-screen animate-fadeIn font-sans max-w-[1100px] mx-auto overflow-hidden">
      
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-left">Updates & Alerts</h1>

      <div className="space-y-6">
        
        {/* NGO Update Card */}
        <div className="bg-white p-5 md:p-6 rounded-[24px] border border-gray-200 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-6 md:gap-10 transition-all hover:shadow-md">
          <div className="w-full md:w-[220px] h-[160px] rounded-[20px] overflow-hidden shrink-0 shadow-sm">
             <img 
               src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop" 
               className="w-full h-full object-cover" 
               alt="ngo-update" 
             />
          </div>
          
          <div className="flex-1 space-y-2 text-left py-1">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Shiksha Foundation</h4>
            <p className="text-gray-500 font-bold text-base">Build a New Learning Center</p>
            
            <div className="flex flex-col space-y-1 pt-1">
               <div className="flex items-center gap-3">
                 <p className="text-[14px] text-gray-400 font-bold uppercase tracking-tight">Total Donated - </p>
                 <span className="text-gray-800 font-bold text-lg">₹ 1,250</span>
               </div>
               <p className="text-[12px] text-gray-400 font-bold italic tracking-wide">3 Donations</p>
            </div>

            <div className="flex gap-4 mt-4 text-[14px] md:text-[15px]">
              <span className="text-red-500 font-black shrink-0">Alert:</span>
              <p className="text-[#ff6060] font-bold leading-tight">
                Build a New Learning Center Campaign will be starting from 15th May Onwards
              </p>
            </div>
          </div>
        </div>

        {/* Invitation Card */}
        <div className="bg-white p-8 md:p-10 rounded-[24px] border border-gray-200 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all hover:shadow-md">
          <div className="w-full md:w-[220px] flex flex-col items-center justify-center md:border-r border-gray-100 md:pr-10">
             <div className="text-orange-600 font-black text-4xl italic tracking-tighter leading-none">shiksha</div>
             <div className="text-gray-400 font-black text-[12px] uppercase tracking-[0.4em] mt-1 ml-1">Foundation</div>
          </div>
          
          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <h4 className="text-3xl font-bold text-green-500 mb-1 tracking-tight">You're Invited!</h4>
              <p className="text-gray-500 font-medium text-[15px]">
                Shiksha Foundation has invited you to their upcoming
              </p>
              <p className="text-gray-800 font-black text-lg mt-1 uppercase tracking-tight">
                Book Distribution Event
              </p>
            </div>
            
            {/* <button 
              onClick={() => setShowInvitation(true)} // 🟢 Trigger Invitation View
              className="bg-[#1db13a] hover:bg-[#168a2d] text-white px-10 py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95 text-base"
            >
              View Invitation
            </button> */}
            <button 
                onClick={() => navigate('/donor/alerts/invitation')} // 🟢 Seedha naye page par bheje
                className="bg-[#1db13a] hover:bg-[#168a2d] text-white px-10 py-2.5 rounded-xl font-bold shadow-lg transition-all active:scale-95 text-base"
            >
                View Invitation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DonorAlerts;