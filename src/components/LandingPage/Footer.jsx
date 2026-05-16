import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const footerData = [
    {
      title: "ABOUT US",
      links: ["About Smile", "Impact", "Reach & Presence", "Smilestones", "Privacy Policy"]
    },
    {
      title: "OUR WORK",
      links: ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response"]
    },
    {
      title: "CAMPAIGNS",
      links: ["Shiksha Na Ruke", "Health Cannot Wait", "She Can Fly", "Swabhiman", "Tayyari Kal Ki"]
    }
  ];

  return (
    <footer className="bg-[#05402a] text-white pt-20 pb-12 w-full font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 lg:px-28">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* LEFT SIDE: KHALI JAGAH (Future Logo ke liye) */}
          <div className="lg:col-span-2 hidden lg:block"></div>

          {/* RIGHT SIDE: LINKS (Exact 3 Columns) */}
          {footerData.map((section, idx) => (
            <div key={idx} className="z-10">
              <h3 className="font-bold text-[16px] mb-8 tracking-wider text-white uppercase">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i} className="flex items-start cursor-pointer group">
                    {/* Bullet point exactly like image */}
                    <span className="mr-3 text-[12px] mt-1 opacity-80 font-bold">•</span>
                    <span className="text-[15px] font-medium opacity-90 group-hover:underline">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- SOCIAL ICONS (Bottom Left) --- */}
        <div className="mt-10 flex gap-4">
          <SocialIconBox>
            <FaFacebookF />
          </SocialIconBox>
          
          <SocialIconBox>
            <FaLinkedinIn />
          </SocialIconBox>
          
          <SocialIconBox>
            <FaTwitter />
          </SocialIconBox>
          
          <SocialIconBox>
            <SiGmail />
          </SocialIconBox>
        </div>

      </div>
    </footer>
  );
};

// Social Icon Box - Updated to use React Icons as children
const SocialIconBox = ({ children }) => (
  <div className="bg-[#ffffff40] w-12 h-11 flex items-center justify-center rounded-lg cursor-pointer hover:bg-[#ffffff60] transition-all text-white text-xl">
    {children}
  </div>
);

export default Footer;
