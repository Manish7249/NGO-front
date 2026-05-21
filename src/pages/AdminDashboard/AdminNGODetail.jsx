// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Star, MapPin } from 'lucide-react';
// import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
// import childImg from '../../assets/landingPageImage/hero.png'; // Example image

// const AdminNGODetail = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Campaigns');

//   const ratings = [
//     { stars: 5, percent: 78 }, { stars: 4, percent: 16 },
//     { stars: 3, percent: 4 }, { stars: 2, percent: 1 }, { stars: 1, percent: 1 },
//   ];

//   return (
//     <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0">
      
//       {/* 1. BACK BUTTON */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-all mb-8 group"
//       >
//         <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
//       </button>

//       {/* 2. NGO PROFILE HEADER CARD */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-center mb-12">
//         <div className="w-48 h-32 md:w-56 md:h-36 shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-2xl">
//           <img src={shikshaLogo} alt="Logo" className="max-w-full max-h-full object-contain" />
//         </div>
//         <div className="flex-1 text-left">
//           <h2 className="text-3xl font-black text-gray-900 mb-2">Shiksha Foundation</h2>
//           <div className="flex flex-wrap items-center gap-4 text-[15px] font-bold text-gray-500 mb-4">
//              <div className="flex items-center gap-1.5">🎓 Education</div>
//              <span className="hidden md:block">|</span>
//              <div className="flex items-center gap-1.5"><MapPin size={16} /> Mumbai, Maharashtra</div>
//           </div>
//           <div className="text-gray-400 font-bold text-sm space-y-1 mb-4">
//             <p>info@shiksha.org | +91 1234567890</p>
//           </div>
//           <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
//             Empowering underprivileged through quality education and holistic development.
//           </p>
//         </div>
//       </div>

//       {/* 3. RATING SECTION (Same as Dashboard) */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm mb-12 max-w-3xl mx-auto">
//         <div className="flex items-center gap-2 mb-6">
//           <Star className="text-orange-500 fill-orange-500" size={18} />
//           <h4 className="font-bold text-gray-800">Campaign Rating</h4>
//         </div>
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="text-center md:text-left">
//             <h2 className="text-6xl font-black text-gray-800">4.8</h2>
//             <div className="flex gap-1 my-3 justify-center md:justify-start">
//                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
//             </div>
//             <p className="text-gray-400 text-xs">(1,248 Reviews)</p>
//           </div>
//           <div className="flex-1 w-full space-y-3">
//             {ratings.map((r, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <span className="text-xs font-bold text-gray-600 w-4">{r.stars} ★</span>
//                 <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
//                   <div className="bg-[#05402a] h-full" style={{ width: `${r.percent}%` }}></div>
//                 </div>
//                 <span className="text-xs text-gray-400 font-bold w-10">{r.percent}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 4. TABS NAVIGATION */}
//       <div className="flex gap-12 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap px-4">
//         {['Campaigns', 'Events'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-lg font-bold transition-all px-4 ${
//               activeTab === tab ? "text-[#2bb64a] border-b-4 border-[#2bb64a]" : "text-gray-400"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* 5. DATA TABLE / LIST */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm overflow-hidden p-6">
//         {/* Table Headers */}
//         <div className="hidden md:grid grid-cols-12 px-6 py-4 text-gray-500 font-bold text-sm uppercase tracking-wider border-b border-gray-50 mb-6">
//           <div className="col-span-5">Campaigns</div>
//           <div className="col-span-2 text-center">Category</div>
//           <div className="col-span-2 text-center">Raised</div>
//           <div className="col-span-1 text-center">Donors</div>
//           <div className="col-span-2 text-right">Status</div>
//         </div>

//         {/* Rows */}
//         <div className="space-y-10">
//           {[1, 2].map((item) => (
//             <div key={item} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-50 pb-8 last:border-0 last:pb-2">
//               <div className="md:col-span-5 flex items-center gap-4 text-left">
//                  <img src={childImg} className="w-32 h-20 object-cover rounded-xl shadow-sm" alt="" />
//                  <div>
//                     <h4 className="text-[17px] font-black text-gray-900">Educate Every Child</h4>
//                     <p className="text-xs font-bold text-gray-400 mt-1">Started on 10th June to 10th July</p>
//                  </div>
//               </div>
//               <div className="md:col-span-2 text-center">
//                  <span className="bg-blue-50 text-blue-500 px-4 py-1 rounded-lg text-xs font-bold">Education</span>
//               </div>
//               <div className="md:col-span-2 text-center">
//                  <p className="text-[15px] font-black text-gray-800 tracking-tight">₹ 7,50,000 / <span className="text-green-600">15,00,000</span></p>
//                  <div className="w-20 h-1.5 bg-gray-100 rounded-full mx-auto mt-2 overflow-hidden">
//                     <div className="bg-green-500 h-full w-1/2"></div>
//                  </div>
//               </div>
//               <div className="md:col-span-1 text-center font-black text-gray-800 text-lg">342</div>
//               <div className="md:col-span-2 flex flex-col items-end gap-6">
//                  <span className={`px-4 py-1 rounded-lg text-[10px] font-black uppercase ${item === 1 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-500'}`}>
//                    {item === 1 ? 'Active' : 'Complete'}
//                  </span>
//                  <button className="text-[13px] font-black text-gray-800 hover:underline">View Detail</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNGODetail;














// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, Star, MapPin } from 'lucide-react';
// import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
// // Apni images ka sahi path yahan check kar lena bhai
// import educateImg from '../../assets/landingPageImage/hero.png'; 
// import digitalImg from '../../assets/landingPageImage/shiksha-banner.png'; 

// const AdminNGODetail = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Campaigns');

//   const ratingStats = [
//     { stars: 5, percent: 78 },
//     { stars: 4, percent: 16 },
//     { stars: 3, percent: 4 },
//     { stars: 2, percent: 1 },
//     { stars: 1, percent: 1 },
//   ];

//   const campaignList = [
//     {
//       id: 1,
//       title: "Educate Every Child",
//       date: "Started on 10th June to 10th July",
//       category: "Education",
//       raised: "7,50,000",
//       goal: "15,00,000",
//       donors: "342",
//       status: "Active",
//       image: educateImg
//     },
//     {
//       id: 2,
//       title: "Digital Learning Initiative",
//       date: "Started on 10th June to 10th July",
//       category: "Education",
//       raised: "7,50,000",
//       goal: "15,00,000",
//       donors: "200",
//       status: "Complete",
//       image: digitalImg
//     }
//   ];

//   return (
//     <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0">
      
//       {/* 1. BACK BUTTON */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-all mb-8 group"
//       >
//         <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" /> Back
//       </button>

//       {/* 2. NGO HEADER CARD */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-center mb-12">
//         <div className="w-44 h-28 md:w-56 md:h-36 shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-2xl">
//           <img src={shikshaLogo} alt="Logo" className="max-w-full max-h-full object-contain" />
//         </div>
//         <div className="flex-1 text-left">
//           <h2 className="text-3xl font-black text-gray-900 mb-2 leading-none">Shiksha Foundation</h2>
//           <div className="flex flex-wrap items-center gap-3 text-[15px] font-bold text-gray-400 mb-4">
//              <div className="flex items-center gap-1.5">🎓 Education</div>
//              <span className="hidden md:block">|</span>
//              <div className="flex items-center gap-1.5">Mumbai, Maharashtra</div>
//           </div>
//           <div className="text-gray-400 font-bold text-sm mb-4">
//             info@shiksha.org | +91 1234567890
//           </div>
//           <p className="text-gray-400 text-[15px] font-medium leading-relaxed">
//             Empowering underprivileged through quality education and holistic development.
//           </p>
//         </div>
//       </div>

