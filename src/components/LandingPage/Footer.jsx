// import React from 'react';
// import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "ABOUT US",
//       links: ["About Smile", "Impact", "Reach & Presence", "Smilestones", "Privacy Policy"]
//     },
//     {
//       title: "OUR WORK",
//       links: ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response"]
//     },
//     {
//       title: "CAMPAIGNS",
//       links: ["Shiksha Na Ruke", "Health Cannot Wait", "She Can Fly", "Swabhiman", "Tayyari Kal Ki"]
//     },
//     {
//       title: "GET INVOLVED",
//       links: ["Individual Support", "Corporate Partnerships", "Volunteer", "School Partnerships", "Careers"]
//     },
//     {
//       title: "RESOURCE CENTRE",
//       links: ["Annual Report", "Newsletter", "Stories of Change", "The Smile Blog", "Films"]
//     }
//   ];

//   return (
//     <footer className="relative bg-[#82d67a] pt-32 pb-10 mt-20">
      
//       {/* --- WAVY TOP DESIGN (SVG) --- */}
//       {/* Ye part "same to same" waves banayega */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
//         <svg className="relative block w-full h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.43,56.97,28.64,115.63,55.15,178.6,58.73,71.21,4,139.58-15,205.3-43.58,61.12-26.54,119.53-56.76,177.3-84.58V0Z" fill="#ffffff" opacity="0.3"></path>
//           <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fill="#ffffff" opacity="0.5"></path>
//           <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
//         </svg>
//       </div>

//       {/* --- FOOTER CONTENT GRID --- */}
//       <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-gray-800">
//         {footerLinks.map((section, idx) => (
//           <div key={idx} className="z-10">
//             <h3 className="font-bold text-[16px] mb-5 tracking-wide uppercase">
//               {section.title}
//             </h3>
//             <ul className="space-y-3">
//               {section.links.map((link, i) => (
//                 <li key={i} className="flex items-start group cursor-pointer">
//                   {/* Dot symbol exactly like image */}
//                   <span className="mr-2 text-[10px] mt-1.5">•</span>
//                   <span className="text-[14px] font-medium group-hover:underline transition-all">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* --- SOCIAL MEDIA ICONS --- */}
//       <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 mt-16 flex flex-wrap gap-4 z-10">
//         <a href="#" className="bg-white p-2 rounded-lg text-[#82d67a] hover:scale-110 transition-transform shadow-md">
//           <Facebook size={28} fill="currentColor" stroke="none" />
//         </a>
//         <a href="#" className="bg-white p-2 rounded-lg text-[#82d67a] hover:scale-110 transition-transform shadow-md">
//           <Linkedin size={28} fill="currentColor" stroke="none" />
//         </a>
//         <a href="#" className="bg-white p-2 rounded-lg text-[#82d67a] hover:scale-110 transition-transform shadow-md">
//           <Twitter size={28} fill="currentColor" stroke="none" />
//         </a>
//         <a href="#" className="bg-white p-2 rounded-lg text-[#82d67a] hover:scale-110 transition-transform shadow-md">
//           <Mail size={28} fill="currentColor" stroke="none" />
//         </a>
//       </div>

//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';

// const Footer = () => {
//   const footerLinks = [
//     {
//       title: "ABOUT US",
//       links: ["About Smile", "Impact", "Reach & Presence", "Smilestones", "Privacy Policy"]
//     },
//     {
//       title: "OUR WORK",
//       links: ["Education", "Health", "Livelihood", "Women Empowerment", "Disaster Response"]
//     },
//     {
//       title: "CAMPAIGNS",
//       links: ["Shiksha Na Ruke", "Health Cannot Wait", "She Can Fly", "Swabhiman", "Tayyari Kal Ki"]
//     },
//     {
//       title: "GET INVOLVED",
//       links: ["Individual Support", "Corporate Partnerships", "Volunteer", "School Partnerships", "Careers"]
//     },
//     {
//       title: "RESOURCE CENTRE",
//       links: ["Annual Report", "Newsletter", "Stories of Change", "The Smile Blog", "Films"]
//     }
//   ];

//   return (
//     <footer className="relative bg-[#82d67a] pt-28 md:pt-40 pb-10 mt-20 w-full overflow-hidden">
      
//       {/* --- WAVY TOP DESIGN (Multi-layered SVG) --- */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
//         <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] md:w-full h-[80px] md:h-[150px]">
//           {/* Layer 1 - Lightest Wave */}
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.43,56.97,28.64,115.63,55.15,178.6,58.73,71.21,4,139.58-15,205.3-43.58,61.12-26.54,119.53-56.76,177.3-84.58V0Z" fill="#ffffff" opacity="0.3"></path>
//           {/* Layer 2 - Medium Wave */}
//           <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28V0Z" fill="#ffffff" opacity="0.5"></path>
//           {/* Layer 3 - Solid Wave */}
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29Z" fill="#ffffff"></path>
//         </svg>
//       </div>

//       {/* --- FOOTER LINKS GRID --- */}
//       <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 z-10 relative">
//         {footerLinks.map((section, idx) => (
//           <div key={idx}>
//             <h3 className="font-bold text-[14px] md:text-[16px] mb-5 tracking-wide text-gray-900 uppercase">
//               {section.title}
//             </h3>
//             <ul className="space-y-3">
//               {section.links.map((link, i) => (
//                 <li key={i} className="flex items-start group cursor-pointer text-gray-800">
//                   <span className="mr-2 text-[10px] mt-1.5">•</span>
//                   <span className="text-[13px] md:text-[14px] font-medium group-hover:underline">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* --- SOCIAL MEDIA ICONS (Raw SVG - No Library Needed) --- */}
//       <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mt-16 flex flex-wrap gap-4 z-10 relative">
//         {/* Facebook */}
//         <SocialIcon path="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//         {/* LinkedIn */}
//         <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
//         {/* Twitter */}
//         <SocialIcon path="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//         {/* Mail */}
//         <SocialIcon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
//       </div>

//     </footer>
//   );
// };

// // Simple reusable SVG icon wrapper
// const SocialIcon = ({ path }) => (
//   <div className="bg-white p-2 rounded-lg text-[#82d67a] hover:scale-110 transition-all cursor-pointer shadow-md">
//     <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d={path} />
//     </svg>
//   </div>
// );

// export default Footer;






import React from 'react';

const Footer = () => {
  const footerLinks = [
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
    },
    {
      title: "GET INVOLVED",
      links: ["Individual Support", "Corporate Partnerships", "Volunteer", "School Partnerships", "Careers"]
    },
    {
      title: "RESOURCE CENTRE",
      links: ["Annual Report", "Newsletter", "Stories of Change", "The Smile Blog", "Films"]
    }
  ];

  return (
    <footer className="relative bg-[#82d67a] pt-32 md:pt-44 pb-12 mt-20 w-full overflow-hidden">
      
      {/* --- PREMIUM WAVY TOP --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[150%] md:w-full h-[70px] md:h-[130px]">
          {/* Layer 1: Lightest White */}
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.43,56.97,28.64,115.63,55.15,178.6,58.73,71.21,4,139.58-15,205.3-43.58,61.12-26.54,119.53-56.76,177.3-84.58V0Z" fill="#ffffff" opacity="0.3"></path>
          {/* Layer 2: Main Solid White */}
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-[1400px] mx-auto px-10 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 z-10 relative">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-[15px] md:text-[17px] mb-6 tracking-wide text-[#2d2d2d] uppercase">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link, i) => (
                <li key={i} className="flex items-center group cursor-pointer text-[#3a3a3a]">
                  {/* Bullet point exactly like screenshot */}
                  <span className="mr-2 text-[12px] font-black">•</span>
                  <span className="text-[14px] md:text-[15px] font-semibold group-hover:underline transition-all">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* --- SOCIAL MEDIA ICONS (SVG - Zero Error Version) --- */}
      <div className="max-w-[1400px] mx-auto px-10 md:px-16 lg:px-24 mt-16 flex gap-4 z-10 relative">
        {/* Facebook */}
        <SocialBox svgPath="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        {/* LinkedIn */}
        <SocialBox svgPath="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
        {/* Twitter */}
        <SocialBox svgPath="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        {/* Mail */}
        <SocialBox svgPath="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
      </div>

    </footer>
  );
};

// Reusable Icon Wrapper (Pure SVG to avoid lucide errors)
const SocialBox = ({ svgPath }) => (
  <div className="bg-white p-2.5 rounded-xl text-[#82d67a] hover:scale-110 transition-all cursor-pointer shadow-md flex items-center justify-center w-11 h-11">
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d={svgPath} />
    </svg>
  </div>
);

export default Footer;