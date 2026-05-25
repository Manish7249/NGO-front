import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2,
  Star,
  Calendar
} from 'lucide-react';

const DonationEventDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 🟢 States
  const [activeTab, setActiveTab] = useState('Event Details');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); 
  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const campaign = location.state?.item;
  if (!campaign) return <div className="p-10 text-center font-bold">Loading...</div>;

  const isCompleted = campaign.status === 'Completed';

  // --- 1. FEEDBACK PAGE UI (FIXED REFRESH ISSUE) ---
  const FeedbackUI = () => {
    const questions = [
      { id: 1, text: "" },
      { id: 2, text: "How satisfied are you with the impact of the event?" },
      { id: 3, text: "How would you rate the planning and organization?" },
      { id: 4, text: "What did you like most about the event?" },
    ];

    const handleStarClick = (e, qId, starValue) => {
      // 🟢 FIXED: preventDefault refresh ko rokta hai
      e.preventDefault();
      setRatings(prev => ({ ...prev, [qId]: starValue }));
    };

    return (
      <div className="animate-fadeIn pb-10">
        <button 
          type="button"
          onClick={(e) => { e.preventDefault(); setIsFeedbackOpen(false); }} 
          className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-gray-800 transition-all"
        >
          <ArrowLeft size={24} /> <span>Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-left">We Value Your Feedback!</h1>

        <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-4 w-full">
            <div className="bg-[#c2f0d1] p-3 rounded-full text-[#24b037]">
              <CheckCircle2 size={35} fill="#24b037" className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-gray-500 font-bold text-sm">Completed</p>
              <h4 className="text-[#24b037] font-bold text-lg leading-tight">{campaign.title}</h4>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:justify-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-10">
            <div className="bg-green-50 p-4 rounded-3xl text-green-600"><Calendar size={30} /></div>
            <div className="text-left">
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Date</p>
              <h4 className="text-gray-800 font-bold text-lg">{campaign.date || "25 May 2026"}</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-[25px] border border-gray-200 shadow-sm text-left">
          <p className="text-gray-700 font-bold text-base border-b border-gray-50 pb-5 mb-8">Please provide your feedback for the event!</p>
          <div className="space-y-10">
            {questions.map((q) => (
              <div key={q.id} className="flex gap-5">
                <span className="font-bold text-gray-800 text-xl">{q.id}.</span>
                <div className="space-y-4 w-full">
                  {q.text && <h5 className="font-bold text-gray-800 text-lg leading-tight">{q.text}</h5>}
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button" 
                          onClick={(e) => {
                            e.preventDefault(); // Extra safety
                            setRatings(prev => ({ ...prev, [q.id]: star }));
                            }}
                            className={`cursor-pointer transition-all ${
                            ratings[q.id] >= star ? "fill-[#24b037] text-[#24b037]" : "text-gray-300"
                            }`} 
                            strokeWidth={1.5}
                        >
                          <Star 
                            size={32} 
                            className={`transition-all ${ratings[q.id] >= star ? "fill-[#24b037] text-[#24b037]" : "text-gray-300"}`} 
                            strokeWidth={1.5} 
                          />
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between w-full max-w-[210px] text-[12px] font-bold text-gray-500 px-1 mt-1 uppercase tracking-tighter">
                      <span>Poor</span><span>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-5 pt-4">
              <span className="font-bold text-gray-800 text-xl">5.</span>
              <div className="space-y-4 w-full">
                <h5 className="font-bold text-gray-800 text-lg leading-tight">Do you have any suggestions for improvement?</h5>
                <textarea className="w-full h-24 p-5 rounded-xl border border-gray-300 outline-none focus:border-green-500 transition-all bg-gray-50/20 text-gray-700" placeholder="Write your suggestions here...."></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button type="button" onClick={(e) => { e.preventDefault(); navigate('/donor/donations'); }} className="bg-[#24b037] hover:bg-[#1e8f2d] text-white font-bold py-3.5 px-20 rounded-2xl text-xl shadow-lg transition-all active:scale-95">Submit</button>
          </div>
        </div>
      </div>
    );
  };

  // --- 2. EVENT DETAILS TAB (FULL INFO) ---
  const EventDetailsUI = () => (
    <div className="animate-fadeIn space-y-12">
      {/* Progress Box */}
      <div className="bg-white p-8 md:p-10 rounded-[30px] border border-gray-100 shadow-sm text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div><h2 className="text-3xl font-black text-gray-800">₹ 7,80,000</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Raised</p></div>
          <div><h2 className="text-3xl font-black text-gray-800">₹ 15,00,000</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Goal</p></div>
          <div><h2 className="text-3xl font-black text-gray-800">{isCompleted ? '100%' : '48%'}</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Progress</p></div>
          <div><h2 className="text-3xl font-black text-gray-800">20</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Days Left</p></div>
        </div>
        <div className="relative w-full bg-gray-100 h-3.5 rounded-full overflow-hidden">
          <div className={`bg-[#24b037] h-full relative transition-all duration-500`} style={{ width: isCompleted ? '100%' : '48%' }}>
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#24b037] border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* About Box */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-900">About This Event</h3>
        <p className="text-gray-500 text-[16px] leading-relaxed max-w-5xl">
          This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.
        </p>
        <button type="button" className="text-[#24b037] font-bold text-sm hover:underline">Read More</button>
      </div>

      {/* Stats Table Box */}
      <div className="border border-gray-200 rounded-[20px] p-8 max-w-2xl space-y-5 bg-[#fafafa]/50 text-left">
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Goal Amount</span><span className="font-bold text-gray-800">₹ 15,00,000</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Total Donors</span><span className="font-bold text-gray-800">324</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Duration</span><span className="font-bold text-gray-800">5 May 2026 - 16 May 2026</span></div>
      </div>

      {/* Completed Updates */}
      {isCompleted && (
        <div className="space-y-8">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white p-5 rounded-[24px] border border-gray-200 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <img src={campaign.img} className="w-full md:w-[320px] h-[200px] object-cover rounded-[20px] shrink-0" alt="upd" />
              <p className="text-gray-600 text-[14px] leading-relaxed text-left font-medium">Shiksha Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.</p>
            </div>
          ))}
          <div className="flex justify-center"><button type="button" onClick={() => setIsFeedbackOpen(true)} className="bg-[#24b037] text-white px-12 py-3 rounded-xl font-bold text-lg shadow-lg active:scale-95">Give Feedback</button></div>
        </div>
      )}
    </div>
  );

  // --- 3. DONATION DETAILS TAB (FULL LIST) ---
  const DonationDetailsUI = () => (
    <div className="animate-fadeIn pb-10">
      <div className="bg-white p-8 md:p-14 rounded-[40px] border border-gray-200 shadow-xl max-w-4xl mx-auto">
        <div className="flex items-center gap-8 mb-12 pb-12 border-b border-gray-100">
          <img src={campaign.img} className="w-28 h-20 object-cover rounded-2xl shadow-sm" alt="camp" />
          <div className="text-left"><h4 className="text-2xl font-black text-gray-900 leading-tight">Donation Details</h4><p className="text-gray-400 font-bold text-xl mt-1">{campaign.title}</p></div>
        </div>
        <div className="space-y-8 text-left">
           {[
             { l: 'Amount', v: '₹ 1000' },
             { l: 'Date & Time', v: '05 May 2026, 02:45 PM' },
             { l: 'NGO', v: 'Shiksha Foundation' },
             { l: 'Transcation ID', v: 'TXN123345685667' },
             { l: 'Payment Method', v: 'UPI' },
             { l: 'Status', v: 'Successful', s: true },
             { l: 'Note', v: 'Thank you for your support' }
           ].map((it, ix) => (
             <div key={ix} className="flex flex-col md:flex-row gap-4 md:items-center">
               <span className="w-48 text-gray-400 font-bold text-base">{it.l}</span>
               <span className={`font-black text-lg ${it.s ? 'text-green-500' : 'text-gray-700'}`}>{it.v}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );

  // --- 4. PROFILE TAB ---
  const ProfileUI = () => (
    <div className="animate-fadeIn space-y-12 pb-10 max-w-4xl mx-auto">
      <div className="text-left space-y-1"><h3 className="text-2xl font-bold text-gray-900">NGO Profile</h3><p className="text-gray-400 text-xs font-medium">Manage your NGO Profile</p></div>
      <div className="border-t border-gray-100 pt-10 text-left">
        <h4 className="text-lg font-bold text-gray-800 mb-8 uppercase tracking-tight">Organization Details</h4>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-48 h-48 rounded-full bg-gray-200 shrink-0 shadow-inner"></div>
          <div className="space-y-6 w-full">
            <div><p className="text-gray-400 text-[13px] font-bold mb-1">NGO name</p><h5 className="text-xl font-bold text-gray-900">Helping Hands NGO</h5></div>
            <div><p className="text-gray-400 text-[13px] font-bold mb-1">Email</p><h5 className="text-xl font-bold text-gray-900">hello@helpinhands.org</h5></div>
            <div><p className="text-gray-400 text-[13px] font-bold mb-1">Phone</p><h5 className="text-xl font-bold text-gray-900">+91 2343446576</h5></div>
            <div><p className="text-gray-400 text-[13px] font-bold mb-1">Address</p><h5 className="text-xl font-bold text-gray-900 leading-relaxed">123-Green Park, Mumbai 401047</h5></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-10 text-left space-y-4">
        <h4 className="text-xl font-bold text-gray-800">About Us</h4>
        <p className="text-gray-500 text-[15px] leading-[1.8] font-medium">The Helping Hands Foundation is a non-profit organization, which works with children who are diagnosed with cancer. We work on two projects – the Accommodation Project and the Survivor Project. The Accommodation Project provides free accommodation to the child and the family during treatment in Dharamshalas surrounding the hospital and the Survivor Project works towards regular testing and rehabilitation of children who beat cancer. The Helping Hands Foundation is a fund raising entity and works in conjunction with Tata Memorial Hospital’s ImPaCCT Foundation.</p>
      </div>
    </div>
  );

  if (isFeedbackOpen) return <div className="p-4 md:p-12 bg-white min-h-screen max-w-[1200px] mx-auto"><FeedbackUI /></div>;

  return (
    <div className="p-4 md:p-12 bg-white min-h-screen font-sans max-w-[1200px] mx-auto overflow-x-hidden">
      <button type="button" onClick={() => navigate(-1)} className="flex items-center gap-3 text-gray-500 font-black mb-12 hover:text-gray-800 transition-all group">
        <ArrowLeft size={28} className="group-hover:-translate-x-2 transition-transform" /> <span className="text-xl font-bold">Back</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-16 mb-16">
        <div className="w-full lg:w-[450px] shrink-0"><img src={campaign.img} className="w-full h-[320px] object-cover rounded-[40px] shadow-lg" alt="camp" /></div>
        <div className="flex-1 space-y-5 py-4 text-left">
          <span className={`font-black text-[12px] uppercase tracking-[0.2em] px-3 py-1 rounded-md ${isCompleted ? 'bg-green-50 text-green-500' : 'bg-[#e7f7ed] text-[#24b037]'}`}>{campaign.status}</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">{campaign.title}</h1>
          <p className="text-gray-400 font-bold text-xl leading-none">By Shiksha Foundation</p>
          <p className="text-gray-500 text-[17px] font-medium leading-relaxed max-w-xl">
            We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.
          </p>
        </div>
      </div>

      <div className="flex gap-10 md:gap-14 border-b border-gray-100 mb-12 text-gray-400 font-bold overflow-x-auto whitespace-nowrap scrollbar-hide text-left">
        {['Event Details', 'Donation Details', 'Profile'].map((tab) => (
          <span key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 cursor-pointer transition-all border-b-[5px] text-[15px] md:text-lg ${activeTab === tab ? 'text-gray-900 border-[#24b037]' : 'border-transparent hover:text-gray-600'}`}>{tab}</span>
        ))}
      </div>

      <div className="min-h-[500px] pb-20">
        {activeTab === 'Event Details' && <EventDetailsUI />}
        {activeTab === 'Donation Details' && <DonationDetailsUI />}
        {activeTab === 'Profile' && <ProfileUI />}
      </div>
    </div>
  );
};

export default DonationEventDetails;