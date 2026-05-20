// import React from 'react';
// import Navbar from '../components/LandingPage/Navbar';

// const HelpDesk = () => {
//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">

//         <Navbar />
      
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-[36px] md:text-[45px] font-extrabold text-gray-900 mb-2">
//           Send Us a Message
//         </h1>
//         <p className="text-gray-400 text-sm md:text-base font-medium">
//           Fill out form and team will get back to you soon
//         </p>
//       </div>

//       {/* Main Form Card */}
//       <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 w-full max-w-[550px]">
//         <form className="space-y-6">
          
//           {/* Input Name */}
//           <div className="relative">
//             <input 
//               type="text" 
//               placeholder="Enter Your Name" 
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
//             />
//           </div>

//           {/* Input Email */}
//           <div className="relative">
//             <input 
//               type="email" 
//               placeholder="Enter Your Email" 
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
//             />
//           </div>

//           {/* Input Phone */}
//           <div className="relative">
//             <input 
//               type="tel" 
//               placeholder="Enter Phone Number" 
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
//             />
//           </div>

//           {/* Textarea Message */}
//           <div className="relative">
//             <textarea 
//               rows="5"
//               placeholder="Write your Message" 
//               className="w-full py-4 px-6 bg-white border border-gray-300 rounded-[2rem] shadow-[inset_0px_2px_4px_rgba(0,0,0,0.06)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all resize-none"
//             ></textarea>
//           </div>

//           {/* Send Message Button */}
//           <button 
//             type="submit"
//             className="w-full py-4 bg-[#32CD00] hover:bg-[#28b500] text-white font-bold rounded-2xl text-xl shadow-[0_4px_15px_rgba(50,205,0,0.3)] transition-all active:scale-95"
//           >
//             Send Message
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default HelpDesk;










import React from 'react';
// Navbar ko import karo (Path check kar lena apne folder ke hisab se)
import Navbar from '../components/LandingPage/Navbar';

const HelpDesk = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center font-sans relative overflow-x-hidden">
      
      {/* 1. NAVBAR - Ye top par fixed rahega */}
      <Navbar />

      {/* 2. MAIN CONTENT - pt-32 navbar ke niche space chhodne ke liye */}
      <div className="flex-1 w-full flex flex-col items-center justify-center pt-27 pb-12 px-6">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-[36px] md:text-[45px] font-bold text-gray-900 mb-2">
            Send Us a Message
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-medium">
            Fill out form and team will get back to you soon
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] p-8 md:p-12 w-full max-w-[550px]">
          <form className="space-y-6">
            
            {/* Input Name */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Enter Your Name" 
                className="w-full py-3 px-6 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
              />
            </div>

            {/* Input Email */}
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full py-3 px-6 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
              />
            </div>

            {/* Input Phone */}
            <div className="relative">
              <input 
                type="tel" 
                placeholder="Enter Phone Number" 
                className="w-full py-3 px-6 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all"
              />
            </div>

            {/* Textarea Message */}
            <div className="relative">
              <textarea 
                rows="5"
                placeholder="Write your Message" 
                className="w-full py-3 px-6 bg-white border border-gray-400 rounded-xl shadow-[0px_3px_3px_rgba(0,0,0,0.2)] outline-none text-gray-700 text-lg placeholder:text-gray-400 focus:border-green-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <button 
              type="submit"
              className="w-full py-3 bg-[#32CD00] hover:bg-[#28b500] text-white font-bold rounded-xl text-xl transition-all active:scale-95 shadow-[0px_3px_3px_rgba(0,0,0,0.2)]"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;