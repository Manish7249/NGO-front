// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, MapPin, Star, Upload, PlusCircle, Search, Save } from 'lucide-react';
// import eventHero from '../../assets/landingPageImage/shiksha-banner.png';

// const EventDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Upload Event Details');

//   // --- LOGIC: Upload Event Details Section ---
//   const [eventDetailsList, setEventDetailsList] = useState([
//     { id: 1, img: eventHero, text: "Shiksha Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India." },
//   ]);

//   const [isAdding, setIsAdding] = useState(false);
//   const [newImage, setNewImage] = useState(null);
//   const [newText, setNewText] = useState("");

//   const handleNewImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSaveNewDetail = () => {
//     if (!newImage || !newText) {
//       alert("Please upload an image and enter a description");
//       return;
//     }
//     const newItem = { id: Date.now(), img: newImage, text: newText };
//     setEventDetailsList([...eventDetailsList, newItem]);
//     setNewImage(null);
//     setNewText("");
//     setIsAdding(false);
//   };

//   // --- Dummy Data ---
//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   const ratingsData = [
//     { id: 1, donor: "Rahul sharma", ngo: "Green Earth Foundation", stars: 5, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//     { id: 2, donor: "Priya ghjss", ngo: "Shiksha Foundation", stars: 3, feedback: "Very Transparent NGO, Regular Updates and impact is visible" },
//   ];

//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   return (
//     <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4">
//       {/* 1. BACK BUTTON */}
//       <div className="mb-6 pt-6">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95">
//           <ArrowLeft size={22} /> Back
//         </button>
//       </div>

//       {/* 2. HERO IMAGE */}
//       <div className="w-full h-64 md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg mb-10">
//         <img src={eventHero} alt="Event Hero" className="w-full h-full object-cover" />
//       </div>

//       {/* 3. EVENT HEADER */}
//       <div className="mb-10">
//         <div className="flex items-center gap-4 mb-3 flex-wrap">
//           <h1 className="text-3xl md:text-4xl font-[900] text-gray-900 tracking-tight">Books Distribution Event</h1>
//           <span className="bg-[#5da2d1] text-white px-4 py-1 rounded-lg text-[11px] font-bold uppercase tracking-widest">Upcoming</span>
//         </div>
//         <div className="flex items-center gap-3 text-gray-400 font-bold text-[15px] mb-4">
//           <span>Shiksha Foundation</span><span className="text-gray-300">|</span>
//           <div className="flex items-center gap-1.5"><MapPin size={18} /> Mumbai, Maharashtra</div>
//         </div>
        // <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-4xl font-medium italic">
        //   We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
        // </p>
//       </div>

//       {/* 4. PROGRESS STATS CARD */}
//       <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
//           {stats.map((stat, i) => (
//             <div key={i}>
//               <h3 className={`text-2xl md:text-[34px] font-[900] text-gray-800 inline-block pb-1 ${stat.underline ? 'text-[#0095ff] border-b-4 border-[#0095ff]' : ''}`}>
//                 {stat.value}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//         <div className="relative w-full h-3.5 bg-gray-200 rounded-full overflow-hidden">
//           <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-md" style={{ width: '48%' }}>
//             <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       {/* 5. ABOUT EVENT */}
    //   <div className="mb-14">
    //     <h2 className="text-2xl font-bold text-gray-900 mb-5">About This Event</h2>
    //     <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-medium text-justify">
    //       We will be distributing textbooks, storybooks, and stationery sets to students from economically disadvantaged backgrounds. Your presence will help motivate these young learners and ensure our educational materials reach those who need them most.
    //     </p>
    //     <button className="text-[#2bb64a] font-bold text-base mt-4 hover:underline">Read More</button>
    //   </div>

//       {/* 6. TABS NAVIGATION */}
//       <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
//         {['Upload Event Details', 'All Donations', 'Rating'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- CONDITIONAL TAB CONTENT --- */}

//       {/* TAB 1: Upload Event Details */}
      
// {activeTab === 'Upload Event Details' && (
//   <div className="animate-fadeIn space-y-8 w-full max-w-full overflow-x-hidden px-1">
    
//     {/* A. SAVED LIST (Submitted items display area) */}
//     <div className="space-y-6 w-full">
//       {eventDetailsList.map((item) => (
//         <div 
//           key={item.id} 
//           className="bg-white border border-gray-200 rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-start shadow-sm w-full overflow-hidden"
//         >
//           {/* Image Container - Fixed size on Desktop, Responsive on Mobile */}
//           <div className="w-full lg:w-[450px] aspect-video md:h-[280px] rounded-2xl overflow-hidden border-[6px] border-[#0ea5e9]/20 flex-shrink-0">
//             <img src={item.img} alt="detail" className="w-full h-full object-cover" />
//           </div>

