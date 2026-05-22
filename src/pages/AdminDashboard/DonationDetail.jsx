import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import educateImg from '../../assets/landingPageImage/hero.png';

const DonationDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn pb-20 font-sans text-left max-w-4xl mx-auto">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-gray-800 transition-all">
        <ArrowLeft size={20} /> Back
      </button>

      <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
        {/* Header: Image + Title */}
        <div className="flex items-center gap-6 mb-12">
          <img src={educateImg} className="w-32 h-20 md:w-40 md:h-24 object-cover rounded-2xl shadow-sm" alt="" />
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">Build a New Learning Center</h2>
            <p className="text-gray-500 font-bold text-lg mt-1">Shiksha Foundation</p>
          </div>
        </div>

        {/* Info Rows */}
        <div className="space-y-8">
          <DetailRow label="Amount" value="₹ 1000" isBold />
          <DetailRow label="Date & Time" value="05 May 2026, 02.45 PM" />
          <DetailRow label="NGO" value="Shiksha Foundation" />
          <DetailRow label="Transaction ID" value="TXN123345685667" />
          <DetailRow label="Payment Method" value="UPI" />
          <DetailRow label="Status" value="Successful" isStatus />
          <DetailRow label="Note" value="Thank you for your support" />
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value, isBold, isStatus }) => (
  <div className="grid grid-cols-2 gap-4 items-start text-lg">
    <span className="text-gray-500 font-bold">{label}</span>
    <span className={`font-bold ${isBold ? 'text-gray-900 font-black' : 'text-gray-700'} ${isStatus ? 'text-[#2bb64a]' : ''}`}>
      {value}
    </span>
  </div>
);

export default DonationDetail;