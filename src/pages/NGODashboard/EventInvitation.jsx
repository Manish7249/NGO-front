// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const EventInvitation = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="animate-fadeIn pb-10 flex justify-center items-center min-h-[80vh]">
//       {/* Invitation Card Container */}
//       <div className="relative bg-white w-full max-w-[500px] border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 text-center flex flex-col items-center">
        
//         {/* ABSTRACT CIRCLES (Design Elements) */}
//         <div className="absolute -top-16 -left-16 w-56 h-56 bg-green-200 rounded-full opacity-60"></div>
//         <div className="absolute -top-10 -left-10 w-40 h-40 border-[15px] border-white rounded-full z-10"></div>
        
//         <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full opacity-60"></div>
//         <div className="absolute -bottom-10 -right-10 w-44 h-44 border-[15px] border-white rounded-full z-10"></div>

//         {/* 1. EDIT BUTTON (Top Right) */}
//         <button className="absolute top-6 right-8 text-[#22c55e] font-bold text-lg hover:underline z-20">
//           Edit
//         </button>

//         {/* 2. MAIN CONTENT */}
//         <div className="relative z-20 mt-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#22c55e] mb-1">
//             Invitation For Shiksha’s
//           </h2>
//           <h1 className="text-2xl md:text-3xl font-[900] text-gray-800 mb-10">
//             “Book Distribution Event”
//           </h1>

//           <div className="space-y-4 text-gray-700 font-medium text-lg leading-relaxed px-2">
//             <p>Dear Donor,</p>
//             <p>
//               Your support is helping us spread the joy of education! We warmly invite you to join our Book Distribution Event and witness the impact of your contribution on young minds.
//             </p>
//           </div>

//           {/* 3. EVENT DETAILS (Icons style) */}
//           <div className="my-10 space-y-3 text-left w-fit mx-auto font-bold text-gray-800 text-lg">
//             <div className="flex items-center gap-3">
//               <span>📅</span> Date: 18th May
//             </div>
//             <div className="flex items-center gap-3">
//               <span>⏰</span> Time: 10am - 5pm
//             </div>
//             <div className="flex items-center gap-3">
//               <span>📍</span> Venue: Anand Vidyalay
//             </div>
//           </div>

//           <p className="text-gray-800 font-bold text-lg mb-10">
//             Thank you for being a part of this meaningful journey.
//           </p>

//           <div className="mb-12">
//              <p className="text-gray-700 font-bold italic">Warm Regards,</p>
//              <p className="text-gray-800 font-[900] text-xl">Shiksha Foundation</p>
//           </div>

//           {/* 4. SEND BUTTON */}
//           <button 
//             onClick={() => alert("Invitation Sent!")}
//             className="w-40 py-3.5 bg-[#22c55e] text-white font-bold rounded-2xl text-xl shadow-lg hover:bg-green-600 transition-all active:scale-95 shadow-green-200"
//           >
//             Send
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default EventInvitation;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react'; // Check icon popup ke liye

const EventInvitation = () => {
  const navigate = useNavigate();
  
  // 1. Popup dikhane ke liye state
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="animate-fadeIn pb-10 flex justify-center items-center min-h-[80vh] relative">
      
      {/* --- 2. SUCCESS POPUP UI --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-14 max-w-[400px] w-full text-center shadow-2xl animate-popIn border border-gray-100 flex flex-col items-center">
            
            {/* Green Check Icon Circle */}
            <div className="w-20 h-20 bg-[#22c55e] text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
              <Check size={48} strokeWidth={4} />
            </div>
            
            {/* Invitation Sent Text */}
            <h2 className="text-3xl font-bold text-[#22c55e] mb-10">
              Invitation Sent
            </h2>

            {/* OK Button */}
            <button 
              onClick={() => {
                setShowPopup(false);
                navigate('/ngo/events'); // OK dabane par events page pe wapas
              }}
              className="w-32 py-3 bg-[#22c55e] text-white font-bold rounded-2xl text-xl shadow-lg hover:bg-green-600 transition-all active:scale-95"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Invitation Card */}
      <div className="relative bg-white w-full max-w-[500px] border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 text-center flex flex-col items-center">
        
        {/* ABSTRACT CIRCLES */}
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 border-[15px] border-white rounded-full z-10"></div>
        
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute -bottom-10 -right-10 w-44 h-44 border-[15px] border-white rounded-full z-10"></div>

        {/* EDIT BUTTON */}
        <button className="absolute top-6 right-8 text-[#22c55e] font-bold text-lg hover:underline z-20">
          Edit
        </button>

        {/* MAIN CONTENT */}
        <div className="relative z-20 mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#22c55e] mb-1">
            Invitation For Shiksha’s
          </h2>
          <h1 className="text-2xl md:text-3xl font-[900] text-gray-800 mb-10">
            “Book Distribution Event”
          </h1>

          <div className="space-y-4 text-gray-700 font-medium text-lg leading-relaxed px-2">
            <p>Dear Donor,</p>
            <p>
              Your support is helping us spread the joy of education! We warmly invite you to join our Book Distribution Event and witness the impact of your contribution on young minds.
            </p>
          </div>

          <div className="my-10 space-y-3 text-left w-fit mx-auto font-bold text-gray-800 text-lg">
            <div className="flex items-center gap-3">
              <span>📅</span> Date: 18th May
            </div>
            <div className="flex items-center gap-3">
              <span>⏰</span> Time: 10am - 5pm
            </div>
            <div className="flex items-center gap-3">
              <span>📍</span> Venue: Anand Vidyalay
            </div>
          </div>

          <p className="text-gray-800 font-bold text-lg mb-10">
            Thank you for being a part of this meaningful journey.
          </p>

          <div className="mb-12">
             <p className="text-gray-700 font-bold italic">Warm Regards,</p>
             <p className="text-gray-800 font-[900] text-xl">Shiksha Foundation</p>
          </div>

          {/* 3. UPDATED SEND BUTTON logic */}
          <button 
            onClick={() => setShowPopup(true)} // Alert ki jagah popup state set kiya
            className="w-40 py-3.5 bg-[#22c55e] text-white font-bold rounded-2xl text-xl shadow-lg hover:bg-green-600 transition-all active:scale-95 shadow-green-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;