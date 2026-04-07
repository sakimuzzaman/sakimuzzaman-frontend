// "use client";

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react"; // Imported ChevronUp

// const ModuleAccordion = ({ title, time, defaultOpen = false, children }) => {
//   // 1. Set the initial state using defaultOpen prop
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className="w-full">
//       {/* 2. Changed header into a clickable button to toggle state */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex justify-between items-center w-full pb-4 border-b border-gray-800 text-left outline-none"
//       >
//         <div>
//           <h4 className="text-[14px] font-semibold text-white">{title}</h4>
//           <p className="text-[12px] text-gray-400 mt-1">{time} of video</p>
//         </div>
//         {isOpen ? (
//           <ChevronUp size={18} className="text-white" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-400" />
//         )}
//       </button>

//       {/* 3. The content is revealed if the state is Open */}
//       {isOpen && <div className="mt-4 flex flex-col">{children}</div>}
//     </div>
//   );
// };

// export default ModuleAccordion;

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ModuleAccordion = ({ title, time, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex justify-between items-center w-full
          py-4 md:py-5
          gap-4
          border-b border-gray-800
          text-left
        "
      >
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white truncate">
            {title}
          </h4>
          <p className="text-[12px] sm:text-[13px] text-gray-400 mt-1">
            {time} of video
          </p>
        </div>

        {/* Icon */}
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp size={20} className="text-white" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="mt-4 pl-2 sm:pl-4 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default ModuleAccordion;