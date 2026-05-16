import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import shikshaFoundation from '../../assets/landingPageImage/shiksha-foundation.png'
import smileFoundation from '../../assets/landingPageImage/smile-foundation.png'
import educationImage from '../../assets/landingPageImage/eduation-image.png'
import pandaImage from '../../assets/landingPageImage/panda-image.png'
import swagathImage from '../../assets/landingPageImage/swagath-image.png'
import socialImage from '../../assets/landingPageImage/social-image.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TrustedNGOs = () => {
  const ngoData = [
    { id: 1, logo: shikshaFoundation, category: "Education", rating: "4.8" },
    { id: 2, logo: smileFoundation, category: "Children Welfare", rating: "4.7" },
    { id: 3, logo: educationImage, category: "Education", rating: "4.6" },
    { id: 4, logo: pandaImage, category: "Environment", rating: "4.6" },
    { id: 5, logo: swagathImage, category: "Women Empowerment", rating: "4.6" },
    { id: 6, logo: socialImage, category: "Social Welfare", rating: "4.9" },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-16 lg:px-24 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Trusted by 150+ leading NGOs
      </h2>

      <div className="relative max-w-[1200px] mx-auto px-4">
        
        {/* Navigation Buttons */}
        <button className="trust-prev absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-100 hover:scale-110 transition-all cursor-pointer">
          <ChevronLeft size={24} className="text-gray-600" />
        </button>
        
        <button className="trust-next absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-30 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-gray-100 hover:scale-110 transition-all cursor-pointer">
          <ChevronRight size={24} className="text-gray-600" />
        </button>

        <Swiper
          // 2. Modules me se Autoplay hata diya
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.trust-prev',
            nextEl: '.trust-next',
          }}
          pagination={{ clickable: true }}
          // 3. autoplay={{ delay: 3000 }} wali line delete kar di
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="!pb-16 !pt-4 px-2"
        >
          {ngoData.map((ngo) => (
            <SwiperSlide key={ngo.id}>
              <div className="bg-white border border-gray-100 rounded-2xl h-[180px] flex flex-col items-center justify-between p-3 shadow-[0px_3px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                
                <div className="w-full h-20 flex items-center justify-center">
                  <img 
                    src={ngo.logo} 
                    alt="NGO" 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>

                <div className="text-center">
                  <p className="text-gray-500 font-medium text-[15px] px-2 leading-tight">
                    {ngo.category}
                  </p>
                  <div className="flex items-center justify-center gap-1.5">
                    <Star size={20} fill="#FFD700" strokeWidth={0} />
                    <span className="text-xl font-bold text-gray-800">{ngo.rating}</span>
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

export default TrustedNGOs;
