import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ShieldPlus, GraduationCap, Leaf, Venus, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const Categories = () => {
  const categories = [
    { id: 1, title: "Healthcare", icon: <ShieldPlus size={60} strokeWidth={1.5} />, color: "text-[#0095ff]" },
    { id: 2, title: "Education", icon: <GraduationCap size={60} strokeWidth={1.5} />, color: "text-[#1a1a1a]" },
    { id: 3, title: "Environment", icon: <Leaf size={60} strokeWidth={1.5} />, color: "text-[#00a800]" },
    { id: 4, title: "Women Empowerment", icon: <Venus size={60} strokeWidth={1.5} />, color: "text-[#e972cc]" },
    { id: 5, title: "Children Welfare", icon: <Users size={60} strokeWidth={1.5} />, color: "text-[#f2b38c]" },
    { id: 6, title: "Social Welfare", icon: <ShieldPlus size={60} strokeWidth={1.5} />, color: "text-blue-400" },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-6 relative">
      {/* Title */}
      <h2 className="text-[42px] font-bold text-[#2d2d2d] mb-10">Category</h2>

      {/* Slider Wrapper */}
      <div className="relative">
        
        {/* CUSTOM ARROWS 
            - Floating outside with subtle shadow
        */}
        <button className="prev-cat absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button className="next-cat absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-all">
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-cat',
            nextEl: '.next-cat',
          }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          // YE IMPORTANT HAI: !pb-14 se niche ki jagah badhegi taaki SHADOW NA KATE
          className="!pb-14 !pt-2 px-2"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id} className="h-auto">
              {/* Individual Card 
                  - bg-[#f9fff9] and border-[#e8f5e9] for that soft green tint
                  - rounded-[2.5rem] for the specific corner radius
                  - Custom shadow property for the 'full' look
              */}
              <div className="bg-[#f9fff9] border border-[#e8f5e9] rounded-[2.5rem] h-[230px] flex flex-col items-center justify-center p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all cursor-pointer">
                {/* Icon Section */}
                <div className={`${cat.color} mb-6`}>
                  {cat.icon}
                </div>
                {/* Text Section */}
                <h3 className="text-center font-bold text-[#1a1a1a] text-lg leading-tight">
                  {cat.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
