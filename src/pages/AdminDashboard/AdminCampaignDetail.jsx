// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import educateImg from '../../assets/landingPageImage/hero.png'; // Path check kar lena

// const AdminCampaignDetail = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('Campaign Details');

//   return (
//     <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0">
      
//       {/* 1. BACK BUTTON */}
//       <button 
//         onClick={() => navigate(-1)} 
//         className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 transition-all mb-8 group"
//       >
//         <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
//       </button>

//       {/* 2. TOP HERO SECTION (Image + Summary) */}
//       <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
//         {/* Image Box */}
//         <div className="w-full md:w-80 h-56 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md">
//           <img src={educateImg} alt="Campaign" className="w-full h-full object-cover" />
//         </div>

//         {/* Info Box */}
//         <div className="text-left py-2">
//           <span className="text-[#2bb64a] font-bold text-sm uppercase tracking-wider mb-2 block">Active</span>
//           <h1 className="text-3xl font-black text-gray-900 mb-2">Educate Every Child</h1>
//           <p className="text-gray-500 font-bold text-lg mb-4">By Shiksha Foundation</p>
//           <p className="text-gray-400 text-[15px] font-medium leading-relaxed italic max-w-2xl">
//             We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
//           </p>
//         </div>
//       </div>

//       {/* 3. TABS NAVIGATION */}
//       <div className="flex gap-8 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap px-2">
//         {['Campaign Details', 'Fund Utilization', 'Donar Details', 'Profile'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-4 text-[16px] md:text-lg font-bold transition-all ${
//               activeTab === tab ? "text-[#2bb64a] border-b-4 border-[#2bb64a]" : "text-gray-400"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* 4. MAIN CONTENT CARD (Stats + About) */}
//       <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] mb-12">
        
//         <div className='border border-gray-200 rounded-2xl p-4 mb-4'>
//           {/* Stats Row */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-6">
//             <StatItem label="Raised" value="₹ 7,80,000" />
//             <StatItem label="Goal" value="₹ 15,00,000" />
//             <StatItem label="Progress" value="48%" />
//             <StatItem label="Days Left" value="20" />
//           </div>

//           {/* Custom Progress Bar with Dot */}
//           <div className="relative w-full h-3.5 bg-gray-200 rounded-full mb-6">
//             <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-md" style={{ width: '48%' }}>
//               <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* About Campaign Text */}
//         <div className="text-left mb-12">
//           <h2 className="text-2xl font-black text-gray-800 mb-6">About This Campaign</h2>
//           <p className="text-gray-500 text-[17px] leading-relaxed font-medium">
//             This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
//           </p>
//           <button className="text-[#2bb64a] font-bold text-lg mt-4 hover:underline">Read More</button>
//         </div>

//         {/* Bottom Details Table Box */}
//         <div className="bg-white border border-gray-200 rounded-[1.5rem] p-8 space-y-6 max-w-3xl">
//            <TableRow label="Goal Amount" value="₹ 15,00,000" />
//            <TableRow label="Total Donars" value="324" />
//            <TableRow label="Duration" value="5 may 2026 - 16 may 2026" />
//         </div>
//       </div>

//     </div>
//   );
// };

// // Internal Components for Clean Code
// const StatItem = ({ label, value }) => (
//   <div>
//     <h3 className="text-2xl md:text-3xl font-[900] text-gray-800">{value}</h3>
//     <p className="text-gray-400 text-sm font-bold uppercase mt-1 tracking-wider">{label}</p>
//   </div>
// );

// const TableRow = ({ label, value }) => (
//   <div className="grid grid-cols-2 text-left">
//     <span className="text-gray-500 font-bold text-lg">{label}</span>
//     <span className="text-gray-800 font-bold text-lg">{value}</span>
//   </div>
// );

// export default AdminCampaignDetail;















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, BookOpen, GraduationCap, User, ShieldCheck, TrendingUp } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
import educateImg from '../../assets/landingPageImage/hero.png';

const AdminCampaignDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaign Details');

  // --- Chart Data for Fund Utilization ---
  const chartData = [
    { name: 'Education Materials', value: 65, color: '#FFC107' },
    { name: 'School Fees', value: 20, color: '#32CD32' },
    { name: 'Uniforms', value: 10, color: '#00BFFF' },
    { name: 'Admin & Ops', value: 5, color: '#FF4500' },
  ];

  const ngoDetails = {
    name: "Helping Hands NGO",
    email: "hello@helpinhands.org",
    phone: "+91 2343446576",
    website: "www.helpinhands.org",
    address: "123-Green Park, Mumbai",
    pincode: "401047",
    about: "The Helping Hands Foundation is a non-profit organization, which works with children who are diagnosed with cancer..."
  };

  return (
    <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0 text-left">
      
      {/* 1. BACK BUTTON */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 mb-8 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back
      </button>

      {/* 2. TOP HERO SECTION */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
        <div className="w-full md:w-80 h-56 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md">
          <img src={educateImg} alt="Campaign" className="w-full h-full object-cover" />
        </div>
        <div className="text-left py-2">
          <span className="text-[#2bb64a] font-bold text-sm uppercase tracking-wider mb-2 block">Active</span>
          <h1 className="text-3xl font-black text-gray-900 mb-2">Educate Every Child</h1>
          <p className="text-gray-500 font-bold text-lg mb-4">By Shiksha Foundation</p>
          <p className="text-gray-400 text-[15px] font-medium leading-relaxed max-w-2xl">
            We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
          </p>
        </div>
      </div>

      {/* 3. TABS NAVIGATION */}
      <div className="flex gap-4 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
        {['Campaign Details', 'Fund Utilization', 'Donar Details', 'Profile'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[16px] md:text-lg font-bold transition-all px-2 ${
              activeTab === tab ? "text-[#2bb64a] border-b-4 border-[#2bb64a]" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* --- CONDITIONAL CONTENT --- */}

      {/* TAB 1: CAMPAIGN DETAILS (Existing) */}
      {activeTab === 'Campaign Details' && (
        <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-12">
          <div className='border border-gray-200 rounded-2xl p-4'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
              <StatItem label="Raised" value="₹ 7,80,000" />
              <StatItem label="Goal" value="₹ 15,00,000" />
              <StatItem label="Progress" value="48%" />
              <StatItem label="Days Left" value="20" />
            </div>
            <div className="relative w-full h-3.5 bg-gray-200 rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-md" style={{ width: '48%' }}>
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-black text-gray-800 mb-6">About This Campaign</h2>
            <p className="text-gray-500 text-[17px] leading-relaxed font-medium">This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.</p>
            <button className="text-[#2bb64a] font-bold text-lg mt-4 hover:underline">Read More</button>
          </div>
          <div className="bg-white border border-gray-200 rounded-[1.5rem] p-8 space-y-6 max-w-3xl">
             <TableRow label="Goal Amount" value="₹ 15,00,000" />
             <TableRow label="Total Donars" value="324" />
             <TableRow label="Duration" value="5 may 2026 - 16 may 2026" />
          </div>
        </div>
      )}

      {/* TAB 2: FUND UTILIZATION (Image 1) */}
      {activeTab === 'Fund Utilization' && (
        <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-14 shadow-sm animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-800 mb-12">Where Your Money goes</h2>
          
          {/* Top Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <UtilIcon label="Education Materials" percent="65%" Icon={BookOpen} color="bg-green-50 text-green-700" />
            <UtilIcon label="School Fees" percent="20%" Icon={GraduationCap} color="bg-green-50 text-green-700" />
            <UtilIcon label="Uniforms" percent="10%" Icon={User} color="bg-green-50 text-green-700" />
            <UtilIcon label="Admin & Ops" percent="5%" Icon={ShieldCheck} color="bg-green-50 text-green-700" />
          </div>

          {/* Donut Chart Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} innerRadius="70%" outerRadius="100%" paddingAngle={5} dataKey="value">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-gray-400 text-sm font-bold">Total Utilization</p>
                <p className="text-2xl font-black text-gray-800">₹ 10,00,000</p>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-6 min-w-[300px]">
              {chartData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-4 rounded-sm" style={{ backgroundColor: item.color }}></div>
                    <span className="font-bold text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-black text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DONAR DETAILS (Image 2) */}
      {activeTab === 'Donar Details' && (
        <div className="animate-fadeIn space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MiniStat title="Total Donations" value="₹ 12,50,000" trend="+10% From last month" />
            <MiniStat title="This Month" value="₹ 32,50,000" trend="+8.2%" />
            <MiniStat title="Total Donors" value="1,250" trend="+10%" />
          </div>

          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-sm overflow-hidden">
            <h3 className="text-xl font-bold text-gray-800 mb-8">Recent Donations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-gray-400 font-bold text-sm uppercase">
                  <tr className="border-b border-gray-50">
                    <th className="pb-6 px-4">Donors</th>
                    <th className="pb-6 px-4">Campaign</th>
                    <th className="pb-6 px-4 text-center">Amount</th>
                    <th className="pb-6 px-4 text-center">Date</th>
                    <th className="pb-6 px-4 text-right">Payment</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 font-bold">
                  {[
                    { name: "Ravi Sharma", camp: "Build a New Learning center" },
                    { name: "ABC", camp: "Build a New Learning center" },
                    { name: "XYX", camp: "Build a New Learning center" },
                    { name: "Ravi Sharma", camp: "Build a New Learning center" },
                  ].map((d, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                      <td className="py-6 px-4">{d.name}</td>
                      <td className="py-6 px-4 text-gray-400 font-medium">{d.camp}</td>
                      <td className="py-6 px-4 text-center">5000 Rs</td>
                      <td className="py-6 px-4 text-center text-gray-400">3 May 2026</td>
                      <td className="py-6 px-4 text-right uppercase text-gray-400 text-sm">UPI</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="text-[#2bb64a] font-bold mt-8 hover:underline">View All Donations</button>
          </div>
        </div>
      )}

      {/* TAB 4: PROFILE (Image 3) */}
      {activeTab === 'Profile' && (
        <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-14 shadow-sm animate-fadeIn">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Organization Details</h2>
            <button className="px-8 py-1.5 border border-gray-300 rounded-lg text-gray-500 font-bold">Edit</button>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
            <div className="w-48 h-48 md:w-60 md:h-60 bg-gray-200 rounded-full shadow-inner"></div>
            <div className="space-y-8 flex-1">
              <ProfileItem label="NGO name" value={ngoDetails.name} />
              <ProfileItem label="Email" value={ngoDetails.email} />
              <ProfileItem label="Phone" value={ngoDetails.phone} />
              <ProfileItem label="Address" value={`${ngoDetails.address}, ${ngoDetails.pincode}`} />
            </div>
          </div>
          <div className="py-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-gray-500 leading-relaxed font-medium">{ngoDetails.about}</p>
          </div>
          <div className="py-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Social links</h2>
            <div className="flex gap-8 text-5xl">
              <FaFacebook className="text-[#1877F2]" /><FaInstagram className="text-[#E4405F]" /><FaXTwitter className="text-black" /><FaYoutube className="text-[#FF0000]" /><FaLinkedin className="text-[#0A66C2]" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Reusable Components
const StatItem = ({ label, value }) => (
  <div><h3 className="text-2xl md:text-[34px] font-[900] text-gray-800">{value}</h3><p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-1 tracking-wider">{label}</p></div>
);
const TableRow = ({ label, value }) => (
  <div className="grid grid-cols-2"><span className="text-gray-500 font-bold text-lg">{label}</span><span className="text-gray-800 font-bold text-lg">{value}</span></div>
);
const UtilIcon = ({ label, percent, Icon, color }) => (
  <div className="flex flex-col items-center">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}><Icon size={32} /></div>
    <span className="text-2xl font-black text-gray-800">{percent}</span>
    <span className="text-gray-400 font-bold text-sm text-center">{label}</span>
  </div>
);
const MiniStat = ({ title, value, trend }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
    <p className="text-gray-500 font-bold text-sm mb-2 uppercase">{title}</p>
    <h3 className="text-3xl font-black text-gray-800 mb-2">{value}</h3>
    <p className="text-[#2bb64a] font-bold text-sm flex items-center gap-1"><TrendingUp size={16}/> {trend}</p>
  </div>
);
const ProfileItem = ({ label, value }) => (
  <div className="flex flex-col"><span className="text-gray-400 font-bold text-lg">{label}</span><span className="text-gray-900 font-black text-xl">{value}</span></div>
);

export default AdminCampaignDetail;