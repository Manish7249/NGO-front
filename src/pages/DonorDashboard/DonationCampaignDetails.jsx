import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronRight, 
  BookOpen, 
  Briefcase, 
  User, 
  ShieldCheck, 
  Bell, 
  CheckCircle2,
  Star,
  Calendar
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DonationCampaignDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Campaign Details');
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); 

  const campaign = location.state?.item;
  if (!campaign) return <div className="p-10 text-center font-bold">Loading...</div>;

  const isCompleted = campaign.status === 'Completed';

  // --- SUB-COMPONENT: FEEDBACK PAGE UI (BILKUL PHOTO JAISA) ---
  const FeedbackUI = () => {
    // Logic for interactive stars
    const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

    const handleStarClick = (questionId, value) => {
      setRatings(prev => ({ ...prev, [questionId]: value }));
    };

    const questions = [
      { id: 1, text: "" },
      { id: 2, text: "How satisfied are you with the impact of the event?" },
      { id: 3, text: "How would you rate the planning and organization?" },
      { id: 4, text: "What did you like most about the event?" },
    ];

    return (
      <div className="animate-fadeIn pb-10">
        <button 
          onClick={() => setIsFeedbackOpen(false)} 
          className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-gray-800 transition-all"
        >
          <ArrowLeft size={24} /> <span>Back</span>
        </button>

        {/* Title exactly as in image */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">We Value Your Feedback!</h1>

        {/* Status & Date Header - Styled exactly like the image */}
        <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-4 w-full">
            <div className="bg-[#cbf4c9] p-4 rounded-full text-green-700 w-16 h-16 flex items-center justify-center">
              <CheckCircle2 size={35} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-bold text-sm">Completed</p>
              <h4 className="text-[#24b037] font-bold text-lg leading-tight">{campaign.title}</h4>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:justify-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-10">
            <div className="bg-[#cbf4c9] p-4 rounded-2xl text-green-700">
              <Calendar size={30} />
            </div>
            <div className="text-left">
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Date</p>
              <h4 className="text-gray-800 font-bold text-lg">{campaign.date || "25 May 2026"}</h4>
            </div>
          </div>
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white p-6 md:p-10 rounded-[25px] border border-gray-200 shadow-sm text-left">
          <p className="text-gray-700 font-bold text-base border-b border-gray-100 pb-5 mb-8">
            Please provide your feedback for the event!
          </p>

          <div className="space-y-10">
            {questions.map((q) => (
              <div key={q.id} className="flex gap-5">
                <span className="font-bold text-gray-800 text-xl">{q.id}.</span>
                <div className="space-y-4 w-full">
                  {q.text && <h5 className="font-bold text-gray-800 text-lg leading-tight">{q.text}</h5>}
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={32} 
                          onClick={() => handleStarClick(q.id, star)}
                          className={`cursor-pointer transition-all ${ratings[q.id] >= star ? 'text-green-500 fill-green-500' : 'text-green-500'}`} 
                          strokeWidth={1.2} 
                        />
                      ))}
                    </div>
                    <div className="flex justify-between w-full max-w-[210px] text-[12px] font-bold text-gray-500 px-1 mt-1 uppercase tracking-tighter">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Question 5: Suggestions */}
            <div className="flex gap-5 pt-4">
              <span className="font-bold text-gray-800 text-xl">5.</span>
              <div className="space-y-4 w-full">
                <h5 className="font-bold text-gray-800 text-lg leading-tight">Do you have any suggestions for improvement?</h5>
                <textarea 
                  className="w-full h-24 p-5 rounded-xl border border-gray-300 outline-none focus:border-green-500 transition-all bg-gray-50/20 text-gray-700"
                  placeholder="Write your suggestions here...."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            {/* Submit click will go back to details page */}
            <button 
              onClick={() => setIsFeedbackOpen(false)}
              className="bg-[#24b037] hover:bg-[#1e8f2d] text-white font-bold py-3.5 px-20 rounded-2xl text-xl shadow-lg transition-all active:scale-95"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Fund Utilization Data (Pie Chart)
  const pieData = [
    { name: 'Education Materials', value: 65, color: '#FFB800' }, 
    { name: 'School Fees', value: 20, color: '#32D74B' },         
    { name: 'Uniforms', value: 10, color: '#00A3FF' },           
    { name: 'Admin & Ops', value: 5, color: '#FF5C00' },          
  ];

  // --- TAB 1: Fund Utilization UI ---
  const FundUtilizationUI = () => (
    <div className="animate-fadeIn space-y-12">
      <h3 className="text-xl font-bold text-gray-900 ml-1">Where Your Money goes</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Education Materials', val: '65%', icon: <BookOpen />, bg: 'bg-green-50' },
          { label: 'School Fees', val: '20%', icon: <Briefcase />, bg: 'bg-green-50' },
          { label: 'Uniforms', val: '10%', icon: <User />, bg: 'bg-green-50' },
          { label: 'Admin & Ops', val: '5%', icon: <ShieldCheck />, bg: 'bg-green-50' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className={`${item.bg} p-4 rounded-2xl mb-4 shadow-sm border border-gray-100 text-gray-600 transition-transform group-hover:scale-110`}>
              {item.icon}
            </div>
            <h4 className="text-2xl font-black text-gray-800 leading-none">{item.val}</h4>
            <p className="text-[12px] text-gray-400 font-bold mt-2 uppercase leading-tight tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24">
        <div className="relative w-[300px] h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} innerRadius={85} outerRadius={125} paddingAngle={5} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-widest">Total Utilization</p>
            <h4 className="text-2xl font-black text-gray-800">₹ 10,00,000</h4>
          </div>
        </div>
        <div className="space-y-6 w-full max-w-[320px]">
          {pieData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-3.5 rounded-sm shadow-sm" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-bold text-gray-600">{item.name}</span>
              </div>
              <span className="font-black text-gray-800 text-base">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- TAB 2: Alerts & Updates UI ---
  const AlertsUpdatesUI = () => (
    <div className="animate-fadeIn space-y-8">
      <h3 className="text-xl font-bold text-gray-900 ml-1">Updates</h3>
      <div className="bg-white p-6 rounded-[28px] border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8">
        <img src={campaign.img} className="w-full md:w-48 h-32 object-cover rounded-2xl" alt="ngo" />
        <div className="flex-1 space-y-2">
          <h4 className="text-2xl font-bold text-gray-800">Shiksha Foundation</h4>
          <p className="text-gray-500 font-bold text-sm">Build a New Learning Center</p>
          <div className="flex items-center gap-6 pt-1">
            <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wide">Total Donated - <span className="text-gray-900">₹ 1,250</span></p>
            <p className="text-[12px] text-gray-400 font-bold italic">3 Donations</p>
          </div>
          <div className="flex gap-4 mt-3 bg-red-50/30 p-2 rounded-lg">
            <span className="text-red-500 font-black text-sm">Alert:</span>
            <p className="text-red-400 font-bold text-sm leading-tight">Build a New Learning Center Campaign will be starting from 15th May Onwards</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm flex items-center gap-6">
        <div className="bg-green-50 p-4 rounded-full text-green-500">
          <Bell size={32} fill="currentColor"/>
        </div>
        <div className="space-y-1">
          <h4 className="text-2xl font-bold text-gray-800 tracking-tight leading-none">New Campaign Launching Soon!</h4>
          <p className="text-sm text-gray-500 font-medium">Smile Foundation is launching a new campaigns "Digital Classroom for Rural Kids" on 17th May 2026</p>
        </div>
      </div>
      <div className="bg-white p-10 rounded-[28px] border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="w-40 md:w-56 flex flex-col items-center md:border-r md:border-gray-100 md:pr-12">
           <div className="font-black text-4xl text-orange-600 tracking-tighter leading-none italic">shiksha</div>
           <div className="text-[12px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1 ml-1">Foundation</div>
        </div>
        <div className="flex-1 space-y-5">
          <div>
            <h4 className="text-3xl font-bold text-green-600 mb-1">You're Invited!</h4>
            <p className="text-gray-500 font-medium">Shiksha Foundation has invited you to their upcoming</p>
            <p className="font-black text-gray-900 text-lg">Book Distribution Event</p>
          </div>
          {/* 🟢 NAVIGATION ADDED HERE */}
          <button 
            onClick={() => navigate('/donor/alerts/invitation')}
            className="bg-[#1db13a] hover:bg-[#168a2d] text-white px-10 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95"
          >
            View Invitation
          </button>
        </div>
      </div>
    </div>
  );

  // --- TAB 3: Donation Details UI ---
  const DonationDetailsUI = () => (
    <div className="animate-fadeIn pb-10">
      <div className="bg-white p-8 md:p-14 rounded-[40px] border border-gray-200 shadow-xl max-w-4xl mx-auto">
        <div className="flex items-center gap-8 mb-12 pb-12 border-b border-gray-100">
          <img src={campaign.img} className="w-28 h-20 object-cover rounded-2xl shadow-sm" alt="campaign" />
          <div>
            <h4 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">Build a New Learning Center</h4>
            <p className="text-gray-400 font-bold text-xl mt-1">Shiksha Foundation</p>
          </div>
        </div>
        <div className="space-y-8 px-2">
          {[
            { label: 'Amount', val: '₹ 1000' },
            { label: 'Date & Time', val: '05 May 2026, 02:45 PM' },
            { label: 'NGO', val: 'Shiksha Foundation' },
            { label: 'Transcation ID', val: 'TXN123345685667' },
            { label: 'Payment Method', val: 'UPI' },
            { label: 'Status', val: 'Successful', success: true },
            { label: 'Note', val: 'Thank you for your support' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-center">
              <span className="w-48 text-gray-400 font-bold text-base">{item.label}</span>
              <span className={`font-black text-lg ${item.success ? 'text-green-500' : 'text-gray-700'}`}>
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ActiveCampaignUI = () => (
    <div className="animate-fadeIn space-y-10">
      <div className="bg-white p-8 md:p-10 rounded-[30px] border border-gray-100 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-8 mb-8">
          <div><h2 className="text-2xl md:text-3xl font-black text-gray-800">₹ 7,80,000</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Raised</p></div>
          <div><h2 className="text-2xl md:text-3xl font-black text-gray-800">₹ 15,00,000</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Goal</p></div>
          <div><h2 className="text-2xl md:text-3xl font-black text-gray-800">48%</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Progress</p></div>
          <div><h2 className="text-2xl md:text-3xl font-black text-gray-800">20</h2><p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Days Left</p></div>
        </div>
        <div className="relative w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div className="bg-[#24b037] h-full w-[48%] relative">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#24b037] border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">About This Campaign</h3>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-5xl">This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.</p>
        <button className="text-[#24b037] font-bold text-sm">Read More</button>
      </div>
      <div className="border border-gray-200 rounded-[20px] p-8 max-w-2xl space-y-5 bg-[#fafafa]/50">
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Goal Amount</span><span className="font-bold text-gray-800">₹ 15,00,000</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Total Donars</span><span className="font-bold text-gray-800">324</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Duration</span><span className="font-bold text-gray-800">5 may 2026 - 16 may 2026</span></div>
      </div>
    </div>
  );

  const CompletedCampaignUI = () => (
    <div className="animate-fadeIn space-y-10">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">About Campaign Progress</h3>
        <div className="bg-white p-10 rounded-[30px] border border-gray-100 shadow-sm text-center">
            <h2 className="text-4xl font-black text-[#24b037] mb-1">100%</h2>
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">Of Goal Achieved</p>
            <div className="w-full bg-[#24b037] h-3 rounded-full mb-10" />
            <div className="flex justify-center divide-x divide-gray-100">
                <div className="px-12"><h3 className="text-2xl font-black text-gray-800">₹ 10,00,000</h3><p className="text-gray-400 text-[10px] font-bold uppercase">Raised</p></div>
                <div className="px-12"><h3 className="text-2xl font-black text-gray-800">₹ 10,00,000</h3><p className="text-gray-400 text-[10px] font-bold uppercase">Goal</p></div>
            </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">About This Campaign</h3>
        <p className="text-gray-500 text-[15px] leading-relaxed max-w-5xl">This campaign aims to build a new Education & Learning Center that will provide quality education, digital learning, coding training, and skill development opportunities for students from underserved communities. Our mission is to create a safe and modern learning space that empowers young minds and helps them build a brighter future through education and technology.</p>
        <button className="text-[#24b037] font-bold text-sm">Read More</button>
      </div>
      <div className="border border-gray-200 rounded-[20px] p-8 max-w-2xl space-y-5 bg-white">
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Goal Amount</span><span className="font-bold">₹ 10,00,000</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Total Donars</span><span className="font-bold">324</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Beneficieries</span><span className="font-bold">1,250+ children</span></div>
        <div className="flex justify-between items-center"><span className="text-gray-400 font-bold">Duration</span><span className="font-bold">5 may 2026 - 16 may 2026</span></div>
      </div>
      <div className="space-y-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white p-5 rounded-[24px] border border-gray-200 flex flex-col md:flex-row gap-8 items-center">
            <img src={campaign.img} className="w-full md:w-[350px] h-[220px] object-cover rounded-[20px] shrink-0" alt="update" />
            <p className="text-gray-600 text-[14px] leading-relaxed">Shiksha Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <button 
          onClick={() => setIsFeedbackOpen(true)} 
          className="bg-[#24b037] hover:bg-[#1e8f2d] text-white px-12 py-3 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
        >
          Give Feedback
        </button>
      </div>
    </div>
  );

  if (isFeedbackOpen) {
    return <div className="p-4 md:p-12 bg-white min-h-screen font-sans max-w-[1200px] mx-auto overflow-x-hidden"><FeedbackUI /></div>;
  }

  return (
    <div className="p-4 md:p-12 bg-white min-h-screen font-sans max-w-[1200px] mx-auto overflow-x-hidden">
      <button onClick={() => navigate(-1)} className="flex items-center gap-3 text-gray-500 font-black mb-12 hover:text-gray-800 transition-all group">
        <ArrowLeft size={28} className="group-hover:-translate-x-2 transition-transform" /> <span className="text-xl">Back</span>
      </button>
      <div className="flex flex-col lg:flex-row gap-16 mb-16">
        <div className="w-full lg:w-[450px] shrink-0"><img src={campaign.img} className="w-full h-[320px] object-cover rounded-[40px] shadow-lg" alt="camp" /></div>
        <div className="flex-1 space-y-5 py-4 text-left">
          <span className={`font-black text-[12px] uppercase tracking-[0.2em] px-3 py-1 rounded-md ${isCompleted ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-[#24b037]'}`}>{campaign.status}</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight">{campaign.title}</h1>
          <p className="text-gray-400 font-bold text-xl leading-none">By Shiksha Foundation</p>
          <p className="text-gray-500 text-[17px] font-medium">We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.</p>
        </div>
      </div>
      <div className="flex gap-10 md:gap-14 border-b border-gray-100 mb-12 text-gray-400 font-bold overflow-x-auto whitespace-nowrap scrollbar-hide">
        {['Campaign Details', 'Fund Utilization', 'Alerts & Updates', 'Donation Details'].map((tab) => (
          <span key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 cursor-pointer transition-all border-b-[5px] text-[15px] md:text-lg ${activeTab === tab ? 'text-gray-900 border-[#24b037]' : 'border-transparent hover:text-gray-600'}`}>{tab}</span>
        ))}
      </div>
      <div className="min-h-[500px] pb-20">
        {activeTab === 'Campaign Details' && (isCompleted ? <CompletedCampaignUI /> : <ActiveCampaignUI />)}
        {activeTab === 'Fund Utilization' && <FundUtilizationUI />}
        {activeTab === 'Alerts & Updates' && <AlertsUpdatesUI />}
        {activeTab === 'Donation Details' && <DonationDetailsUI />}
      </div>
    </div>
  );
};

export default DonationCampaignDetails;