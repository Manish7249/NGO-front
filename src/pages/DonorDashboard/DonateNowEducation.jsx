import React from 'react';
import { Search, Mic, Star, GraduationCap, Users, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DonateNowEducation = () => {
  const navigate = useNavigate();
  const ngoList = [
    {
      id: 1,
      name: "Shiksha Foundation",
      // Working Image Link
      logo: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop", 
      category: "Education",
      date: "2 May 2026",
      donors: "30 Donors",
      rating: "4.5",
      reviews: "100 reviewed"
    },
    {
      id: 2,
      name: "Smile Foundation",
      logo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      category: "Education",
      date: "2 May 2026",
      donors: "30 Donors",
      rating: "4.5",
      reviews: "100 reviewed"
    },
    {
      id: 3,
      name: "Teach For India",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      category: "Education",
      date: "2 May 2026",
      donors: "30 Donors",
      rating: "4.5",
      reviews: "100 reviewed"
    }
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-white min-h-screen font-sans animate-fadeIn max-w-[1200px] mx-auto">
      
      {/* 🟢 Search Bar Section - Centered and Styled */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative flex items-center group">
          <Search className="absolute left-5 text-gray-400 group-focus-within:text-[#24b037] transition-colors" size={22} />
          <input 
            type="text" 
            placeholder="Search NGO’s, Location" 
            className="w-full bg-[#f9fafb] border border-gray-200 rounded-2xl pl-14 pr-14 py-4 shadow-sm outline-none focus:ring-2 focus:ring-green-100 focus:bg-white transition-all text-gray-700 font-medium"
          />
          <div className="absolute right-5 pl-4 border-l border-gray-200 cursor-pointer text-gray-400 hover:text-[#24b037] transition-all">
             <Mic size={22} />
          </div>
        </div>
      </div>

      {/* 🟢 Header Info - Alignment Fixed */}
      <div className="mb-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">120+ NGO’s Found</h2>
        <div className="h-[1px] w-full bg-gray-100 mt-5"></div>
      </div>

      {/* 🟢 NGO List - Precise Alignment */}
      <div className="space-y-12">
        {ngoList.map((ngo) => (
          <div key={ngo.id} className="group flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start border-b border-gray-50 pb-12 last:border-0">
            
            {/* Logo/Image Container - Sized fixed */}
            <div className="w-full md:w-[260px] h-[180px] rounded-[32px] overflow-hidden bg-[#f3f4f6] border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
               <img 
                 src={ngo.logo} 
                 alt={ngo.name} 
                 className="w-full h-full object-cover" 
                 // Image load na ho toh fallback placeholder
                 onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=NGO+Logo" }}
               />
            </div>

            {/* Content Section - Text Alignment and Spacing Fixed */}
            <div className="flex-1 text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{ngo.name}</h3>
                <span className="bg-[#e7f7ed] text-[#2bb64a] text-[10px] md:text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.05em] self-center md:self-auto border border-green-100">
                  Verified NGO
                </span>
              </div>

              {/* Meta Stats Row - Standardized icons and spacing */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-gray-400 font-bold text-[13px] mb-5">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-gray-400" /> 
                  <span>{ngo.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-gray-400" />
                  <span>{ngo.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-400" />
                  <span>{ngo.donors}</span>
                </div>
              </div>

              {/* Rating Section - Aligned with text */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                <div className="flex items-center">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={18} className={`${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                   ))}
                </div>
                <span className="text-gray-900 font-black text-base ml-1">{ngo.rating}</span>
                <span className="text-gray-400 text-sm font-medium tracking-tight">({ngo.reviews})</span>
              </div>

              {/* Action Button - Premium styling */}
              <button onClick={() => navigate('/donor/donate/education/view')} className="bg-[#24b037] hover:bg-[#1e8f2d] text-white px-10 py-3.5 rounded-[18px] font-bold text-base shadow-lg shadow-green-100 transition-all active:scale-95 transform hover:-translate-y-0.5">
                View Campaigns
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonateNowEducation;