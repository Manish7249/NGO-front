// import React from 'react';
// import { TrendingUp } from 'lucide-react'; // Ek chota arrow icon growth dikhane ke liye

// const StatCard = ({ title, value, trend, trendText = "From last month" }) => {
//   return (
//     <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-3 transition-all hover:shadow-md">
      
//       {/* 1. Title (Chota aur Grey text) */}
//       <p className="text-gray-500 text-sm md:text-base font-semibold tracking-wide">
//         {title}
//       </p>

//       {/* 2. Main Value (Bada aur Bold text) */}
//       <h3 className="text-3xl md:text-4xl font-[900] text-gray-800 tracking-tight">
//         {value}
//       </h3>

//       {/* 3. Trend Section (Green color with icon) */}
//       <div className="flex items-center gap-1.5 mt-1">
//         <div className="flex items-center text-[#2bb64a] font-bold text-sm md:text-[15px]">
//           <TrendingUp size={16} className="mr-1" />
//           <span>{trend}</span>
//         </div>
//         <span className="text-gray-400 text-xs md:text-sm font-medium italic">
//           {trendText}
//         </span>
//       </div>

//     </div>
//   );
// };

// export default StatCard;







import React from 'react';

const StatCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col gap-2">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <p className="text-green-500 text-xs font-bold">{trend} <span className="text-gray-400 font-normal ml-1">From last month</span></p>
    </div>
  );
};

export default StatCard;