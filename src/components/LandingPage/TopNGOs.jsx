// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// // Icons
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// // Logos (Bas path check kar lena ya placeholders use karna)
// const NGO_DATA = [
//   {
//     id: 1,
//     name: "Shiksha Foundation",
//     category: "Education",
//     rating: 4.8,
//     logo: "https://via.placeholder.com/150x80?text=Shiksha+Logo", // Yaha apni image import karke lagao
//   },
//   {
//     id: 2,
//     name: "Smile Foundation",
//     category: "Children Welfare",
//     rating: 4.7,
//     logo: "https://via.placeholder.com/150x80?text=Smile+Logo",
//   },
//   {
//     id: 3,
//     name: "Teach For India",
//     category: "Education",
//     rating: 4.6,
//     logo: "https://via.placeholder.com/150x80?text=Teach+Logo",
//   },
//   {
//     id: 4,
//     name: "WWF India",
//     category: "Environment",
//     rating: 4.5,
//     logo: "https://via.placeholder.com/150x80?text=WWF+Logo",
//   },
//   {
//     id: 5,
//     name: "Goonj",
//     category: "Disaster Relief",
//     rating: 4.9,
//     logo: "https://via.placeholder.com/150x80?text=Goonj+Logo",
//   }
// ];

// const TopNGOs = () => {
//   return (
//     <section className="px-6 md:px-16 lg:px-24 py-12 bg-white">
//       <h2 className="text-3xl font-bold text-gray-700 mb-8">Top Verified NGO's</h2>

//       {/* Slider Outer Container */}
//       <div className="relative border border-gray-100 rounded-3xl p-8 shadow-sm">
        
//         {/* Navigation Buttons (Absolute Positioned) */}
//         <button className="ngo-prev absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
//           <ChevronLeft size={24} className="text-gray-600" />
//         </button>
        
//         <button className="ngo-next absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all">
//           <ChevronRight size={24} className="text-gray-600" />
//         </button>

//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             prevEl: '.ngo-prev',
//             nextEl: '.ngo-next',
//           }}
//           spaceBetween={25}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           className="pb-4"
//         >
//           {NGO_DATA.map((ngo) => (
//             <SwiperSlide key={ngo.id}>
//               {/* Individual Card */}
//               <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                
//                 {/* Logo Area */}
//                 <div className="w-full h-32 flex items-center justify-center mb-6 bg-gray-50 rounded-2xl overflow-hidden p-4">
//                   <img src={ngo.logo} alt={ngo.name} className="max-w-full max-h-full object-contain" />
//                 </div>

//                 {/* Info Area */}
//                 <div className="text-center">
//                   <h3 className="text-lg font-bold text-gray-800 mb-1">{ngo.name}</h3>
//                   <p className="text-gray-500 text-sm mb-3">{ngo.category}</p>
                  
//                   {/* Rating Area */}
//                   <div className="flex items-center justify-center gap-2">
//                     <Star size={18} fill="#FFD700" className="text-yellow-400" />
//                     <span className="font-bold text-gray-700">{ngo.rating}</span>
//                   </div>
//                 </div>

//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TopNGOs;









import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Icons
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// NGO Data with Placeholders
const NGO_DATA = [
  { id: 1, name: "Shiksha Foundation", category: "Education", rating: 4.8, logo: "https://via.placeholder.com/200x100?text=Shiksha" },
  { id: 2, name: "Smile Foundation", category: "Children Welfare", rating: 4.7, logo: "https://via.placeholder.com/200x100?text=Smile" },
  { id: 3, name: "Teach For India", category: "Education", rating: 4.6, logo: "https://via.placeholder.com/200x100?text=Teach" },
  { id: 4, name: "WWF India", category: "Environment", rating: 4.6, logo: "https://via.placeholder.com/200x100?text=WWF" },
  { id: 5, name: "Goonj", category: "Disaster Relief", rating: 4.9, logo: "https://via.placeholder.com/200x100?text=Goonj" }
];

const TopNGOs = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Top Verified NGO's</h2>

      {/* Main Container with Border */}
      <div className="relative border border-gray-100 rounded-[2rem] p-6 md:p-10 shadow-sm">
        
        {/* Navigation Buttons */}
        <button className="ngo-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-all">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button className="ngo-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-all">
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.ngo-prev',
            nextEl: '.ngo-next',
          }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-2 py-4"
        >
          {NGO_DATA.map((ngo) => (
            <SwiperSlide key={ngo.id}>
              {/* Individual Card */}
              <div className="bg-white border border-gray-200 rounded-[1.8rem] p-5 shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between min-h-[300px]">
                
                {/* 1. LOGO AREA - Fixed Height taaki card size same rahe */}
                <div className="w-full h-32 flex items-center justify-center bg-gray-50 rounded-2xl p-4 mb-4">
                  <img 
                    src={ngo.logo} 
                    alt={ngo.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>

                {/* 2. TEXT CONTENT AREA */}
                <div className="text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-1">
                    {ngo.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {ngo.category}
                  </p>
                  
                  {/* 3. RATING AREA - Ekdum bottom me alignment */}
                  <div className="flex items-center gap-1.5 mt-auto">
                    {/* Golden Star Icon */}
                    <Star 
                        size={20} 
                        strokeWidth={0} 
                        fill="#ffca28" 
                        className="drop-shadow-sm"
                    />
                    <span className="font-bold text-gray-700 text-lg">
                      {ngo.rating}
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopNGOs;