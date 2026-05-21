import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const RejectedNGOs = () => {
  const [activeTab, setActiveTab] = useState('Rejected');

  const rejectedList = [
    { id: 1, name: "Green Earth Foundation", regNo: "NGO -1099-2024", date: "20 May 2026" },
    { id: 2, name: "Shiksha Foundation", regNo: "NGO -1099-2024", date: "20 May 2026" },
    { id: 3, name: "Education for All", regNo: "NGO -1099-2024", date: "20 May 2026" },
    { id: 4, name: "Health and Hope Foundation", regNo: "NGO -1099-2024", date: "20 May 2026" },
    { id: 5, name: "Women Empowerment Trust", regNo: "NGO -1099-2024", date: "20 May 2026" },
  ];

  return (
    <div className="animate-fadeIn pb-10 font-sans">
      
      {/* 1. TABS NAVIGATION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-2">
        <div className="flex gap-6 md:gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:w-auto">
          {['All', 'Pending(10)', 'Verified(240)', 'Rejected(12)'].map((tab) => {
             const tabName = tab.split('(')[0];
             return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabName)}
                  className={`pb-2 text-[15px] md:text-[17px] font-bold transition-all ${
                    activeTab === tabName 
                    ? "text-[#7c3aed] border-b-4 border-[#7c3aed]" 
                    : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
             )
          })}
        </div>
        
        <button className="flex items-center gap-2 text-[#7c3aed] font-bold hover:underline whitespace-nowrap">
          View all applications <ArrowRight size={20} />
        </button>
      </div>

      {/* 2. REJECTED TABLE CARD */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="text-gray-600 font-bold text-[16px] md:text-[18px]">
                <th className="py-8 px-8">NGO Name</th>
                <th className="py-8 px-4">Registration No.</th>
                <th className="py-8 px-4">Applied On</th>
                <th className="py-8 px-4 text-center">Status</th>
                <th className="py-8 px-8 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {rejectedList.map((ngo) => (
                <tr key={ngo.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                  {/* NGO Name */}
                  <td className="py-7 px-8 font-bold text-gray-700 max-w-[250px]">
                    {ngo.name}
                  </td>
                  
                  {/* Reg No */}
                  <td className="py-7 px-4 font-semibold text-gray-500">
                    {ngo.regNo}
                  </td>

                  {/* Date */}
                  <td className="py-7 px-4 font-bold text-gray-800">
                    {ngo.date}
                  </td>

                  {/* Status (Solid Red Button style) */}
                  <td className="py-7 px-4 text-center">
                    <button className="bg-[#e31a1a] text-white px-8 py-2 rounded-lg text-sm font-bold shadow-md cursor-default">
                      Rejected
                    </button>
                  </td>

                  {/* Action (Light Blue Button) */}
                  <td className="py-7 px-8 text-center">
                    <button className="bg-[#dbeafe] text-[#3b82f6] px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#bfdbfe] transition-all shadow-sm">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default RejectedNGOs;