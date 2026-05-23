import React from 'react';
import { Heart, CheckCircle2, Bell } from 'lucide-react';

const DonorStats = () => {
  const stats = [
    { 
      label: "Total Donated", 
      value: "28,540", 
      sub: "Across 6 campaigns", 
      icon: <Heart className="text-red-500" />, 
      bgColor: "bg-red-50" 
    },
    { 
      label: "Campaigns Supported", 
      value: "10", 
      sub: "Keep Changing Lives!", 
      icon: <CheckCircle2 className="text-blue-500" />, 
      bgColor: "bg-blue-50" 
    },
    { 
      label: "Upcoming Campaigns", 
      value: "2", 
      sub: "Successfully Verified", 
      icon: <Bell className="text-green-500" />, 
      bgColor: "bg-green-50" 
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-5 md:p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-[11px] md:text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">{stat.label}</p>
            <h2 className="text-xl md:text-2xl font-black text-gray-800">₹ {stat.value}</h2>
            <p className="text-[14px] text-gray-400 mt-0.5">{stat.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonorStats;