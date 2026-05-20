// import React from 'react';
// import { Package, Calendar, Users } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import campImg from '../../assets/landingPageImage/shiksha-banner.png'; // Path sahi check kar lena bhai

// const CampaignList = ({ filter = 'All' }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Logic: Pata karo ki user Dashboard par hai ya Campaigns page par
//   const basePath = location.pathname.includes('/dashboard') 
//     ? '/ngo/dashboard' 
//     : '/ngo/campaigns';

//   const allCampaigns = [
//     { 
//       id: 1, 
//       title: "Build a New Learning Center", 
//       raised: "7,50,000", 
//       goal: "15,00,000", 
//       percent: 50, 
//       status: "Active", 
//       category: "Education", 
//       date: "2 May 2026", 
//       donors: 30 
//     },
//     { 
//       id: 2, 
//       title: "Clean Water For All", 
//       raised: "7,50,000", 
//       goal: "15,00,000", 
//       percent: 50, 
//       status: "Active", 
//       category: "Education", 
//       date: "2 May 2026", 
//       donors: 30 
//     },
//     { 
//       id: 3, 
//       title: "Provide a Study Materials", 
//       raised: "15,00,000", 
//       goal: "15,00,000", 
//       percent: 100, 
//       status: "Completed", 
//       category: "Education", 
//       date: "2 May 2026", 
//       donors: 30 
//     },
//   ];

//   const filteredCampaigns = allCampaigns.filter(camp => 
//     filter === 'All' ? true : camp.status === filter
//   );

//   return (
//     <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10">
//       <div className="space-y-10">
//         {filteredCampaigns.map((camp) => (
//           <div key={camp.id} className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-gray-50 last:border-0 last:pb-0 relative animate-fadeIn">
            
//             {/* 1. IMAGE AREA WITH STATUS BADGE */}
//             <div className="relative w-full md:w-64 h-44 shrink-0">
//               <img src={campImg} alt="camp" className="w-full h-full object-cover rounded-3xl border-4 border-blue-400/10 shadow-sm" />
              
//               {/* Badge (Active/Completed) */}
//               <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold text-white shadow-md ${
//                 camp.status === 'Active' ? 'bg-[#76cc81]' : 'bg-[#5da2d1]'
//               }`}>
//                 {camp.status}
//               </span>
//             </div>

//             {/* 2. CONTENT AREA */}
//             <div className="flex-1 w-full text-left">
              
//               {/* Header inside card: Title + Action Buttons */}
//               <div className="flex justify-between items-start mb-2">
//                 <h4 className="text-[20px] font-bold text-gray-900 leading-tight">{camp.title}</h4>
                
//                 {/* Buttons: Desktop side-by-side */}
//                 <div className="flex gap-2">
//                   {camp.status === "Completed" && (
//                     <button 
//                       onClick={() => navigate(`${basePath}/utilization`)}
//                       className="bg-[#b4d6b4] text-[#3e633e] px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-[#a3c9a3] transition-all"
//                     >
//                       Utilization
//                     </button>
//                   )}
//                   <button 
//                     onClick={() => navigate(`${basePath}/campaign-details`)}
//                     className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-300 transition-all"
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>

//               {/* Amount Progress Logic */}
//               <p className="text-xl font-bold mb-5 italic tracking-tight">
//                 ₹ {camp.raised} <span className="text-gray-400 font-medium mx-1">/</span> <span className="text-[#2bb64a]">₹ {camp.goal}</span>
//               </p>

//               {/* Progress Bar (Same to Same Design) */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="flex-1 h-2.5 bg-gray-100 rounded-full relative">
//                   <div 
//                     className="bg-[#2bb64a] h-full rounded-full transition-all duration-1000 flex items-center justify-end" 
//                     style={{ width: `${camp.percent}%` }}
//                   >
//                     {/* Small dot at the end of progress bar */}
//                     <div className="w-1.5 h-1.5 bg-white rounded-full mr-0.5"></div>
//                   </div>
//                 </div>
//                 <span className="text-sm font-[900] text-gray-800 w-10">{camp.percent}%</span>
//               </div>

//               {/* Meta Info Icons Section */}
//               <div className="flex flex-wrap gap-x-8 gap-y-3 text-gray-400 text-sm font-bold">
//                 <div className="flex items-center gap-2">
//                   <Package size={18} className="opacity-70" /> {camp.category}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar size={18} className="opacity-70" /> {camp.date}
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Users size={18} className="opacity-70" /> {camp.donors} Donors
//                 </div>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CampaignList;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Calendar, Users } from 'lucide-react';
import campImg from '../../assets/landingPageImage/shiksha-banner.png'; 

// Yahan filter = 'All' add kiya hai (Default Prop)
const CampaignList = ({ filter = 'All' }) => {
  const navigate = useNavigate();
  const allCampaigns = [
    { 
      id: 1, 
      title: "Build a New Learning Center", 
      raised: "7,50,000", 
      goal: "15,00,000", 
      percent: 50, 
      status: "Active", 
      category: "Education", 
      date: "2 May 2026", 
      donors: 30 
    },
    { 
      id: 2, 
      title: "Clean Water For All", 
      raised: "7,50,000", 
      goal: "15,00,000", 
      percent: 50, 
      status: "Active", 
      category: "Education", 
      date: "2 May 2026", 
      donors: 30 
    },
    { 
      id: 3, 
      title: "Provide a Study Materials", 
      raised: "15,00,000", 
      goal: "15,00,000", 
      percent: 100, 
      status: "Completed", 
      category: "Education", 
      date: "2 May 2026", 
      donors: 30 
    },
  ];

  // Logic: Agar filter na ho ya 'All' ho toh sab dikhao, warna match karo
  const filteredCampaigns = allCampaigns.filter(camp => 
    !filter || filter === 'All' ? true : camp.status === filter
  );

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10">
       {/* Agar koi campaign nahi mila toh message dikhao (Debugging ke liye) */}
      {filteredCampaigns.length === 0 ? (
        <p className="text-center text-gray-400">No campaigns found for "{filter}"</p>
      ) : (
        <div className="space-y-10">
          {filteredCampaigns.map((camp) => (
            <div key={camp.id} className="flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-gray-50 last:border-0 last:pb-0 relative">
              
              {/* IMAGE AREA */}
              <div className="relative w-full md:w-64 h-44 shrink-0">
                <img src={campImg} alt="camp" className="w-full h-full object-cover rounded-3xl border-4 border-blue-400/20" />
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-[11px] font-bold text-white shadow-sm ${
                  camp.status === 'Active' ? 'bg-[#76cc81]' : 'bg-[#5da2d1]'
                }`}>
                  {camp.status}
                </span>
              </div>

              {/* CONTENT AREA */}
              <div className="flex-1 w-full text-left">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-[20px] font-bold text-gray-900 leading-tight">{camp.title}</h4>
                  <div className="flex gap-2">
                    {camp.status === "Completed" && (
                    <button 
                        onClick={() => navigate('/ngo/campaigns/campaign-details')}
                        className="bg-[#b4d6b4] text-[#3e633e] px-3 py-1.5 rounded-lg text-xs font-bold"
                        >
                        Utilization
                    </button>
                    )}
                    <button 
                        onClick={() => navigate('/ngo/campaigns/campaigns-budget')}
                        className="bg-gray-200 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold"
                        >
                        View Details
                    </button>
                  </div>
                </div>

                <p className="text-lg font-bold mb-4">
                  ₹ {camp.raised} <span className="text-gray-400 font-medium">/</span> <span className="text-green-600">₹ {camp.goal}</span>
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: `${camp.percent}%` }}></div>
                  </div>
                  <span className="text-sm font-black text-gray-800">{camp.percent}%</span>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-400 text-xs font-bold">
                  <div className="flex items-center gap-2"><Package size={16} /> Education</div>
                  <div className="flex items-center gap-2"><Calendar size={16} /> 2 May 2026</div>
                  <div className="flex items-center gap-2"><Users size={16} /> 30 Donars</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CampaignList;