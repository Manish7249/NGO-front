import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronDown } from 'lucide-react';

const DonorAllTransactions = () => {
  const navigate = useNavigate();
  const dateInputRef = useRef(null);

  // States for filters
  const [selectedDate, setSelectedDate] = useState("May 2026");
  const [selectedCampaign, setSelectedCampaign] = useState("All");
  const [selectedMethod, setSelectedMethod] = useState("All");

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    setSelectedDate(`${month} ${year}`);
  };

  return (
    <div className="animate-fadeIn pb-20 font-sans text-left">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-gray-700 transition-all active:scale-95">
        <ArrowLeft size={20} /> <span className="text-lg">Back</span>
      </button>

      {/* Header Info */}
      <div className="mb-10 px-4">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Akay Kohli</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-500 font-bold text-[17px] mt-2">
           <span>akayk@mail.com</span>
           <span>+91 1234567890</span>
           <span>Joined on 15 jan 2023</span>
        </div>
      </div>

      {/* Top 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard title="Total Donations" value="₹ 2,50,000" color="border-[#2bb64a]" />
        <StatCard title="Total Transaction" value="24" color="border-[#2bb64a]" />
        <StatCard title="Campaign Supported" value="6" color="border-[#2bb64a]" />
      </div>

      <div className="px-2">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">Transaction History</h3>
        <p className="text-gray-400 font-bold mb-8 uppercase tracking-widest text-xs">All donations and payments made by this donor</p>
      </div>

      {/* --- WORKING FILTERS AREA --- */}
      <div className="flex flex-wrap gap-4 mb-10 px-2">
         
         {/* 1. Date Selector */}
         <div className="relative">
            <div 
              onClick={() => dateInputRef.current.showPicker()}
              className="flex items-center gap-3 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 font-bold text-sm shadow-sm cursor-pointer hover:bg-gray-50 transition-all"
            >
              <Calendar size={18} className="text-[#2bb64a]" /> 
              <span>{selectedDate}</span> 
              <ChevronDown size={18} />
            </div>
            <input 
              ref={dateInputRef}
              type="month" // Month-Year picker
              className="absolute opacity-0 pointer-events-none w-0 h-0"
              onChange={handleDateChange}
            />
         </div>

         {/* 2. Campaign Selector */}
         <div className="relative group">
            <select 
              onChange={(e) => setSelectedCampaign(e.target.value)}
              className="appearance-none flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 font-bold text-sm shadow-sm cursor-pointer hover:bg-gray-50 outline-none pr-10"
            >
               <option value="All">All Campaigns</option>
               <option value="Education">Shiksha Abhiyan</option>
               <option value="Health">Build a New Learning Center</option>
               <option value="Environment">Plant a Tree</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
         </div>

         {/* 3. Payment Method Selector */}
         <div className="relative group">
            <select 
              onChange={(e) => setSelectedMethod(e.target.value)}
              className="appearance-none flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-600 font-bold text-sm shadow-sm cursor-pointer hover:bg-gray-50 outline-none pr-10"
            >
               <option value="All">All Payment Methods</option>
               <option value="UPI">UPI</option>
               <option value="Net Banking">Net Banking</option>
               <option value="Card">Debit/Credit Card</option>
            </select>
            <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
         </div>
      </div>

      {/* Transactions Table Card */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[950px]">
            <thead>
              <tr className="text-gray-400 font-bold text-sm uppercase border-b border-gray-50">
                <th className="py-6 px-8">Date & Time</th>
                <th className="py-6 px-4">Campaign</th>
                <th className="py-6 px-4 text-center">Amount</th>
                <th className="py-6 px-4 text-center">Payment</th>
                <th className="py-6 px-8 text-right">Transaction ID</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-bold">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-all cursor-default">
                  <td className="py-7 px-8 text-gray-500 font-medium whitespace-nowrap">3 May 2026, 10.30 AM</td>
                  <td className="py-7 px-4 text-gray-900 font-bold">Build a New Learning center</td>
                  <td className="py-7 px-4 text-center font-[900] text-gray-800">5000 Rs</td>
                  <td className="py-7 px-4 text-center text-gray-400 uppercase text-xs tracking-tighter">UPI</td>
                  <td className="py-7 px-8 text-right font-medium text-gray-400 tracking-wider text-[13px]">TXN12345457</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 🟢 FIXED: View All Transaction Button */}
        <div className="p-8 border-t border-gray-50 flex justify-start">
           <button className="text-[#2bb64a] font-black text-lg hover:underline transition-all active:scale-95">
             View All Transaction
           </button>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ title, value, color }) => (
  <div className={`bg-white p-8 rounded-[2rem] border-2 ${color} text-center shadow-sm`}>
    <p className="text-gray-400 font-bold text-xs uppercase mb-3 tracking-widest">{title}</p>
    <h3 className="text-[36px] font-[900] text-gray-800 tracking-tighter leading-none">{value}</h3>
  </div>
);

export default DonorAllTransactions;