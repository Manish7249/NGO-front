import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DonorStats from '../../components/DonorDashboard/DonorStats';

// Graph Data
const chartData = [
  { name: 'Jan', amount: 3200 },
  { name: 'Feb', amount: 2000 },
  { name: 'March', amount: 2800 },
  { name: 'April', amount: 2100 },
  { name: 'May', amount: 3100 },
];

const DonorDashboard = () => {
  const navigate = useNavigate(); // 🟢 2. navigate function initialize kiya
  const [activeTab, setActiveTab] = useState('Campaigns');

  // Dummy Table Data for Campaigns
  const campaignData = [
    { 
        id: 1, 
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop", 
        title: "Build a New Learning Center", 
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

  // 🟢 3. Navigation Logic function
  const handleViewDetails = (item) => {
    if (activeTab === 'Campaigns') {
      // Campaigns ke liye route
      navigate('/donor/donations/donation-campaign-detail', { state: { item } });
    } else {
      // Events ke liye route
      navigate('/donor/donations/donation-event-detail', { state: { item } });
    }
  };

  return (
    <div className="p-4 md:p-10 space-y-8 w-full max-w-[1200px] mx-auto animate-fadeIn">
      
      <div className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome Back, Akay</h1>
      </div>

      <DonorStats />

      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800 text-lg">Revenue Overview</h3>
          <select className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none font-semibold">
            <option>This Year</option>
          </select>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1db13a" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#1db13a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="amount" stroke="#1db13a" strokeWidth={3} fill="url(#colorAmt)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-bold text-gray-800 text-lg">Recent Donations</h3>

        <div className="flex items-center justify-between border-b border-gray-200">
          <div className="flex gap-8">
            {['Campaigns', 'Events'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-lg font-bold transition-all relative ${activeTab === tab ? 'text-gray-800' : 'text-gray-400'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-full" />}
              </button>
            ))}
          </div>
          <button onClick={() => navigate('/donor/donations')} className="text-gray-400 font-bold text-sm hover:text-gray-600 mb-4">View All</button>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl shadow-[0px_8px_24px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
                    <thead>
                      <tr className="text-[11px] md:text-[12px] uppercase text-gray-400 font-bold border-b border-gray-50 bg-gray-50/30">
                        <th className="w-[35%] pl-6 md:pl-10 py-5">{activeTab === 'Campaigns' ? 'Campaign' : 'Event'}</th>
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
                                className="w-14 h-11 md:w-20 md:h-14 rounded-lg md:rounded-lg object-cover shadow-sm shrink-0" 
                                alt={activeTab} 
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
                            {/* 🟢 4. Button par onClick listener add kiya */}
                            <button 
                              onClick={() => handleViewDetails(item)}
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
    </div>
  );
};

export default DonorDashboard;