import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/AdminDashboard/AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">
      <AdminSidebar />
      <main className="flex-1 lg:pl-64 pt-20 lg:pt-0 min-h-screen transition-all duration-300">
        <div className="p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto animate-fadeIn">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;