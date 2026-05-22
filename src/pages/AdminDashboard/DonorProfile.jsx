import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import educateImg from '../../assets/landingPageImage/hero.png'; // Example thumbnails

const DonorProfile = () => {
  const navigate = useNavigate();

  const donorInfo = {
    name: "Akay Kohli",
    email: "akayk@mail.com",
    location: "Bangalore, Karnataka, India",
    phone: "+91 1234567890",
    joinDate: "May 2023"
  };

  const recentDonations = [
    { id: 1, campaign: "Build a New Learning Center", org: "Shiksha Foundation", amount: "5,000", date: "10 May 2026", status: "Completed", img: educateImg },
    { id: 2, campaign: "Feed the Hungry", org: "Smile Foundation", amount: "2,500", date: "05 Arp 2026", status: "Completed", img: educateImg },
    { id: 3, campaign: "Plant a Better Tommorrow", org: "Green Earth Trust", amount: "1,000", date: "05 Arp 2026", status: "Completed", img: educateImg },
  ];

  return (
    <div className="animate-fadeIn pb-20 font-sans text-left">
      
      <div className="mb-6">
        <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-700 transition-all active:scale-95"
           >
          <ArrowLeft size={22} /> <span className="text-lg">Back</span>
        </button>
      </div>

      {/* 1. TOP HEADER & AVATAR SECTION */}
      <div className="mb-12">
        <h1 className="text-3xl font-black text-gray-900 mb-10">Donor Profile</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
           {/* Big Profile Avatar */}
           <div className="w-34 h-34 md:w-46 md:h-46 bg-[#d9d9d9] rounded-full shadow-inner flex-shrink-0"></div>
           
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-[900] text-gray-800 tracking-tighter">{donorInfo.name}</h2>
              <p className="text-[#2bb64a] font-bold text-lg md:text-xl mt-2">A proud donor since {donorInfo.joinDate}</p>
           </div>
        </div>
      </div>

      {/* 2. INPUT FIELDS (READ ONLY STYLE) */}
      <div className="max-w-3xl space-y-6 mb-16">
        <ProfileField label="Full Name" value={donorInfo.name} />
        <ProfileField label="Email" value={donorInfo.email} />
        <ProfileField label="Location" value={donorInfo.location} />
        <ProfileField label="Phone No." value={donorInfo.phone} />
      </div>

      {/* 3. STAT CARDS (The 3 small boxes) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
         {/* Card 1 */}
         <div className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#dcf0fa] rounded-full mb-3"></div>
            <p className="text-gray-500 font-bold text-xs uppercase">Total Donated</p>
            <h4 className="text-3xl font-black text-gray-800 my-1">28,540</h4>
            <p className="text-gray-400 text-xs font-bold">Across 6 campaigns</p>
         </div>

         {/* Card 2 */}
         <div className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#fef3c7] rounded-full mb-3"></div>
            <p className="text-gray-500 font-bold text-xs uppercase">total Campaigns Supported</p>
            <h4 className="text-3xl font-black text-gray-800 my-1">10</h4>
            <p className="text-gray-400 text-xs font-bold">Keep Changing Lives!</p>
         </div>

         {/* Card 3 */}
         <div className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-[#d1fae5] rounded-full mb-4"></div>
            <p className="text-gray-800 font-bold text-sm">Successfully Verified</p>
         </div>
      </div>

      {/* 4. RECENT DONATIONS TABLE */}
      <div className="w-full">
         <div className="flex justify-between items-end mb-6 px-2">
            <h3 className="text-2xl font-bold text-gray-800">Your Recent Donations</h3>
            {/* <button className="text-gray-500 font-bold text-sm hover:underline">View All Transcation</button> */}
            <button 
                onClick={() => navigate('/admin/donors/profile/all-transactions')}
                className="text-gray-500 font-bold text-sm hover:underline"
            >
                View All Transaction
            </button>
         </div>

         <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto w-full">
               <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="text-gray-400 font-bold text-sm border-b border-gray-50">
                      <th className="py-6 px-6">Campaign</th>
                      <th className="py-6 px-4 text-center">Amount</th>
                      <th className="py-6 px-4 text-center">Date</th>
                      <th className="py-6 px-4 text-center">Status</th>
                      <th className="py-6 px-6"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 font-bold">
                    {recentDonations.map((item) => (
                      <tr key={item.id} className="border-b border-gray-50 last:border-0">
                        {/* Campaign with image */}
                        <td className="py-6 px-6">
                           <div className="flex items-center gap-4">
                              <img src={item.img} className="w-24 h-16 object-cover rounded-xl border border-gray-100 shadow-sm" alt="" />
                              <div>
                                 <h5 className="text-[15px] font-black text-gray-900">{item.campaign}</h5>
                                 <p className="text-xs text-gray-400">{item.org}</p>
                              </div>
                           </div>
                        </td>
                        <td className="py-6 px-4 text-center text-[15px] font-black">{item.amount}</td>
                        <td className="py-6 px-4 text-center text-gray-400 text-sm font-medium">{item.date}</td>
                        <td className="py-6 px-4 text-center">
                           <span className="bg-[#e6f7ef] text-[#1da036] px-6 py-1.5 rounded-lg text-xs font-black uppercase">
                              {item.status}
                           </span>
                        </td>
                        <td className="py-6 px-6 text-right">
                           {/* <button className="flex items-center gap-1 text-[#2bb64a] font-bold text-[13px] border border-[#2bb64a]/20 px-3 py-1 rounded-lg hover:bg-green-50 transition-all">
                              View Details <ChevronRight size={14} />
                           </button> */}
                           <button 
                                onClick={() => navigate('/admin/donors/profile/transaction-detail')}
                                className="flex items-center gap-1 text-[#2bb64a] font-bold text-[13px] border border-[#2bb64a]/20 px-3 py-1 rounded-lg hover:bg-green-50"
                            >
                                View Details <ChevronRight size={14} />
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

// Reusable Input Field Component
const ProfileField = ({ label, value }) => (
  <div className="flex flex-col gap-2">
    <label className="text-gray-600 font-bold text-lg ml-1">{label}</label>
    <div className="w-full py-3 px-6 bg-white border border-gray-300 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.03)] text-gray-800 font-bold text-lg">
      {value}
    </div>
  </div>
);

export default DonorProfile;