// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, CalendarDays, ChevronDown } from 'lucide-react';

// const CreateEvent = () => {
//   const navigate = useNavigate();

//   // Date Refs
//   const startRef = useRef(null);
//   const endRef = useRef(null);

//   // States for formatted dates
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Function to handle date selection and format it to DD/MM/YYYY
//   const handleDateChange = (setter, e) => {
//     const val = e.target.value; // Format: YYYY-MM-DD
//     if (val) {
//       const [year, month, day] = val.split("-");
//       setter(`${day}/${month}/${year}`);
//     }
//   };

//   return (
//     <div className="animate-fadeIn pb-10 px-4 md:px-0">
//       {/* 1. TOP HEADER WITH BACK BUTTON - Responsive alignment */}
//       <div className="flex items-center gap-4 mb-8">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
//         >
//           <ArrowLeft size={24} className="text-gray-600" />
//         </button>
//         <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mx-auto pr-10 text-center">
//           Create Event
//         </h1>
//       </div>

//       {/* 2. MAIN FORM CONTAINER - Responsive Padding */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-12 lg:p-16 max-w-[950px] mx-auto">
//         <form className="space-y-6 md:space-y-7 max-w-[700px] mx-auto">
          
//           {/* Event Title */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Event Title</label>
//             <input 
//               type="text" 
//               placeholder="Book Distribution Event"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div className="flex flex-col gap-2 relative">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Category</label>
//             <div className="relative">
//               <select className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium appearance-none focus:border-green-500 cursor-pointer text-sm md:text-base">
//                 <option value="">Education</option>
//                 <option value="health">Healthcare</option>
//                 <option value="welfare">Children Welfare</option>
//               </select>
//               <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
//             </div>
//           </div>

//           {/* Goal Amount */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Goal Amount(₹)</label>
//             <input 
//               type="text" 
//               placeholder="15,0000"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Campaign/Event Duration - Fully Responsive Layout */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Campaign Duration</label>
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               {/* Start Date */}
//               <div className="relative w-full">
//                 <input 
//                   type="text" readOnly value={startDate} placeholder="01/06/2024"
//                   onClick={() => startRef.current.showPicker()}
//                   className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center cursor-pointer text-sm md:text-base"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 <input type="date" ref={startRef} onChange={(e) => handleDateChange(setStartDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
//               </div>

//               <span className="text-gray-500 font-medium hidden md:block">to</span>
//               <span className="text-gray-500 font-medium md:hidden text-xs">to</span>

//               {/* End Date */}
//               <div className="relative w-full">
//                 <input 
//                   type="text" readOnly value={endDate} placeholder="01/08/2024"
//                   onClick={() => endRef.current.showPicker()}
//                   className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center cursor-pointer text-sm md:text-base"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 <input type="date" ref={endRef} onChange={(e) => handleDateChange(setEndDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
//               </div>
//             </div>
//           </div>

//           {/* Location Field */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Location</label>
//             <input 
//               type="text" 
//               placeholder="Mumbai"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Time Field */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Time</label>
//             <input 
//               type="text" 
//               placeholder="10am - 5pm"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Publish Event Button - Responsive Width */}
//           <div className="pt-6 flex justify-center">
//             <button className="w-full md:w-[350px] py-3.5 md:py-4 bg-[#22c55e] hover:bg-[#1da04e] text-white font-bold rounded-xl text-lg md:text-xl shadow-lg transition-all active:scale-95">
//               Publish Event
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;








// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, CalendarDays, ChevronDown, Check } from 'lucide-react'; // Check icon add kiya

// const CreateEvent = () => {
//   const navigate = useNavigate();

//   // Date Refs
//   const startRef = useRef(null);
//   const endRef = useRef(null);

//   // States
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [showPopup, setShowPopup] = useState(false); // Pop-up control state

//   const handleDateChange = (setter, e) => {
//     const val = e.target.value;
//     if (val) {
//       const [year, month, day] = val.split("-");
//       setter(`${day}/${month}/${year}`);
//     }
//   };

//   const handlePublish = (e) => {
//     e.preventDefault();
//     // Yahan tum chaho toh validation laga sakte ho
//     setShowPopup(true); // Pop-up dikhao
//   };

