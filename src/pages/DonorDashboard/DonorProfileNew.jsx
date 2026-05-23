// import React from 'react';

// const DonorProfileNew = () => {
//   // Dummy Data (Aap ise props ya API se bhi le sakte hain)
//   const profileData = {
//     fullName: "Akay Kohli",
//     email: "akayk@mail.com",
//     location: "Bangalore, Karnataka, India",
//     phone: "+91 1234567890",
//     donorSince: "May 2023"
//   };

//   return (
//     <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fadeIn">
      
//       {/* Header Section */}
//       <div className="flex items-center gap-10 mb-10">
//         <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Donor Profile</h1>
//         <button className="text-green-600 font-bold text-lg hover:underline transition-all">
//           Edit
//         </button>
//       </div>

//       {/* Profile Avatar & Welcome Section */}
//       <div className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left">
//         {/* Large Avatar Placeholder */}
//         <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 shadow-inner border border-gray-100">
//            {/* Yahan aap img tag bhi daal sakte hain */}
//         </div>

//         <div className="space-y-2">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//             {profileData.fullName}
//           </h2>
//           <p className="text-[#24b037] font-bold text-lg md:text-xl">
//             A proud donor since {profileData.donorSince}
//           </p>
//         </div>
//       </div>

//       {/* Profile Form Fields */}
//       <div className="space-y-6 max-w-2xl">
        
//         {/* Full Name */}
//         <div className="space-y-2">
//           <label className="block text-gray-700 font-bold text-base ml-1">Full Name</label>
//           <input 
//             type="text" 
//             readOnly 
//             value={profileData.fullName}
//             className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-gray-600 font-medium focus:outline-none shadow-sm"
//           />
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <label className="block text-gray-700 font-bold text-base ml-1">Email</label>
//           <input 
//             type="email" 
//             readOnly 
//             value={profileData.email}
//             className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-gray-600 font-medium focus:outline-none shadow-sm"
//           />
//         </div>

//         {/* Location */}
//         <div className="space-y-2">
//           <label className="block text-gray-700 font-bold text-base ml-1">Location</label>
//           <input 
//             type="text" 
//             readOnly 
//             value={profileData.location}
//             className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-gray-600 font-medium focus:outline-none shadow-sm"
//           />
//         </div>

//         {/* Phone No */}
//         <div className="space-y-2">
//           <label className="block text-gray-700 font-bold text-base ml-1">Phone No.</label>
//           <input 
//             type="text" 
//             readOnly 
//             value={profileData.phone}
//             className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 text-gray-600 font-medium focus:outline-none shadow-sm"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default DonorProfileNew;









import React, { useState } from 'react';

const DonorProfileNew = () => {
  // 1. Editing state toggle karne ke liye
  const [isEditing, setIsEditing] = useState(false);

  // 2. Profile data ko state mein rakha taaki update ho sake
  const [profileData, setProfileData] = useState({
    fullName: "Akay Kohli",
    email: "akayk@mail.com",
    location: "Bangalore, Karnataka, India",
    phone: "+91 1234567890",
    donorSince: "May 2023"
  });

  // 3. Input change handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 4. Submit handle karne ke liye
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false); // Edit mode band
    console.log("Updated Data:", profileData);
    // Yahan aap API call bhi kar sakte hain
  };

  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto animate-fadeIn overflow-hidden">
      
      {/* Header Section */}
      <div className="flex items-center gap-10 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Donor Profile</h1>
        
        {/* Edit Button: Agar edit mode mein nahi hain tabhi dikhega */}
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="text-green-600 font-bold text-lg hover:underline transition-all"
          >
            Edit
          </button>
        )}
      </div>

      {/* Profile Avatar & Welcome Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 shadow-inner border border-gray-100 overflow-hidden">
           {/* Image Placeholder */}
        </div>

        <div className="space-y-2">
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
            value={profileData.fullName}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full border rounded-xl px-5 py-3 font-medium transition-all outline-none ${
              isEditing 
                ? "bg-white border-green-400 ring-2 ring-green-100 text-gray-900" 
                : "bg-gray-50 border-gray-300 text-gray-600 cursor-default"
            }`}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Email</label>
          <input 
            type="email" 
            name="email"
            value={profileData.email}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full border rounded-xl px-5 py-3 font-medium transition-all outline-none ${
              isEditing 
                ? "bg-white border-green-400 ring-2 ring-green-100 text-gray-900" 
                : "bg-gray-50 border-gray-300 text-gray-600 cursor-default"
            }`}
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Location</label>
          <input 
            type="text" 
            name="location"
            value={profileData.location}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full border rounded-xl px-5 py-3 font-medium transition-all outline-none ${
              isEditing 
                ? "bg-white border-green-400 ring-2 ring-green-100 text-gray-900" 
                : "bg-gray-50 border-gray-300 text-gray-600 cursor-default"
            }`}
          />
        </div>

        {/* Phone No */}
        <div className="space-y-2">
          <label className="block text-gray-700 font-bold text-base ml-1">Phone No.</label>
          <input 
            type="text" 
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`w-full border rounded-xl px-5 py-3 font-medium transition-all outline-none ${
              isEditing 
                ? "bg-white border-green-400 ring-2 ring-green-100 text-gray-900" 
                : "bg-gray-50 border-gray-300 text-gray-600 cursor-default"
            }`}
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
            <button 
              type="button"
              onClick={() => setIsEditing(false)}
              className="w-full md:w-auto md:ml-4 mt-4 md:mt-0 px-8 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-lg"
            >
              Cancel
            </button>
          </div>
        )}

      </form>
    </div>
  );
};

export default DonorProfileNew;