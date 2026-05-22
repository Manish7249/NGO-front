import { useNavigate } from 'react-router-dom';

const AllDonors = () => {
    const navigate = useNavigate();
  const stats = [
    { title: "Total Donations", value: "₹ 12,50,000", trend: "+10% From last month" },
    { title: "This Month", value: "₹ 32,50,000", trend: "+8.2%" },
    { title: "Total Donors", value: "1,250", trend: "+10%" },
  ];

  const donations = [
    { name: "Akay Kohli", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "ABC", campaign: "Har ghar shiksha", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "XYX", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", campaign: "Shiksha Abhiyan", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
  ];

  return (
    <div className="animate-fadeIn pb-10 font-sans text-left">
      
      {/* 1. TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <p className="text-gray-500 font-bold text-sm mb-3 uppercase tracking-wider">{stat.title}</p>
            <h3 className="text-[32px] font-[900] text-gray-800 mb-2">{stat.value}</h3>
            <div className="flex items-center gap-1 text-[#2bb64a] font-black text-[15px]">
              <span>{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. RECENT DONATIONS TABLE CARD */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6 md:p-10 overflow-hidden">
        <h3 className="text-xl font-black text-gray-800 mb-8 px-2 tracking-tight">Recent Donations</h3>
        
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-gray-400 font-bold text-[14px] uppercase tracking-widest border-b border-gray-50">
                <th className="pb-6 px-4">Donors</th>
                <th className="pb-6 px-4">Campaign</th>
                <th className="pb-6 px-4 text-center">Amount</th>
                <th className="pb-6 px-4 text-center">Date</th>
                <th className="pb-6 px-4 text-right">Payment</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-bold text-[15px]">
              {donations.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td 
                    className="py-7 px-4 cursor-pointer hover:text-green-600 transition-colors"
                    onClick={() => navigate('/admin/donors/profile')} // 👈 Navigation path
                    >
                    {item.name}
                </td>
                  <td className="py-7 px-4 text-gray-400 font-medium">{item.campaign}</td>
                  <td className="py-7 px-4 text-center text-gray-900">{item.amount}</td>
                  <td className="py-7 px-4 text-center text-gray-400 font-medium">{item.date}</td>
                  <td className="py-7 px-4 text-right uppercase text-gray-400 text-[13px] tracking-tighter">{item.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All Link */}
        <div className="mt-8 px-4">
          <button className="text-[#2bb64a] font-black text-lg hover:underline transition-all tracking-tight">
            View All Donations
          </button>
        </div>
      </div>

    </div>
  );
};

export default AllDonors;