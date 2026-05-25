import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Heart, 
  Bell, 
  HandCoins, 
  User, 
  LogOut, 
  X,
  // 🟢 Naye icons sub-menu ke liye
  GraduationCap,
  Activity,
  Leaf,
  Users,
  Baby,
  PawPrint,
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 🟢 useNavigate add kiya

const DonorSidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate(); // 🟢 Redirect karne ke liye

  const isPathActive = (path) => {
    if (path === "/donor/dashboard" && location.pathname === "/donor") return true;
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/donor/dashboard" },
    { icon: <Heart size={22} />, label: "My Donations", path: "/donor/donations" },
    { icon: <Bell size={22} />, label: "Alerts", path: "/donor/alerts", hasBadge: true },
    { icon: <HandCoins size={22} />, label: "Donate Now", path: "/donor/donate" },
    { icon: <User size={22} />, label: "Profile", path: "/donor/profile" },
  ]

  const categories = [
  { label: "Education", icon: <GraduationCap size={18} />, path: "/donor/donate/education" },
  { label: "Healthcare", icon: <Activity size={18} />, path: "/donor/donate/healthcare" },
  { label: "Environment", icon: <Leaf size={18} />, path: "/donor/donate/environment" },
  { label: "Women Empowerment", icon: <Users size={18} />, path: "/donor/donate/women" },
  { label: "Child Welfare", icon: <Baby size={18} />, path: "/donor/donate/child" },
  { label: "Animal Welfare", icon: <PawPrint size={18} />, path: "/donor/donate/animal" },
  { label: "Others", icon: <MoreHorizontal size={18} />, path: "/donor/donate/others" },
];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm" 
          onClick={toggleSidebar} 
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white h-screen border-r border-gray-100 flex flex-col transform transition-transform duration-300 ease-in-out font-sans lg:relative lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        {/* Profile Section */}
        <div className="p-8 mb-4 flex items-center gap-4 text-left">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
            className="w-12 h-12 rounded-full border-2 border-green-50 object-cover" 
            alt="profile" 
          />
          <div>
            <h3 className="font-bold text-gray-800 text-[15px]">Akay Kohli</h3>
            <p className="text-[11px] text-gray-400">Mumbai, Maharashtra</p>
          </div>
          <button className="lg:hidden ml-auto text-gray-400 hover:text-gray-600" onClick={toggleSidebar}>
            <X size={20}/>
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <React.Fragment key={item.path}>
              <Link 
                to={item.path} 
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
                className={`flex items-center justify-between px-5 py-3 rounded-xl transition-all ${
                  isPathActive(item.path) 
                  ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-r-4 border-[#2bb64a] shadow-sm" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                }`}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="text-[15px]">{item.label}</span>
                </div>
              </Link>

              {/* 🟢 CATEGORIES & FILTERS (Donate Now active hone par dikhega) */}
              {item.path === "/donor/donate" && isPathActive("/donor/donate") && (
                <div className="pl-4 pr-2 py-4 space-y-6 animate-fadeIn">
                  <div className="space-y-1">
                    <p className="text-gray-800 font-bold text-sm mb-3 px-1">Categories</p>
                    {categories.map((cat, idx) => (
                      <Link 
                        key={idx} 
                        to={cat.path}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition-all ${
                          location.pathname.startsWith(cat.path) 
                            ? "bg-[#e7f7ed] text-[#2bb64a] font-bold border-l-4 border-[#2bb64a]" 
                            : "text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {cat.icon}
                        <span className="text-[13px]">{cat.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Location Filter */}
                  <div className="px-1 space-y-2">
                    <p className="text-gray-800 font-bold text-[13px]">Location</p>
                    <div className="relative">
                      <select className="w-full appearance-none bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-xs text-gray-500 outline-none">
                        <option>All Location</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2 top-2.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div className="px-1 space-y-2 pb-2">
                    <p className="text-gray-800 font-bold text-[13px]">Sort By</p>
                    <div className="relative">
                      <select className="w-full appearance-none bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-xs text-gray-500 outline-none">
                        <option>Most Popular</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-2 top-2.5 text-gray-400" />
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-50 text-left">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all w-full active:scale-95 group"
          >
            <LogOut size={22} className="group-hover:rotate-12 transition-transform"/>
            <span className="text-[15px]">Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DonorSidebar;