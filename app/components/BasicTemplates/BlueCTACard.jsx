// import { ArrowRight } from "lucide-react";

// const BlueCTACard = () => {
//     return (
//       <div className="w-[360px] h-[190px] bg-blue-600 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
//         <div className="flex justify-between items-start">
//           {/* Overlapping Profile Avatars */}
//           <div className="flex items-center -space-x-2">
//             <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
//             <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
//             <img className="w-8 h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
//           </div>
          
//           {/* Clickable Action Circular Button */}
//           <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm cursor-pointer">
//             <ArrowRight size={18} />
//           </button>
//         </div>
  
//         <div>
//           <span className="text-[14px] font-medium text-white">Join with 5K other students</span>
//         </div>
//       </div>
//     );
//   };
  

//   export default BlueCTACard;


import { ArrowRight } from "lucide-react";

const BlueCTACard = () => {
  return (
    <div
      className="
        w-full sm:w-[320px] md:w-[360px]
        min-h-[160px] md:h-[190px]
        bg-blue-600 rounded-2xl
        p-4 sm:p-5 md:p-6
        flex flex-col justify-between
        shadow-lg
      "
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* Avatars */}
        <div className="flex items-center -space-x-2">
          <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
          <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
          <img className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-blue-600 object-cover" src="https://i.pravatar.cc/150?img=11" alt="student" />
        </div>

        {/* Button */}
        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-blue-600 shadow-sm cursor-pointer">
          <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* Bottom Text */}
      <div>
        <span className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-white leading-snug">
          Join with 5K other students
        </span>
      </div>
    </div>
  );
};

export default BlueCTACard;