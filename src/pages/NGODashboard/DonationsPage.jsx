// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft, TrendingUp } from 'lucide-react';

// const DonationsPage = () => {
//   const navigate = useNavigate();

//   const stats = [
//     { title: "Total Donations", value: "₹ 12,50,000", trend: "+10%", trendText: "From last month", color: "text-green-500" },
//     { title: "This Month", value: "₹ 32,50,000", trend: "+8.2%", trendText: "", color: "text-green-500" },
//     { title: "Total Donors", value: "1,250", trend: "+10%", trendText: "", color: "text-green-500" },
//   ];

//   const donations = [
//     { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { donor: "Ravi Sharma", campaign: "Har ghar shiksha", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { donor: "Ravi Sharma", campaign: "Shiksha Abhiyan", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//     { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8fafc] p-6 md:p-12 font-sans animate-fadeIn">
      
//       {/* 1. HEADER & BACK BUTTON */}
//       <div className="max-w-7xl mx-auto mb-10">
//         <button 
//           onClick={() => navigate(-1)} 
//           className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all mb-6 active:scale-95"
//         >
//           <ArrowLeft size={22} /> Back to Dashboard
//         </button>
        
//         <h1 className="text-3xl md:text-4xl font-[900] text-gray-900 tracking-tight">Donations</h1>
//         <p className="text-gray-500 font-medium mt-1">Track all donations and contributors</p>
//       </div>

//       {/* 2. TOP STATS CARDS */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//         {stats.map((stat, i) => (
//           <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
//             <p className="text-gray-500 font-semibold text-sm mb-2">{stat.title}</p>
//             <h3 className="text-3xl font-[900] text-gray-800 mb-2">{stat.value}</h3>
//             <div className="flex items-center gap-1 text-[#2bb64a] font-bold text-sm">
//               <TrendingUp size={16} />
//               <span>{stat.trend}</span>
//               <span className="text-gray-400 font-medium ml-1 italic">{stat.trendText}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 3. RECENT DONATIONS TABLE */}
//       <div className="max-w-7xl mx-auto bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 md:p-10">
//         <h3 className="text-xl font-bold text-gray-800 mb-8 px-2">Recent Donations</h3>
        
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="text-gray-500 font-bold text-[15px] border-b border-gray-50">
//                 <th className="pb-6 px-4">Donors</th>
//                 <th className="pb-6 px-4">Campaign</th>
//                 <th className="pb-6 px-4 text-center">Amount</th>
//                 <th className="pb-6 px-4 text-center">Date</th>
//                 <th className="pb-6 px-4 text-right">Payment</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700 font-semibold">
//               {donations.map((item, idx) => (
//                 <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
//                   <td className="py-6 px-4">{item.donor}</td>
//                   <td className="py-6 px-4 text-gray-500">{item.campaign}</td>
//                   <td className="py-6 px-4 text-center font-bold">{item.amount}</td>
//                   <td className="py-6 px-4 text-center text-gray-500">{item.date}</td>
//                   <td className="py-6 px-4 text-right uppercase text-gray-400 text-sm">{item.method}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* View All Button */}
//         <div className="mt-8 flex justify-start px-4">
//           <button className="text-[#2bb64a] font-bold text-lg hover:underline transition-all">
//             View All Donations
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default DonationsPage;










import React from 'react';
import { TrendingUp } from 'lucide-react';

const DonationsPage = () => {
  const stats = [
    { title: "Total Donations", value: "₹ 12,50,000", trend: "+10%", trendText: "From last month" },
    { title: "This Month", value: "₹ 32,50,000", trend: "+8.2%", trendText: "" },
    { title: "Total Donors", value: "1,250", trend: "+10%", trendText: "" },
  ];

  const donations = [
    { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { donor: "Ravi Sharma", campaign: "Har ghar shiksha", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { donor: "Ravi Sharma", campaign: "Shiksha Abhiyan", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { donor: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
  ];

  return (
    <div className="animate-fadeIn">
      {/* 1. HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-[900] text-gray-900 tracking-tight">Donations</h1>
        <p className="text-gray-500 font-medium mt-1">Track all donations and contributors</p>
      </div>

      {/* 2. TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <p className="text-gray-500 font-bold text-sm mb-3 uppercase tracking-wider">{stat.title}</p>
            <h3 className="text-[32px] font-[900] text-gray-800 mb-2">{stat.value}</h3>
            <div className="flex items-center gap-1 text-[#2bb64a] font-black text-[15px]">
              {/* <TrendingUp size={18} /> */}
              <span>{stat.trend}</span>
              {stat.trendText && <span className="text-gray-400 font-medium ml-1 italic normal-case">{stat.trendText}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* 3. RECENT DONATIONS TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-10 overflow-hidden">
        <h3 className="text-xl font-black text-gray-800 mb-8 px-2 tracking-tight">Recent Donations</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 font-bold text-[14px] uppercase tracking-widest border-b border-gray-50">
                <th className="pb-6 px-4">Donors</th>
                <th className="pb-6 px-4">Campaign</th>
                <th className="pb-6 px-4 text-center">Amount</th>
                <th className="pb-6 px-4 text-center">Date</th>
                <th className="pb-6 px-4 text-right">Payment</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-bold text-[15px]">
              {donations.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-7 px-4">{item.donor}</td>
                  <td className="py-7 px-4 text-gray-400 font-medium">{item.campaign}</td>
                  <td className="py-7 px-4 text-center text-gray-900">{item.amount}</td>
                  <td className="py-7 px-4 text-center text-gray-400 font-medium">{item.date}</td>
                  <td className="py-7 px-4 text-right uppercase text-gray-400 text-[13px] tracking-tighter">{item.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-start px-4 border-t border-gray-50 pt-8">
          <button className="text-[#2bb64a] font-black text-lg hover:underline transition-all tracking-tight">
            View All Donations
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;