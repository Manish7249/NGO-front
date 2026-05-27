import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/NGODashboard/Sidebar';

const NGOLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row box-border">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:pl-64 pt-20 lg:pt-0 min-h-screen transition-all duration-300 box-border overflow-x-hidden">

        {/* INNER CONTAINER */}
        <div className="p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto animate-fadeIn box-border w-full">

          {/* PAGES LOAD HERE */}
          <Outlet />

        </div>
      </main>
    </div>
  );
};

export default NGOLayout;