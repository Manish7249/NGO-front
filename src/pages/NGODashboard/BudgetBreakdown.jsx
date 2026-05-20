import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ArrowLeft } from 'lucide-react';

const BudgetBreakdown = () => {
  const navigate = useNavigate();

  // Dynamic rows manage karne ke liye state
  const [rows, setRows] = useState([
    { id: 1, purpose: 'School Suplies', amount: '80,000', percent: '40%' },
    { id: 2, purpose: 'Food & Nutrition', amount: '30,000', percent: '30%' },
    { id: 3, purpose: 'Teacher Support', amount: '40,000', percent: '20%' },
  ]);

  // Nayi row add karne ka function
  const addRow = () => {
    setRows([...rows, { id: Date.now(), purpose: '', amount: '', percent: '' }]);
  };

  return (
    <div className="animate-fadeIn">
      {/* Top Header with Back Button */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 hover:bg-white rounded-full shadow-sm transition-all active:scale-90"
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Budget Breakdown
        </h1>
      </div>

      {/* Main Form Container */}
      <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-6 md:p-12 lg:px-20">
        
        {/* Table Headers (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-10 mb-8 px-4 text-center font-bold text-gray-800 text-lg">
          <div>Purpose</div>
          <div>Estimated Amount</div>
          <div>Percentage</div>
        </div>

        {/* Input Rows */}
        <div className="space-y-6">
          {rows.map((row) => (
            <div key={row.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 items-center animate-fadeIn">
              {/* Purpose Input */}
              <div className="relative">
                <span className="md:hidden text-xs font-bold text-gray-400 mb-1 block ml-2">Purpose</span>
                <input 
                  type="text" 
                  defaultValue={row.purpose}
                  placeholder="e.g. Supplies"
                  className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)] outline-none text-center font-medium focus:border-green-500 transition-all"
                />
              </div>

              {/* Amount Input */}
              <div className="relative">
                <span className="md:hidden text-xs font-bold text-gray-400 mb-1 block ml-2">Amount</span>
                <input 
                  type="text" 
                  defaultValue={row.amount ? `₹${row.amount}` : ''}
                  placeholder="₹ 0.00"
                  className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)] outline-none text-center font-medium focus:border-green-500 transition-all"
                />
              </div>

              {/* Percentage Input */}
              <div className="relative">
                <span className="md:hidden text-xs font-bold text-gray-400 mb-1 block ml-2">Percentage</span>
                <input 
                  type="text" 
                  defaultValue={row.percent}
                  placeholder="0%"
                  className="w-full py-4 px-6 bg-white border border-gray-300 rounded-2xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)] outline-none text-center font-medium focus:border-green-500 transition-all"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add More Button */}
        <div className="mt-8 ml-2">
          <button 
            onClick={addRow}
            className="text-[#22c55e] font-bold text-lg hover:underline flex items-center gap-1 active:scale-95 transition-all"
          >
            Add More +
          </button>
        </div>

        {/* Save Button */}
        <div className="mt-12 flex justify-center">
          <button className="w-full max-w-[240px] py-4 bg-[#32CD00] hover:bg-[#28b500] text-white font-bold rounded-2xl text-2xl shadow-lg shadow-green-100 transition-all active:scale-95">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default BudgetBreakdown;