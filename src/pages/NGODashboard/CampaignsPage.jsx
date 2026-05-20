import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CampaignList from '../../components/NGODashboard/CampaignList';
import { useNavigate } from 'react-router-dom';

const CampaignsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Campaigns</h1>
          <p className="text-gray-500 font-medium mt-1">Manage all your campaigns</p>
        </div>
        <button 
            onClick={() => navigate('/ngo/campaigns/create')} // Route hit karega
            className="flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
            >
            <Plus size={24} strokeWidth={3} />
            Create New Campaign
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
        {['All', 'Active', 'Completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-bold transition-all whitespace-nowrap px-2 ${
              activeTab === tab 
              ? "text-gray-900 border-b-4 border-[#22c55e]" 
              : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Campaign List Container */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden mb-10">
        <CampaignList />
      </div>
    </div>
  );
};

export default CampaignsPage;