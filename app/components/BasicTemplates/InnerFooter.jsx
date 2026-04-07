"use client";

import BlueCTACard from "./BlueCTACard";

const InnerFooter = ({ isDark = true }) => {
  const footerLinks = ["Terms & conditions", "Refund policy", "Pricing", "Support"];

  return (
    <div className={`w-full flex justify-center items-center p-4 transition-colors ${isDark ? "bg-[#050608]" : "bg-[#F4F5F7]"}`}>
      <div className="w-full max-w-[1472px] border border-dashed border-purple-500/60 rounded-[5px] p-4 flex flex-col gap-4">
        
        {/* === TOP SECTION (Horizontal Layout) === */}
        <div className={`w-full rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col justify-between border gap-8 transition-colors ${isDark ? "bg-[#090a0c] border-gray-800/50" : "bg-white border-gray-100 shadow-sm"}`}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h2 className={`text-[24px] sm:text-[28px] md:text-[32px] font-semibold tracking-tight transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
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

          <div>
            <hr className={`mb-6 sm:mb-8 transition-colors ${isDark ? "border-gray-800" : "border-gray-100"}`} />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-[12px] sm:text-[13px] text-gray-500 text-center md:text-left">
                © Copyright 2024, All Rights Reserved
              </span>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
                {footerLinks.map((link, idx) => (
                  <a key={idx} href="#" className={`text-[12px] sm:text-[13px] transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM SECTION (Centered Layout) === */}
        <div className={`w-full rounded-lg px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-10 md:py-12 flex flex-col justify-between items-center border gap-10 transition-colors ${isDark ? "bg-[#090a0c] border-gray-800/50" : "bg-white border-gray-100 shadow-sm"}`}>
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div>
              <h2 className={`text-[26px] sm:text-[30px] md:text-[36px] font-semibold tracking-tight transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
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

          <div className="w-full">
            <hr className={`mb-6 sm:mb-8 transition-colors ${isDark ? "border-gray-800" : "border-gray-100"}`} />
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {footerLinks.map((link, idx) => (
                  <a key={idx} href="#" className={`text-[12px] sm:text-[13px] transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"}`}>
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
