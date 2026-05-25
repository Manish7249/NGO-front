import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, ShieldCheck, CreditCard, Landmark, Wallet, Smartphone } from 'lucide-react';

const EventPayment = () => {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const amounts = [500, 1000, 2000, 5000];

  return (
    <div className="bg-white min-h-screen font-sans animate-fadeIn pb-10">
      {/* 🟢 Header */}
      <div className="p-4 md:p-6 flex items-center justify-between border-b border-gray-100 sticky top-0 bg-white z-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-all">
          <ArrowLeft size={20} /> Back
        </button>
        <div className="flex items-center gap-2 text-[#24b037] font-bold">
          <Lock size={18} /> Secure Donation
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-4 md:p-8">
        {/* 🟢 Top Campaign Summary Card */}
        <div className="bg-white p-4 md:p-6 rounded-[25px] border border-gray-100 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] flex flex-col md:flex-row gap-6 mb-10 items-center">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300" className="w-full md:w-40 h-28 object-cover rounded-2xl" alt="camp" />
          <div className="flex-1 w-full space-y-2">
            <h3 className="text-xl font-bold text-gray-800">Build a New Learning Center</h3>
            <p className="text-xs text-gray-400 font-medium leading-relaxed">We empower students with hands-on learning, expert guidance, and innovative training programs for real-world success.</p>
            <div className="pt-2">
              <div className="flex justify-between text-sm font-bold mb-1">
                <div className="text-gray-800">₹ 7,50,000 / <span className="text-[#24b037]">₹ 15,00,000</span></div>
                <div className="text-gray-500">48%</div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-[#24b037] h-full" style={{width: '48%'}} />
              </div>
              <p className="text-[10px] text-gray-400 font-bold text-right mt-1 italic">20 days Left</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 🟢 Left: Form Section */}
          <div className="lg:col-span-2 space-y-10">
            {/* Select Amount */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800">Select Amount</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amounts.map((amt) => (
                  <button 
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    className={`py-3 rounded-xl font-bold text-lg border-2 transition-all ${selectedAmount === amt ? "border-[#24b037] text-[#24b037] bg-green-50/30" : "border-gray-200 text-gray-500"}`}
                  >
                    ₹ {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Other Amount */}
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-gray-800">Other Amount</h4>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                <input type="text" placeholder="Enter Amount" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-10 pr-4 outline-none focus:border-[#24b037] transition-all font-medium text-gray-700" />
              </div>
            </div>

            {/* Donor Details */}
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-gray-800">Donor Details</h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 font-bold text-sm ml-1">Full Name</label>
                  <input type="text" placeholder="ABC XYZ" className="w-full bg-white border border-gray-300 rounded-xl py-3.5 px-5 outline-none font-medium" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-500 font-bold text-sm ml-1">Mobile Number</label>
                  <input type="text" placeholder="+91 9876387427" className="w-full bg-white border border-gray-300 rounded-xl py-3.5 px-5 outline-none font-medium" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800">Payment Method</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'upi', label: 'UPI/QR', icon: <Smartphone size={18}/> },
                  { id: 'card', label: 'Card', icon: <CreditCard size={18}/> },
                  { id: 'net', label: 'Net Banking', icon: <Landmark size={18}/> },
                  { id: 'wallet', label: 'Wallet', icon: <Wallet size={18}/> },
                ].map((method) => (
                  <button 
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold border-2 transition-all ${paymentMethod === method.id ? "border-[#24b037] text-[#24b037] bg-green-50/30" : "border-gray-200 text-gray-500"}`}
                  >
                    {method.icon} <span className="text-xs md:text-sm">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 🟢 Right: QR Section */}
          <div className="flex flex-col items-center">
            <div className="w-full bg-white border border-gray-200 rounded-[30px] p-8 shadow-sm flex flex-col items-center text-center space-y-6">
              <h4 className="text-xl font-black text-gray-800 tracking-tight">Scan & Pay</h4>
              <p className="text-sm text-gray-400 font-medium px-4">Scan the QR Code using any UPI app To complete payment</p>
              
              {/* QR Box Placeholder */}
              <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center border-4 border-gray-50">
                 {/* Yahan QR Image aayegi */}
              </div>
              
              <div className="text-gray-800 font-bold text-sm">
                UPI ID : <span className="text-gray-500">3ytfgutuyr</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-gray-400 font-bold text-[10px] md:text-xs">
              <ShieldCheck size={16} className="text-[#24b037]" />
              Your Donation is Secured and encryption
            </div>
          </div>
        </div>

        {/* 🟢 Bottom Action */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <button onClick={() => navigate('/donor/donate/education/view/event-detail/event-payment/success', { state: { amount: selectedAmount } })} className="w-full max-w-[800px] bg-[#24b037] hover:bg-[#1e8f2d] text-white py-4 rounded-2xl font-black text-xl shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center justify-center gap-3">
            <Lock size={20} /> Proceed to Pay
          </button>
          <p className="text-gray-400 font-bold text-sm">100% Secure Payments</p>
        </div>
      </div>
    </div>
  );
};

export default EventPayment;