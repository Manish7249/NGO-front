import React from 'react';

const AdminStatCard = ({ title, value, icon, colorClass, iconBg }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 min-w-[200px]">
      <div className={`w-14 h-14 ${iconBg} ${colorClass} rounded-full flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-2xl font-[900] text-gray-800 tracking-tight">{value}</h3>
      </div>
    </div>
  );
};
export default AdminStatCard;