//           {/* Text Container - 'min-w-0' is the magic fix for flex overflow */}
//           <div className="flex-1 min-w-0 w-full">
//             <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap break-words text-justify md:text-left">
//               {item.text}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* B. DYNAMIC INPUT SECTION (Add More Form) */}
//     {isAdding && (
//       <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-md p-6 md:p-12 space-y-8 animate-fadeIn w-full overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          
//           {/* Upload Box */}
//           <label className="relative border-4 border-dashed border-[#0ea5e9]/30 rounded-[2rem] h-[250px] md:h-[300px] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/30 transition-all overflow-hidden group">
//             {newImage ? (
//               <img src={newImage} className="w-full h-full object-cover" alt="preview" />
//             ) : (
//               <div className="flex flex-col items-center px-4">
//                 <Upload className="text-gray-400 group-hover:text-[#0ea5e9] mb-4" size={40} />
//                 <span className="text-gray-700 font-bold text-lg text-center">Upload Image</span>
//               </div>
//             )}
//             <input type="file" className="hidden" accept="image/*" onChange={handleNewImageUpload} />
//           </label>

//           {/* Textarea Box */}
//           <div className="border border-gray-300 rounded-[2rem] p-6 h-[250px] md:h-[300px] flex items-center justify-center shadow-inner bg-gray-50/40 w-full overflow-hidden">
//             <textarea 
//               placeholder="Enter the description here" 
//               value={newText} 
//               onChange={(e) => setNewText(e.target.value)} 
//               className="w-full h-full bg-transparent outline-none text-gray-600 font-medium text-center resize-none py-4 md:pt-28 text-sm md:text-lg break-words" 
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-center w-full">
//           <button 
//             onClick={handleSaveNewDetail} 
//             className="w-full md:w-auto md:px-12 py-3.5 bg-[#2bb64a] text-white rounded-2xl font-bold text-lg md:text-xl shadow-lg active:scale-95 flex items-center justify-center gap-2 hover:bg-green-600 transition-all"
//           >
//             <Save size={20} /> Submit Details
//           </button>
//         </div>
//       </div>
//     )}

//     {/* C. ADD MORE BUTTON */}
//     {!isAdding && (
//       <button 
//         onClick={() => setIsAdding(true)} 
//         className="flex items-center gap-2 text-gray-900 font-bold text-lg md:text-xl ml-2 active:scale-95 hover:opacity-80 transition-all"
//       >
//         Add more <PlusCircle className="text-[#2bb64a]" size={30} />
//       </button>
//     )}
//   </div>
// )}

//       {/* TAB 2: All Donations */}
//       {activeTab === 'All Donations' && (
//         <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[600px]">
//               <thead>
//                 <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50 uppercase tracking-wider">
//                   <th className="pb-6 px-4">Donors</th>
//                   <th className="pb-6 px-4 text-center">Amount</th>
//                   <th className="pb-6 px-4 text-center">Date</th>
//                   <th className="pb-6 px-4 text-right">Payment</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 font-bold">
//                 {donors.map((d, i) => (
//                   <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
//                     <td className="py-7 px-4">{d.name}</td>
//                     <td className="py-7 px-4 text-center">{d.amount}</td>
//                     <td className="py-7 px-4 text-center text-gray-500">{d.date}</td>
//                     <td className="py-7 px-4 text-right text-gray-500">{d.method}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="w-full pt-8 flex justify-center border-t border-gray-50 mt-4">
//              <button className="text-[#2bb64a] font-[900] text-xl hover:underline tracking-tight">View All Donations</button>
//           </div>
//         </div>
//       )}

//       {/* TAB 3: Rating */}
//       {activeTab === 'Rating' && (
//         <div className="animate-fadeIn space-y-6 md:space-y-10 w-full max-w-full">
            
//             {/* 1. DOUBLE SEARCH BARS - Stacks on mobile, side-by-side on desktop */}
//             <div className="flex flex-col md:flex-row gap-4 px-1">
//             {/* Donor Search */}
//             <div className="relative w-full md:max-w-[280px]">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input 
//                 type="text" 
//                 placeholder="Donar name" 
//                 className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm md:text-base" 
//                 />
//             </div>

//             {/* NGO Search */}
//             <div className="relative w-full md:max-w-[280px]">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input 
//                 type="text" 
//                 placeholder="NGO name" 
//                 className="w-full py-2.5 pl-10 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.02)] outline-none focus:border-green-400 transition-all text-gray-600 text-sm md:text-base" 
//                 />
//             </div>
//             </div>

