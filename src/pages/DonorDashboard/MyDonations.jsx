import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
// Maan lete hain DonationCampaignDetails isi folder mein hai
import DonationCampaignDetails from './DonationCampaignDetails'; 

const MyDonations = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaigns');
  // 1. State banayi click kiya hua item store karne ke liye
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const campaignData = [
    { 
        id: 1, 
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop", 
        title: "Educate Every Child", 
        ngo: "Shiksha Foundation", 
        amount: "5,000", 
        date: "10 May 2026", 
        status: "Active" 
    },
    { 
        id: 2, 
        img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=250&fit=crop", 
        title: "Feed the Hungry", 
        ngo: "Smile Foundation", 
        amount: "2,500", 
        date: "05 Apr 2026", 
        status: "Completed" 
    },
    { 
        id: 3, 
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=400&h=250&fit=crop", 
        title: "Plant a Better Tomorrow", 
        ngo: "Green Earth Trust", 
        amount: "1,000", 
        date: "05 Apr 2026", 
        status: "Completed" 
    },
  ];

  const eventData = [...campaignData];
  const displayData = activeTab === 'Campaigns' ? campaignData : eventData;

  // 2. Agar selectedCampaign mein data hai, toh Detail page dikhao
  if (selectedCampaign) {
    return (
      <DonationCampaignDetails 
        campaign={selectedCampaign} 
        onBack={() => setSelectedCampaign(null)} 
      />
    );
  }

  return (
    <div className="p-4 md:p-8 space-y-6 w-full max-w-[1200px] mx-auto animate-fadeIn overflow-hidden">
      
      {/* Header Section */}
      <div className="flex items-center justify-between px-1">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">All Donations</h1>
        <button className="text-xs md:text-sm font-bold text-gray-400 hover:text-green-600 transition-colors">
          View All
        </button>
      </div>

      {/* Tabs Section */}
      <div className="flex items-center border-b border-gray-200">
        <div className="flex gap-8 md:gap-12">
          {['Campaigns', 'Events'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base md:text-xl font-bold transition-all relative ${
                activeTab === tab ? 'text-gray-800' : 'text-gray-400'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-1 bg-green-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Table Container */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
            <thead>
              <tr className="text-[11px] md:text-[12px] uppercase text-gray-400 font-bold border-b border-gray-50 bg-gray-50/30">
                <th className="w-[35%] pl-6 md:pl-10 py-5">{activeTab === 'Campaigns' ? 'Campaigns' : 'Events'}</th>
                <th className="w-[15%] px-4 py-5">Amount</th>
                <th className="w-[15%] px-4 py-5">Date</th>
                <th className="w-[15%] px-4 py-5">Status</th>
                <th className="w-[20%] pr-6 md:pr-10 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {displayData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/60 transition-colors group">
                  <td className="pl-6 md:pl-10 py-5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={item.img} 
                        className="w-14 h-11 md:w-20 md:h-14 rounded-lg object-cover shadow-sm shrink-0" 
                        alt="item" 
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-800 truncate leading-tight mb-1">
                          {item.title}
                        </p>
                        <p className="text-[10px] md:text-[11px] text-gray-400 font-medium truncate uppercase tracking-tight">
                          {item.ngo}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-5">
                    <span className="text-sm md:text-base font-bold text-gray-700">₹{item.amount}</span>
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500 font-medium">
                    {item.date}
                  </td>

                  <td className="px-4 py-5">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[10px] md:text-[11px] font-bold ${
                      item.status === 'Active' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-green-50 text-green-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>

                  <td className="pr-6 md:pr-10 py-5 text-right">
                    {/* 3. Click par selectedCampaign set kar rahe hain */}
                    {/* <button 
                       onClick={() => navigate(`/donor/donations/donation-campaign-detail`, { state: { item } })}
                      className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-green-600 border border-green-100 px-3 md:px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm active:scale-95 group-hover:border-green-600"
                    >
                      View Details <ChevronRight size={14} strokeWidth={2.5} />
                    </button> */}
                    <button 
                      onClick={() => {
                        const path = activeTab === 'Campaigns' 
                          ? `/donor/donations/donation-campaign-detail` 
                          : `/donor/donations/donation-event-detail`; // Naya path for Events
                        navigate(path, { state: { item } });
                      }}
                      className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-green-600 border border-green-100 px-3 md:px-5 py-2 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm active:scale-95 group-hover:border-green-600"
                    >
                      View Details <ChevronRight size={14} strokeWidth={2.5} />
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

export default MyDonations;