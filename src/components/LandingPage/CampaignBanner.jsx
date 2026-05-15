// import React from 'react';
// // Maan lo tumne ye image is path pe save ki hai
// import campaignImg from "../../assets/landingPageImage/shiksha-banner.png"; 

// const CampaignBanner = () => {
//   return (
//     <div className="px-6 md:px-16 lg:px-24 py-10">
//       {/* Main Container */}
//       <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
        
//         {/* Background Image */}
//         <img 
//           src={campaignImg} 
//           alt="Shiksha Foundation" 
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Slanted Overlay (The Dark Part on Left) */}
//         {/* 'clip-path' se humne wo tircha (slanted) design banaya hai */}
//         <div 
//           className="absolute inset-0 bg-black/70 md:bg-black/60 w-full md:w-[60%] lg:w-[50%]"
//           style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
//         ></div>

//         {/* Content Area */}
//         <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white z-10">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
//             Shiksha Foundation
//           </h2>
//           <p className="text-lg md:text-2xl font-semibold mt-2 opacity-90">
//             Build a New Learning Center
//           </p>
          
//           {/* Button */}
//           <button className="mt-8 w-fit px-8 py-3 bg-[#4cae4f] hover:bg-[#439a46] text-white font-bold text-xl rounded-xl transition-all shadow-lg active:scale-95">
//             Donate Now
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CampaignBanner;



import React from 'react';
// Image path sahi se check kar lena
import campaignImg from "../../assets/landingPageImage/shiksha-banner.png"; 

const CampaignBanner = () => {
  return (
    // Section me w-full aur koi padding/margin nahi hai taaki ye wall-to-wall dikhe
    <section className="w-full relative overflow-hidden h-[250px] md:h-[350px] lg:h-[375px]">
      
      {/* Background Image - Poori width aur height cover karegi */}
      <img 
        src={campaignImg} 
        alt="Shiksha Foundation Campaign" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Slanted Dark Overlay (Tircha design) */}
      {/* Isme koi border radius nahi hai aur ye left wall se chipka hai */}
      <div 
        className="absolute inset-0 bg-black/75 md:bg-black/60 w-full md:w-[65%] lg:w-[50%]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)' }}
      ></div>

      {/* Content Area - Internal padding 'px-10' navbar ke logo se align karne ke liye */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 text-white">
        <h2 className="text-[28px] md:text-[45px] lg:text-[55px] font-bold leading-tight">
          Shiksha Foundation
        </h2>
        <p className="text-[18px] md:text-[24px] lg:text-[30px] font-bold mt-1">
          Build a New Learning Center
        </p>
        
        {/* Donate Now Button - Exact green shade aur bold look */}
        <button className="mt-8 w-fit px-8 py-2.5 bg-[#4cae4f] hover:bg-[#439a46] text-white font-bold text-xl rounded-lg transition-all shadow-md active:scale-95">
          Donate Now
        </button>
      </div>

    </section>
  );
};

export default CampaignBanner;