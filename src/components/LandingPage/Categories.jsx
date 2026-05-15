import React from 'react';
// Swiper components aur styles import karein
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Icons import karein
import { 
  ChevronLeft, ChevronRight, 
  PlusSquare, GraduationCap, 
  Leaf, Venus, Users 
} from 'lucide-react';

const Categories = () => {
  const categories = [
    { id: 1, title: "Healthcare", icon: <PlusSquare size={40} className="text-blue-500" /> },
    { id: 2, title: "Education", icon: <GraduationCap size={40} className="text-gray-800" /> },
    { id: 3, title: "Environment", icon: <Leaf size={40} className="text-green-600" /> },
    { id: 4, title: "Women Empowerment", icon: <Venus size={40} className="text-pink-400" /> },
    { id: 5, title: "Children Welfare", icon: <Users size={40} className="text-orange-300" /> },
    { id: 6, title: "Animal Safety", icon: <PlusSquare size={40} className="text-red-500" /> }, // Extra for sliding
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Category</h2>

      {/* Main Container with Border and Shadow */}
      <div className="relative border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm">
        
        {/* Custom Navigation Buttons */}
        <button className="prev-btn absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button className="next-btn absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center justify-center h-[200px] bg-[#f2fff4] border border-[#dff6e3] rounded-3xl p-6 transition-transform hover:scale-105 cursor-pointer">
                {/* Icon Area */}
                <div className="mb-6">
                  {cat.icon}
                </div>
                {/* Title */}
                <h3 className="text-center font-bold text-gray-800 text-[15px] leading-tight">
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