//   return (
//     <div className="animate-fadeIn pb-10 px-4 md:px-0 relative">
      
//       {/* 1. SUCCESS POP-UP (MODAL) */}
//       {showPopup && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
//           <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl animate-popIn border border-gray-100">
//             {/* Success Icon */}
//             <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Check size={48} strokeWidth={3} />
//             </div>
            
//             {/* Text Content */}
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//               Published!
//             </h2>
//             <p className="text-gray-500 font-medium mb-8">
//               Your event has been created and published successfully.
//             </p>

//             {/* Action Button */}
//             <button 
//               onClick={() => navigate('/ngo/events')} 
//               className="w-full py-4 bg-[#22c55e] text-white font-bold rounded-xl text-lg shadow-lg hover:bg-green-600 transition-all active:scale-95"
//             >
//               Go to Events
//             </button>
//           </div>
//         </div>
//       )}

//       {/* 2. TOP HEADER */}
//       <div className="flex items-center gap-4 mb-8">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
//         >
//           <ArrowLeft size={24} className="text-gray-600" />
//         </button>
//         <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mx-auto pr-10 text-center">
//           Create Event
//         </h1>
//       </div>

//       {/* 3. MAIN FORM CONTAINER */}
//       <div className="bg-white border border-gray-100 rounded-[2rem] shadow-sm p-6 md:p-12 lg:p-16 max-w-[950px] mx-auto">
//         <form className="space-y-6 md:space-y-7 max-w-[700px] mx-auto">
          
//           {/* Event Title */}
//           <div className="flex flex-col gap-2 text-left">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Event Title</label>
//             <input 
//               type="text" 
//               placeholder="Book Distribution Event"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Category Dropdown */}
//           <div className="flex flex-col gap-2 relative text-left">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Category</label>
//             <div className="relative">
//               <select className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium appearance-none focus:border-green-500 cursor-pointer text-sm md:text-base">
//                 <option value="">Education</option>
//                 <option value="health">Healthcare</option>
//                 <option value="welfare">Children Welfare</option>
//               </select>
//               <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
//             </div>
//           </div>

//           {/* Goal Amount */}
//           <div className="flex flex-col gap-2 text-left">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Goal Amount(₹)</label>
//             <input 
//               type="text" 
//               placeholder="15,0000"
//               className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
//             />
//           </div>

//           {/* Campaign/Event Duration */}
//           <div className="flex flex-col gap-2 text-left">
//             <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Campaign Duration</label>
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <div className="relative w-full">
//                 <input 
//                   type="text" readOnly value={startDate} placeholder="01/06/2024"
//                   onClick={() => startRef.current.showPicker()}
//                   className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center cursor-pointer text-sm md:text-base"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 <input type="date" ref={startRef} onChange={(e) => handleDateChange(setStartDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
//               </div>
//               <span className="text-gray-500 font-medium text-xs">to</span>
//               <div className="relative w-full">
//                 <input 
//                   type="text" readOnly value={endDate} placeholder="01/08/2024"
//                   onClick={() => endRef.current.showPicker()}
//                   className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center cursor-pointer text-sm md:text-base"
//                 />
//                 <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
//                 <input type="date" ref={endRef} onChange={(e) => handleDateChange(setEndDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
//               </div>
//             </div>
//           </div>

//           {/* Location & Time */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
//             <div className="flex flex-col gap-2">
//               <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Location</label>
//               <input type="text" placeholder="Mumbai" className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium text-sm md:text-base focus:border-green-500" />
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide">Time</label>
//               <input type="text" placeholder="10am - 5pm" className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium text-sm md:text-base focus:border-green-500" />
//             </div>
//           </div>

//           {/* Publish Event Button - Linked to handlePublish */}
//           <div className="pt-6 flex justify-center">
//             <button 
//               onClick={handlePublish}
//               className="w-full md:w-[350px] py-3.5 md:py-4 bg-[#22c55e] hover:bg-[#1da04e] text-white font-bold rounded-xl text-lg md:text-xl shadow-lg transition-all active:scale-95"
//             >
//               Publish Event
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;










import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CalendarDays, ChevronDown, Check } from 'lucide-react'; // Check icon add kiya popup ke liye

const CreateEvent = () => {
  const navigate = useNavigate();

  // Date Refs
  const startRef = useRef(null);
  const endRef = useRef(null);

  // States for formatted dates
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  // --- NAYA POPUP LOGIC ---
  const [showPopup, setShowPopup] = useState(false);

  const handleDateChange = (setter, e) => {
    const val = e.target.value; 
    if (val) {
      const [year, month, day] = val.split("-");
      setter(`${day}/${month}/${year}`);
    }
  };

  return (
    <div className="animate-fadeIn pb-10 px-4 md:px-0 relative">
      
      {/* --- SUCCESS POPUP UI --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl border border-gray-100">
            <div className="w-20 h-20 bg-green-600  rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={48} strokeWidth={3} className='text-white' />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#22c55e] mb-6">Event Successfully created</h2>
            <button 
                onClick={() => navigate('/ngo/events/invite')} // Is URL par bhej do
                className="w-full py-4 bg-[#22c55e] text-white font-bold rounded-xl text-lg shadow-lg hover:bg-green-600 transition-all active:scale-95"
                >
                Send Invitation to Donors 
            </button>
          </div>
        </div>
      )}

      {/* 1. TOP HEADER WITH BACK BUTTON */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mx-auto pr-10 text-center">
          Create Event
        </h1>
      </div>

      {/* 2. MAIN FORM CONTAINER */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-12 lg:p-16 max-w-[950px] mx-auto">
        <form className="space-y-6 md:space-y-7 max-w-[700px] mx-auto">
          
          {/* Event Title */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Event Title</label>
            <input 
              type="text" 
              placeholder="Book Distribution Event"
              className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Category</label>
            <div className="relative">
              <select className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium appearance-none focus:border-green-500 cursor-pointer text-sm md:text-base">
                <option value="">Education</option>
                <option value="health">Healthcare</option>
                <option value="welfare">Children Welfare</option>
              </select>
              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
          </div>

          {/* Goal Amount */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Goal Amount(₹)</label>
            <input 
              type="text" 
              placeholder="15,0000"
              className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
            />
          </div>

          {/* Campaign/Event Duration */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Event Duration</label>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full">
                <input 
                  type="text" readOnly value={startDate} placeholder="01/06/2024"
                  onClick={() => startRef.current.showPicker()}
                  className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium text-center cursor-pointer text-sm md:text-base"
                />
                <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input type="date" ref={startRef} onChange={(e) => handleDateChange(setStartDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
              </div>

              <span className="text-gray-500 font-medium md:hidden text-xs">to</span>
              <span className="text-gray-500 font-medium hidden md:block">to</span>

              <div className="relative w-full">
                <input 
                  type="text" readOnly value={endDate} placeholder="01/08/2024"
                  onClick={() => endRef.current.showPicker()}
                  className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-500 font-medium text-center cursor-pointer text-sm md:text-base"
                />
                <CalendarDays className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input type="date" ref={endRef} onChange={(e) => handleDateChange(setEndDate, e)} className="absolute opacity-0 pointer-events-none w-0 h-0" />
              </div>
            </div>
          </div>

          {/* Location Field */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Location</label>
            <input 
              type="text" 
              placeholder="Mumbai"
              className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
            />
          </div>

          {/* Time Field */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 font-bold text-sm md:text-[16px] ml-2 tracking-wide text-left">Time</label>
            <input 
              type="text" 
              placeholder="10am - 5pm"
              className="w-full py-3 md:py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 font-medium focus:border-green-500 transition-all text-sm md:text-base"
            />
          </div>

          {/* Publish Event Button - Linked to Popup */}
          <div className="pt-6 flex justify-center">
            <button 
              type="button"
              onClick={() => setShowPopup(true)} // Button par logic set kar diya
              className="w-full md:w-[350px] py-3.5 md:py-4 bg-[#22c55e] hover:bg-[#1da04e] text-white font-bold rounded-xl text-lg md:text-xl shadow-lg transition-all active:scale-95"
            >
              Publish Event
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateEvent;