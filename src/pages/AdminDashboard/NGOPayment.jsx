import React from 'react';

const NGOPayment = () => {
  const paymentHistory = [
    { id: 1, name: "Green Earth Foundation", regNo: "NGO -1099-2024", status: "Paid", date: "3 May 2026", amount: "₹ 999" },
    { id: 2, name: "Shiksha Foundation", regNo: "NGO -1099-2024", status: "Paid", date: "3 May 2026", amount: "₹ 999" },
    { id: 3, name: "Education for All", regNo: "NGO -1099-2024", status: "Paid", date: "13 May 2026", amount: "₹ 999" },
    { id: 4, name: "Health and Hope Foundation", regNo: "NGO -1099-2024", status: "Paid", date: "20 May 2026", amount: "₹ 999" },
    { id: 5, name: "Women Empowerment Trust", regNo: "NGO -1099-2024", status: "Paid", date: "25 May 2026", amount: "₹ 999" },
  ];

  return (
    <div className="animate-fadeIn pb-10 font-sans">
      
      {/* 1. HEADER SECTION */}
      <div className="mb-10 px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          NGO Registration Payment History
        </h1>
        <p className="text-gray-500 font-medium mt-2">
          All Registration payments made by this NGO
        </p>
      </div>

      {/* 2. PAYMENT TABLE CARD */}
      <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="text-gray-600 font-bold text-[16px] md:text-[18px]">
                <th className="py-8 px-8">NGO Name</th>
                <th className="py-8 px-4 text-center">Registration No.</th>
                <th className="py-8 px-4 text-center">Payment Status</th>
                <th className="py-8 px-4 text-center">Date& Time</th>
                <th className="py-8 px-8 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {paymentHistory.map((item) => (
                <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                  {/* NGO Name */}
                  <td className="py-7 px-8 font-bold text-gray-700 max-w-[250px]">
                    {item.name}
                  </td>
                  
                  {/* Reg No */}
                  <td className="py-7 px-4 text-center font-semibold text-gray-500">
                    {item.regNo}
                  </td>

                  {/* Payment Status (Bold Green) */}
                  <td className="py-7 px-4 text-center">
                    <span className="text-[#22c55e] font-extrabold text-lg">
                      {item.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-7 px-4 text-center font-bold text-gray-600">
                    {item.date}
                  </td>

                  {/* Amount */}
                  <td className="py-7 px-8 text-right font-extrabold text-gray-800 text-lg tracking-tight">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default NGOPayment;