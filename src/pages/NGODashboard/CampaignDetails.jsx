// import React, { useState } from 'react';
// import { ArrowLeft, MapPin, Package, Calendar, Users } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('All Donations');

//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans pb-10">
//       {/* 1. BACK BUTTON */}
//       <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all"
//         >
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
        
//         {/* 2. HERO IMAGE */}
//         <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-8">
//           <img 
//             src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
//             alt="Children" 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* 3. HEADER INFO */}
//         <div className="mb-10">
//           <div className="flex items-center gap-3 mb-2 flex-wrap">
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Build a New Learning Center</h1>
//             <span className="bg-[#5da2d1] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
//               Completed
//             </span>
//           </div>
          
//           <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-4">
//             <span>Shiksha Foundation</span>
//             <span className="text-gray-300">|</span>
//             <div className="flex items-center gap-1">
//               <MapPin size={16} /> Mumbai, Maharashtra
//             </div>
//           </div>

//           <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
//             We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//           </p>
//         </div>

//         {/* 4. STATS CARD */}
//         <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-sm mb-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             {stats.map((stat, i) => (
//               <div key={i} className="text-center">
//                 <h3 className={`text-2xl md:text-3xl font-black text-gray-800 ${stat.underline ? 'border-b-4 border-[#0095ff] inline-block pb-1 leading-none' : ''}`}>
//                   {stat.value}
//                 </h3>
//                 <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
//               </div>
//             ))}
//           </div>
          
//           {/* Custom Progress Bar */}
//           <div className="relative w-full h-3 bg-gray-200 rounded-full">
//             <div className="absolute top-0 left-0 h-full bg-[#22c55e] rounded-full flex items-center justify-end pr-0.5" style={{ width: '48%' }}>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* 5. ABOUT SECTION */}
//         <div className="mb-12">
//           <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">About This Campaign</h2>
//           <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium text-justify">
//             This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
//           </p>
//           <button className="text-[#2bb64a] font-bold text-sm mt-3 hover:underline">Read More</button>
//         </div>

//         {/* 6. TABS NAVIGATION */}
//         <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//           {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 text-sm md:text-[16px] font-bold transition-all ${
//                 activeTab === tab 
//                 ? "text-gray-900 border-b-4 border-[#2bb64a]" 
//                 : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* 7. DONORS TABLE CARD */}
//         <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-8 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="text-gray-500 font-bold text-sm md:text-[16px] border-b border-gray-50">
//                   <th className="pb-6 px-4">Donors</th>
//                   <th className="pb-6 px-4 text-center">Amount</th>
//                   <th className="pb-6 px-4 text-center">Date</th>
//                   <th className="pb-6 px-4 text-right">Payment</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 font-semibold">
//                 {donors.map((donor, idx) => (
//                   <tr key={idx} className="border-b border-gray-50 last:border-0">
//                     <td className="py-6 px-4">{donor.name}</td>
//                     <td className="py-6 px-4 text-center">{donor.amount}</td>
//                     <td className="py-6 px-4 text-center text-gray-500">{donor.date}</td>
//                     <td className="py-6 px-4 text-right uppercase text-gray-500">{donor.method}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <button className="w-full mt-6 py-2 text-[#2bb64a] font-bold text-lg hover:underline transition-all">
//             View All Donations
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;









// import React, { useState } from 'react';
// import { ArrowLeft, MapPin, Upload, PlusCircle, Check } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   // Default tab ko 'Upload Campaign Details' kar diya hai taaki pehle wahi dikhe
//   const [activeTab, setActiveTab] = useState('Upload Campaign Details');

//   // Multi-upload sections ke liye state
//   const [uploadSections, setUploadSections] = useState([{ id: Date.now() }]);

//   const addMoreSection = () => {
//     setUploadSections([...uploadSections, { id: Date.now() }]);
//   };

//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans pb-10">
//       {/* 1. BACK BUTTON */}
//       <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all">
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
//         {/* HERO IMAGE */}
//         <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-8">
//           <img src={heroImg} alt="Children" className="w-full h-full object-cover" />
//         </div>

//         {/* HEADER INFO */}
//         <div className="mb-10">
//           <div className="flex items-center gap-3 mb-2 flex-wrap">
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Build a New Learning Center</h1>
//             <span className="bg-[#5da2d1] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Completed</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-4">
//             <span>Shiksha Foundation</span>
//             <span className="text-gray-300">|</span>
//             <div className="flex items-center gap-1"><MapPin size={16} /> Mumbai, Maharashtra</div>
//           </div>
//           <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
//             We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//           </p>
//         </div>

//         {/* STATS CARD */}
//         <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-sm mb-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             {stats.map((stat, i) => (
//               <div key={i} className="text-center">
//                 <h3 className={`text-2xl md:text-3xl font-black text-gray-800 ${stat.underline ? 'border-b-4 border-[#0095ff] inline-block pb-1 leading-none' : ''}`}>{stat.value}</h3>
//                 <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//           <div className="relative w-full h-3 bg-gray-200 rounded-full">
//             <div className="absolute top-0 left-0 h-full bg-[#22c55e] rounded-full flex items-center justify-end pr-0.5" style={{ width: '48%' }}>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* TABS NAVIGATION */}
//         <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//           {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 text-sm md:text-[16px] font-bold transition-all ${
//                 activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* --- CONDITIONAL CONTENT --- */}

//         {/* A. UPLOAD CAMPAIGN DETAILS TAB */}
//         {activeTab === 'Upload Campaign Details' && (
//           <div className="space-y-6">
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-10">
//               <div className="space-y-10">
//                 {uploadSections.map((section, index) => (
//                   <div key={section.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
//                     {/* Left: Upload Box */}
//                     <div className="border-2 border-dashed border-gray-300 rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group min-h-[250px]">
//                       <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={40} />
//                       <span className="text-gray-700 font-bold text-lg">Upload Image</span>
//                     </div>

//                     {/* Right: Description Box */}
//                     <div className="border border-gray-300 rounded-3xl p-6 flex items-center justify-center min-h-[250px] shadow-sm">
//                       <textarea 
//                         placeholder="Enter the description here"
//                         className="w-full h-full bg-transparent outline-none text-gray-500 font-medium text-center resize-none flex items-center justify-center pt-20"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Add More Button */}
//             <button 
//               onClick={addMoreSection}
//               className="flex items-center gap-2 text-gray-900 font-bold text-xl ml-2 hover:opacity-80 transition-all active:scale-95"
//             >
//               Add more <PlusCircle className="text-[#2bb64a]" size={28} />
//             </button>
//           </div>
//         )}

//         {/* B. ALL DONATIONS TAB */}
//         {activeTab === 'All Donations' && (
//           <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-8 overflow-hidden animate-fadeIn">
//             <div className="overflow-x-auto">
//               <table className="w-full text-left">
//                 <thead>
//                   <tr className="text-gray-500 font-bold text-sm md:text-[16px] border-b border-gray-50">
//                     <th className="pb-6 px-4">Donors</th>
//                     <th className="pb-6 px-4 text-center">Amount</th>
//                     <th className="pb-6 px-4 text-center">Date</th>
//                     <th className="pb-6 px-4 text-right">Payment</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700 font-semibold">
//                   {donors.map((donor, idx) => (
//                     <tr key={idx} className="border-b border-gray-50 last:border-0">
//                       <td className="py-6 px-4">{donor.name}</td>
//                       <td className="py-6 px-4 text-center">{donor.amount}</td>
//                       <td className="py-6 px-4 text-center text-gray-500">{donor.date}</td>
//                       <td className="py-6 px-4 text-right uppercase text-gray-500">{donor.method}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* C. RATING TAB (Placeholder) */}
//         {activeTab === 'Rating' && (
//           <div className="p-20 text-center text-gray-400 font-bold animate-fadeIn">
//             Rating details will appear here.
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;












// import React, { useState, useRef } from 'react';
// import { ArrowLeft, MapPin, Upload, PlusCircle } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('All Donations');

//   // 1. Logic for Multiple Upload Sections with Image Preview
//   const [uploadSections, setUploadSections] = useState([
//     { id: Date.now(), image: null, description: "" }
//   ]);

//   const addMoreSection = () => {
//     setUploadSections([...uploadSections, { id: Date.now(), image: null, description: "" }]);
//   };

//   const handleImageChange = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file); // Create preview URL
//       setUploadSections(uploadSections.map(sec => 
//         sec.id === id ? { ...sec, image: imageUrl } : sec
//       ));
//     }
//   };

//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans pb-10">
//       {/* BACK BUTTON */}
//       <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all">
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
//         {/* HERO IMAGE */}
//         <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-8">
//           <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
//         </div>

//         {/* HEADER INFO */}
//         <div className="mb-10">
//           <div className="flex items-center gap-3 mb-2 flex-wrap">
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Build a New Learning Center</h1>
//             <span className="bg-[#5da2d1] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Completed</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-4">
//             <span>Shiksha Foundation</span> <span className="text-gray-300">|</span> 
//             <div className="flex items-center gap-1"><MapPin size={16} /> Mumbai, Maharashtra</div>
//           </div>
//           <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
//             We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//           </p>
//         </div>

//         {/* TABS NAVIGATION */}
//         <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//           {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 text-sm md:text-[16px] font-bold transition-all ${
//                 activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* --- CONDITIONAL TAB CONTENT --- */}

//         {/* TAB 1: UPLOAD CAMPAIGN DETAILS */}
//         {activeTab === 'Upload Campaign Details' && (
//           <div className="animate-fadeIn">
//              <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-10 mb-6">
//                 <div className="space-y-12">
//                   {uploadSections.map((section) => (
//                     <div key={section.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                      
//                       {/* Left: Upload Box with Image Preview */}
//                       <label className="relative border-2 border-dashed border-gray-300 rounded-[2rem] h-[280px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden group">
//                         {section.image ? (
//                           <img src={section.image} className="w-full h-full object-cover" alt="Uploaded" />
//                         ) : (
//                           <>
//                             <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={40} />
//                             <span className="text-gray-700 font-bold text-lg">Upload Image</span>
//                           </>
//                         )}
//                         <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(section.id, e)} />
//                       </label>

//                       {/* Right: Description Box */}
//                       <div className="border border-gray-300 rounded-[2rem] p-6 h-[280px] flex items-center justify-center shadow-sm">
//                         <textarea 
//                           placeholder="Enter the description here"
//                           className="w-full h-full bg-transparent outline-none text-gray-500 font-medium text-center resize-none flex items-center pt-24"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//              </div>

//              {/* Add More Button */}
//              <button 
//                onClick={addMoreSection}
//                className="flex items-center gap-2 text-gray-900 font-bold text-xl ml-2 hover:opacity-70 transition-all active:scale-95"
//              >
//                Add more <PlusCircle className="text-[#2bb64a]" size={30} />
//              </button>
//           </div>
//         )}

