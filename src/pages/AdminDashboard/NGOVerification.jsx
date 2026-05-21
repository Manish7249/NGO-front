import React, { useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NGOVerification = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const ngoApplications = [
    { id: 1, name: "Green Earth Foundation", regNo: "NGO -1099-2024", date: "20 May 2026", docs: "2/3", status: "Verified" },
    { id: 2, name: "Shiksha Foundation", regNo: "NGO -1099-2024", date: "20 May 2026", docs: "1/3", status: "Pending" },
    { id: 3, name: "Education for All", regNo: "NGO -1099-2024", date: "20 May 2026", docs: "2/3", status: "Pending" },
    { id: 4, name: "Health and Hope Foundation", regNo: "NGO -1099-2024", date: "20 May 2026", docs: "3/3", status: "Pending" },
    { id: 5, name: "Women Empowerment Trust", regNo: "NGO -1099-2024", date: "20 May 2026", docs: "3/3", status: "Pending" },
  ];

  return (
    <div className="animate-fadeIn pb-10">
      
      {/* 1. TABS NAVIGATION */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 px-2">
        <div className="flex gap-6 md:gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:w-auto">
          {['All', 'Pending(10)', 'Verified(240)', 'Rejected(12)'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.split('(')[0])}
              className={`pb-2 text-[15px] md:text-[17px] font-bold transition-all ${
                activeTab === tab.split('(')[0] 
                ? "text-[#7c3aed] border-b-4 border-[#7c3aed]" 
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-[#7c3aed] font-bold hover:underline whitespace-nowrap">
          View all applications <ArrowRight size={20} />
        </button>
      </div>

      {/* 2. DATA TABLE CARD */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="text-gray-600 font-bold text-[16px] md:text-[18px]">
                <th className="py-8 px-6">NGO Name</th>
                <th className="py-8 px-6">Registration No.</th>
                <th className="py-8 px-6">Applied On</th>
                <th className="py-8 px-6">Documents</th>
                <th className="py-8 px-6">Status</th>
                <th className="py-8 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {ngoApplications.map((ngo) => (
                <tr key={ngo.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-6 font-bold text-gray-800 max-w-[200px]">{ngo.name}</td>
                  <td className="py-6 px-6 text-gray-500 font-bold">{ngo.regNo}</td>
                  <td className="py-6 px-6 text-gray-800 font-bold">{ngo.date}</td>
                  
                  {/* Documents Count with Icon */}
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-blue-500" />
                      <span className={`font-bold ${ngo.docs === '1/3' ? 'text-red-500' : ngo.docs === '2/3' ? 'text-yellow-500' : 'text-green-500'}`}>
                        {ngo.docs}
                      </span>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-6 px-6">
                    <span className={`px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm ${
                      ngo.status === 'Verified' 
                      ? 'bg-[#d1fae5] text-[#1da036]' 
                      : 'bg-[#fef3c7] text-[#d97706]'
                    }`}>
                      {ngo.status}
                    </span>
                  </td>

                  {/* Action Button */}
                  <td className="py-6 px-6 text-center">
                    <button onClick={() => navigate('/admin/all-ngos/ngo-verification/detail')} className="bg-[#dbeafe] text-[#3b82f6] px-5 py-1.5 rounded-lg text-xs font-bold hover:bg-[#bfdbfe] transition-all shadow-sm">
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

export default NGOVerification;