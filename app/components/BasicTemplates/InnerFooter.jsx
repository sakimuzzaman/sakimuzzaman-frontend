

// "use client";


// import BlueCTACard from "./BlueCTACard";

// const InnerFooter = () => {
//   // Shared footer links
//   const footerLinks = ["Terms & conditions", "Refund policy", "Pricing", "Support"];

//   return (
//     <div className="w-full min-h-screen bg-[#050608] flex justify-center items-center p-4">
      
//       <div className="w-full max-w-[1472px] h-[1182px] border border-dashed border-purple-500/60 rounded-[5px] p-4 flex flex-col gap-4">
        
        
//         <div className="w-full h-[452px] bg-[#090a0c] rounded-lg px-14 py-12 flex flex-col justify-between border border-gray-800/50">
          
//           {/* Top content split between Left Text and Right Blue Card */}
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-[32px] font-semibold text-white tracking-tight">
//                 The Deep Work Blueprint
//               </h2>
//               <p className="text-[14px] text-gray-400 mt-2">
//                 Master Focus & Get More Done in Less Time
//               </p>
//             </div>

//             <BlueCTACard />
//           </div>

          
//           <div>
//             <hr className="border-gray-800 mb-8" />
//             <div className="flex justify-between items-center">
//               <span className="text-[13px] text-gray-500">
//                 © Copyright 2024, All Rights Reserved
//               </span>
//               <div className="flex items-center gap-8">
//                 {footerLinks.map((link, idx) => (
//                   <a key={idx} href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
//                     {link}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

        
//         <div className="w-full h-[682px] bg-[#090a0c] rounded-lg px-14 py-12 flex flex-col justify-between items-center border border-gray-800/50">
          
//           {/* Top/Middle Section (Centered Text and Card) */}
//           <div className="flex flex-col items-center justify-center flex-grow gap-8">
//             <div className="text-center">
//               <h2 className="text-[36px] font-semibold text-white tracking-tight">
//                 The Deep Work Blueprint
//               </h2>
//               <p className="text-[14px] text-gray-400 mt-2">
//                 Master Focus & Get More Done in Less Time
//               </p>
//             </div>

//             <BlueCTACard />
//           </div>

//           {/* Bottom centered links and copyright line */}
//           <div className="w-full">
//             <hr className="border-gray-800 mb-8" />
//             <div className="flex flex-col items-center gap-6">
//               <div className="flex items-center gap-8">
//                 {footerLinks.map((link, idx) => (
//                   <a key={idx} href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">
//                     {link}
//                   </a>
//                 ))}
//               </div>
//               <span className="text-[13px] text-gray-500">
//                 © Copyright 2024, All Rights Reserved
//               </span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default InnerFooter;



"use client";

import BlueCTACard from "./BlueCTACard";

const InnerFooter = () => {
  const footerLinks = ["Terms & conditions", "Refund policy", "Pricing", "Support"];

  return (
    <div className="w-full min-h-screen bg-[#050608] flex justify-center items-center p-4">
      
      <div className="w-full max-w-[1472px] border border-dashed border-purple-500/60 rounded-[5px] p-4 flex flex-col gap-4">
        
        {/* === TOP SECTION === */}
        <div className="w-full bg-[#090a0c] rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col justify-between border border-gray-800/50 gap-8">
          
          {/* Top Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            <div>
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white tracking-tight">
                The Deep Work Blueprint
              </h2>
              <p className="text-[13px] sm:text-[14px] text-gray-400 mt-2">
                Master Focus & Get More Done in Less Time
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BlueCTACard />
            </div>
          </div>

          {/* Bottom */}
          <div>
            <hr className="border-gray-800 mb-6 sm:mb-8" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              <span className="text-[12px] sm:text-[13px] text-gray-500 text-center md:text-left">
                © Copyright 2024, All Rights Reserved
              </span>

              <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
                {footerLinks.map((link, idx) => (
                  <a key={idx} href="#" className="text-[12px] sm:text-[13px] text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION === */}
        <div className="w-full bg-[#090a0c] rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12 flex flex-col justify-between items-center border border-gray-800/50 gap-10">
          
          {/* Center Content */}
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            
            <div>
              <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-white tracking-tight">
                The Deep Work Blueprint
              </h2>
              <p className="text-[13px] sm:text-[14px] text-gray-400 mt-2">
                Master Focus & Get More Done in Less Time
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BlueCTACard />
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full">
            <hr className="border-gray-800 mb-6 sm:mb-8" />
            
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {footerLinks.map((link, idx) => (
                  <a key={idx} href="#" className="text-[12px] sm:text-[13px] text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>

              <span className="text-[12px] sm:text-[13px] text-gray-500 text-center">
                © Copyright 2024, All Rights Reserved
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InnerFooter;
