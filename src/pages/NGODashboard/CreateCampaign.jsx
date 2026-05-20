// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, CalendarDays, ChevronDown } from 'lucide-react';

// const CreateCampaign = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="animate-fadeIn">
//       {/* 1. TOP HEADER WITH BACK BUTTON */}
//       <div className="flex items-center gap-4 mb-8">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
//         >
//           <ArrowLeft size={24} className="text-gray-600" />
//         </button>
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mx-auto pr-10">
//           Create Campaign
//         </h1>
//       </div>

//       {/* 2. MAIN FORM CONTAINER */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-8 md:p-12 lg:p-16 max-w-[950px] mx-auto">
//         <form className="space-y-8 max-w-[700px] mx-auto">
          
//           {/* Campaign Title */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-[17px] ml-2">Campaign Title</label>
//             <input 
//               type="text" 
//               placeholder="Build a New Learning center"
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all"
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div className="flex flex-col gap-2 relative">
//             <label className="text-gray-600 font-bold text-[17px] ml-2">Category</label>
//             <div className="relative">
//               <select className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-400 font-medium appearance-none focus:border-green-500 cursor-pointer">
//                 <option value="">Education</option>
//                 <option value="health">Healthcare</option>
//                 <option value="environment">Environment</option>
//               </select>
//               <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={24} />
//             </div>
//           </div>

//           {/* Goal Amount */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-[17px] ml-2">Goal Amount(₹)</label>
//             <input 
//               type="text" 
//               placeholder="15,0000"
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all"
//             />
//           </div>

//           {/* Campaign Duration (Date Range) */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-[17px] ml-2">Campaign Duration</label>
//             <div className="flex flex-col md:flex-row items-center gap-4">
              
//               {/* Start Date */}
//               <div className="relative w-full">
//                 <input 
//                   type="text" 
//                   placeholder="01/06/2024"
//                   className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
//               </div>

//               <span className="text-gray-600 font-bold text-lg">to</span>

//               {/* End Date */}
//               <div className="relative w-full">
//                 <input 
//                   type="text" 
//                   placeholder="01/08/2024"
//                   className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
//               </div>
//             </div>
//           </div>

//           {/* Publish Button */}
//           <div className="pt-6 flex justify-center">
//             <button className="w-full py-4 bg-[#22c55e] hover:bg-[#1da04e] text-white font-bold rounded-xl text-xl shadow-lg transition-all active:scale-95">
//               Publish Campaign
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaign;













import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CalendarDays, ChevronDown } from 'lucide-react';

const CreateCampaign = () => {
  const navigate = useNavigate();

  // Date Refs for hidden inputs
  const startRef = useRef(null);
  const endRef = useRef(null);

  // States for formatted dates
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Helper function to format YYYY-MM-DD to DD/MM/YYYY
  const formatDisplayDate = (val) => {
    if (!val) return "";
    const [year, month, day] = val.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (type, e) => {
    const val = e.target.value;
    if (type === 'start') setStartDate(formatDisplayDate(val));
    else setEndDate(formatDisplayDate(val));
  };

  return (
    <div className="animate-fadeIn">
      {/* 1. TOP HEADER WITH BACK BUTTON */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mx-auto pr-10">
          Create Campaign
        </h1>
      </div>

      {/* 2. MAIN FORM CONTAINER */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-8 md:p-12 lg:p-16 max-w-[950px] mx-auto">
        <form className="space-y-8 max-w-[700px] mx-auto">
          
          {/* Campaign Title */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-[17px] ml-2">Campaign Title</label>
            <input 
              type="text" 
              placeholder="Build a New Learning center"
              className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-gray-600 font-bold text-[17px] ml-2">Category</label>
            <div className="relative">
              <select className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium appearance-none focus:border-green-500 cursor-pointer">
                <option value="">Education</option>
                <option value="health">Healthcare</option>
                <option value="environment">Environment</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={24} />
            </div>
          </div>

          {/* Goal Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-[17px] ml-2">Goal Amount(₹)</label>
            <input 
              type="number" 
              placeholder="150000"
              className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all"
            />
          </div>

          {/* Campaign Duration (Date Range) */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-[17px] ml-2">Campaign Duration</label>
            <div className="flex flex-col md:flex-row items-center gap-4">
              
              {/* Start Date */}
              <div className="relative w-full">
                <input 
                  type="text" 
                  readOnly
                  value={startDate}
                  placeholder="Select Date"
                  onClick={() => startRef.current.showPicker()}
                  className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium text-center cursor-pointer"
                />
                <CalendarDays onClick={() => startRef.current.showPicker()} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-green-500 transition-colors" size={24} />
                <input 
                  type="date" 
                  ref={startRef} 
                  onChange={(e) => handleDateChange('start', e)}
                  className="absolute opacity-0 pointer-events-none w-0 h-0"
                />
              </div>

              <span className="text-gray-600 font-bold text-lg">to</span>

              {/* End Date */}
              <div className="relative w-full">
                <input 
                  type="text" 
                  readOnly
                  value={endDate}
                  placeholder="Select Date"
                  onClick={() => endRef.current.showPicker()}
                  className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium text-center cursor-pointer"
                />
                <CalendarDays onClick={() => endRef.current.showPicker()} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-green-500 transition-colors" size={24} />
                <input 
                  type="date" 
                  ref={endRef} 
                  onChange={(e) => handleDateChange('end', e)}
                  className="absolute opacity-0 pointer-events-none w-0 h-0"
                />
              </div>
            </div>
          </div>

          {/* Publish Button */}
          <div className="pt-6 flex justify-center">
            <button className="w-full py-4 bg-[#22c55e] hover:bg-[#1da04e] text-white font-bold rounded-xl text-xl shadow-lg transition-all active:scale-95">
              Publish Campaign
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;