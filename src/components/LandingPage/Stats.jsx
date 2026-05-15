// import React from 'react';

// const stats = [
//   { label: 'Registered NGOs', value: '1,250', color: 'bg-green-100 text-green-600' },
//   { label: 'Verified Documents', value: '850', color: 'bg-yellow-100 text-yellow-600' },
//   { label: 'Verified NGOs', value: '240', color: 'bg-blue-100 text-blue-600' },
//   { label: 'Total Donations', value: '₹2.5 Cr+', color: 'bg-red-100 text-red-600' },
// ];

// const Stats = () => {
//   return (
//     <div className="py-16 bg-gray-50 px-6">
//       <h3 className="text-2xl font-bold mb-8 text-center md:text-left md:px-14">At a glance</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-10">
//         {stats.map((stat, i) => (
//           <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
//             <div className={`w-12 h-12 ${stat.color} rounded-full mx-auto mb-4 flex items-center justify-center font-bold`}>
//               Icon
//             </div>
//             <h4 className="text-2xl font-bold text-gray-800">{stat.value}</h4>
//             <p className="text-gray-500 text-sm">{stat.label}</p>
//             <button className="mt-2 text-xs text-green-600 font-semibold underline">View All</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stats;








import React from 'react';
import { Users, FileText, ShieldCheck, Heart } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Registered NGOs",
      value: "1,250",
      icon: <Users size={24} />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      label: "Verified Documents",
      value: "850",
      icon: <FileText size={24} />,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      id: 3,
      label: "Verified NGOs",
      value: "240",
      icon: <ShieldCheck size={24} />,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      id: 4,
      label: "Total Donations",
      value: "₹2.5 Cr+",
      icon: <Heart size={24} />,
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-12">
      {/* Outer Card Wrapper */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10">
        
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-10">
          At a glance
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 ${item.bgColor} ${item.iconColor} rounded-full flex items-center justify-center mb-6`}>
                {item.icon}
              </div>

              {/* Stat Value */}
              <h3 className="text-3xl font-extrabold text-gray-800 mb-1">
                {item.value}
              </h3>

              {/* Stat Label */}
              <p className="text-gray-500 font-medium mb-4">
                {item.label}
              </p>

              {/* View All Link */}
              <a 
                href="#" 
                className="text-green-600 text-sm font-bold flex items-center hover:underline"
              >
                View All <span className="ml-1">›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;