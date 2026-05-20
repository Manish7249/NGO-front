// import React from 'react';
// import { Star } from 'lucide-react';

// const RatingSection = () => {
//   // Image ke hisab se exact data
//   const ratingData = [
//     { stars: 5, percent: 78 },
//     { stars: 4, percent: 16 },
//     { stars: 3, percent: 4 },
//     { stars: 2, percent: 1 },
//     { stars: 1, percent: 1 },
//   ];

//   return (
//     <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm w-full max-w-4xl animate-fadeIn">
      
//       {/* 1. TOP HEADER (Icon + Label) */}
//       <div className="flex items-center gap-2 mb-8">
//         <div className="bg-orange-50 p-1.5 rounded-lg">
//           <Star className="text-orange-500 fill-orange-500" size={18} />
//         </div>
//         <h4 className="font-bold text-gray-800 text-lg tracking-tight">
//           Campaign Rating
//         </h4>
//       </div>

//       <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
        
//         {/* 2. LEFT SIDE: BIG SCORE */}
//         <div className="text-center md:text-left flex flex-col items-center md:items-start shrink-0">
//           <h2 className="text-6xl md:text-7xl font-[900] text-gray-800 tracking-tighter">
//             4.8
//           </h2>
          
//           {/* Main Rating Stars */}
//           <div className="flex gap-1 my-4">
//             {[...Array(4)].map((_, i) => (
//               <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
//             ))}
//             {/* Half star effect using opacity */}
//             <div className="relative">
//                <Star size={24} className="text-gray-200 fill-gray-200" />
//                <div className="absolute top-0 left-0 overflow-hidden w-[70%]">
//                   <Star size={24} className="text-yellow-400 fill-yellow-400" />
//                </div>
//             </div>
//           </div>
          
//           <p className="text-gray-400 text-sm font-semibold tracking-wide">
//             (1,248 Reviews)
//           </p>
//         </div>

//         {/* 3. RIGHT SIDE: BREAKDOWN BARS */}
//         <div className="flex-1 w-full space-y-4">
//           {ratingData.map((row) => (
//             <div key={row.stars} className="flex items-center gap-4 group">
              
//               {/* Star Label */}
//               <div className="flex items-center gap-1.5 w-10 shrink-0">
//                 <span className="text-sm font-black text-gray-600">{row.stars}</span>
//                 <Star size={14} className="text-orange-400 fill-orange-400" />
//               </div>

//               {/* Progress Bar Container */}
//               <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden relative">
//                 {/* The Filled Part (Deep Dark Green like image) */}
//                 <div 
//                   className="bg-[#05402a] h-full rounded-full transition-all duration-1000 ease-out"
//                   style={{ width: `${row.percent}%` }}
//                 ></div>
//               </div>

//               {/* Percentage Text */}
//               <span className="text-sm font-bold text-gray-400 w-10 text-right">
//                 {row.percent}%
//               </span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default RatingSection;









import React from 'react';
import { Star } from 'lucide-react';

const RatingSection = () => {
  const ratings = [
    { stars: 5, percent: 78 },
    { stars: 4, percent: 16 },
    { stars: 3, percent: 4 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 1 },
  ];

  return (
    // 'mx-auto' add kiya hai taaki component page ke beech mein aa jaye
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl mx-auto">
      
      {/* 1. Top Heading: Campaign Rating */}
      <div className="flex items-center gap-2 mb-4">
        <Star className="text-orange-500 fill-orange-500" size={20} />
        <h4 className="font-bold text-gray-800 text-lg">Campaign Rating</h4>
      </div>

      {/* 2. Summary Row: 4.8 + Stars + Reviews */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">4.8</h2>
        
        <div className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
          ))}
          {/* Half Star logic */}
          <div className="relative">
             <Star size={20} className="text-gray-200 fill-gray-200" />
             <div className="absolute top-0 left-0 overflow-hidden w-[60%]">
                <Star size={20} className="text-yellow-500 fill-yellow-500" />
             </div>
          </div>
        </div>

        <span className="text-gray-400 text-sm font-medium ml-1">
          (1,248 Reviews)
        </span>
      </div>

      {/* 3. Rating Breakdown Rows (5 to 1) */}
      <div className="space-y-4">
        {ratings.map((r, i) => (
          <div key={i} className="flex items-center gap-4 group">
            
            <div className="flex items-center gap-1.5 w-10">
              <span className="text-sm font-bold text-gray-700">{r.stars}</span>
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
            </div>

            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="bg-[#06402b] h-full rounded-full transition-all duration-700" 
                style={{ width: `${r.percent}%` }}
              ></div>
            </div>

            <span className="text-sm font-bold text-gray-400 w-10 text-right">
              {r.percent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;