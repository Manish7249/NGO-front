import { ShieldCheck, Eye, Lock, HandHeart, Heart } from 'lucide-react';

const WhySupportUs = () => {
  const benefits = [
    { id: 1, title: "Verified NGOs", desc: "All NGOs are carefully verified for transparency", icon: <ShieldCheck size={30} />, bgColor: "bg-[#e8f5e9]", iconColor: "text-[#1b5e20]" },
    { id: 2, title: "100% Transparent", desc: "Every donation is tracked and reported", icon: <Eye size={30} />, bgColor: "bg-[#fff8e1]", iconColor: "text-[#f57f17]" },
    { id: 3, title: "Secure Donations", desc: "Your donations are safe and protected", icon: <Lock size={30} />, bgColor: "bg-[#e8f5e9]", iconColor: "text-[#1b5e20]" },
    { id: 4, title: "Maximum Impact", desc: "Your support reaches those who need it the most", icon: <HandHeart size={30} />, bgColor: "bg-[#fff8e1]", iconColor: "text-[#f57f17]" }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      {/* 
          Main Light Green Box: 
          'p-8 md:p-12' se ab charo taraf (Top, Bottom, Left, Right) 
          ka gap ekdum barabar ho gaya hai.
      */}
      <div className="bg-[#f2fcf5] rounded-xl p-4 flex flex-col lg:flex-row items-center justify-between gap-4 relative overflow-visible">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[45%] pr-4">
          <h2 className="text-3xl font-bold text-[#333] mb-12">Why Support Through Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
            {benefits.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${item.bgColor} ${item.iconColor} flex items-center justify-center shrink-0 shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE DIVIDER */}
        <div className="hidden lg:block w-[1.5px] h-60 bg-gray-200"></div>

        {/* 
            RIGHT SIDE: 
            'min-h-[320px]' kiya hai taaki image aur card ke upar-niche 
            faltu gap na rahe aur border ke barabar dikhe.
        */}
        <div className="w-full lg:w-[52%] relative flex items-center min-h-[320px] mt-16 lg:mt-0">
          
          {/* Main Tilted Image */}
          <div className="absolute left-0 transform rotate-[-8deg] z-10">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600" 
              alt="Kids" 
              className="w-64 md:w-[320px] h-44 md:h-[220px] object-cover rounded-[2rem] shadow-2xl "
            />
          </div>

          {/* Impact Floating Card */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-50 flex flex-col items-center text-center w-56 md:w-[260px] z-20">
            
            <div className="absolute -top-10 w-20 h-20 bg-[#1cb14b] rounded-full flex items-center justify-center border-[8px] border-white shadow-xl text-white">
              <Heart fill="white" size={50} />
            </div>
            
            <div className="mt-6">
               <h4 className="text-xl md:text-[22px] font-bold text-[#1a1a1a] leading-tight px-2">
                 Together We’ve Impacted Over
               </h4>
               <p className="text-[#1cb14b] text-2xl md:text-3xl font-[900] mt-3">
                 10L+ Lives
               </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySupportUs;