//       {/* 3. CAMPAIGN RATING SECTION (EXACT AS IMAGE) */}
//       <div className="bg-white border border-gray-50 rounded-[2rem] p-8 md:p-12 shadow-sm mb-12 max-w-4xl mx-auto">
//         <div className="flex items-center gap-2 mb-8">
//            <Star className="text-orange-400 fill-orange-400" size={22} />
//            <h4 className="font-bold text-gray-800 text-lg">Campaign Rating</h4>
//         </div>
        
//         <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
//           {/* Left Part: 4.8 */}
//           <div className="text-center shrink-0">
//              <h2 className="text-7xl font-black text-gray-800 leading-none">4.8</h2>
//              <div className="flex gap-1 my-4 justify-center">
//                 {[...Array(4)].map((_, i) => <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />)}
//                 <div className="relative">
//                   <Star size={24} className="text-gray-200 fill-gray-200" />
//                   <div className="absolute top-0 left-0 w-[70%] overflow-hidden">
//                     <Star size={24} className="text-yellow-400 fill-yellow-400" />
//                   </div>
//                 </div>
//              </div>
//              <p className="text-gray-400 text-sm font-bold">(1,248 Reviews)</p>
//           </div>

//           {/* Right Part: Bars */}
//           <div className="flex-1 w-full space-y-4">
//             {ratingStats.map((r, i) => (
//               <div key={i} className="flex items-center gap-4">
//                 <span className="text-sm font-bold text-gray-700 w-4">{r.stars} ★</span>
//                 <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
//                    <div className="bg-[#05402a] h-full rounded-full" style={{ width: `${r.percent}%` }}></div>
//                 </div>
//                 <span className="text-sm text-gray-400 font-black w-10 text-right">{r.percent}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 4. TABS */}
//       <div className="flex justify-center gap-16 border-b border-gray-100 mb-10 overflow-x-auto">
//         {['Campaigns', 'Events'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-xl font-bold transition-all px-6 ${
//               activeTab === tab ? "text-[#2bb64a] border-b-4 border-[#2bb64a]" : "text-gray-400"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* 5. CAMPAIGNS LIST (IMAGE MATCHED) */}
//       <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden p-6">
//         {/* Header Desktop */}
//         <div className="hidden md:grid grid-cols-12 px-6 py-2 text-gray-600 font-bold text-[17px] border-b border-gray-50 mb-10 uppercase tracking-tight">
//           <div className="col-span-5">Campaigns</div>
//           <div className="col-span-2 text-center">Category</div>
//           <div className="col-span-2 text-center">Raised</div>
//           <div className="col-span-1 text-center">Donors</div>
//           <div className="col-span-2 text-right">Status</div>
//         </div>

//         {/* Campaign Rows */}
//         <div className="space-y-12">
//           {campaignList.map((camp) => (
//             <div key={camp.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-50 pb-10 last:border-0">
              
//               {/* Campaigns Column - Title & Image Clickable */}
//               <div 
//                 onClick={() => navigate(`/admin/all-ngos/campaign/${camp.id}`)} 
//                 className="md:col-span-5 flex items-center gap-6 text-left cursor-pointer group"
//               >
//                  <img src={camp.image} className="w-40 h-28 object-cover rounded-[1.5rem] shadow-sm group-hover:scale-105 transition-transform border border-gray-50" alt="" />
//                  <div>
//                     <h4 className="text-[20px] font-semibold text-gray-900 group-hover:text-[#2bb64a] transition-colors">{camp.title}</h4>
//                     <p className="text-[13px] font-bold text-gray-400 mt-2">{camp.date}</p>
//                  </div>
//               </div>

//               {/* Category */}
//               <div className="md:col-span-2 text-center">
//                  <span className="bg-[#eef8ff] text-[#0095ff] px-5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">
//                    {camp.category}
//                  </span>
//               </div>

