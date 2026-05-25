import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, GraduationCap } from 'lucide-react';

const DonateView = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaigns');
  const [visibleCount, setVisibleCount] = useState(3); // Shuruat mein 3 dikhenge

  // Dummy Data for 10 items
  const allData = Array(10).fill({
    title: "Build a New Learning Center",
    desc: "We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.",
    raised: "7,50,000",
    goal: "15,00,000",
    progress: 50,
    daysLeft: 20,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
  });

  const displayData = allData.slice(0, visibleCount);

  const handleViewDetails = (item) => {
    if (activeTab === 'Campaigns') {
      navigate(`/donor/donate/education/view/campaign-detail`, { state: { item } });
    } else {
      navigate(`/donor/donate/education/view/event-detail`, { state: { item } });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn pb-10">
      
      {/* 🟢 BANNER SECTION */}
      <div className="relative w-full h-48 md:h-[350px] p-4">
        <img 
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&h=500&fit=crop" 
          className="w-full h-full object-cover rounded-2xl" 
          alt="Banner" 
        />
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-6 left-6 bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-all"
        >
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        {/* Verified NGO Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-[#24b037] text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider shadow-lg">
            Verified NGO
          </span>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto px-4 md:px-8">
        
        {/* 🟢 NGO PROFILE HEADER (OVERLAPPING) */}
        <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6 -mt-12 md:-mt-20 mb-10">
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-full p-1.5 shadow-xl border-4 border-white shrink-0 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop" className="w-full h-full object-contain rounded-full" alt="logo" />
          </div>
          <div className="pb-2 text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">Shiksha Foundation</h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-3 text-gray-500 font-semibold text-sm md:text-base">
               <div className="flex items-center gap-1.5"><GraduationCap size={18} className="text-gray-400"/> Education</div>
               <div className="flex items-center gap-1.5"><MapPin size={18} className="text-gray-400"/> Mumbai, Maharashtra</div>
               <div className="flex items-center gap-1"><Star size={18} className="fill-yellow-400 text-yellow-400 border-none" /> 4.5</div>
            </div>
          </div>
        </div>

        {/* 🟢 ABOUT SECTION */}
        <div className="mb-12 text-left">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 text-[15px] md:text-lg leading-relaxed font-medium opacity-90">
            "At we envision a world where education is a right, not a privilege. We are committed to fostering an environment where every child, regardless of their socio-economic background, can achieve their full potential. Through our programs—ranging from early childhood literacy to vocational skills—we aim to turn potential into achievement."
          </p>
        </div>

        {/* 🟢 STATS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { label: "Years in Service", val: "5+" },
            { label: "Children helped", val: "2,500 +" },
            { label: "Raised", val: "75,000" },
            { label: "Projects", val: "12" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] text-center border border-gray-100 transition-hover hover:shadow-md">
               <h3 className="text-2xl md:text-3xl font-[900] text-gray-800 tracking-tight">{stat.val}</h3>
               <p className="text-[11px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 🟢 TABS */}
        <div className="border-b border-gray-100 mb-10 flex gap-12">
          {['Campaigns', 'Events'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => { setActiveTab(tab); setVisibleCount(3); }}
              className={`pb-4 text-xl font-bold transition-all relative ${activeTab === tab ? 'text-gray-800' : 'text-gray-300'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#24b037] rounded-full" />}
            </button>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-left">
          Active {activeTab}(10)
        </h3>

        {/* 🟢 LIST SECTION */}
        <div className="space-y-6">
          {displayData.map((item, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-[32px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Thumbnail */}
                <div className="w-full md:w-[280px] h-[180px] rounded-3xl overflow-hidden shadow-sm shrink-0 border border-gray-50">
                  <img src={item.img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="thumbnail" />
                </div>
                
                {/* Info & Progress */}
                <div className="flex-1 py-1 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{item.title}</h4>
                      {/* <button className="text-[18px] font-bold text-gray-600 hover:text-[#24b037] transition-colors">view Details</button> */}
                      <button 
                        onClick={() => handleViewDetails(item)}
                        className="text-[18px] font-bold text-gray-600 hover:text-[#24b037] transition-colors"
                      >
                        view Details
                      </button>
                    </div>
                    <p className="text-[13px] md:text-sm text-gray-400 font-medium leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-end justify-between mb-3">
                       <div className="text-[15px] font-bold text-gray-800">
                         ₹ {item.raised} / <span className="text-[#24b037]">₹{item.goal}</span>
                       </div>
                       <div className="text-base font-black text-gray-800">{item.progress}%</div>
                    </div>

                    {/* Styled Progress Bar */}
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-2 shadow-inner">
                       <div className="h-full bg-[#24b037] rounded-full relative" style={{width: `${item.progress}%`}}>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#24b037] border-2 border-white rounded-full shadow-md" />
                       </div>
                    </div>
                    <p className="text-[11px] text-gray-400 font-bold text-right tracking-tight">
                      {item.daysLeft} days Left
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 VIEW ALL BUTTON */}
        {visibleCount < 10 && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setVisibleCount(10)} // 3 se badha kar 10 kar dega
              className="bg-[#24b037] hover:bg-[#1e8f2d] text-white px-16 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-100 transition-all active:scale-95 transform hover:-translate-y-1"
            >
              View All {activeTab}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DonateView;