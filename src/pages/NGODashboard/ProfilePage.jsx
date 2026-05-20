import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Naya X icon

const ProfilePage = () => {
  const ngoDetails = {
    name: "Helping Hands NGO",
    email: "hello@helpinhands.org",
    phone: "+91 2343446576",
    website: "www.helpinhands.org",
    address: "123-Green Park, Mumbai",
    pincode: "401047",
    about: "The Helping Hands Foundation is a non-profit organization, which works with children who are diagnosed with cancer. We work on two projects – the Accommodation Project and the Survivor Project. The Accommodation Project provides free accommodation to the child and the family during treatment in Dharamshalas surrounding the hospital and the Survivor Project works towards regular testing and rehabilitation of children who beat cancer. The Helping Hands Foundation is a fund raising entity and works in conjunction with Tata Memorial Hospital’s ImPACCT Foundation."
  };

  return (
    <div className="animate-fadeIn pb-10 font-sans">
      
      {/* 1. PAGE HEADER */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500 text-sm font-medium mt-1">Manage your NGO Profile</p>
      </div>

      <div className="border-t border-gray-100">
        
        {/* 2. ORGANIZATION DETAILS SECTION */}
        <div className="py-10">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                Organization Details
            </h2>
            <button className="px-8 py-1.5 border border-gray-300 rounded-lg text-gray-500 font-bold hover:bg-gray-50 transition-all">
              Edit
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-20 items-start">
            {/* NGO Avatar */}
            <div className="w-44 h-44 md:w-56 md:h-56 bg-gray-200 rounded-full shrink-0 shadow-inner"></div>

            {/* NGO Info Grid */}
            <div className="space-y-6 flex-1">
              <InfoItem label="NGO name" value={ngoDetails.name} />
              <InfoItem label="Email" value={ngoDetails.email} />
              <InfoItem label="Phone" value={ngoDetails.phone} />
              <InfoItem label="Website" value={ngoDetails.website} />
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 font-bold text-sm md:text-lg">Address</span>
                <p className="text-gray-900 font-black text-lg md:text-xl leading-tight">
                    {ngoDetails.address} <br /> {ngoDetails.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. ABOUT US SECTION */}
        <div className="py-10 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-500 text-sm md:text-[16px] leading-relaxed font-medium text-justify">
            {ngoDetails.about}
          </p>
        </div>

        {/* 4. SOCIAL LINKS SECTION */}
        <div className="py-10 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 tracking-tight">Social links</h2>
          <div className="flex flex-wrap gap-6 md:gap-10 items-center">
             <SocialIcon Icon={FaFacebook} color="text-[#1877F2]" />
             <SocialIcon Icon={FaInstagram} color="text-[#E4405F]" />
             <SocialIcon Icon={FaXTwitter} color="text-black" />
             <SocialIcon Icon={FaYoutube} color="text-[#FF0000]" />
             <SocialIcon Icon={FaLinkedin} color="text-[#0A66C2]" />
          </div>
        </div>

      </div>
    </div>
  );
};

// Reusable Components
const InfoItem = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-gray-400 font-bold text-sm md:text-lg">{label}</span>
    <p className="text-gray-900 font-black text-lg md:text-xl tracking-tight">{value}</p>
  </div>
);

const SocialIcon = ({ Icon, color }) => (
  <button className={`text-4xl md:text-5xl ${color} hover:scale-110 transition-transform active:scale-95`}>
    <Icon />
  </button>
);

export default ProfilePage;
