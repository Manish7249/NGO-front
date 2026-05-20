import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/NGODashboard/Sidebar';

const NGOLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">
      
      {/* 1. SIDEBAR: Ye constant rahega */}
      <Sidebar />

      {/* 2. MAIN CONTENT AREA */}
      {/* 
          - lg:pl-64: Desktop par sidebar (256px width) ke liye jagah chhode ga.
          - pt-20: Mobile par jo humne Sidebar me Top Header banaya hai, uske niche se content shuru hoga.
          - lg:pt-0: Desktop par top padding ki zaroorat nahi hai.
      */}
      <main className="flex-1 lg:pl-64 pt-20 lg:pt-0 min-h-screen transition-all duration-300">
        
        {/* Inner Container: Isme content ko thodi breathing space di hai */}
        <div className="p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto animate-fadeIn">
          
          {/* 
              OUTLET: 
              Ye React Router ka placeholder hai. 
              Iske andar tumhare saare dashboard pages (Home, Campaigns, Utilization) load honge.
          */}
          <Outlet />

        </div>
      </main>

    </div>
  );
};

export default NGOLayout;