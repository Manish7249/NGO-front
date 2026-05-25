import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Share2 } from 'lucide-react';

const DonateCampaignDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn pb-20">
      {/* 1. Back Button & Header */}
      <div className="pt-4 pl-4 md:pt-6 md:pl-6 flex items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all">
          <ArrowLeft size={20} /> Back
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto p-4 md:p-8">
        {/* 2. Hero Image Section */}
        <div className="relative w-full h-[200px] md:h-[350px] rounded-xl overflow-hidden shadow-lg mb-8">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero" 
          />
          <div className="absolute top-6 right-6">
            <span className="bg-[#24b037] text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-lg uppercase tracking-wider shadow-lg">
              Verified NGO
            </span>
          </div>
        </div>

        {/* 3. Title & Location Section */}
        <div className="text-left space-y-2 mb-10">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">Build a New Learning Center</h1>
          <div className="flex items-center gap-3 text-gray-500 font-bold text-sm md:text-lg">
            <span>Shiksha Foundation</span>
            <span className="h-5 w-[1.5px] bg-gray-300"></span>
            <div className="flex items-center gap-1">
              <MapPin size={18} className="text-gray-400" /> Mumbai, Maharashtra
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed max-w-2xl pt-2">
            We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
          </p>
        </div>

        {/* 4. Progress Stats Card */}
        <div className="bg-white p-8 md:p-10 rounded-[35px] border border-gray-100 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center">
            <div><h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-none tracking-tighter">4,80,000</h2><p className="text-gray-400 text-[11px] font-black uppercase mt-2 tracking-widest">Raised</p></div>
            <div><h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-none tracking-tighter">10,00,000</h2><p className="text-gray-400 text-[11px] font-black uppercase mt-2 tracking-widest">Goal</p></div>
            <div><h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-none tracking-tighter">48%</h2><p className="text-gray-400 text-[11px] font-black uppercase mt-2 tracking-widest">Progress</p></div>
            <div><h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-none tracking-tighter">20</h2><p className="text-gray-400 text-[11px] font-black uppercase mt-2 tracking-widest">Days Left</p></div>
          </div>
          {/* Progress Bar with Pointer */}
          <div className="relative w-full bg-gray-100 h-3 rounded-full mb-2">
            <div className="h-full bg-[#24b037] rounded-full relative" style={{width: '48%'}}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#24b037] border-2 border-white rounded-full shadow-md" />
            </div>
          </div>
        </div>

        {/* 5. About Section */}
        <div className="text-left space-y-4 mb-14">
          <h3 className="text-xl md:text-2xl font-black text-gray-900">About This Campaign</h3>
          <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed font-medium opacity-90">
            This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
          </p>
          <button className="text-[#24b037] font-black text-sm hover:underline">Read More</button>
        </div>

        {/* 6. Action Buttons */}
        <div className="max-w-[600px] mx-auto space-y-8">
          <button onClick={() => navigate('/donor/donate/education/view/campaign-detail/campaign-payment')} className="w-full bg-[#24b037] hover:bg-[#1e8f2d] text-white py-3 rounded-xl font-black text-xl shadow-xl shadow-green-100 transition-all active:scale-95">
            Donate Now
          </button>
          <button className="w-full bg-white border-2 border-gray-200 text-gray-600 py-3 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
            <Share2 size={22} /> Share Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateCampaignDetail;