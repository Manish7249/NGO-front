import React from 'react';
import { TrendingUp, Search, MoreHorizontal } from 'lucide-react';
import { FaCheck } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import AdminStatCard from '../../components/AdminDashboard/AdminStatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'May 1', uv: 300000 }, { name: 'May 5', uv: 350000 }, { name: 'May 10', uv: 200000 },
  { name: 'May 15', uv: 280000 }, { name: 'May 20', uv: 210000 }, { name: 'May 25', uv: 380000 },
];

const AdminDashboardHome = () => {
  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <MoreHorizontal className="text-gray-300" />
      </div>

      {/* Search Bar */}
      <div className="relative mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input type="text" placeholder="Search For NGO, Donor" className="w-full py-3.5 pl-12 pr-4 bg-white border border-gray-200 rounded-xl outline-none shadow-sm focus:border-green-400" />
      </div>

      {/* Top 2 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <AdminStatCard title="Total Donations" value="₹ 24,56,787" icon={<CiHeart fill="currentColor" className='text-4xl' />} colorClass="text-red-400" iconBg="bg-red-200" />
        <AdminStatCard title="Total Registered NGO" value="45" icon={<FaCheck className='text-gray-900 text-2xl' />} colorClass="text-blue-400" iconBg="bg-blue-200" />
      </div>

      {/* Bottom 3 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <AdminStatCard title="Total Reg Revenue" value="₹ 4,50,808" icon={<CiHeart fill="currentColor" className='text-4xl' />} colorClass="text-red-400" iconBg="bg-red-200" />
        <AdminStatCard title="Total Campaigns" value="78" icon={<TrendingUp />} colorClass="text-green-600" iconBg="bg-green-100" />
        <AdminStatCard title="Total Donors" value="1000" icon={<TrendingUp />} colorClass="text-green-600" iconBg="bg-green-100" />
      </div>

      {/* Revenue Overview Graph */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
        <div className="flex justify-between items-center mb-8">
          <div>
             <h4 className="font-bold text-gray-800">Revenue Overview</h4>
             <p className="text-2xl font-black">₹ 4,50,000</p>
          </div>
          <select className="bg-gray-50 border-none rounded-lg px-4 py-2 text-sm font-bold outline-none cursor-pointer">
            <option>This Month</option>
          </select>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3ec327" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3ec327" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke="#999" />
              <YAxis fontSize={12} tickLine={false} axisLine={false} stroke="#999" tickFormatter={(val) => `₹${val/100000} L`} />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#3ec327" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardHome;