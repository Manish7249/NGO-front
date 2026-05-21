// import React, { useState } from 'react';
// import { LayoutDashboard, Megaphone, Star, MessageCircle, User, LogOut, ChevronDown } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const AdminSidebar = () => {
//   const location = useLocation();
//   const [ngoMenuOpen, setNgoMenuOpen] = useState(false);

//   const isActive = (path) => location.pathname.startsWith(path);

//   return (
//     <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
//       <div className="p-8 mb-4 font-bold text-2xl text-gray-800">Admin <span className="text-[#3ec327]">Portal</span></div>
      
//       <nav className="flex-1 px-4 space-y-2">
//         {/* Dashboard */}
//         <Link to="/admin/dashboard" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/admin/dashboard') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}>
//           <LayoutDashboard size={22} /> <span className="text-[15px]">Dashboard</span>
//         </Link>

//         {/* All NGOs with Submenu */}
//         <div className="space-y-1">
//             <Link 
//                 to="/admin/all-ngos" // 👈 Path set kiya
//                 onClick={() => setNgoMenuOpen(!ngoMenuOpen)} 
//                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isActive('/admin/all-ngos') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}
//             >
//                 <div className="flex items-center gap-4">
//                 <Megaphone size={22} /> 
//                 <span className="text-[15px]">All NGOs</span>
//                 </div>
//                 <ChevronDown size={18} className={`transition-transform ${ngoMenuOpen ? "rotate-180" : ""}`} />
//             </Link>
//             {/* Submenu ko tabhi dikhao jab menu open ho */}
//             {ngoMenuOpen && (
//                 <div className="pl-12 space-y-2 pb-2">
//                 <Link to="/admin/all-ngos/ngo-verification" className="block text-sm text-gray-500 hover:text-green-600 font-medium">NGO verification</Link>
//                 <Link to="/admin/all-ngos/ngo-payment" className="block text-sm text-gray-500 hover:text-green-600 font-medium">NGO Payment</Link>
//                 <Link to="/admin/all-ngos/rejected-ngos" className="block text-sm text-gray-500 hover:text-green-600 font-medium">Rejected NGOs</Link>
//                 </div>
//             )}
//         </div>

//         <Link to="/admin/rating" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-50 rounded-xl transition-all italic"><Star size={22} /> <span className="text-[15px]">Rating</span></Link>
//         <Link to="/admin/queries" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-50 rounded-xl transition-all"><MessageCircle size={22} /> <span className="text-[15px]">Queries</span></Link>
//         <Link to="/admin/profile" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-gray-50 rounded-xl transition-all"><User size={22} /> <span className="text-[15px]">Profile</span></Link>
//       </nav>

//       <div className="p-6 border-t border-gray-50">
//         <button className="flex items-center gap-4 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full"><LogOut size={22} /> <span>Log out</span></button>
//       </div>
//     </aside>
//   );
// };
// export default AdminSidebar;










// import React, { useState, useEffect } from 'react';
// import { LayoutDashboard, Megaphone, Star, MessageCircle, User, LogOut, ChevronDown } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const AdminSidebar = () => {
//   const location = useLocation();
  
//   // Logic: Agar URL me 'all-ngos' hai toh menu ko shuru me hi khula rakho
//   const [ngoMenuOpen, setNgoMenuOpen] = useState(location.pathname.startsWith('/admin/all-ngos'));

//   // Function to check if a link is active
//   const isActive = (path) => location.pathname === path;
  
//   // Logic: Kya hum abhi 'All NGOs' section ke kisi bhi page par hain?
//   const isAllNgosActive = location.pathname.startsWith('/admin/all-ngos');

//   // URL change hone par agar naye section me jayein toh menu handle karne ke liye (Optional)
//   useEffect(() => {
//     if (location.pathname.startsWith('/admin/all-ngos')) {
//       setNgoMenuOpen(true);
//     }
//   }, [location.pathname]);

//   return (
//     <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
//       <div className="p-8 mb-4 font-bold text-2xl text-gray-800">Admin <span className="text-[#3ec327]">Portal</span></div>
      
//       <nav className="flex-1 px-4 space-y-2">
//         {/* Dashboard */}
//         <Link to="/admin/dashboard" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/admin/dashboard') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}>
//           <LayoutDashboard size={22} /> <span className="text-[15px]">Dashboard</span>
//         </Link>

//         {/* All NGOs with Submenu logic */}
//         <div className="space-y-1">
//             <div 
//                 onClick={() => setNgoMenuOpen(!ngoMenuOpen)} 
//                 className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all cursor-pointer ${isAllNgosActive ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}
//             >
//                 <div className="flex items-center gap-4">
//                   <Megaphone size={22} /> 
//                   <span className="text-[15px]">All NGOs</span>
//                 </div>
//                 <ChevronDown size={18} className={`transition-transform duration-300 ${ngoMenuOpen ? "rotate-180" : ""}`} />
//             </div>

//             {/* Submenu Content */}
//             {ngoMenuOpen && (
//                 <div className="pl-12 space-y-3 pb-2 pt-1 animate-fadeIn">
//                   <Link 
//                     to="/admin/all-ngos/ngo-verification" 
//                     className={`block text-sm transition-all ${isActive('/admin/all-ngos/ngo-verification') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     NGO verification
//                   </Link>
                  
//                   <Link 
//                     to="/admin/all-ngos/ngo-payment" 
//                     className={`block text-sm transition-all ${isActive('/admin/all-ngos/ngo-payment') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     NGO Payment
//                   </Link>
                  
//                   <Link 
//                     to="/admin/all-ngos/rejected-ngos" 
//                     className={`block text-sm transition-all ${isActive('/admin/all-ngos/rejected-ngos') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     Rejected NGOs
//                   </Link>
//                 </div>
//             )}
//         </div>

//         <Link to="/admin/rating" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/admin/rating') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><Star size={22} /> <span className="text-[15px]">Rating</span></Link>
//         <Link to="/admin/queries" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/admin/queries') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><MessageCircle size={22} /> <span className="text-[15px]">Queries</span></Link>
//         <Link to="/admin/profile" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/admin/profile') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><User size={22} /> <span className="text-[15px]">Profile</span></Link>
//       </nav>

//       <div className="p-6 border-t border-gray-50">
//         <button className="flex items-center gap-4 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95"><LogOut size={22} /> <span>Log out</span></button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;











// import React, { useState, useEffect } from 'react';
// import { LayoutDashboard, Megaphone, Star, MessageCircle, User, LogOut, ChevronDown } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const AdminSidebar = () => {
//   const location = useLocation();
  
//   // 1. Logic: Agar hum All NGOs ke kisi bhi sub-page par hain, toh menu open rahega
//   const [ngoMenuOpen, setNgoMenuOpen] = useState(location.pathname.startsWith('/admin/all-ngos'));

//   // Exact match check karne ke liye helper
//   const isExactActive = (path) => location.pathname === path;
  
//   // All NGOs section active hai ya nahi (including sub-pages)
//   const isAllNgosActive = location.pathname.startsWith('/admin/all-ngos');

//   // Page change hone par agar naya section mile toh menu automatic khol do
//   useEffect(() => {
//     if (location.pathname.startsWith('/admin/all-ngos')) {
//       setNgoMenuOpen(true);
//     }
//   }, [location.pathname]);

//   return (
//     <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40">
//       <div className="p-8 mb-4 font-bold text-2xl text-gray-800">Admin <span className="text-[#3ec327]">Portal</span></div>
      
//       <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
        
//         {/* --- Dashboard --- */}
//         <Link to="/admin/dashboard" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isExactActive('/admin/dashboard') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}>
//           <LayoutDashboard size={22} /> <span className="text-[15px]">Dashboard</span>
//         </Link>