//         {/* TAB 2: ALL DONATIONS */}
//         {activeTab === 'All Donations' && (
//           <div className="animate-fadeIn">
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-8 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left">
//                   <thead>
//                     <tr className="text-gray-500 font-bold text-sm md:text-[16px] border-b border-gray-50">
//                       <th className="pb-6 px-4">Donors</th>
//                       <th className="pb-6 px-4 text-center">Amount</th>
//                       <th className="pb-6 px-4 text-center">Date</th>
//                       <th className="pb-6 px-4 text-right">Payment</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-700 font-semibold">
//                     {donors.map((donor, idx) => (
//                       <tr key={idx} className="border-b border-gray-50 last:border-0">
//                         <td className="py-6 px-4">{donor.name}</td>
//                         <td className="py-6 px-4 text-center">{donor.amount}</td>
//                         <td className="py-6 px-4 text-center text-gray-500">{donor.date}</td>
//                         <td className="py-6 px-4 text-right uppercase text-gray-500">{donor.method}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* View All Donations Button */}
//               <div className="w-full pt-6 border-t border-gray-50 flex justify-center">
//                 <button className="text-[#2bb64a] font-bold text-lg hover:underline transition-all">
//                   View All Donations
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;













// import React, { useState } from 'react';
// import { ArrowLeft, MapPin, Upload, PlusCircle, Search, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Rating'); // Set 'Rating' to see it first

//   // States
//   const [uploadSections, setUploadSections] = useState([{ id: Date.now(), image: null }]);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Data for Ratings
//   const ratingsData = [
//     { id: 1, donor: "Rahul sharma", ngo: "Green Earth Foundation", stars: 5, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 2, donor: "Priya ghjss", ngo: "Shiksha Foundation", stars: 3, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 3, donor: "Ruru choudhary", ngo: "Education for All", stars: 2, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 4, donor: "Tanya ghi", ngo: "Health and Hope Foundation", stars: 4, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 5, donor: "Farhana bhat", ngo: "Women Empowerment Trust", stars: 2, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//   ];

//   // Star Component Logic
//   const RatingStars = ({ count }) => {
//     return (
//       <div className="flex gap-1">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             size={18} 
//             className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
//           />
//         ))}
//       </div>
//     );
//   };

//   const handleImageChange = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadSections(uploadSections.map(sec => 
//         sec.id === id ? { ...sec, image: URL.createObjectURL(file) } : sec
//       ));
//     }
//   };

//   return (
//     <div className="bg-white min-h-screen font-sans pb-10">
//       {/* HEADER & NAV (Same as before) */}
//       <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all"><ArrowLeft size={20} /> Back</button>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
//         {/* TOP HERO & INFO (Same as before) */}
//         <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-8"><img src={heroImg} className="w-full h-full object-cover" alt="Hero" /></div>
        
//         {/* TABS NAVIGATION */}
//         <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//           {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//             <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-sm md:text-[16px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}>{tab}</button>
//           ))}
//         </div>

//         {/* --- CONDITIONAL TAB CONTENT --- */}

//         {/* TAB 3: RATING */}
//         {activeTab === 'Rating' && (
//           <div className="animate-fadeIn space-y-10">
//             {/* 1. Search Bar */}
//             <div className="relative w-full max-w-[300px]">
//               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
//                 <Search size={20} />
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Donar name" 
//                 className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 font-medium"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             {/* 2. Rating Table Card */}
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-10 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left min-w-[800px]">
//                   <thead>
//                     <tr className="text-gray-700 font-bold text-[16px] border-b border-gray-50">
//                       <th className="pb-6 px-4">Donar name</th>
//                       <th className="pb-6 px-4">NGO name</th>
//                       <th className="pb-6 px-4">Rating</th>
//                       <th className="pb-6 px-4">Feedback</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-600 font-medium">
//                     {ratingsData.map((item) => (
//                       <tr key={item.id} className="border-b border-gray-50 last:border-0">
//                         <td className="py-7 px-4">{item.donor}</td>
//                         <td className="py-7 px-4">{item.ngo}</td>
//                         <td className="py-7 px-4"><RatingStars count={item.stars} /></td>
//                         <td className="py-7 px-4 text-sm leading-relaxed max-w-[300px]">{item.feedback}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* TAB 1: UPLOAD (Keep existing logic) */}
//         {activeTab === 'Upload Campaign Details' && (
//           <div className="animate-fadeIn space-y-6">
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-10 mb-6">
//               <div className="space-y-12">
//                 {uploadSections.map((sec) => (
//                    <div key={sec.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
//                       <label className="relative border-2 border-dashed border-gray-300 rounded-[2rem] h-[280px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden group">
//                         {sec.image ? <img src={sec.image} className="w-full h-full object-cover" /> : <>
//                           <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={40} />
//                           <span className="text-gray-700 font-bold text-lg">Upload Image</span>
//                         </>}
//                         <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(sec.id, e)} />
//                       </label>
//                       <div className="border border-gray-300 rounded-[2rem] p-6 h-[280px] flex items-center justify-center shadow-sm">
//                         <textarea placeholder="Enter the description here" className="w-full h-full bg-transparent outline-none text-gray-500 font-medium text-center resize-none pt-24" />
//                       </div>
//                    </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={() => setUploadSections([...uploadSections, {id: Date.now()}])} className="flex items-center gap-2 text-gray-900 font-bold text-xl ml-2 active:scale-95"><PlusCircle className="text-[#2bb64a]" size={30} /> Add more</button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;











// import React, { useState } from 'react';
// import { ArrowLeft, MapPin, Upload, PlusCircle, Search, Star } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   // Default tab ko set kiya
//   const [activeTab, setActiveTab] = useState('Upload Campaign Details');

//   // --- States for Upload Section ---
//   const [uploadSections, setUploadSections] = useState([
//     { id: Date.now(), image: null, description: "" }
//   ]);

//   const addMoreSection = () => {
//     setUploadSections([...uploadSections, { id: Date.now(), image: null, description: "" }]);
//   };

//   const handleImageChange = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUploadSections(uploadSections.map(sec => 
//         sec.id === id ? { ...sec, image: URL.createObjectURL(file) } : sec
//       ));
//     }
//   };

//   // --- Dummy Data ---
//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   const ratings = [
//     { id: 1, donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 2, donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 3, donor: "Ruru choudhary", ngo: "Education for All", score: 2, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//   ];

//   return (
//     <div className="bg-white min-h-screen font-sans pb-10">
//       {/* 1. BACK BUTTON */}
//       <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-20">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all">
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
//         {/* HERO IMAGE */}
//         <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-md mb-8">
//           <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
//         </div>

//         {/* HEADER INFO */}
//         <div className="mb-10">
//           <div className="flex items-center gap-3 mb-2">
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Build a New Learning Center</h1>
//             <span className="bg-[#5da2d1] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Completed</span>
//           </div>
//           <div className="flex items-center gap-2 text-gray-400 font-bold text-sm mb-4">
//             <span>Shiksha Foundation</span> <span className="text-gray-300">|</span> 
//             <div className="flex items-center gap-1"><MapPin size={16} /> Mumbai, Maharashtra</div>
//           </div>
//         </div>

//         {/* TABS NAVIGATION */}
//         <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
//           {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-4 text-sm md:text-[16px] font-bold transition-all ${
//                 activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* --- DYNAMIC CONTENT BASED ON ACTIVE TAB --- */}

//         {/* A. UPLOAD CAMPAIGN DETAILS TAB */}
//         {activeTab === 'Upload Campaign Details' && (
//           <div className="animate-fadeIn">
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-10 mb-6">
//               <div className="space-y-12">
//                 {uploadSections.map((sec) => (
//                   <div key={sec.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
//                     {/* Image Upload/Preview */}
//                     <label className="relative border-2 border-dashed border-gray-300 rounded-[2rem] h-[280px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden group">
//                       {sec.image ? (
//                         <img src={sec.image} className="w-full h-full object-cover" alt="Preview" />
//                       ) : (
//                         <>
//                           <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={40} />
//                           <span className="text-gray-700 font-bold text-lg">Upload Image</span>
//                         </>
//                       )}
//                       <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(sec.id, e)} />
//                     </label>

//                     {/* Description Textarea */}
//                     <div className="border border-gray-300 rounded-[2rem] p-6 h-[280px] flex items-center justify-center shadow-sm">
//                       <textarea 
//                         placeholder="Enter the description here"
//                         className="w-full h-full bg-transparent outline-none text-gray-500 font-medium text-center resize-none pt-24"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button onClick={addMoreSection} className="flex items-center gap-2 text-gray-900 font-bold text-xl ml-2 active:scale-95">
//               Add more <PlusCircle className="text-[#2bb64a]" size={30} />
//             </button>
//           </div>
//         )}

//         {/* B. ALL DONATIONS TAB */}
//         {activeTab === 'All Donations' && (
//           <div className="animate-fadeIn">
//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-10 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left">
//                   <thead>
//                     <tr className="text-gray-600 font-bold text-[16px] border-b border-gray-50">
//                       <th className="pb-6 px-4">Donors</th>
//                       <th className="pb-6 px-4 text-center">Amount</th>
//                       <th className="pb-6 px-4 text-center">Date</th>
//                       <th className="pb-6 px-4 text-right">Payment</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-700 font-semibold">
//                     {donors.map((donor, idx) => (
//                       <tr key={idx} className="border-b border-gray-50 last:border-0">
//                         <td className="py-7 px-4">{donor.name}</td>
//                         <td className="py-7 px-4 text-center">{donor.amount}</td>
//                         <td className="py-7 px-4 text-center text-gray-500">{donor.date}</td>
//                         <td className="py-7 px-4 text-right uppercase text-gray-500">{donor.method}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="w-full pt-8 flex justify-center border-t border-gray-50">
//                 <button className="text-[#2bb64a] font-bold text-lg hover:underline transition-all">View All Donations</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* C. RATING TAB */}
//         {activeTab === 'Rating' && (
//           <div className="animate-fadeIn space-y-8">
//             <div className="relative w-full max-w-[300px]">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//               <input type="text" placeholder="Donar name" className="w-full py-3 pl-12 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400" />
//             </div>

//             <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-4 md:p-10 overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left min-w-[800px]">
//                   <thead>
//                     <tr className="text-gray-700 font-bold text-[16px] border-b border-gray-50">
//                       <th className="pb-6 px-4">Donar name</th>
//                       <th className="pb-6 px-4">NGO name</th>
//                       <th className="pb-6 px-4">Rating</th>
//                       <th className="pb-6 px-4">Feedback</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-600 font-medium">
//                     {ratings.map((item) => (
//                       <tr key={item.id} className="border-b border-gray-50 last:border-0">
//                         <td className="py-8 px-4">{item.donor}</td>
//                         <td className="py-8 px-4">{item.ngo}</td>
//                         <td className="py-8 px-4">
//                           <div className="flex gap-0.5">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} size={18} className={i < item.score ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
//                             ))}
//                           </div>
//                         </td>
//                         <td className="py-8 px-4 text-sm leading-relaxed max-w-[300px]">{item.feedback}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default CampaignDetails;











// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, MapPin, Upload, PlusCircle, Search, Star } from 'lucide-react';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('All Donations');

//   // --- States for Upload Section ---
//   const [uploadSections, setUploadSections] = useState([
//     { id: Date.now(), image: null, description: "" }
//   ]);

//   const handleImageUpload = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUploadSections(uploadSections.map(sec => 
//         sec.id === id ? { ...sec, image: imageUrl } : sec
//       ));
//     }
//   };

//   const addMoreSection = () => {
//     setUploadSections([...uploadSections, { id: Date.now(), image: null, description: "" }]);
//   };

//   // --- Dummy Data ---
//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   const ratings = [
//     { donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//   ];

//   return (
//     <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans">
      
//       {/* 1. BACK BUTTON (Outside Border) */}
//       <div className="mb-6">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95"
//         >
//           <ArrowLeft size={22} /> Back
//         </button>
//       </div>

//       {/* 2. HERO IMAGE */}
//       <div className="w-full h-64 md:h-96 rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
//         <img src={heroImg} alt="Campaign" className="w-full h-full object-cover" />
//       </div>

//       {/* 3. TITLE & BADGE */}
//       <div className="mb-8">
//         <div className="flex items-center gap-4 mb-3 flex-wrap">
//           <h1 className="text-3xl md:text-4xl font-[900] text-gray-900 tracking-tight">
//             Build a New Learning Center
//           </h1>
//           <span className="bg-[#5da2d1] text-white px-4 py-1 rounded-lg text-[11px] font-bold uppercase tracking-widest">
//             Completed
//           </span>
//         </div>
        
//         <div className="flex items-center gap-3 text-gray-400 font-bold text-[15px] mb-4">
//           <span>Shiksha Foundation</span>
//           <span className="text-gray-300">|</span>
//           <div className="flex items-center gap-1.5"><MapPin size={18} /> Mumbai, Maharashtra</div>
//         </div>

//         <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-4xl font-medium">
//           We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//         </p>
//       </div>

//       {/* 4. STATS PROGRESS CARD */}
//       <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
//           {[
//             { label: "Raised", value: "4,80,000", color: "text-[#0095ff] border-b-4 border-[#0095ff]" },
//             { label: "Goal", value: "10,00,000" },
//             { label: "Progress", value: "48%" },
//             { label: "Days Left", value: "20" },
//           ].map((stat, i) => (
//             <div key={i}>
//               <h3 className={`text-2xl md:text-[34px] font-[900] text-gray-800 inline-block pb-1 ${stat.color || ''}`}>
//                 {stat.value}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>
        
//         {/* Visual Progress Bar */}
//         <div className="relative w-full h-3.5 bg-gray-200 rounded-full">
//           <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-[0_0_10px_rgba(43,182,74,0.3)]" style={{ width: '48%' }}>
//             <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* 5. ABOUT SECTION */}
//       <div className="mb-14">
//         <h2 className="text-2xl font-bold text-gray-900 mb-5">About This Campaign</h2>
//         <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-medium text-justify">
//           This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
//         </p>
//         <button className="text-[#2bb64a] font-bold text-base mt-4 hover:underline">Read More</button>
//       </div>

//       {/* 6. TABS NAVIGATION */}
//       <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
//         {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${
//               activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- CONDITIONAL CONTENT --- */}

//       {/* TAB 1: UPLOAD (Image 1 & 2 Logic) */}
//       {activeTab === 'Upload Campaign Details' && (
//         <div className="animate-fadeIn space-y-6">
//           <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-8 md:p-12 mb-6">
//             <div className="space-y-12">
//               {uploadSections.map((sec) => (
//                 <div key={sec.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                  
//                   <label className="relative border-2 border-dashed border-gray-300 rounded-[2rem] h-[300px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden group">
//                     {sec.image ? (
//                       <img src={sec.image} alt="Uploaded" className="w-full h-full object-cover" />
//                     ) : (
//                       <div className="flex flex-col items-center">
//                         <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={45} />
//                         <span className="text-gray-700 font-bold text-xl">Upload Image</span>
//                       </div>
//                     )}
//                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(sec.id, e)} />
//                   </label>
                  
//                   <div className="border border-gray-300 rounded-[2rem] p-8 h-[300px] flex items-center justify-center shadow-sm">
//                     <textarea 
//                       placeholder="Enter the description here"
//                       className="w-full h-full bg-transparent outline-none text-gray-500 font-medium text-center resize-none pt-28 text-lg"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button onClick={addMoreSection} className="flex items-center gap-2 text-gray-900 font-bold text-xl ml-2 active:scale-95">
//             Add more <PlusCircle className="text-[#2bb64a]" size={32} />
//           </button>
//         </div>
//       )}

//       {/* TAB 2: ALL DONATIONS (Image 3 Logic) */}
//       {activeTab === 'All Donations' && (
//         <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50">
//                   <th className="pb-6 px-4">Donors</th>
//                   <th className="pb-6 px-4 text-center">Amount</th>
//                   <th className="pb-6 px-4 text-center">Date</th>
//                   <th className="pb-6 px-4 text-right">Payment</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 font-bold">
//                 {donors.map((d, i) => (
//                   <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                     <td className="py-7 px-4">{d.name}</td>
//                     <td className="py-7 px-4 text-center">{d.amount}</td>
//                     <td className="py-7 px-4 text-center text-gray-500">{d.date}</td>
//                     <td className="py-7 px-4 text-right uppercase text-gray-500">{d.method}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="w-full pt-8 flex justify-center border-t border-gray-50 mt-4">
//              <button className="text-[#2bb64a] font-[900] text-xl hover:underline transition-all tracking-tight">
//                 View All Donations
//              </button>
//           </div>
//         </div>
//       )}

//       {/* TAB 3: RATING (Image 4 Logic) */}
//       {activeTab === 'Rating' && (
//               <div className="animate-fadeIn space-y-6 md:space-y-10 w-full max-w-full text-left">
//                   <div className="flex flex-col md:flex-row gap-4 px-1">
//                       <div className="relative w-full md:max-w-[280px]">
//                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input type="text" placeholder="Donar name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
//                       </div>
//                       <div className="relative w-full md:max-w-[280px]">
//                           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                           <input type="text" placeholder="NGO name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
//                       </div>
//                   </div>
//                   <div className="bg-white border border-gray-100 rounded-3xl md:rounded-[2.5rem] shadow-sm overflow-hidden">
//                       <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
//                           <table className="w-full text-left border-collapse table-auto md:min-w-[800px]">
//                               <thead>
//                                   <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100"><th className="py-4 md:pb-6 px-4 md:px-6">Donar name</th><th className="px-4 md:px-6">NGO name</th><th className="px-4 md:px-6 text-center">Rating</th><th className="px-4 md:px-6">Feedback</th></tr>
//                               </thead>
//                               <tbody className="text-gray-600 font-medium">
//                                   {[1, 2, 3].map((_, i) => (
//                                       <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                                           <td className="py-5 md:py-8 px-4 md:px-6 font-bold text-gray-800">Rahul sharma</td><td className="py-5 md:py-8 px-4 md:px-6 font-semibold">Green Earth Foundation</td><td className="py-5 md:py-8 px-4 md:px-6"><div className="flex gap-1 justify-center">{[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />)}</div></td><td className="py-5 md:py-8 px-4 md:px-6 text-xs md:text-sm leading-relaxed max-w-[300px]">Very Transparent NGO...</td>
//                                       </tr>
//                                   ))}
//                               </tbody>
//                           </table>
//                       </div>
//                   </div>
//               </div>
//             )}
//     </div>
//   );
// };

// export default CampaignDetails;













































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, MapPin, Upload, PlusCircle, Search, Star } from 'lucide-react';
// import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

// const CampaignDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Upload Campaign Details'); // Default tab

//   // --- States for Upload Section ---
//   const [uploadSections, setUploadSections] = useState([
//     { id: Date.now(), image: null, description: "" }
//   ]);

//   const handleImageUpload = (id, e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUploadSections(uploadSections.map(sec => 
//         sec.id === id ? { ...sec, image: imageUrl } : sec
//       ));
//     }
//   };

//   const addMoreSection = () => {
//     setUploadSections([...uploadSections, { id: Date.now(), image: null, description: "" }]);
//   };

//   // --- Dummy Data ---
//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   const ratings = [
//     { donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//   ];

//   return (
//     <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4">
      
//       {/* 1. BACK BUTTON */}
//       <div className="mb-6">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95"
//         >
//           <ArrowLeft size={22} /> Back
//         </button>
//       </div>

//       {/* 2. HERO IMAGE */}
//       <div className="w-full h-64 md:h-96 rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
//         <img src={heroImg} alt="Campaign" className="w-full h-full object-cover" />
//       </div>

//       {/* 3. TITLE & BADGE */}
//       <div className="mb-8">
//         <div className="flex items-center gap-4 mb-3 flex-wrap">
//           <h1 className="text-3xl md:text-4xl font-[900] text-gray-900 tracking-tight">
//             Build a New Learning Center
//           </h1>
//           <span className="bg-[#5da2d1] text-white px-4 py-1 rounded-lg text-[11px] font-bold uppercase tracking-widest">
//             Completed
//           </span>
//         </div>
        
//         <div className="flex items-center gap-3 text-gray-400 font-bold text-[15px] mb-4">
//           <span>Shiksha Foundation</span>
//           <span className="text-gray-300">|</span>
//           <div className="flex items-center gap-1.5"><MapPin size={18} /> Mumbai, Maharashtra</div>
//         </div>

//         <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-4xl font-medium">
//           We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//         </p>
//       </div>

//       {/* 4. STATS PROGRESS CARD */}
//       <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
//           {[
//             { label: "Raised", value: "4,80,000", color: "text-[#0095ff] border-b-4 border-[#0095ff]" },
//             { label: "Goal", value: "10,00,000" },
//             { label: "Progress", value: "48%" },
//             { label: "Days Left", value: "20" },
//           ].map((stat, i) => (
//             <div key={i}>
//               <h3 className={`text-2xl md:text-[34px] font-[900] text-gray-800 inline-block pb-1 ${stat.color || ''}`}>
//                 {stat.value}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>
        
//         <div className="relative w-full h-3.5 bg-gray-200 rounded-full">
//           <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-[0_0_10px_rgba(43,182,74,0.3)]" style={{ width: '48%' }}>
//             <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* 5. ABOUT SECTION */}
//       <div className="mb-14">
//         <h2 className="text-2xl font-bold text-gray-900 mb-5">About This Campaign</h2>
//         <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-medium text-justify">
//           This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
//         </p>
//         <button className="text-[#2bb64a] font-bold text-base mt-4 hover:underline">Read More</button>
//       </div>

//       {/* 6. TABS NAVIGATION */}
//       <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
//         {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${
//               activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- CONDITIONAL CONTENT --- */}

//       {/* TAB 1: UPLOAD (Updated for "Same to Same" Look) */}
//       {activeTab === 'Upload Campaign Details' && (
//         <div className="animate-fadeIn space-y-6">
//           {uploadSections.map((sec) => (
//             <div key={sec.id} className="bg-white border border-gray-300 rounded-[1.2rem] p-4 md:p-6 shadow-sm">
//               <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-center">
                
//                 {/* Left Side: Image Display/Upload */}
//                 <div className="w-full lg:w-[55%]">
//                   <label className="relative block cursor-pointer group">
//                     <div className="w-full h-[220px] md:h-[320px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex flex-col items-center justify-center">
//                       {sec.image ? (
//                         <img src={sec.image} alt="Uploaded" className="w-full h-full object-cover" />
//                       ) : (
//                         <div className="flex flex-col items-center text-gray-400">
//                           <Upload size={40} className="mb-2 group-hover:text-green-500 transition-colors" />
//                           <span className="font-bold text-gray-600">Upload Image</span>
//                         </div>
//                       )}
//                     </div>
//                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(sec.id, e)} />
//                   </label>
//                 </div>
                
//                 {/* Right Side: Description Text */}
//                 <div className="w-full lg:w-[45%]">
//                   <textarea 
//                     placeholder="Enter the description here..."
//                     className="w-full h-40 lg:h-64 bg-transparent outline-none text-gray-800 font-semibold text-[15px] leading-relaxed resize-none placeholder:text-gray-300"
//                     value={sec.description}
//                     onChange={(e) => {
//                       const val = e.target.value;
//                       setUploadSections(uploadSections.map(s => s.id === sec.id ? {...s, description: val} : s));
//                     }}
//                   />
//                 </div>

//               </div>
//             </div>
//           ))}

//           {/* Add more button exact like Image bottom */}
//           <button 
//             onClick={addMoreSection} 
//             className="flex items-center gap-2 text-black font-bold text-lg mt-8 hover:opacity-70 transition-all active:scale-95"
//           >
//             <span>Add more</span> 
//             <PlusCircle size={26} className="text-[#2bb64a]" />
//           </button>
//         </div>
//       )}

//       {/* TAB 2: ALL DONATIONS */}
//       {activeTab === 'All Donations' && (
//         <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50">
//                   <th className="pb-6 px-4">Donors</th>
//                   <th className="pb-6 px-4 text-center">Amount</th>
//                   <th className="pb-6 px-4 text-center">Date</th>
//                   <th className="pb-6 px-4 text-right">Payment</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 font-bold">
//                 {donors.map((d, i) => (
//                   <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                     <td className="py-7 px-4">{d.name}</td>
//                     <td className="py-7 px-4 text-center">{d.amount}</td>
//                     <td className="py-7 px-4 text-center text-gray-500">{d.date}</td>
//                     <td className="py-7 px-4 text-right uppercase text-gray-500">{d.method}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* TAB 3: RATING */}
//       {activeTab === 'Rating' && (
//         <div className="animate-fadeIn space-y-6 md:space-y-10 w-full max-w-full text-left">
//           <div className="flex flex-col md:flex-row gap-4 px-1">
//                 <div className="relative w-full md:max-w-[280px]">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <input type="text" placeholder="Donar name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
//                 </div>
//                 <div className="relative w-full md:max-w-[280px]">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                     <input type="text" placeholder="NGO name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
//                 </div>
//             </div>
//             <div className="bg-white border border-gray-100 rounded-3xl md:rounded-[2.5rem] shadow-sm overflow-hidden">
//                 <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
//                     <table className="w-full text-left border-collapse table-auto md:min-w-[800px]">
//                         <thead>
//                             <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100">
//                               <th className="py-4 md:pb-6 px-4 md:px-6">Donar name</th>
//                               <th className="px-4 md:px-6">NGO name</th>
//                               <th className="px-4 md:px-6 text-center">Rating</th>
//                               <th className="px-4 md:px-6">Feedback</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-gray-600 font-medium">
//                             {[1, 2, 3].map((_, i) => (
//                                 <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                                     <td className="py-5 md:py-8 px-4 md:px-6 font-bold text-gray-800">Rahul sharma</td>
//                                     <td className="py-5 md:py-8 px-4 md:px-6 font-semibold">Green Earth Foundation</td>
//                                     <td className="py-5 md:py-8 px-4 md:px-6"><div className="flex gap-1 justify-center">{[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />)}</div></td>
//                                     <td className="py-5 md:py-8 px-4 md:px-6 text-xs md:text-sm leading-relaxed max-w-[300px]">Very Transparent NGO...</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CampaignDetails;










import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Upload, PlusCircle, Search, Star, Save } from 'lucide-react'; // Save icon add kiya
import heroImg from '../../assets/landingPageImage/shiksha-banner.png';

const CampaignDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Upload Campaign Details');

  // --- States for Upload Section (As per your second code style) ---
  const [uploadSections, setUploadSections] = useState([
    { 
      id: 1, 
      image: heroImg, 
      description: "Shiksha Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life." 
    }
  ]);
  
  const [isAdding, setIsAdding] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [newText, setNewText] = useState("");

  // Nayi image select karne ke liye
  const handleNewImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  // Nayi detail save karke list mein upar dikhane ke liye
  const handleSaveNewDetail = () => {
    if (newImage && newText) {
      const newEntry = {
        id: Date.now(),
        image: newImage,
        description: newText
      };
      setUploadSections([...uploadSections, newEntry]);
      // Reset states
      setNewImage(null);
      setNewText("");
      setIsAdding(false);
    } else {
      alert("Please upload an image and enter a description.");
    }
  };

  // --- Dummy Data (Bina hataye) ---
  const donors = [
    { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
  ];

  return (
    <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4 md:px-0">
      
      {/* 1. BACK BUTTON */}
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95">
          <ArrowLeft size={22} /> Back
        </button>
      </div>

      {/* 2. HERO IMAGE */}
      <div className="w-full h-64 md:h-96 rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
        <img src={heroImg} alt="Campaign" className="w-full h-full object-cover" />
      </div>

      {/* 3. TITLE & BADGE */}
      <div className="mb-8 text-left">
        <div className="flex items-center gap-4 mb-3 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-[900] text-gray-900 tracking-tight">Build a New Learning Center</h1>
          <span className="bg-[#5da2d1] text-white px-4 py-1 rounded-lg text-[11px] font-bold uppercase tracking-widest">Completed</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 font-bold text-[15px] mb-4">
          <span>Shiksha Foundation</span><span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5"><MapPin size={18} /> Mumbai, Maharashtra</div>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-4xl font-medium">
          We empower students with hands-on learning, expert guidance,<br />and innovative training programs for real-world success.
        </p>
      </div>

      {/* 4. STATS PROGRESS CARD */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
          {[{ label: "Raised", value: "4,80,000", color: "text-[#0095ff] border-b-4 border-[#0095ff]" }, { label: "Goal", value: "10,00,000" }, { label: "Progress", value: "48%" }, { label: "Days Left", value: "20" }].map((stat, i) => (
            <div key={i}>
              <h3 className={`text-2xl md:text-[34px] font-[900] text-gray-800 inline-block pb-1 ${stat.color || ''}`}>{stat.value}</h3>
              <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full h-3.5 bg-gray-200 rounded-full">
          <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full shadow-[0_0_10px_rgba(43,182,74,0.3)]" style={{ width: '48%' }}></div>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">About This Event</h2>
        <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-medium text-justify">
          This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
        </p>
        <button className="text-[#2bb64a] font-bold text-base mt-4 hover:underline">Read More</button>
      </div>

      {/* 6. TABS NAVIGATION */}
      <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
        {['Upload Campaign Details', 'All Donations', 'Rating'].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* --- UPDATED TAB 1: UPLOAD (Like Event Details) --- */}
      {activeTab === 'Upload Campaign Details' && (
        <div className="animate-fadeIn space-y-8 w-full max-w-full overflow-x-hidden px-1">
          {/* List of already uploaded Campaign details */}
          <div className="space-y-6 w-full text-left">
            {uploadSections.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-start shadow-sm w-full overflow-hidden">
                <div className="w-full lg:w-[450px] aspect-video md:h-[280px] rounded-2xl overflow-hidden border-[6px] border-[#2bb64a]/20 flex-shrink-0">
                  <img src={item.image} alt="detail" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap break-words">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form to add new detail - Sirf tab dikhega jab isAdding true ho */}
          {isAdding && (
            <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-md p-6 md:p-12 space-y-8 animate-fadeIn w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
                <label className="relative border-4 border-dashed border-[#2bb64a]/30 rounded-[2rem] h-[250px] md:h-[300px] flex flex-col items-center justify-center cursor-pointer hover:bg-green-50/30 transition-all overflow-hidden group">
                  {newImage ? <img src={newImage} className="w-full h-full object-cover" /> : 
                  <div className="flex flex-col items-center px-4">
                    <Upload className="text-gray-400 group-hover:text-[#2bb64a] mb-4" size={40} />
                    <span className="text-gray-700 font-bold text-lg text-center">Upload Image</span>
                  </div>}
                  <input type="file" className="hidden" accept="image/*" onChange={handleNewImageUpload} />
                </label>
                <div className="border border-gray-300 rounded-[2rem] p-6 h-[250px] md:h-[300px] flex items-center justify-center shadow-inner bg-gray-50/40 w-full">
                  <textarea 
                    placeholder="Enter the description here" 
                    value={newText} 
                    onChange={(e) => setNewText(e.target.value)} 
                    className="w-full h-full bg-transparent outline-none text-gray-600 font-medium text-center resize-none py-4 md:pt-28 text-sm md:text-lg" 
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={handleSaveNewDetail} className="bg-[#2bb64a] text-white px-12 py-3 rounded-2xl font-bold text-lg md:text-xl shadow-lg active:scale-95 flex items-center gap-2">
                  <Save size={20} /> Submit Details
                </button>
              </div>
            </div>
          )}

          {/* Add More Button (Tab click ke baad button niche dikhega) */}
          {!isAdding && (
            <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 text-gray-900 font-bold text-lg md:text-xl ml-2 active:scale-95 hover:opacity-80 transition-all">
              Add more <PlusCircle className="text-[#2bb64a]" size={30} />
            </button>
          )}
        </div>
      )}

      {/* --- Other Tabs (Bina hataye) --- */}
      {activeTab === 'All Donations' && (
        <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50">
                  <th className="pb-6 px-4">Donors</th>
                  <th className="pb-6 px-4 text-center">Amount</th>
                  <th className="pb-6 px-4 text-center">Date</th>
                  <th className="pb-6 px-4 text-right">Payment</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-bold">
                {donors.map((d, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-7 px-4">{d.name}</td>
                    <td className="py-7 px-4 text-center">{d.amount}</td>
                    <td className="py-7 px-4 text-center text-gray-500">{d.date}</td>
                    <td className="py-7 px-4 text-right uppercase text-gray-500">{d.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full pt-8 flex justify-center border-t border-gray-50 mt-4">
             <button className="text-[#2bb64a] font-[900] text-xl hover:underline transition-all tracking-tight">
                View All Donations
             </button>
          </div>
        </div>
      )}

      {activeTab === 'Rating' && (
        <div className="animate-fadeIn space-y-6 md:space-y-10 w-full max-w-full text-left">
          <div className="flex flex-col md:flex-row gap-4 px-1">
                <div className="relative w-full md:max-w-[280px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Donar name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
                </div>
                <div className="relative w-full md:max-w-[280px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="NGO name" className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm" />
                </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl md:rounded-[2.5rem] shadow-sm overflow-hidden">
                <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
                    <table className="w-full text-left border-collapse table-auto md:min-w-[800px]">
                        <thead>
                            <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100">
                              <th className="py-4 md:pb-6 px-4 md:px-6">Donar name</th>
                              <th className="px-4 md:px-6">NGO name</th>
                              <th className="px-4 md:px-6 text-center">Rating</th>
                              <th className="px-4 md:px-6">Feedback</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {[1, 2, 3].map((_, i) => (
                                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="py-5 md:py-8 px-4 md:px-6 font-bold text-gray-800">Rahul sharma</td>
                                    <td className="py-5 md:py-8 px-4 md:px-6 font-semibold">Green Earth Foundation</td>
                                    <td className="py-5 md:py-8 px-4 md:px-6"><div className="flex gap-1 justify-center">{[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />)}</div></td>
                                    <td className="py-5 md:py-8 px-4 md:px-6 text-xs md:text-sm leading-relaxed max-w-[300px]">Very Transparent NGO...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;

