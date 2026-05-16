import { Users, FileText, ShieldCheck, Heart } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      label: "Registered NGOs",
      value: "1,250+",
      icon: <Users size={24} />,
      iconBg: "bg-[#d9f2d9]",
      iconColor: "text-[#2d8a2d]",
    },
    {
      id: 2,
      label: "Verified Documents",
      value: "850+",
      icon: <FileText size={24} />,
      iconBg: "bg-[#fef3c7]",
      iconColor: "text-[#d97706]",
    },
    {
      id: 3,
      label: "Verified NGOs",
      value: "240+",
      icon: <ShieldCheck size={24} />,
      iconBg: "bg-[#e0e7ff]",
      iconColor: "text-[#4338ca]",
    },
    {
      id: 4,
      label: "Total Donations",
      value: "₹2.5 Cr+",
      icon: <Heart size={24} />,
      iconBg: "bg-[#fee2e2]",
      iconColor: "text-[#dc2626]",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-10">
      {/* 
         Main Container: 
         - bg-[#f7fdf7] (Halka green background)
         - rounded-2xl (Corners)
         - border border-gray-100 
      */}
      <div className="bg-[#f7fdf7] rounded-2xl border border-gray-200 shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {statsData.map((stat, index) => (
          <div 
            key={stat.id} 
            // Divider logic: Last wale ko chhod kar sabme right border aayega
            className={`flex-1 flex flex-col items-center justify-center p-8 md:py-12 
              ${index !== statsData.length - 1 ? 'md:border-r border-gray-200' : ''} 
              ${index !== statsData.length - 1 ? 'border-b md:border-b-0' : ''}`}
          >
            {/* Icon Circle */}
            <div className={`w-14 h-14 ${stat.iconBg} ${stat.iconColor} rounded-full flex items-center justify-center mb-5`}>
              {stat.icon}
            </div>

            {/* Value (Bold & Dark) */}
            <h3 className="text-[28px] md:text-[34px] font-extrabold text-[#333] mb-1">
              {stat.value}
            </h3>

            {/* Label (Grayish) */}
            <p className="text-gray-600 font-medium text-center text-[15px] md:text-[17px] mb-3">
              {stat.label}
            </p>

            {/* View All Link (Green) */}
            <button className="text-[#2bb64a] text-sm font-bold flex items-center hover:underline group">
              View All <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
