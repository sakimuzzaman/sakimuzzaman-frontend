"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ModuleAccordion = ({ title, time, defaultOpen = false, children, isDark = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-4 md:py-5 gap-4 border-b text-left transition-colors cursor-pointer ${isDark ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="flex-1 min-w-0">
          <h4 className={`text-[14px] sm:text-[15px] md:text-[16px] font-semibold truncate transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
            {title}
          </h4>
          <p className={`text-[12px] sm:text-[13px] mt-1 transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {time} of video
          </p>
        </div>

        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp size={20} className={isDark ? "text-white" : "text-gray-900"} />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="mt-4 pl-2 sm:pl-4 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default ModuleAccordion;