//               {/* Raised */}
//               <div className="md:col-span-2 text-center">
//                  <p className="text-[17px] font-semibold text-gray-800 tracking-tighter">
//                    ₹ {camp.raised} / <span className="text-[#2bb64a]">{camp.goal}</span>
//                  </p>
//                  <div className="w-20 h-2 bg-gray-100 rounded-full mx-auto mt-3 overflow-hidden">
//                     <div className="bg-[#2bb64a] h-full" style={{ width: `${(parseInt(camp.raised.replace(/,/g, '')) / parseInt(camp.goal.replace(/,/g, ''))) * 100}%` }}></div>
//                  </div>
//               </div>

//               {/* Donors */}
//               <div className="md:col-span-1 text-center font-semiBold text-gray-800 text-xl tracking-tight">
//                  {camp.donors}
//               </div>

//               {/* Status & View Detail Clickable */}
//               <div className="md:col-span-2 flex flex-col items-end gap-10">
//                  <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest ${
//                    camp.status === 'Active' ? 'bg-[#e6f7ef] text-[#1da036]' : 'bg-[#eef8ff] text-[#5da2d1]'
//                  }`}>
//                    {camp.status}
//                  </span>
//                  <div 
//                    onClick={() => navigate(`/admin/all-ngos/campaign/${camp.id}`)}
//                    className="flex items-center gap-1 cursor-pointer group"
//                  >
//                     <span className="text-[15px] font-black text-gray-800 group-hover:underline">View Detail</span>
//                  </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminNGODetail;









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
import educateImg from '../../assets/landingPageImage/hero.png'; 
import digitalImg from '../../assets/landingPageImage/shiksha-banner.png'; 

const AdminNGODetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaigns');

  const ratingStats = [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 16 },
    { stars: 3, percent: 4 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ];

  const campaignList = [
    {
      id: 1,
      title: "Educate Every Child",
      date: "Started on 10th June to 10th July",
      category: "Education",
      raised: "7,50,000",
      goal: "15,00,000",
      donors: "342",
      status: "Active",
      image: educateImg
    },
    {
      id: 2,
      title: "Digital Learning Initiative",
      date: "Started on 10th June to 10th July",
      category: "Education",
      raised: "7,50,000",
      goal: "15,00,000",
      donors: "200",
      status: "Complete",
      image: digitalImg
    }
  ];

  return (
    <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0 text-left">
      
      {/* 1. BACK BUTTON */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-all mb-8 group"
      >
        <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" /> Back
      </button>

      {/* 2. NGO HEADER CARD */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 items-center mb-12">
        <div className="w-44 h-28 md:w-56 md:h-36 shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-2xl">
          <img src={shikshaLogo} alt="Logo" className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-black text-gray-900 mb-2 leading-none">Shiksha Foundation</h2>
          <div className="flex flex-wrap items-center gap-3 text-[15px] font-bold text-gray-400 mb-4">
             <div className="flex items-center gap-1.5">🎓 Education</div>
             <span className="hidden md:block">|</span>
             <div className="flex items-center gap-1.5">Mumbai, Maharashtra</div>
          </div>
          <div className="text-gray-400 font-bold text-sm mb-4">
            info@shiksha.org | +91 1234567890
          </div>
          <p className="text-gray-400 text-[15px] font-medium leading-relaxed">
            Empowering underprivileged through quality education and holistic development.
          </p>
        </div>
      </div>

      {/* 3. CAMPAIGN RATING SECTION */}
      <div className="bg-white border border-gray-50 rounded-[2rem] p-8 md:p-12 shadow-sm mb-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
           <Star className="text-orange-400 fill-orange-400" size={22} />
           <h4 className="font-bold text-gray-800 text-lg">Campaign Rating</h4>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="text-center shrink-0">
             <h2 className="text-7xl font-black text-gray-800 leading-none">4.8</h2>
             <div className="flex gap-1 my-4 justify-center">
                {[...Array(4)].map((_, i) => <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />)}
                <div className="relative">
                  <Star size={24} className="text-gray-200 fill-gray-200" />
                  <div className="absolute top-0 left-0 w-[70%] overflow-hidden">
                    <Star size={24} className="text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
             </div>
             <p className="text-gray-400 text-sm font-bold">(1,248 Reviews)</p>
          </div>

          <div className="flex-1 w-full space-y-4">
            {ratingStats.map((r, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-700 w-4">{r.stars} ★</span>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                   <div className="bg-[#05402a] h-full rounded-full" style={{ width: `${r.percent}%` }}></div>
                </div>
                <span className="text-sm text-gray-400 font-black w-10 text-right">{r.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. TABS */}
      <div className="flex justify-center gap-16 border-b border-gray-100 mb-10 overflow-x-auto">
        {['Campaigns', 'Events'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-xl font-bold transition-all px-6 ${
              activeTab === tab ? "text-[#2bb64a] border-b-4 border-[#2bb64a]" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 5. CAMPAIGNS LIST */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden p-6">
        <div className="hidden md:grid grid-cols-12 px-6 py-2 text-gray-600 font-bold text-[17px] border-b border-gray-50 mb-10 uppercase tracking-tight">
          <div className="col-span-5">Campaigns</div>
          <div className="col-span-2 text-center">Category</div>
          <div className="col-span-2 text-center">Raised</div>
          <div className="col-span-1 text-center">Donors</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        <div className="space-y-12">
          {campaignList.map((camp) => (
            <div key={camp.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-gray-50 pb-10 last:border-0">
              
              {/* FIXED: Path is now exactly /admin/all-ngos/details/campaign-details */}
              <div 
                onClick={() => navigate('/admin/all-ngos/details/campaign-details')} 
                className="md:col-span-5 flex items-center gap-6 text-left cursor-pointer group"
              >
                 <img src={camp.image} className="w-40 h-28 object-cover rounded-[1.5rem] shadow-sm group-hover:scale-105 transition-transform border border-gray-50" alt="" />
                 <div>
                    <h4 className="text-[20px] font-semibold text-gray-900 group-hover:text-[#2bb64a] transition-colors">{camp.title}</h4>
                    <p className="text-[13px] font-bold text-gray-400 mt-2">{camp.date}</p>
                 </div>
              </div>

              <div className="md:col-span-2 text-center">
                 <span className="bg-[#eef8ff] text-[#0095ff] px-5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">
                   {camp.category}
                 </span>
              </div>

              <div className="md:col-span-2 text-center">
                 <p className="text-[17px] font-semibold text-gray-800 tracking-tighter">
                   ₹ {camp.raised} / <span className="text-[#2bb64a]">{camp.goal}</span>
                 </p>
                 <div className="w-20 h-2 bg-gray-100 rounded-full mx-auto mt-3 overflow-hidden">
                    <div className="bg-[#2bb64a] h-full" style={{ width: `${(parseInt(camp.raised.replace(/,/g, '')) / parseInt(camp.goal.replace(/,/g, ''))) * 100}%` }}></div>
                 </div>
              </div>

              <div className="md:col-span-1 text-center font-semibold text-gray-800 text-xl tracking-tight">
                 {camp.donors}
              </div>

              <div className="md:col-span-2 flex flex-col items-end gap-10">
                 <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-widest ${
                   camp.status === 'Active' ? 'bg-[#e6f7ef] text-[#1da036]' : 'bg-[#eef8ff] text-[#5da2d1]'
                 }`}>
                   {camp.status}
                 </span>
                 
                 {/* FIXED: Path is now exactly /admin/all-ngos/details/campaign-details */}
                 <div 
                   onClick={() => navigate('/admin/all-ngos/details/campaign-details')}
                   className="flex items-center gap-1 cursor-pointer group"
                 >
                    <span className="text-[15px] font-black text-gray-800 group-hover:underline">View Detail</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNGODetail;