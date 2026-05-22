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