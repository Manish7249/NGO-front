import heroBg from "../../assets/landingPageImage/hero.png"; 

const Hero = () => {
  return (
    // 'mb-20' niche margin ke liye, 'h-screen' poori screen cover karne ke liye
    <section className="relative w-full h-[90vh] md:h-screen flex items-center overflow-hidden mb-20">
      
      {/* 1. BACKGROUND IMAGE - Object cover ensures it fills the screen */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hands Together Background" 
          className="w-full h-full object-cover brightness-[0.75] contrast-110" 
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. CONTENT AREA - Left Aligned with Navbar Logo */}
      <div className="relative z-10 w-full px-10 md:px-16 lg:px-24 pt-20">
        <div className="max-w-[850px]">
          
          {/* HEADING - Tight tracking and specific sizes */}
          <h1 className="font-extrabold tracking-tighter leading-[1.05] mb-4">
            <span className="text-white text-[48px] md:text-[65px] lg:text-[85px] block">
              Together,
            </span>
            <span className="text-[#22c55e] text-[48px] md:text-[65px] lg:text-[85px] block">
              We Create Change.
            </span>
          </h1>

          {/* DESCRIPTION - Clean white subtext */}
          <p className="text-white/95 text-[17px] md:text-[19px] lg:text-[22px] font-medium leading-[1.4] max-w-[650px] mb-12">
            Together, we can build a better tomorrow for everyone. 
            Your support brings hope, changes lives and creates a brighter future.
          </p>

          {/* BUTTONS GROUP - Standard sizing and alignment */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Donate Now - Solid Green */}
            <button className="px-10 py-3.5 bg-[#22c55e] text-white font-bold rounded-lg text-[17px] 
                               hover:bg-green-600 transition-all active:scale-95 shadow-md">
              Donate Now
            </button>
            
            {/* Explore Campaign - Outline with thick border */}
            <button className="px-10 py-3.5 bg-transparent border-[2.5px] border-white text-white font-bold 
                               rounded-lg text-[17px] hover:bg-white/15 transition-all active:scale-95">
              Explore Campaign
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