//             {/* 2. RATING TABLE CARD */}
//             <div className="bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden">
//             {/* 
//                 YE WALA DIV SABSE ZAROORI HAI: 
//                 'overflow-x-auto' sirf table ke liye scroll bar layega, 
//                 'w-full' content ko container ke andar rakhega.
//             */}
//             <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-200">
//                 <table className="w-full text-left border-collapse table-auto md:min-w-[800px]">
//                 <thead>
//                     <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100">
//                     <th className="py-4 md:pb-6 px-4 md:px-6 whitespace-nowrap">Donar name</th>
//                     <th className="py-4 md:pb-6 px-4 md:px-6 whitespace-nowrap">NGO name</th>
//                     <th className="py-4 md:pb-6 px-4 md:px-6 text-center whitespace-nowrap">Rating</th>
//                     <th className="py-4 md:pb-6 px-4 md:px-6 whitespace-nowrap">Feedback</th>
//                     </tr>
//                 </thead>
//                 <tbody className="text-gray-600 font-medium">
//                     {[
//                     { donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5 },
//                     { donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3 },
//                     { donor: "Ruru choudhary", ngo: "Education for All", score: 2 },
//                     { donor: "Tanya ghi", ngo: "Health and Hope Foundation", score: 4 },
//                     { donor: "Farhana bhat", ngo: "Women Empowerment Trust", score: 2 },
//                     ].map((item, i) => (
//                     <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                         <td className="py-5 md:py-8 px-4 md:px-6 font-bold text-gray-800 text-sm md:text-base whitespace-nowrap">
//                         {item.donor}
//                         </td>
//                         <td className="py-5 md:py-8 px-4 md:px-6 font-semibold text-sm md:text-base whitespace-nowrap">
//                         {item.ngo}
//                         </td>
//                         <td className="py-5 md:py-8 px-4 md:px-6">
//                         <div className="flex gap-0.5 justify-center">
//                             {[...Array(5)].map((_, idx) => (
//                             <Star 
//                                 key={idx} 
//                                 size={16} 
//                                 className={idx < item.score ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
//                             />
//                             ))}
//                         </div>
//                         </td>
//                         <td className="py-5 md:py-8 px-4 md:px-6 text-xs md:text-sm leading-relaxed min-w-[200px] max-w-[300px]">
//                         Very Transparent NGO, Regular Updates and impact is visible
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//                 </table>
//             </div>
//             </div>
//         </div>
//         )}
//     </div>
//   );
// };

// export default EventDetails;














// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, MapPin, Star, Upload, PlusCircle, Search, Save, CheckCircle, Calendar } from 'lucide-react';
// import eventHero from '../../assets/landingPageImage/shiksha-banner.png';

// const EventDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Upload Event Details');

//   // --- LOGIC: Feedback Form Ratings ---
//   const [feedbackRatings, setFeedbackRatings] = useState({ q1: 0, q2: 0, q3: 0, q4: 0 });
//   const handleRating = (q, val) => setFeedbackRatings({ ...feedbackRatings, [q]: val });

//   // --- LOGIC: Upload Event Details Section ---
//   const [eventDetailsList, setEventDetailsList] = useState([
//     { id: 1, img: eventHero, text: "Shiksha Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India." },
//   ]);

//   const [isAdding, setIsAdding] = useState(false);
//   const [newImage, setNewImage] = useState(null);
//   const [newText, setNewText] = useState("");

//   const handleNewImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSaveNewDetail = () => {
//     if (!newImage || !newText) {
//       alert("Please upload an image and enter a description");
//       return;
//     }
//     const newItem = { id: Date.now(), img: newImage, text: newText };
//     setEventDetailsList([...eventDetailsList, newItem]);
//     setNewImage(null);
//     setNewText("");
//     setIsAdding(false);
//   };

//   // --- Dummy Data ---
//   const donors = [
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   const stats = [
//     { label: "Raised", value: "4,80,000", underline: true },
//     { label: "Goal", value: "10,00,000" },
//     { label: "Progress", value: "48%" },
//     { label: "Days Left", value: "20" },
//   ];

//   return (
//     <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4 overflow-x-hidden">
//       {/* 1. BACK BUTTON */}
//       <div className="mb-4 pt-6">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95 text-sm md:text-base">
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       {/* 2. HERO IMAGE */}
//       <div className="w-full h-56 md:h-80 lg:h-[400px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg mb-8 md:mb-10">
//         <img src={eventHero} alt="Event Hero" className="w-full h-full object-cover" />
//       </div>

//       {/* 3. TABS NAVIGATION */}
//       <div className="flex gap-6 md:gap-14 border-b border-gray-100 mb-8 md:mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
//         {['Upload Event Details', 'All Donations', 'Rating', 'Create Feedback Form'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- CONDITIONAL TAB CONTENT --- */}

//       {/* NEW TAB: Create Feedback Form */}
//       {activeTab === 'Create Feedback Form' && (
//         <div className="animate-fadeIn space-y-8 max-w-5xl mx-auto">
          
//           {/* Status Header Card */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
//             <div className="flex items-center gap-4">
//               <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle size={32} /></div>
//               <div>
//                 <p className="font-bold text-gray-800 text-lg">Completed</p>
//                 <p className="text-green-600 font-bold text-sm">Book Distribution Event</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="bg-green-100 p-3 rounded-full text-green-600"><Calendar size={32} /></div>
//               <div>
//                 <p className="text-gray-400 font-bold text-sm uppercase">Date</p>
//                 <p className="text-gray-800 font-bold text-lg">25 May 2026</p>
//               </div>
//             </div>
//           </div>

//           {/* Feedback Content Card */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-12 shadow-md">
//             <p className="text-gray-700 font-bold mb-10">Please provide your feedback for the event!</p>
            
//             <div className="space-y-12">
//               {/* Questions 1-4 mapping */}
//               {[
//                 { id: 'q1', text: "Please rate the overall event experience." },
//                 { id: 'q2', text: "How satisfied are you with the impact of the event?" },
//                 { id: 'q3', text: "How would you rate the planning and organization?" },
//                 { id: 'q4', text: "What did you like most about the event?" }
//               ].map((q, idx) => (
//                 <div key={q.id} className="space-y-4 border-b border-gray-50 pb-8 last:border-0">
//                   <div className="flex gap-2">
//                     <span className="font-bold text-gray-800">{idx + 1}.</span>
//                     <p className="font-bold text-gray-800">{q.text}</p>
//                   </div>
//                   <div className="max-w-md ml-6">
//                     <div className="flex justify-between items-center px-1">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button key={star} onClick={() => handleRating(q.id, star)}>
//                            <Star size={35} className={`transition-colors ${feedbackRatings[q.id] >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} strokeWidth={1.5} />
//                         </button>
//                       ))}
//                     </div>
//                     <div className="flex justify-between mt-2 px-1 text-gray-800 font-bold text-sm">
//                       <span>Poor</span>
//                       <span>Excellent</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Suggestions Textarea */}
//               <div className="space-y-4">
//                 <div className="flex gap-2">
//                   <span className="font-bold text-gray-800">5.</span>
//                   <p className="font-bold text-gray-800">Do you have any suggestions for improvement?</p>
//                 </div>
//                 <div className="ml-6">
//                   <textarea 
//                     placeholder="Write your suggestions here...."
//                     className="w-full h-32 p-4 bg-white border border-gray-300 rounded-xl outline-none focus:border-green-500 shadow-sm resize-none font-medium text-gray-600"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center pt-6">
//                 <button className="bg-[#1da036] hover:bg-green-700 text-white px-16 py-3 rounded-xl font-bold text-2xl shadow-lg transition-all active:scale-95">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* --- Keep existing Tabs logic --- */}
//       {activeTab === 'Upload Event Details' && (
//          /* ... same upload details code from before ... */
//          <div className="animate-fadeIn">
//             {/* Logic for Upload List and Add More form here */}
//             <p className="text-center text-gray-400 font-bold py-20">Upload Event Details Content...</p>
//          </div>
//       )}

//       {activeTab === 'All Donations' && (
//         /* ... same donations table code ... */
//         <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
//            <p className="text-center text-gray-400 font-bold">All Donations table content...</p>
//         </div>
//       )}

//       {activeTab === 'Rating' && (
//         /* ... same rating table code ... */
//         <div className="animate-fadeIn space-y-6 md:space-y-10">
//            <p className="text-center text-gray-400 font-bold">Rating data content...</p>
//         </div>
//       )}

//     </div>
//   );
// };

// export default EventDetails;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   ArrowLeft, MapPin, Star, Upload, PlusCircle, 
//   Search, Save, CheckCircle, Calendar 
// } from 'lucide-react';
// import eventHero from '../../assets/landingPageImage/shiksha-banner.png';

// const EventDetails = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Upload Event Details');

//   // --- LOGIC 1: Upload Event Details Section ---
//   const [eventDetailsList, setEventDetailsList] = useState([
//     { id: 1, img: eventHero, text: "Shiksha Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India." },
//   ]);

//   const [isAdding, setIsAdding] = useState(false);
//   const [newImage, setNewImage] = useState(null);
//   const [newText, setNewText] = useState("");

//   const handleNewImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewImage(URL.createObjectURL(file));
//     }
//   };

//   const handleSaveNewDetail = () => {
//     if (!newImage || !newText) {
//       alert("Please upload an image and enter a description");
//       return;
//     }
//     const newItem = { id: Date.now(), img: newImage, text: newText };
//     setEventDetailsList([...eventDetailsList, newItem]);
//     setNewImage(null);
//     setNewText("");
//     setIsAdding(false);
//   };

//   // --- LOGIC 2: Feedback Form Section ---
//   const [feedbackRatings, setFeedbackRatings] = useState({ q1: 0, q2: 0, q3: 0, q4: 0 });
//   const handleRating = (q, val) => setFeedbackRatings({ ...feedbackRatings, [q]: val });

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

//   const ratingsData = [
//     { donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5 },
//     { donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3 },
//     { donor: "Ruru choudhary", ngo: "Education for All", score: 2 },
//   ];

//   return (
//     <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4 overflow-x-hidden">
      
//       {/* 1. BACK BUTTON */}
//       <div className="mb-4 pt-6 text-left">
//         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95 text-sm md:text-base">
//           <ArrowLeft size={20} /> Back
//         </button>
//       </div>

//       {/* 2. HERO IMAGE */}
//       <div className="w-full h-56 md:h-80 lg:h-[400px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg mb-8 md:mb-10">
//         <img src={eventHero} alt="Event Hero" className="w-full h-full object-cover" />
//       </div>

//       {/* 3. TABS NAVIGATION */}
//       <div className="flex gap-6 md:gap-14 border-b border-gray-100 mb-8 md:mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
//         {['Upload Event Details', 'All Donations', 'Rating', 'Create Feedback Form'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* --- CONDITIONAL CONTENT SECTION --- */}

//       {/* TAB 1: UPLOAD EVENT DETAILS */}
//       {activeTab === 'Upload Event Details' && (
//         <div className="animate-fadeIn space-y-8 w-full max-w-full">
//           <div className="space-y-6 w-full">
//             {eventDetailsList.map((item) => (
//               <div key={item.id} className="bg-white border border-gray-200 rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-start shadow-sm w-full overflow-hidden">
//                 <div className="w-full lg:w-[450px] aspect-video md:h-[280px] rounded-2xl overflow-hidden border-[6px] border-[#0ea5e9]/20 flex-shrink-0">
//                   <img src={item.img} alt="detail" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex-1 min-w-0 w-full">
//                   <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap break-words text-justify md:text-left">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {isAdding && (
//             <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-md p-6 md:p-12 space-y-8 animate-fadeIn w-full overflow-hidden">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
//                 <label className="relative border-4 border-dashed border-[#0ea5e9]/30 rounded-[2rem] h-[250px] md:h-[300px] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/30 transition-all overflow-hidden group">
//                   {newImage ? <img src={newImage} className="w-full h-full object-cover" /> : 
//                   <div className="flex flex-col items-center px-4">
//                     <Upload className="text-gray-400 group-hover:text-[#0ea5e9] mb-4" size={40} />
//                     <span className="text-gray-700 font-bold text-lg text-center">Upload Image</span>
//                   </div>}
//                   <input type="file" className="hidden" accept="image/*" onChange={handleNewImageUpload} />
//                 </label>
//                 <div className="border border-gray-300 rounded-[2rem] p-6 h-[250px] md:h-[300px] flex items-center justify-center shadow-inner bg-gray-50/40 w-full overflow-hidden">
//                   <textarea placeholder="Enter the description here" value={newText} onChange={(e) => setNewText(e.target.value)} className="w-full h-full bg-transparent outline-none text-gray-600 font-medium text-center resize-none py-4 md:pt-28 text-sm md:text-lg break-words" />
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <button onClick={handleSaveNewDetail} className="bg-[#2bb64a] text-white px-8 md:px-12 py-3 rounded-2xl font-bold text-lg md:text-xl shadow-lg active:scale-95 flex items-center gap-2 hover:bg-green-600 transition-all">
//                   <Save size={20} /> Submit Details
//                 </button>
//               </div>
//             </div>
//           )}

//           {!isAdding && (
//             <div className="text-left">
//                 <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 text-gray-900 font-bold text-lg md:text-xl ml-2 active:scale-95 hover:opacity-80 transition-all">
//                 Add more <PlusCircle className="text-[#2bb64a]" size={30} />
//                 </button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* TAB 2: ALL DONATIONS */}
//       {activeTab === 'All Donations' && (
//         <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
//           <div className="overflow-x-auto w-full">
//             <table className="w-full text-left min-w-[600px]">
//               <thead>
//                 <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50 uppercase tracking-wider">
//                   <th className="pb-6 px-4">Donors</th>
//                   <th className="pb-6 px-4 text-center">Amount</th>
//                   <th className="pb-6 px-4 text-center">Date</th>
//                   <th className="pb-6 px-4 text-right">Payment</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 font-bold text-sm md:text-base">
//                 {donors.map((d, i) => (
//                   <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                     <td className="py-7 px-4">{d.name}</td>
//                     <td className="py-7 px-4 text-center">{d.amount}</td>
//                     <td className="py-7 px-4 text-center text-gray-500 font-medium">{d.date}</td>
//                     <td className="py-7 px-4 text-right text-gray-400 font-medium uppercase text-xs">UPI</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="w-full pt-8 flex justify-center border-t border-gray-50 mt-4">
//              <button className="text-[#2bb64a] font-[900] text-xl hover:underline tracking-tight">View All Donations</button>
//           </div>
//         </div>
//       )}

//       {/* TAB 3: RATING */}
//       {activeTab === 'Rating' && (
//         <div className="animate-fadeIn space-y-6 md:space-y-10 w-full max-w-full">
//             <div className="flex flex-col md:flex-row gap-4 px-1 text-left">
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
//                 <div className="overflow-x-auto w-full">
//                     <table className="w-full text-left table-auto md:min-w-[800px] border-collapse">
//                         <thead>
//                             <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100">
//                                 <th className="py-6 px-6">Donar name</th>
//                                 <th className="px-6">NGO name</th>
//                                 <th className="px-6 text-center">Rating</th>
//                                 <th className="px-6">Feedback</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-gray-600 font-medium">
//                             {ratingsData.map((item, i) => (
//                                 <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                                     <td className="py-8 px-6 font-bold text-gray-800">{item.donor}</td>
//                                     <td className="px-6 font-semibold">{item.ngo}</td>
//                                     <td className="px-6"><div className="flex gap-1 justify-center">{[...Array(5)].map((_, idx) => <Star key={idx} size={16} className={idx < item.score ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />)}</div></td>
//                                     <td className="px-6 text-sm leading-relaxed max-w-[350px]">Very Transparent NGO, Regular Updates and impact is visible</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//       )}

//       {/* TAB 4: CREATE FEEDBACK FORM */}
//       {activeTab === 'Create Feedback Form' && (
//         <div className="animate-fadeIn space-y-8 max-w-5xl mx-auto">
//           {/* Status Card */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
//             <div className="flex items-center gap-4 text-left">
//               <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle size={32} /></div>
//               <div>
//                 <p className="font-bold text-gray-800 text-lg leading-none">Completed</p>
//                 <p className="text-green-600 font-bold text-sm mt-1">Book Distribution Event</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 text-left">
//               <div className="bg-green-100 p-3 rounded-full text-green-600"><Calendar size={32} /></div>
//               <div>
//                 <p className="text-gray-400 font-bold text-sm uppercase leading-none">Date</p>
//                 <p className="text-gray-800 font-bold text-lg mt-1">25 May 2026</p>
//               </div>
//             </div>
//           </div>

//           {/* Feedback Form Card */}
//           <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-12 shadow-md text-left">
//             <p className="text-gray-700 font-bold mb-10">Please provide your feedback for the event!</p>
//             <div className="space-y-12">
//               {[
//                 { id: 'q1', text: "Please rate the overall event experience." },
//                 { id: 'q2', text: "How satisfied are you with the impact of the event?" },
//                 { id: 'q3', text: "How would you rate the planning and organization?" },
//                 { id: 'q4', text: "What did you like most about the event?" }
//               ].map((q, idx) => (
//                 <div key={q.id} className="space-y-4 border-b border-gray-50 pb-8 last:border-0">
//                   <div className="flex gap-2">
//                     <span className="font-bold text-gray-800">{idx + 1}.</span>
//                     <p className="font-bold text-gray-800">{q.text}</p>
//                   </div>
//                   <div className="max-w-md ml-6">
//                     <div className="flex justify-between items-center px-1">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button key={star} onClick={() => handleRating(q.id, star)}>
//                            <Star size={35} className={`transition-colors ${feedbackRatings[q.id] >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} strokeWidth={1.5} />
//                         </button>
//                       ))}
//                     </div>
//                     <div className="flex justify-between mt-2 px-1 text-gray-800 font-bold text-sm">
//                       <span>Poor</span>
//                       <span>Excellent</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className="space-y-4">
//                 <div className="flex gap-2">
//                   <span className="font-bold text-gray-800">5.</span>
//                   <p className="font-bold text-gray-800">Do you have any suggestions for improvement?</p>
//                 </div>
//                 <div className="ml-6">
//                   <textarea placeholder="Write your suggestions here...." className="w-full h-32 p-4 bg-white border border-gray-300 rounded-xl outline-none focus:border-green-500 shadow-sm resize-none font-medium text-gray-600" />
//                 </div>
//               </div>
//               <div className="flex justify-center pt-6">
//                 <button className="bg-[#1da036] hover:bg-green-700 text-white px-16 py-3 rounded-xl font-bold text-2xl shadow-lg transition-all active:scale-95">Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventDetails;













import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, Upload, PlusCircle, Search, Save, CheckCircle2, Calendar } from 'lucide-react';
import eventHero from '../../assets/landingPageImage/shiksha-banner.png';

const EventDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Donations');

  // --- LOGIC: Upload Event Details Section ---
  const [eventDetailsList, setEventDetailsList] = useState([
    { id: 1, img: eventHero, text: "Shiksha Foundation, through its 'Shiksha Na Ruke' initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India." },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [newText, setNewText] = useState("");

  const handleNewImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setNewImage(URL.createObjectURL(file));
  };

  const handleSaveNewDetail = () => {
    if (!newImage || !newText) return alert("Please upload an image and enter a description");
    setEventDetailsList([...eventDetailsList, { id: Date.now(), img: newImage, text: newText }]);
    setIsAdding(false); setNewImage(null); setNewText("");
  };

  // --- LOGIC: Feedback Ratings ---
  const [feedbackRatings, setFeedbackRatings] = useState({ q1: 0, q2: 0, q3: 0, q4: 0 });

  const stats = [
    { label: "Raised", value: "4,80,000", underline: true },
    { label: "Goal", value: "10,00,000" },
    { label: "Progress", value: "48%" },
    { label: "Days Left", value: "20" },
  ];

  const donors = [
    { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
  ];

  return (
    <div className="animate-fadeIn max-w-6xl mx-auto pb-10 font-sans px-4 overflow-x-hidden box-border">
      
      {/* 1. BACK BUTTON (Exactly as your code) */}
      <div className="mb-6 pt-6 text-left">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all active:scale-95 text-sm md:text-base">
          <ArrowLeft size={22} /> Back
        </button>
      </div>

      {/* 2. HERO IMAGE (Exactly as your code) */}
      <div className="w-full h-56 md:h-80 lg:h-[400px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg mb-8 md:mb-10">
        <img src={eventHero} alt="Event Hero" className="w-full h-full object-cover" />
      </div>

      {/* 3. EVENT HEADER (Exactly as your code) */}
      <div className="mb-8 text-left">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h1 className="text-2xl md:text-4xl font-[900] text-gray-900 tracking-tight">Books Distribution Event</h1>
          <span className="bg-[#5da2d1] text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">Upcoming</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 font-bold text-xs md:text-[15px] mb-4">
          <span>Shiksha Foundation</span><span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5"><MapPin size={16} /> Mumbai, Maharashtra</div>
        </div>
      </div>

        <p className="text-gray-500 text-[15px] md:text-[17px] leading-relaxed max-w-4xl font-medium pb-4">
          We empower students with hands-on learning, expert guidance,<br /> and innovative training programs for real-world success.
        </p>

      {/* 4. PROGRESS STATS CARD (Exactly as your code) */}
      <div className="bg-white border border-gray-100 rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-sm mb-10 md:mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-8 md:mb-10">
          {stats.map((stat, i) => (
            <div key={i}>
              <h3 className={`text-xl md:text-[34px] font-[900] text-gray-800 inline-block pb-1 ${stat.underline ? 'text-[#0095ff] border-b-4 border-[#0095ff]' : ''}`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 text-[10px] md:text-sm font-bold uppercase mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full h-2.5 md:h-3.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-md" style={{ width: '48%' }}>
            <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">About This Event</h2>
        <p className="text-gray-500 text-base md:text-[17px] leading-relaxed font-medium text-justify">
          We will be distributing textbooks, storybooks, and stationery sets to students from economically disadvantaged backgrounds. Your presence will help motivate these young learners and ensure our educational materials reach those who need them most.
        </p>
        <button className="text-[#2bb64a] font-bold text-base mt-4 hover:underline">Read More</button>
      </div>

      {/* 5. TABS NAVIGATION (4th Tab Added) */}
      <div className="flex gap-6 md:gap-14 border-b border-gray-100 mb-8 md:mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {['Upload Event Details', 'All Donations', 'Rating', 'Create Feedback Form'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm md:text-[17px] font-bold transition-all ${activeTab === tab ? "text-gray-900 border-b-4 border-[#2bb64a]" : "text-gray-400 hover:text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- CONDITIONAL TAB CONTENT --- */}

      {/* TAB 1: Upload Event Details (With dynamic form) */}
      {activeTab === 'Upload Event Details' && (
        <div className="animate-fadeIn space-y-8 w-full max-w-full overflow-x-hidden px-1">
          <div className="space-y-6 w-full text-left">
            {eventDetailsList.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-start shadow-sm w-full overflow-hidden">
                <div className="w-full lg:w-[450px] aspect-video md:h-[280px] rounded-2xl overflow-hidden border-[6px] border-[#0ea5e9]/20 flex-shrink-0">
                  <img src={item.img} alt="detail" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap break-words">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {isAdding && (
            <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-md p-6 md:p-12 space-y-8 animate-fadeIn w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
                <label className="relative border-4 border-dashed border-[#0ea5e9]/30 rounded-[2rem] h-[250px] md:h-[300px] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/30 transition-all overflow-hidden group">
                  {newImage ? <img src={newImage} className="w-full h-full object-cover" /> : 
                  <div className="flex flex-col items-center px-4">
                    <Upload className="text-gray-400 group-hover:text-[#0ea5e9] mb-4" size={40} />
                    <span className="text-gray-700 font-bold text-lg text-center">Upload Image</span>
                  </div>}
                  <input type="file" className="hidden" accept="image/*" onChange={handleNewImageUpload} />
                </label>
                <div className="border border-gray-300 rounded-[2rem] p-6 h-[250px] md:h-[300px] flex items-center justify-center shadow-inner bg-gray-50/40 w-full">
                  <textarea placeholder="Enter the description here" value={newText} onChange={(e) => setNewText(e.target.value)} className="w-full h-full bg-transparent outline-none text-gray-600 font-medium text-center resize-none py-4 md:pt-28 text-sm md:text-lg" />
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={handleSaveNewDetail} className="bg-[#2bb64a] text-white px-12 py-3 rounded-2xl font-bold text-lg md:text-xl shadow-lg active:scale-95 flex items-center gap-2">
                  <Save size={20} /> Submit Details
                </button>
              </div>
            </div>
          )}

          {!isAdding && (
            <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 text-gray-900 font-bold text-lg md:text-xl ml-2 active:scale-95 hover:opacity-80 transition-all">
              Add more <PlusCircle className="text-[#2bb64a]" size={30} />
            </button>
          )}
        </div>
      )}

      {/* TAB 2: All Donations (Exactly as your code) */}
      {activeTab === 'All Donations' && (
        <div className="animate-fadeIn bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-10">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="text-gray-500 font-bold text-[17px] border-b border-gray-50 uppercase tracking-wider">
                  <th className="pb-6 px-4">Donors</th><th className="px-4 text-center">Amount</th><th className="px-4 text-center">Date</th><th className="px-4 text-right">Payment</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-bold text-sm md:text-base">
                {donors.map((d, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-7 px-4">{d.name}</td><td className="py-7 px-4 text-center text-gray-900">{d.amount}</td><td className="py-7 px-4 text-center text-gray-500">{d.date}</td><td className="py-7 px-4 text-right text-gray-400 font-medium uppercase text-xs">UPI</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full pt-8 flex justify-center border-t border-gray-50 mt-4">
             <button className="text-[#2bb64a] font-[900] text-xl hover:underline transition-all tracking-tight">View All Donations</button>
          </div>
        </div>
      )}

      {/* TAB 3: Rating (Exactly as your code) */}
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
                            <tr className="text-gray-700 font-bold text-sm md:text-[17px] border-b border-gray-100"><th className="py-4 md:pb-6 px-4 md:px-6">Donar name</th><th className="px-4 md:px-6">NGO name</th><th className="px-4 md:px-6 text-center">Rating</th><th className="px-4 md:px-6">Feedback</th></tr>
                        </thead>
                        <tbody className="text-gray-600 font-medium">
                            {[1, 2, 3].map((_, i) => (
                                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="py-5 md:py-8 px-4 md:px-6 font-bold text-gray-800">Rahul sharma</td><td className="py-5 md:py-8 px-4 md:px-6 font-semibold">Green Earth Foundation</td><td className="py-5 md:py-8 px-4 md:px-6"><div className="flex gap-1 justify-center">{[...Array(5)].map((_, idx) => <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />)}</div></td><td className="py-5 md:py-8 px-4 md:px-6 text-xs md:text-sm leading-relaxed max-w-[300px]">Very Transparent NGO...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      )}

      {/* TAB 4: CREATE FEEDBACK FORM (NEW SECTION) */}
      {activeTab === 'Create Feedback Form' && (
        <div className="animate-fadeIn space-y-8 w-full max-w-5xl mx-auto text-left">
          {/* Header Status Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><CheckCircle2 size={32} /></div>
              <div><p className="font-bold text-gray-800 text-lg">Completed</p><p className="text-green-600 font-bold text-sm">Book Distribution Event</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600"><Calendar size={32} /></div>
              <div><p className="text-gray-400 font-bold text-sm uppercase">Date</p><p className="text-gray-800 font-bold text-lg">25 May 2026</p></div>
            </div>
          </div>
          {/* Form Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-12 shadow-md">
            <p className="text-gray-700 font-bold mb-10">Please provide your feedback for the event!</p>
            <div className="space-y-12">
              {[
                { id: 'q1', text: "" },
                { id: 'q2', text: "How satisfied are you with the impact of the event?" },
                { id: 'q3', text: "How would you rate the planning and organization?" },
                { id: 'q4', text: "What did you like most about the event?" }
              ].map((q, idx) => (
                <div key={q.id} className="space-y-4 border-b border-gray-50 pb-8 last:border-0">
                  <div className="flex gap-2"><span className="font-bold text-gray-800">{idx + 1}.</span><p className="font-bold text-gray-800">{q.text}</p></div>
                  <div className="max-w-md ml-6"><div className="flex justify-between items-center px-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setFeedbackRatings({...feedbackRatings, [q.id]: star})}>
                        <Star size={35} className={`transition-colors ${feedbackRatings[q.id] >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} strokeWidth={1.5} />
                      </button>
                    ))}
                  </div><div className="flex justify-between mt-2 px-1 text-gray-800 font-bold text-sm"><span>Poor</span><span>Excellent</span></div></div>
                </div>
              ))}
              <div className="space-y-4"><div className="flex gap-2"><span className="font-bold text-gray-800">5.</span><p className="font-bold text-gray-800">Do you have any suggestions for improvement?</p></div><div className="ml-6"><textarea placeholder="Write your suggestions here...." className="w-full h-32 p-4 bg-white border border-gray-300 rounded-xl outline-none focus:border-green-500 shadow-sm resize-none font-medium" /></div></div>
              <div className="flex justify-center pt-6"><button className="bg-[#1da036] hover:bg-green-700 text-white px-16 py-3 rounded-xl font-bold text-2xl shadow-lg transition-all active:scale-95">Submit</button></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default EventDetails;