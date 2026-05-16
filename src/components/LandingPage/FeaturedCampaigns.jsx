import { MoveRight } from 'lucide-react'; // Icon match karne ke liye

const FeaturedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=500",
      category: "Children Welfare",
      tagStyles: "bg-[#fde2e4] text-[#e57373]", // Light pinkish
      title: "Nutrition For Children",
      desc: "Help us fight hunger and provide nutritious meals",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542601906-973be1f9f255?auto=format&fit=crop&q=80&w=500",
      category: "Environment",
      tagStyles: "bg-[#c8e6c9] text-[#4caf50]", // Light green
      title: "Plant a Billion Trees",
      desc: "Join us in making India greener and healthier for future",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500",
      category: "Healthcare",
      tagStyles: "bg-[#f8bbd0] text-[#e91e63]", // Light magenta
      title: "Healthcare For All",
      desc: "Provide medical care and health facilities to those who need it",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500",
      category: "Education",
      tagStyles: "bg-[#fff9c4] text-[#fbc02d]", // Light yellow
      title: "Education for every child",
      desc: "Help us provide quality education to underprivileged children",
    }
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-6 bg-white">
      {/* Heading - Without Blue Underline */}
      <div className="mb-14">
        <h2 className="text-[36px] md:text-[45px] font-bold text-[#1a1a1a] tracking-tight">
          Featured Campaigns
        </h2>
      </div>

      {/* Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col h-full">
            
            {/* Image Container */}
            <div className="relative h-35 w-full">
              <img 
                src={camp.image} 
                alt={camp.title} 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge - Overlapping the border */}
              <div className={`absolute -bottom-4 left-3 px-4 py-1.5 rounded-xl font-bold text-[13px] z-10 shadow-sm ${camp.tagStyles}`}>
                {camp.category}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 pt-8 flex flex-col flex-grow">
              <h3 className="text-[18px] font-bold text-[#000] mb-2 leading-tight">
                {camp.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-6 font-medium">
                {camp.desc}
              </p>

              {/* Action Link at Bottom */}
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[#2bb64a] font-bold text-[16px] hover:translate-x-1 transition-all duration-300">
                  Donate Now <MoveRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
