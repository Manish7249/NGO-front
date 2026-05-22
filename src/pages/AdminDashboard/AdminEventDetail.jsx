import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, TrendingUp } from 'lucide-react';
import educateImg from '../../assets/landingPageImage/hero.png'; 

const AdminEventDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaign Details');

  // Logic: Status check (Active ya Completed)
  const event = state?.eventData || { title: "Digital Learning Initiative", status: "Completed" };

  const stats = [
    { label: "Raised", value: "₹ 7,80,000", isBlue: true },
    { label: "Goal", value: "₹ 15,00,000" },
    { label: "Progress", value: "48%" },
    { label: "Days Left", value: "20" },
  ];

  const ngoDetails = {
    name: "Helping Hands NGO",
    email: "hello@helpinhands.org",
    phone: "+91 2343446576",
    address: "123-Green Park, Mumbai",
    pincode: "401047",
    about: "The Helping Hands Foundation is a non-profit organization, which works with children who are diagnosed with cancer. We work on two projects – the Accommodation Project and the Survivor Project. The Accommodation Project provides free accommodation to the child and the family during treatment in Dharamshalas surrounding the hospital and the Survivor Project works towards regular testing and rehabilitation of children who beat cancer. The Helping Hands Foundation is a fund raising entity and works in conjunction with Tata Memorial Hospital’s ImPACCT Foundation."
  };

  const recentDonations = [
    { name: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "ABC", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "XYX", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
    { name: "Ravi Sharma", campaign: "Build a New Learning center", amount: "5000 Rs", date: "3 May 2026", method: "UPI" },
  ];

  return (
    <div className="animate-fadeIn pb-20 font-sans max-w-6xl mx-auto px-4 md:px-0 text-left">
      
      {/* 1. BACK BUTTON */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-900 mb-8 group">
        <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" /> Back
      </button>

      {/* 2. HEADER SECTION */}
      <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
        <div className="w-full md:w-80 h-56 shrink-0 rounded-[1.5rem] overflow-hidden shadow-md">
          <img src={event.image || educateImg} alt="Event" className="w-full h-full object-cover" />
        </div>
        <div className="text-left py-2">
          <span className={`${event.status === 'Completed' ? 'text-[#5da2d1]' : 'text-[#2bb64a]'} font-bold text-sm uppercase tracking-wider mb-2 block`}>
            {event.status}
          </span>
          <h1 className="text-3xl font-black text-gray-900 mb-2">{event.title}</h1>
          <p className="text-gray-500 font-bold text-lg mb-4">By Shiksha Foundation</p>
          <p className="text-gray-400 text-[15px] font-medium leading-relaxed italic max-w-2xl">
            We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
          </p>
        </div>
      </div>

      {/* 3. TABS NAVIGATION */}
      <div className="flex gap-4 md:gap-14 border-b border-gray-100 mb-10 overflow-x-auto whitespace-nowrap">
        {['Campaign Details', 'Donar Details', 'Profile'].map((tab) => (
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

      {/* --- CONDITIONAL TAB CONTENT --- */}

      {/* TAB 1: CAMPAIGN DETAILS (Status Dependent) */}
      {activeTab === 'Campaign Details' && (
        <div className="animate-fadeIn">
          {event.status !== 'Completed' ? (
            <div className="space-y-12">
              <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-10">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <h3 className={`text-2xl md:text-[32px] font-[900] text-gray-800 inline-block pb-1 leading-none ${stat.isBlue ? 'text-[#0095ff] border-b-4 border-[#0095ff]' : ''}`}>
                        {stat.value}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm font-bold uppercase mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="relative w-full h-3.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#2bb64a] rounded-full flex items-center justify-end pr-1 shadow-md" style={{ width: '48%' }}>
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-left space-y-4">
                <h2 className="text-2xl font-black text-gray-800">About This Event</h2>
                <p className="text-gray-500 text-[17px] leading-relaxed font-medium">This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.<br /> <span className="text-[#2bb64a] font-bold cursor-pointer">Read More</span></p>
              </div>
              <div className="bg-white border border-gray-200 rounded-[1.5rem] p-8 space-y-6 max-w-2xl shadow-sm">
                 <SummaryRow label="Goal Amount" value="₹ 15,00,000" />
                 <SummaryRow label="Total Donars" value="324" />
                 <SummaryRow label="Duration" value="5 May 2026 - 16 May 2026" />
              </div>
            </div>
          ) : (
            <div className="space-y-12">
               <h3 className="text-xl font-bold text-gray-800 ml-2">About Campaign Progress</h3>
               <div className="bg-white border border-gray-200 rounded-[1.5rem] p-8 md:p-12 text-center shadow-sm">
                  <h2 className="text-[#2bb64a] text-5xl font-black mb-2">100%</h2>
                  <p className="text-gray-500 font-bold mb-8 text-lg">Of Goal Achieved</p>
                  <div className="w-full h-3 bg-[#2bb64a] rounded-full mb-10"></div>
                  <div className="flex justify-center items-center gap-12 md:gap-24 relative">
                     <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-[900] text-gray-800">₹ 10,00,000</h4>
                        <p className="text-gray-400 font-bold text-xs uppercase mt-1">Raised</p>
                     </div>
                     <div className="w-[1.5px] h-12 bg-gray-200"></div>
                     <div className="text-center">
                        <h4 className="text-2xl md:text-3xl font-[900] text-gray-800">₹ 10,00,000</h4>
                        <p className="text-gray-400 font-bold text-xs uppercase mt-1">Goal</p>
                     </div>
                  </div>
               </div>
               <div className="text-left space-y-4">
                  <h2 className="text-2xl font-black text-gray-800">About This Event</h2>
                  <p className="text-gray-500 text-[17px] leading-relaxed font-medium">This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.<br /> <span className="text-[#2bb64a] font-bold cursor-pointer">Read More</span></p>
               </div>
               <div className="bg-white border border-gray-200 rounded-[1.5rem] p-8 space-y-6 max-w-2xl shadow-sm">
                  <SummaryRow label="Goal Amount" value="₹ 10,00,000" />
                  <SummaryRow label="Total Donars" value="324" />
                  <SummaryRow label="Beneficiaries" value="1,250+ children" />
                  <SummaryRow label="Duration" value="5 May 2026 - 16 May 2026" />
               </div>
               <div className="space-y-6 pt-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-[1.5rem] p-6 flex flex-col md:flex-row gap-8 items-center shadow-sm">
                    <div className="w-full md:w-[450px] h-[280px] rounded-2xl overflow-hidden border-[6px] border-[#0ea5e9]/10 flex-shrink-0">
                       <img src={educateImg} className="w-full h-full object-cover" alt="" />
                    </div>
                    <p className="text-gray-500 text-[15px] leading-relaxed font-medium flex-1">Shiksha Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- TAB 2: DONAR DETAILS (Image 1 logic) --- */}
      {activeTab === 'Donar Details' && (
        <div className="animate-fadeIn space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBox title="Total Donations" value="₹ 12,50,000" trend="+10% From last month" />
            <StatBox title="This Month" value="₹ 32,50,000" trend="+8.2%" />
            <StatBox title="Total Donors" value="1,250" trend="+10%" />
          </div>

          <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 md:p-10 shadow-sm overflow-hidden">
            <h3 className="text-xl font-bold text-gray-800 mb-8 px-2 tracking-tight">Recent Donations</h3>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="text-gray-400 font-bold text-sm uppercase tracking-wider border-b border-gray-100">
                    <th className="pb-6 px-4">Donors</th>
                    <th className="pb-6 px-4">Campaign</th>
                    <th className="pb-6 px-4 text-center">Amount</th>
                    <th className="pb-6 px-4 text-center">Date</th>
                    <th className="pb-6 px-4 text-right">Payment</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 font-bold">
                  {recentDonations.map((d, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-all">
                      <td className="py-7 px-4">{d.name}</td>
                      <td className="py-7 px-4 font-medium text-gray-400">{d.campaign}</td>
                      <td className="py-7 px-4 text-center text-gray-900 font-black">{d.amount}</td>
                      <td className="py-7 px-4 text-center font-medium text-gray-400">{d.date}</td>
                      <td className="py-7 px-4 text-right uppercase text-gray-400 text-sm">{d.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex justify-start px-2">
               <button className="text-[#2bb64a] font-bold text-lg hover:underline transition-all">View All Donations</button>
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 3: PROFILE (Image 2 logic) --- */}
      {activeTab === 'Profile' && (
        <div className="bg-white border border-gray-50 rounded-[2.5rem] p-8 md:p-14 shadow-sm animate-fadeIn">
          <div className="mb-12">
             <h1 className="text-3xl font-[900] text-gray-900">NGO Profile</h1>
             <p className="text-gray-500 font-medium mt-1">Manage your NGO Profile</p>
          </div>
          <div className="pt-10 border-t border-gray-100">
             <h2 className="text-2xl font-bold text-gray-800 mb-12">Organization Details</h2>
             <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
               <div className="w-48 h-48 md:w-60 md:h-60 bg-[#d9d9d9] rounded-full flex-shrink-0 shadow-inner"></div>
               <div className="space-y-8 flex-1">
                 <ProfileItem label="NGO name" value={ngoDetails.name} />
                 <ProfileItem label="Email" value={ngoDetails.email} />
                 <ProfileItem label="Phone" value={ngoDetails.phone} />
                 <ProfileItem label="Address" value={`${ngoDetails.address}, Mumbai ${ngoDetails.pincode}`} />
               </div>
             </div>
          </div>
          <div className="py-10 border-t border-gray-100">
             <h2 className="text-2xl font-bold text-gray-800 mb-6">About Us</h2>
             <p className="text-gray-500 leading-relaxed font-medium text-justify">{ngoDetails.about}</p>
          </div>
        </div>
      )}

    </div>
  );
};

// Reusable Sub-components
const StatBox = ({ title, value, trend }) => (
    <div className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <p className="text-gray-500 font-bold text-sm mb-3 uppercase tracking-wider">{title}</p>
      <h3 className="text-[32px] font-black text-gray-800 mb-2">{value}</h3>
      <p className="text-[#2bb64a] font-bold text-sm flex items-center gap-1">{trend}</p>
    </div>
);

const ProfileItem = ({ label, value }) => (
    <div className="flex flex-col gap-1">
      <span className="text-gray-400 font-bold text-lg">{label}</span>
      <span className="text-gray-900 font-black text-[22px] tracking-tight">{value}</span>
    </div>
);

const SummaryRow = ({ label, value }) => (
  <div className="grid grid-cols-2 text-left">
    <span className="text-gray-400 font-bold text-lg">{label}</span>
    <span className="text-gray-800 font-bold text-lg">{value}</span>
  </div>
);

export default AdminEventDetail;