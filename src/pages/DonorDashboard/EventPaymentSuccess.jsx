import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Download, Send, CheckCircle2 } from 'lucide-react';
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js';
import EventDonationInvoice from './EventDonationInvoice'; 

const EventPaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const invoiceRef = useRef();

  // Values aur Fields jo aapne bataye
  const data = {
    amount: location.state?.amount || 1000,
    event: location.state?.event || "Sponsor a Child’s Education",
    ngo: location.state?.ngo || "Shiksha Foundation",
    txnId: location.state?.txnId || "TXN123345685667",
    dateTime: location.state?.dateTime || "05 May 2026, 02:45 PM"
  };

  const handleDownloadPDF = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 0,
      filename: `Donation_Receipt_${data.txnId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10 font-sans">
      
      {/* 🟢 Main Success Card (Modern Design) */}
      <div className="bg-white w-full max-w-[850px] rounded-[2rem] shadow-2xl overflow-hidden p-8 md:p-16 text-center flex flex-col items-center relative animate-in fade-in zoom-in duration-500">
        
        {/* Confetti Decoration (Simulated) */}
        <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
           {[...Array(20)].map((_, i) => (
             <div key={i} className="absolute w-2 h-2 rounded-full animate-ping" 
                  style={{ 
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`,
                    backgroundColor: ['#24b037', '#facc15', '#3b82f6', '#f43f5e'][Math.floor(Math.random()*4)],
                    animationDelay: `${Math.random() * 2}s`
                  }} 
             />
           ))}
        </div>

        {/* Big Success Icon */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#24b037] text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100 relative z-10 animate-bounce">
          <Check size={64} strokeWidth={4} />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#24b037] mb-2 tracking-tight">Thank You !</h1>
        <p className="text-gray-600 text-lg md:text-xl font-bold mb-1">Your donation was Successful</p>
        <p className="text-gray-500 font-medium mb-12">You’ve made a real difference.</p>

        {/* Transaction Summary Card (Fields and Values) */}
        <div className="w-full max-w-[650px] bg-white border border-gray-100 rounded-[1.5rem] p-6 md:p-10 text-left space-y-6 mb-12 shadow-sm">
          <div className="flex justify-between items-center text-sm md:text-lg">
            <span className="text-gray-400 font-bold">Amount</span>
            <span className="text-gray-800 font-black">₹ {data.amount}</span>
          </div>
          <div className="flex justify-between items-start text-sm md:text-lg">
            <span className="text-gray-400 font-bold shrink-0">Event</span>
            <span className="text-gray-800 font-black text-right">{data.event}</span>
          </div>
          <div className="flex justify-between items-center text-sm md:text-lg">
            <span className="text-gray-400 font-bold">NGO</span>
            <span className="text-gray-800 font-black">{data.ngo}</span>
          </div>
          <div className="flex justify-between items-center text-sm md:text-lg">
            <span className="text-gray-400 font-bold">Transaction ID</span>
            <span className="text-gray-800 font-black">{data.txnId}</span>
          </div>
          <div className="flex justify-between items-center text-sm md:text-lg">
            <span className="text-gray-400 font-bold">Date & Time</span>
            <span className="text-gray-800 font-black">{data.dateTime}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-[650px]">
          <button 
            onClick={handleDownloadPDF}
            className="flex-1 border-2 border-[#24b037] text-[#24b037] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-green-50 transition-all active:scale-95"
          >
            <Download size={20} /> Download Receipt (PDF)
          </button>
          <button className="flex-1 bg-[#24b037] text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#1e8f2d] shadow-lg shadow-green-100 transition-all active:scale-95">
            <Send size={20} className="rotate-[-20deg]" /> Share On Whatsapp
          </button>
        </div>

        {/* Success Footer */}
        <div className="mt-10 flex items-center gap-2 text-gray-500 font-bold text-xs">
          <CheckCircle2 size={16} className="text-[#24b037] fill-green-100" />
          Receipt sent to your Whatsapp
        </div>

        <button 
          onClick={() => navigate('/donor/dashboard')} 
          className="mt-6 text-gray-400 font-bold hover:text-gray-600 underline text-sm transition-colors"
        >
          Go to Dashboard
        </button>

      </div>

      {/* 🟢 Hidden Invoice Template for PDF Generation */}
      <div 
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          top: 0 
        }}
      >
        <div ref={invoiceRef}>
           <EventDonationInvoice data={data} />
        </div>
      </div>

    </div>
  );
};

export default EventPaymentSuccess;