//         {/* --- All NGOs Main Section --- */}
//         <div className="space-y-1">
//             {/* 🟢 FIXED: Whole bar is now a Link that takes you to AllNGOs page */}
//             <div className="relative group">
//               <Link 
//                   to="/admin/all-ngos" 
//                   className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${isAllNgosActive ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}
//               >
//                   <div className="flex items-center gap-4">
//                     <Megaphone size={22} /> 
//                     <span className="text-[15px]">All NGOs</span>
//                   </div>
//               </Link>
              
//               {/* Chevron separate button taaki sirf click karke menu toggle ho sake bina page change kiye (optional) 
//                   Ya phir poore bar par click karne se menu toggle ho. Niche wala div toggle handle karega. */}
//               <button 
//                 onClick={(e) => { e.preventDefault(); setNgoMenuOpen(!ngoMenuOpen); }}
//                 className="absolute right-3 top-3.5 text-gray-400 hover:text-green-600 transition-all z-10"
//               >
//                 <ChevronDown size={18} className={`transition-transform duration-300 ${ngoMenuOpen ? "rotate-180" : ""}`} />
//               </button>
//             </div>

//             {/* --- Submenu Items --- */}
//             {ngoMenuOpen && (
//                 <div className="pl-12 space-y-3 pb-2 pt-1 animate-fadeIn">
//                   <Link 
//                     to="/admin/all-ngos/ngo-verification" 
//                     className={`block text-sm transition-all ${isExactActive('/admin/all-ngos/ngo-verification') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     NGO verification
//                   </Link>
                  
//                   <Link 
//                     to="/admin/all-ngos/ngo-payment" 
//                     className={`block text-sm transition-all ${isExactActive('/admin/all-ngos/ngo-payment') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     NGO Payment
//                   </Link>
                  
//                   <Link 
//                     to="/admin/all-ngos/rejected-ngos" 
//                     className={`block text-sm transition-all ${isExactActive('/admin/all-ngos/rejected-ngos') ? "text-green-600 font-bold" : "text-gray-500 hover:text-green-600 font-medium"}`}
//                   >
//                     Rejected NGOs
//                   </Link>
//                 </div>
//             )}
//         </div>

//         {/* --- Other Links --- */}
//         <Link to="/admin/rating" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isExactActive('/admin/rating') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><Star size={22} /> <span className="text-[15px]">Rating</span></Link>
//         <Link to="/admin/queries" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isExactActive('/admin/queries') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><MessageCircle size={22} /> <span className="text-[15px]">Queries</span></Link>
//         <Link to="/admin/profile" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isExactActive('/admin/profile') ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600" : "text-gray-400 hover:bg-gray-50"}`}><User size={22} /> <span className="text-[15px]">Profile</span></Link>
//       </nav>

//       {/* --- Logout --- */}
//       <div className="p-6 border-t border-gray-50">
//         <button className="flex items-center gap-4 px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95"><LogOut size={22} /> <span>Log out</span></button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;






// import React from 'react';
// import { 
//   LayoutDashboard, 
//   Megaphone, 
//   Star, 
//   MessageCircle, 
//   User, 
//   LogOut, 
//   ChevronDown,
//   Heart
// } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const AdminSidebar = () => {
//   const location = useLocation();

//   // Helper function: Exact path match ke liye
//   const isExactActive = (path) => location.pathname === path;
  
//   // Logic: Kya hum abhi 'All NGOs' section ke kisi bhi page par hain?
//   const isAllNgosActive = location.pathname.startsWith('/admin/all-ngos');

//   return (
//     <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40 font-sans">
      
//       {/* Logo Section */}
//       <div className="p-8 mb-4 font-bold text-2xl text-gray-800 tracking-tight">
//         Admin <span className="text-[#2bb64a]">Portal</span>
//       </div>
      
//       <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
        
//         {/* --- Dashboard Link --- */}
//         <Link 
//           to="/admin/dashboard" 
//           className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//             isExactActive('/admin/dashboard') 
//             ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//             : "text-gray-400 hover:bg-gray-50"
//           }`}
//         >
//           <LayoutDashboard size={22} />
//           <span className="text-[15px]">Dashboard</span>
//         </Link>

//         {/* --- All NGOs Section --- */}
//         <div className="space-y-1">
//           {/* Main Parent Link */}
//           <Link 
//             to="/admin/all-ngos" 
//             className={`w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all ${
//               isAllNgosActive 
//               ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//               : "text-gray-400 hover:bg-gray-50"
//             }`}
//           >
//             <div className="flex items-center gap-4">
//               <Megaphone size={22} /> 
//               <span className="text-[15px]">All NGOs</span>
//             </div>
//             {/* Arrow will rotate if active */}
//             <ChevronDown size={18} className={`transition-transform duration-300 ${isAllNgosActive ? "rotate-180" : ""}`} />
//           </Link>

//           {/* 🟢 SUB-MENU: Only shows when 'All NGOs' is Active */}
//           {isAllNgosActive && (
//             <div className="pl-12 space-y-3 pb-2 pt-2 animate-fadeIn">
//               <Link 
//                 to="/admin/all-ngos/ngo-verification" 
//                 className={`block text-[14px] transition-all ${
//                   isExactActive('/admin/all-ngos/ngo-verification') 
//                   ? "text-[#2bb64a] font-bold" 
//                   : "text-gray-500 hover:text-[#2bb64a] font-medium"
//                 }`}
//               >
//                 NGO verification
//               </Link>
              
//               <Link 
//                 to="/admin/all-ngos/ngo-payment" 
//                 className={`block text-[14px] transition-all ${
//                   isExactActive('/admin/all-ngos/ngo-payment') 
//                   ? "text-[#2bb64a] font-bold" 
//                   : "text-gray-500 hover:text-[#2bb64a] font-medium"
//                 }`}
//               >
//                 NGO Payment
//               </Link>
              
//               <Link 
//                 to="/admin/all-ngos/rejected-ngos" 
//                 className={`block text-[14px] transition-all ${
//                   isExactActive('/admin/all-ngos/rejected-ngos') 
//                   ? "text-[#2bb64a] font-bold" 
//                   : "text-gray-500 hover:text-[#2bb64a] font-medium"
//                 }`}
//               >
//                 Rejected NGOs
//               </Link>
//             </div>
//           )}
//         </div>

//         <Link 
//           to="/admin/donors" 
//           className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//             isExactActive('/admin/donors') 
//             ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//             : "text-gray-400 hover:bg-gray-50"
//           }`}
//         >
//           <Heart size={22} /> <span className="text-[15px]">All Donors</span>
//         </Link>

//         {/* --- Other Main Links --- */}
//         <Link 
//           to="/admin/rating" 
//           className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//             isExactActive('/admin/rating') 
//             ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//             : "text-gray-400 hover:bg-gray-50"
//           }`}
//         >
//           <Star size={22} /> <span className="text-[15px]">Rating</span>
//         </Link>

//         <Link 
//           to="/admin/queries" 
//           className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//             isExactActive('/admin/queries') 
//             ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//             : "text-gray-400 hover:bg-gray-50"
//           }`}
//         >
//           <MessageCircle size={22} /> <span className="text-[15px]">Queries</span>
//         </Link>

//         <Link 
//           to="/admin/profile" 
//           className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//             isExactActive('/admin/profile') 
//             ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" 
//             : "text-gray-400 hover:bg-gray-50"
//           }`}
//         >
//           <User size={22} /> <span className="text-[15px]">Profile</span>
//         </Link>
//       </nav>

//       {/* Logout Button */}
//       <div className="p-6 border-t border-gray-50">
//         <button className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95">
//           <LogOut size={22} />
//           <span className="text-[15px]">Log out</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default AdminSidebar;







import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Megaphone, 
  Star, 
  MessageCircle, 
  User, 
  LogOut, 
  ChevronDown,
  Heart
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  // Helper function: Exact path match ke liye (Main menus ke liye)
  const isExactActive = (path) => location.pathname === path;
  
  // 🟢 NAYA HELPER: Sub-pages ke liye highlight maintain karne ke liye
  const isPathActive = (path) => location.pathname.startsWith(path);

  // Logic: Kya hum abhi 'All NGOs' section ke kisi bhi page par hain?
  const isAllNgosActive = location.pathname.startsWith('/admin/all-ngos');

  return (
    <aside className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-40 font-sans">
      
      {/* Logo Section */}
      <div className="p-8 mb-4 font-bold text-2xl text-gray-800 tracking-tight text-left">
        Admin <span className="text-[#2bb64a]">Portal</span>
      </div>
      
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
        
        {/* --- Dashboard --- */}
        <Link 
          to="/admin/dashboard" 
          className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
            isPathActive('/admin/dashboard') 
            ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a] shadow-sm" 
            : "text-gray-400 hover:bg-gray-50"
          }`}
        >
          <LayoutDashboard size={22} />
          <span className="text-[15px]">Dashboard</span>
        </Link>

        {/* --- All NGOs Section --- */}
        <div className="space-y-1">
          <Link 
            to="/admin/all-ngos" 
            className={`w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all ${
              isAllNgosActive 
              ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a] shadow-sm" 
              : "text-gray-400 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-4 text-left">
              <Megaphone size={22} /> 
              <span className="text-[15px]">All NGOs</span>
            </div>
            <ChevronDown size={18} className={`transition-transform duration-300 ${isAllNgosActive ? "rotate-180" : ""}`} />
          </Link>

          {/* SUB-MENU: Using startsWith logic on children too */}
          {isAllNgosActive && (
            <div className="pl-12 space-y-3 pb-2 pt-2 animate-fadeIn text-left">
              <Link 
                to="/admin/all-ngos/ngo-verification" 
                className={`block text-[14px] transition-all ${
                  // 🟢 FIXED: Ab detail page par bhi 'NGO verification' green rahega
                  isPathActive('/admin/all-ngos/ngo-verification') 
                  ? "text-[#2bb64a] font-bold" 
                  : "text-gray-500 hover:text-[#2bb64a] font-medium"
                }`}
              >
                NGO verification
              </Link>
              
              <Link 
                to="/admin/all-ngos/ngo-payment" 
                className={`block text-[14px] transition-all ${
                  isPathActive('/admin/all-ngos/ngo-payment') 
                  ? "text-[#2bb64a] font-bold" 
                  : "text-gray-500 hover:text-[#2bb64a] font-medium"
                }`}
              >
                NGO Payment
              </Link>
              
              <Link 
                to="/admin/all-ngos/rejected-ngos" 
                className={`block text-[14px] transition-all ${
                  isPathActive('/admin/all-ngos/rejected-ngos') 
                  ? "text-[#2bb64a] font-bold" 
                  : "text-gray-500 hover:text-[#2bb64a] font-medium"
                }`}
              >
                Rejected NGOs
              </Link>
            </div>
          )}
        </div>

        <Link to="/admin/donors" className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${isPathActive('/admin/donors') ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" : "text-gray-400 hover:bg-gray-50"}`}>
          <Heart size={22} /> <span className="text-[15px]">All Donors</span>
        </Link>

        {/* --- Other Links (Using isPathActive for all) --- */}
        <Link to="/admin/rating" className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${isPathActive('/admin/rating') ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" : "text-gray-400 hover:bg-gray-50"}`}>
          <Star size={22} /> <span className="text-[15px]">Rating</span>
        </Link>

        <Link to="/admin/queries" className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${isPathActive('/admin/queries') ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" : "text-gray-400 hover:bg-gray-50"}`}>
          <MessageCircle size={22} /> <span className="text-[15px]">Queries</span>
        </Link>

        <Link to="/admin/profile" className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${isPathActive('/admin/profile') ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a]" : "text-gray-400 hover:bg-gray-50"}`}>
          <User size={22} /> <span className="text-[15px]">Profile</span>
        </Link>
      </nav>

      <div className="p-6 border-t border-gray-50 text-left">
        <button className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95">
          <LogOut size={22} />
          <span className="text-[15px]">Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;