import campaignImg from "../../assets/landingPageImage/shiksha-image.png"; 

const CampaignBanner = () => {
  return (
    // Section wall-to-wall hai, koi rounded corners nahi
    <section className="w-full relative overflow-hidden h-[220px] md:h-[300px] lg:h-[350px] bg-[#1a1a1a]">
      
      {/* 1. Background Image - Right side me aligned */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={campaignImg} 
          alt="Campaign" 
          // object-right ensure karega ki bache ka chehra saaf dikhe
          className="w-full h-full object-cover object-right lg:object-[right_center]"
        />
      </div>

      {/* 2. SOLID BLACK SLANTED OVERLAY - 'Side sarka diya' width kam karke */}
      <div 
        className="absolute inset-0 bg-[#1a1a1a] w-full md:w-[55%] lg:w-[42%] z-10"
        style={{ 
          // Sharp slant angle as per design
          clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)' 
        }}
      ></div>

      {/* 3. CONTENT AREA - Text aur Button black part ke andar */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 text-white">
        
        {/* Title: Size chhota kiya hai jaisa tune manga tha (36px desktop par) */}
        <h2 className="text-[22px] md:text-[30px] lg:text-[36px] font-bold leading-tight tracking-tight whitespace-nowrap">
          Shiksha Foundation
        </h2>
        
        {/* Description: 2 lines me wrapping with smaller font */}
        <p className="text-[14px] md:text-[17px] lg:text-[19px] font-medium mt-2 leading-snug opacity-95 max-w-[200px] md:max-w-[350px] lg:max-w-[420px]">
          Empowering lives through the light of <br /> education
        </p>
        
        {/* Donate Now Button - Thoda compact aur exact green */}
        <button className="mt-6 w-fit px-7 py-2 bg-[#44a02e] hover:bg-[#3d8d28] text-white font-bold text-lg rounded-lg transition-all shadow-md active:scale-95">
          Donate Now
        </button>
      </div>

    </section>
  );
};

export default CampaignBanner;
