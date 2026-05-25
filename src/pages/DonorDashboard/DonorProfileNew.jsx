import { useState } from 'react';

const DonorProfileNew = () => {
  const [isEditing, setIsEditing] = useState(false);

  // 1. Saved Data (Header mein yahi dikhega)
  const [profileData, setProfileData] = useState({
    fullName: "Akay Kohli",
    email: "akayk@mail.com",
    location: "Bangalore, Karnataka, India",
    phone: "+91 1234567890",
    donorSince: "May 2023"
  });

  // 2. Temporary Data (Inputs mein typing ke waqt yahi badlega)
  const [draftData, setDraftData] = useState({ ...profileData });

  // Input badalne par sirf draft badlega
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraftData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit par click karne par Draft wala data Saved data mein jayega
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData({ ...draftData }); // Ab Header update hoga
    setIsEditing(false);
  };

  // Edit click karne par draft initialize karna
  const handleEditClick = () => {
    setDraftData({ ...profileData });
    setIsEditing(true);
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fadeIn overflow-hidden font-sans">
      
      {/* Header Section */}
      <div className="flex items-center gap-10 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Donor Profile</h1>
        
        {/* 🟢 Edit Button: Ab ye hamesha dikhega (Condition hata di gayi hai) */}
        <button 
          onClick={handleEditClick}
          className="text-green-600 font-bold text-lg hover:underline transition-all"
        >
          Edit
        </button>
      </div>

      {/* Profile Avatar & Welcome Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 shadow-inner border border-gray-100 overflow-hidden">
           {/* Image Placeholder */}
        </div>

        <div className="space-y-2">
          {/* Title: Ye sirf tabhi badlega jab Submit dabaoge */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {profileData.fullName}
          </h2>
          <p className="text-[#24b037] font-bold text-lg md:text-xl">
            A proud donor since {profileData.donorSince}
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Full Name</label>
          <input 
            type="text" 
            name="fullName"
            value={isEditing ? draftData.fullName : profileData.fullName}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full border border-gray-300 rounded-xl px-5 py-3 font-medium transition-all outline-none bg-white text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={isEditing ? draftData.email : profileData.email}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full border border-gray-300 rounded-xl px-5 py-3 font-medium transition-all outline-none bg-white text-gray-700"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Location</label>
          <input 
            type="text" 
            name="location"
            value={isEditing ? draftData.location : profileData.location}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full border border-gray-300 rounded-xl px-5 py-3 font-medium transition-all outline-none bg-white text-gray-700"
          />
        </div>

        {/* Phone No */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Phone No.</label>
          <input 
            type="text" 
            name="phone"
            value={isEditing ? draftData.phone : profileData.phone}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full border border-gray-300 rounded-xl px-5 py-3 font-medium transition-all outline-none bg-white text-gray-700"
          />
        </div>

        {/* Submit Button: Sirf Edit Mode mein dikhega */}
        {isEditing && (
          <div className="pt-6 animate-in fade-in slide-in-from-top-2">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-3 bg-[#24b037] hover:bg-[#1e8f2d] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 text-lg"
            >
              Submit Changes
            </button>
          </div>
        )}

      </form>
    </div>
  );
};

export default DonorProfileNew;