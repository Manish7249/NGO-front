
import hero from "../../assets/landingPageImage/hero.png"; 

const Hero = () => {
  return (
    // Navbar Logo ke niche align karne ke liye pl-10
    // Right wall se chipkane ke liye pr-0
    // py-14 se upar-niche ka gap manage kiya hai
    <section className="bg-white overflow-hidden pl-10 pr-0 py-8 md:py-14">
      <div className="flex flex-col md:flex-row items-center w-full">
        
        {/* LEFT TEXT CONTENT - Width 35% rakha hai taaki image ke liye 65% jagah bache */}
        <div className="w-full md:w-[35%] flex flex-col items-start z-10">
          <h1 className="font-bold tracking-tight leading-[1.1]">
            <span className="text-[#1a1a1a] text-[32px] md:text-[42px] lg:text-[50px] block">
              Together,
            </span>
            <span className="text-[#22c55e] text-[32px] md:text-[42px] lg:text-[50px] block whitespace-nowrap">
              We Create Change.
            </span>
          </h1>
          
          <button className="mt-8 px-6 py-2.5 bg-[#22c55e] text-white font-bold rounded-md hover:bg-[#1ca850] transition-all text-[16px] shadow-sm">
            Donate Now
          </button>
        </div>

        {/* RIGHT IMAGE CONTENT - Iska width 65% kar diya hai size badhane ke liye */}
        <div className="w-full md:w-[65%] flex justify-end mt-12 md:mt-0">
          <div className="w-full flex justify-end">
            <img 
              src={hero} 
              alt="Volunteering Illustration" 
              // scale-125 se image kafi badi (extra 300px width/150px height feel) dikhegi
              // origin-right se image hamesha right wall se chipki rahegi
              className="w-full h-auto object-contain transform scale-110 md:scale-125 lg:scale-100 origin-right translate-x-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;