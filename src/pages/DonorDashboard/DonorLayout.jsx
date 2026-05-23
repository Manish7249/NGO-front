import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // 🟢 Ye sabse zaruri hai
import DonorSidebar from '../../components/DonorDashboard/DonorSidebar';
import { Menu } from 'lucide-react';

const DonorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f3f4f6] overflow-hidden">
      {/* Sidebar hamesha rahega */}
      {/* <DonorSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      /> */}
      <DonorSidebar 
  isOpen={isSidebarOpen} 
  toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
/>

      <div className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Mobile Header (Mobile pe menu button ke liye) */}
        <header className="lg:hidden flex items-center p-4 bg-white border-b">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="text-gray-600" />
          </button>
          <span className="ml-4 font-bold text-green-600">Donor Portal</span>
        </header>

        {/* 🟢 Yahan sirf wahi page dikhega jiska path URL mein hoga */}
        <main className="w-full">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DonorLayout;