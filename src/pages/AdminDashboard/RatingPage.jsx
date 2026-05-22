import { Search, Star } from 'lucide-react';

const RatingPage = () => {
  const ratingsData = [
    { id: 1, donor: "Rahul sharma", ngo: "Green Earth Foundation", score: 5 },
    { id: 2, donor: "Priya ghjss", ngo: "Shiksha Foundation", score: 3 },
    { id: 3, donor: "Ruru choudhary", ngo: "Education for All", score: 2 },
    { id: 4, donor: "Tanya ghi", ngo: "Health and Hope Foundation", score: 2 },
    { id: 5, donor: "Farhana bhat", ngo: "Women Empowerment Trust", score: 2 },
  ];

  return (
    <div className="animate-fadeIn pb-10 font-sans text-left">
      
      {/* 1. DOUBLE SEARCH BARS */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 px-2">
        {/* Donor Search */}
        <div className="relative w-full max-w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Donar name" 
            className="w-full py-3.5 pl-12 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.03)] outline-none focus:border-green-400 transition-all text-gray-600 font-medium" 
          />
        </div>

        {/* NGO Search */}
        <div className="relative w-full max-w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="NGO name" 
            className="w-full py-3.5 pl-12 pr-4 bg-white border border-gray-200 rounded-xl shadow-[inset_0px_2px_4px_rgba(0,0,0,0.03)] outline-none focus:border-green-400 transition-all text-gray-600 font-medium" 
          />
        </div>
      </div>

      {/* 2. RATING TABLE CARD */}
      <div className="bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="text-gray-700 font-bold text-[17px] border-b border-gray-50">
                <th className="py-8 px-6">Donar name</th>
                <th className="py-8 px-6">NGO name</th>
                <th className="py-8 px-6 text-center">Rating</th>
                <th className="py-8 px-6">Feedback</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 font-medium">
              {ratingsData.map((item, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 px-6 font-bold text-gray-800 text-[16px]">{item.donor}</td>
                  <td className="py-8 px-6 font-bold text-gray-700 text-[16px]">{item.ngo}</td>
                  
                  {/* Rating Stars Logic */}
                  <td className="py-8 px-6">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star 
                          key={idx} 
                          size={18} 
                          className={idx < item.score ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </td>

                  {/* Feedback Text */}
                  <td className="py-8 px-6 text-sm md:text-base leading-relaxed max-w-[350px]">
                    Very Transparent NGO,Regular Updates and impact is visible
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

export default RatingPage;