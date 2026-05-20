import React from 'react';
import StatCard from '../../components/NGODashboard/StatCard';
import RatingSection from '../../components/NGODashboard/RatingSection';
import CampaignList from '../../components/NGODashboard/CampaignList';

const DashboardHome = () => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 tracking-tight">
        NGO Dashboard
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <StatCard title="Total Donations" value="₹12,50,000" trend="+10%" />
        <StatCard title="Active Campaigns" value="10" trend="+2" />
        <StatCard title="Total Donars" value="1,250" trend="+145" />
      </div>

      <div className="space-y-12">
        <RatingSection />
        <div className="max-w-5xl">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 tracking-tight">Recent Campaigns</h1>
            <CampaignList filter="All" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;