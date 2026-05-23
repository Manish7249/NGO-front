// import React from 'react';
// import { LayoutDashboard, Heart, Bell, HandCoins, User, LogOut, X } from 'lucide-react';

// const DonorSidebar = ({ isOpen, toggleSidebar }) => {
//   const menuItems = [
//     { icon: <LayoutDashboard size={22} />, label: "Dashboard", active: true },
//     { icon: <Heart size={22} />, label: "My Donations" },
//     { icon: <Bell size={22} />, label: "Alerts" },
//     { icon: <HandCoins size={22} />, label: "Donate Now" },
//     { icon: <User size={22} />, label: "Profile" },
//   ];

//   return (
//     <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//       <div className="p-8">
//         <div className="flex items-center gap-4 mb-12">
//           <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" className="w-14 h-14 rounded-full border-2 border-green-50" alt="profile" />
//           <div>
//             <h3 className="font-bold text-gray-900">Akay Kohli</h3>
//             <p className="text-xs text-gray-400">Mumbai, Maharashtra</p>
//           </div>
//         </div>

//         <nav className="space-y-4">
//           {menuItems.map((item, idx) => (
//             <div key={idx} className={`flex items-center gap-4 px-6 py-4 rounded-2xl cursor-pointer transition-all ${item.active ? 'bg-[#e8f8eb] text-[#24b037] font-bold' : 'text-gray-500 hover:bg-gray-50'}`}>
//               {item.icon}
//               <span className="text-sm tracking-wide">{item.label}</span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       <div className="mt-auto p-8">
//         <button className="flex items-center gap-4 px-6 py-4 w-full text-[#ff4d4d] font-bold hover:bg-red-50 rounded-2xl transition-all group">
//           <LogOut size={22} className="group-hover:rotate-180 transition-transform duration-300" />
//           <span>Log out</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonorSidebar;








// import React from 'react';
// import { 
//   LayoutDashboard, 
//   Heart, 
//   Bell, 
//   HandCoins, 
//   User, 
//   LogOut, 
//   X 
// } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const DonorSidebar = ({ isOpen, toggleSidebar }) => {
//   const location = useLocation();

//   // Active path check karne ke liye helper
//   const isPathActive = (path) => location.pathname.startsWith(path);

//   const menuItems = [
//     { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/dashboard/donor" },
//     { icon: <Heart size={22} />, label: "My Donations", path: "/donor/donations" },
//     { icon: <Bell size={22} />, label: "Alerts", path: "/donor/alerts" },
//     { icon: <HandCoins size={22} />, label: "Donate Now", path: "/donor/donate" },
//     { icon: <User size={22} />, label: "Profile", path: "/donor/profile" },
//   ];

//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm" onClick={toggleSidebar} />
//       )}

//       <aside className={`
//         fixed inset-y-0 left-0 z-50 w-64 bg-white h-screen border-r border-gray-100 flex flex-col transform transition-transform duration-300 ease-in-out font-sans
//         lg:relative lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
//       `}>
        
//         {/* Profile Section (Kept as you requested) */}
//         <div className="p-8 mb-4 flex items-center gap-4">
//           <img 
//             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
//             className="w-12 h-12 rounded-full border-2 border-green-50 object-cover" 
//             alt="profile" 
//           />
//           <div className="text-left">
//             <h3 className="font-bold text-gray-800 text-[15px]">Akay Kohli</h3>
//             <p className="text-[11px] text-gray-400">Mumbai, Maharashtra</p>
//           </div>
//           {/* Mobile Close Button */}
//           <button className="lg:hidden ml-auto text-gray-400" onClick={toggleSidebar}><X size={20}/></button>
//         </div>
        
//         <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
//           {menuItems.map((item) => (
//             <Link 
//               key={item.path}
//               to={item.path}
//               onClick={() => window.innerWidth < 1024 && toggleSidebar()}
//               className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
//                 isPathActive(item.path) 
//                 ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a] shadow-sm" 
//                 : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
//               }`}
//             >
//               {item.icon}
//               <span className="text-[15px]">{item.label}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Footer Logout */}
//         <div className="p-6 border-t border-gray-50 text-left">
//           <button className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95 group">
//             <LogOut size={22} className="group-hover:rotate-12 transition-transform"/>
//             <span className="text-[15px]">Log out</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default DonorSidebar;











import React from 'react';
import { 
  LayoutDashboard, 
  Heart, 
  Bell, 
  HandCoins, 
  User, 
  LogOut, 
  X 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DonorSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  // 🟢 NESTED LOGIC: Ye function check karega ki kya current URL menu path se shuru hota hai
//   const isPathActive = (path) => {
//     // Agar hum Dashboard par hain (/dashboard/donor), toh exact match ya nested match check karega
//     return location.pathname.startsWith(path);
//   };

  const isPathActive = (path) => {
  // Agar path exact dashboard hai
  if (path === "/donor/dashboard" && location.pathname === "/donor") return true;
  return location.pathname.startsWith(path);
};

  const menuItems = [
  // Dashboard ka path /donor/dashboard hoga
  { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/donor/dashboard" },
  { icon: <Heart size={22} />, label: "My Donations", path: "/donor/donations" },
  { icon: <Bell size={22} />, label: "Alerts", path: "/donor/alerts" },
  { icon: <HandCoins size={22} />, label: "Donate Now", path: "/donor/donate" },
  { icon: <User size={22} />, label: "Profile", path: "/donor/profile" },
]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={toggleSidebar} 
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white h-screen border-r border-gray-100 flex flex-col transform transition-transform duration-300 ease-in-out font-sans
        lg:relative lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        {/* Profile Section */}
        <div className="p-8 mb-4 flex items-center gap-4">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
            className="w-12 h-12 rounded-full border-2 border-green-50 object-cover" 
            alt="profile" 
          />
          <div className="text-left">
            <h3 className="font-bold text-gray-800 text-[15px]">Akay Kohli</h3>
            <p className="text-[11px] text-gray-400">Mumbai, Maharashtra</p>
          </div>
          {/* Mobile Close Button */}
          <button className="lg:hidden ml-auto text-gray-400 hover:text-gray-600" onClick={toggleSidebar}>
            <X size={20}/>
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} // 🟢 Page open karne ke liye Link use kiya hai
              onClick={() => window.innerWidth < 1024 && toggleSidebar()} // Mobile pe click karne par sidebar band ho jaye
              className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
                isPathActive(item.path) 
                ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a] shadow-sm" 
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              }`}
            >
              {item.icon}
              <span className="text-[15px]">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Logout */}
        <div className="p-6 border-t border-gray-50 text-left">
          <button className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95 group">
            <LogOut size={22} className="group-hover:rotate-12 transition-transform"/>
            <span className="text-[15px]">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DonorSidebar;