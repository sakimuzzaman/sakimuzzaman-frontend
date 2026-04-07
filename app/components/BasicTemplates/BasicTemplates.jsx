
// import { lessonsData, moduleLessonsData } from "@/app/utils/data";
// import LessonItem from "./LesssionItem";
// import ModuleAccordion from "./ModuleAccordion";
// import TestimonialCard from "./TestimonialCard";
// import MiddleNavbar from "./MiddleNavbar";
// import InnerFooter from "./InnerFooter";

// const BasicTemplates = () => {
//   return (
//     <div className="px-14 py-10 bg-white min-h-screen">
//       {/* Page Header */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-bold text-gray-900">Basic Templates</h2>
//         <p className="text-[14px] text-gray-500 mt-2 max-w-4xl">
//           This is the main interaction color we use throughout the platform. It
//           represents the brand's identity and is consistently applied across
//           all touchpoints.
//         </p>
//       </div>

//       {/* Viewport Dark Container */}
//       <div className="bg-[#090a0c] rounded-3xl p-16 flex flex-col items-center gap-12">
//         {/* === SECTION 1: Lesson List === */}
//         <div className="border border-dashed border-purple-500/60 rounded-xl p-6 w-full max-w-[450px]">
//           {lessonsData.map((lesson, index) => (
//             <LessonItem key={index} {...lesson} />
//           ))}
//         </div>

        
//         <div className="border border-dashed border-purple-500/60 rounded-xl p-8 w-full max-w-[850px] grid grid-cols-2 gap-12 items-start">
          
//           {/* Default Closed on the left */}
//           <ModuleAccordion
//             title="Module 1: Foundations of Deep Work"
//             time="1.7h"
//             defaultOpen={false}
//           >
//             {moduleLessonsData.map((lesson, index) => (
//               <LessonItem key={index} {...lesson} />
//             ))}
//           </ModuleAccordion>

//           {/* Default Opened on the right */}
//           <ModuleAccordion
//             title="Module 1: Foundations of Deep Work"
//             time="1.7h"
//             defaultOpen={true}
//           >
//             {moduleLessonsData.map((lesson, index) => (
//               <LessonItem key={index} {...lesson} isActive={index === 0} />
//             ))}
//           </ModuleAccordion>
//         </div>

//         <TestimonialCard />

//          <MiddleNavbar />

//          <InnerFooter />

//       </div>
//     </div>
//   );
// };

// export default BasicTemplates;

"use client";

import { useState } from "react";
import { lessonsData, moduleLessonsData } from "@/app/utils/data";
import LessonItem from "./LesssionItem";
import ModuleAccordion from "./ModuleAccordion";
import TestimonialCard from "./TestimonialCard";
import MiddleNavbar from "./MiddleNavbar";
import InnerFooter from "./InnerFooter";

const BasicTemplates = () => {
  const [isDark, setIsDark] = useState(true); // Default to Dark mode

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`px-14 py-10 min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0B0C10]" : "bg-[#F4F5F7]"}`}>
      {/* Page Header */}
      <div className="mb-12">
        <h2 className={`text-2xl font-bold transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
          Basic Templates
        </h2>
        <p className={`text-[14px] mt-2 max-w-4xl transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          This is the main interaction color we use throughout the platform. It
          represents the brand's identity and is consistently applied across
          all touchpoints.
        </p>
      </div>

      {/* Viewport Container */}
      <div className={`rounded-3xl p-16 flex flex-col items-center gap-12 transition-colors duration-300 ${isDark ? "bg-[#090a0c]" : "bg-white shadow-sm"}`}>
        
        {/* === SECTION 1: Lesson List === */}
        <div className={`border border-dashed border-purple-500/60 rounded-xl p-6 w-full max-w-[450px] transition-colors ${isDark ? "" : "bg-white"}`}>
          {lessonsData.map((lesson, index) => (
            <LessonItem key={index} {...lesson} isDark={isDark} />
          ))}
        </div>

        {/* === SECTION 2: Accordion List === */}
        <div className={`border border-dashed border-purple-500/60 rounded-xl p-8 w-full max-w-[850px] grid grid-cols-2 gap-12 items-start transition-colors ${isDark ? "" : "bg-white"}`}>
          {/* Default Closed on the left */}
          <ModuleAccordion
            title="Module 1: Foundations of Deep Work"
            time="1.7h"
            defaultOpen={false}
            isDark={isDark}
          >
            {moduleLessonsData.map((lesson, index) => (
              <LessonItem key={index} {...lesson} isDark={isDark} />
            ))}
          </ModuleAccordion>

          {/* Default Opened on the right */}
          <ModuleAccordion
            title="Module 1: Foundations of Deep Work"
            time="1.7h"
            defaultOpen={true}
            isDark={isDark}
          >
            {moduleLessonsData.map((lesson, index) => (
              <LessonItem key={index} {...lesson} isActive={index === 0} isDark={isDark} />
            ))}
          </ModuleAccordion>
        </div>

        {/* Prop drills `isDark` to Testimonial */}
        <TestimonialCard isDark={isDark} />

        {/* MiddleNavbar can trigger state toggle */}
        <MiddleNavbar isDark={isDark} onToggleTheme={toggleTheme} />

        {/* Footer */}
        <InnerFooter isDark={isDark} />

      </div>
    </div>
  );
};

export default BasicTemplates;