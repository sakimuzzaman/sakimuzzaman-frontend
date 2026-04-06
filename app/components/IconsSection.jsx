
import {
    Play,
    Lightbulb,
    Brain,
    CheckCircle,
    Route,
    ChevronUp,
    PieChart,
    Sun,
    Moon,
    Contrast,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ArrowRight
  } from "lucide-react";
  
  const IconCard = ({ icon: Icon, label, filled = false }) => {
    return (
      
      <div 
        className="w-20 h-20 bg-gray-100 border border-gray-200 rounded-xl shadow-sm hover:shadow transition-shadow 
                   grid grid-rows-[1fr_auto] items-center justify-items-center gap-1 p-3"
      >
   
        <div className="flex items-center justify-center">
          <Icon
            size={16}
            className="text-gray-800"
            fill={filled ? "currentColor" : "none"}
            strokeWidth={filled ? 1.5 : 2}
          />
        </div>
        
        {/* Label Row */}
        <span className="text-xs text-gray-500 font-medium text-center px-1">
          {label}
        </span>
      </div>
    );
  };
  
  export default function IconsSection() {
    return (
      <div className="p-12 bg-[#FFFFFF] min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <p className="text-xm">8 Icons</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Fill Icons
            </h2>
            <div className="flex flex-wrap  gap-x-2 gap-y-6">
              <IconCard icon={Play}  label="Play" filled />
              <IconCard icon={Lightbulb} label="Bulb" filled />
              <IconCard icon={Brain} label="Brain" filled />
              <IconCard icon={CheckCircle} label="Check Filled" filled />
              <IconCard icon={Route} label="Route" filled />
              <IconCard icon={ChevronDown} label="Caret Down" filled />
              <IconCard icon={ChevronUp} label="Caret Up" filled />
              <IconCard icon={PieChart} label="Manager Pie" filled />
              <IconCard icon={Sun} label="Sun" filled />
              <IconCard icon={Moon} label="Moon" filled />
              <IconCard icon={Contrast} label="Contrast" half-filled />
            </div>
          </div>
   
          <div>
            <p>4 Icons</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Line Icons
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-6">
              <IconCard icon={ChevronDown} label="Chevron Down" />
              <IconCard icon={ChevronLeft} label="Chevron Left" />
              <IconCard icon={ChevronRight} label="Chevron Right" />
              <IconCard icon={ArrowRight} label="Arrow Right" />
            </div>
          </div>
        </div>
      </div>
    );
  }