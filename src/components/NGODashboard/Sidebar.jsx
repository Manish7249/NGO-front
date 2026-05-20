
import React, { useState } from 'react';
import { LayoutDashboard, Megaphone, HandCoins, Calendar, User, LogOut, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const menuItems = [
    { icon: <LayoutDashboard size={22} />, label: "Dashboard", path: "/ngo/dashboard" },
    { icon: <Megaphone size={22} />, label: "Campaigns", path: "/ngo/campaigns" },
    { icon: <HandCoins size={22} />, label: "Donations", path: "/ngo/donations" },
    { icon: <Calendar size={22} />, label: "Events", path: "/ngo/events" },
    { icon: <User size={22} />, label: "Profile", path: "/ngo/profile" },
  ];

  // Ye function Sidebar ka content render karega (Desktop aur Mobile dono ke liye same)
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white">
      {/* Logo Section */}
      <div className="p-8 mb-4">
        <Link to="/" className="text-2xl font-bold text-green-600 tracking-tight">NGO PORTAL</Link>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link 
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)} // Mobile pe link click karte hi menu band ho jaye
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                ? "bg-green-50 text-green-600 font-bold border-r-4 border-green-600 shadow-sm" 
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              }`}
            >
              <span className={`${isActive ? "text-green-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                {item.icon}
              </span>
              <span className="text-[15px]">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Section */}
      <div className="p-6 border-t border-gray-50">
        <div className="flex items-center gap-4 px-4 py-3 text-red-500 font-bold cursor-pointer hover:bg-red-50 rounded-xl transition-all active:scale-95">
          <LogOut size={22} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. MOBILE TOP BAR - Sirf Mobile par dikhega */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-100 p-4 flex justify-between items-center z-50">
        <Link to="/" className="font-bold text-green-600 text-xl">NGO PORTAL</Link>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 bg-gray-50 rounded-lg text-gray-600 active:scale-90 transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 2. DESKTOP SIDEBAR - Hamesha Left mein Fixed rahega */}
      <aside className="hidden lg:flex w-64 bg-white h-screen border-r border-gray-100 flex-col fixed left-0 top-0 z-40">
        <SidebarContent />
      </aside>

      {/* 3. MOBILE DRAWER - Menu button dabane par side se aayega */}
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        {/* Black Overlay background */}
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Sliding Sidebar Panel */}
        <aside className={`absolute left-0 top-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <SidebarContent />
        </aside>
      </div>
    </>
  );
};

export default Sidebar;