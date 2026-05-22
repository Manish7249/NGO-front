import { Search, Package, Calendar, Users, Star } from 'lucide-react';
import shikshaLogo from '../../assets/landingPageImage/shiksha-foundation.png';
import smileLogo from '../../assets/landingPageImage/smile-foundation.png';
import teachLogo from '../../assets/landingPageImage/eduation-image.png';
import { useNavigate } from 'react-router-dom';

const AllNGOs = () => {
  const navigate = useNavigate();
  const ngoList = [
    { id: 1, name: "Shiksha Foundation", logo: shikshaLogo, category: "Education", date: "2 May 2026", donors: 30, rating: 4.5, reviews: 100, funds: "230000000" },
    { id: 2, name: "Smile Foundation", logo: smileLogo, category: "Education", date: "2 May 2026", donors: 30, rating: 4.5, reviews: 100, funds: "230000000" },
    { id: 3, name: "Teach For India", logo: teachLogo, category: "Education", date: "2 May 2026", donors: 30, rating: 4.5, reviews: 100, funds: "230000000" },
  ];

  return (
    <div className="animate-fadeIn p-4 md:p-0">
      {/* 1. Search Bar */}
      <div className="max-w-3xl mb-10">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search NGO's, Location" 
            className="w-full py-4 pl-12 pr-4 bg-white border border-gray-200 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-green-400/20"
          />
        </div>
      </div>

      {/* 2. Count Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-8 px-2">120+ NGO's Found</h3>

      {/* 3. NGO Cards List */}
      <div className="space-y-6">
        {ngoList.map((ngo) => (
          <div key={ngo.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center relative group hover:shadow-md transition-all">
            
            {/* Logo */}
            <div className="w-40 h-28 md:w-52 md:h-32 shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-2xl">
              <img src={ngo.logo} alt={ngo.name} className="max-w-full max-h-full object-contain" />
            </div>

            {/* Info */}
            <div className="flex-1 w-full text-left">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-2xl font-bold text-gray-900">{ngo.name}</h4>
                <span className="bg-[#e6f7ef] text-[#1da036] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Verified NGO
                </span>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-gray-500 text-sm font-bold mb-3">
                <div className="flex items-center gap-2"><Package size={18} className="text-gray-400" /> {ngo.category}</div>
                <div className="flex items-center gap-2"><Calendar size={18} className="text-gray-400" /> {ngo.date}</div>
                <div className="flex items-center gap-2"><Users size={18} className="text-gray-400" /> {ngo.donors} Donars</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                   <Star size={16} fill="#facc15" className="text-yellow-400" />
                </div>
                <span className="text-sm font-bold text-gray-700">{ngo.rating}</span>
                <span className="text-xs text-gray-400">({ngo.reviews} reviewed)</span>
              </div>

              {/* Funds & Button */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 border-t border-gray-50 pt-6">
                <p className="text-lg font-bold text-gray-600">
                  Total Funds : <span className="text-gray-900">{ngo.funds}/-</span>
                </p>
                <button onClick={() => navigate('/admin/all-ngos/details')} className="bg-[#1da036] hover:bg-green-700 text-white px-8 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95">
                  View Campaigns
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNGOs;