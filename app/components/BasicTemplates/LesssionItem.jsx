
import { Play } from 'lucide-react';

const LessonItem = ({ title, duration, isActive = false, hasPreview = false }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-blue-800 last:border-1 w-full">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? "bg-white" : "bg-gray-800"}`}>
        <Play size={14} className={isActive ? "text-blue-500 fill-blue-500" : "text-gray-400"} />
      </div>
      <span className="text-[14px] text-white font-medium">{title}</span>
    </div>
    <div className="flex items-center gap-4">
      {hasPreview && (
        <span className="text-[11px] font-semibold text-white bg-gray-800 px-3 py-1 rounded-full">
          Preview
        </span>
      )}
      <span className="text-[13px] text-gray-400 w-10 text-right">{duration}</span>
    </div>
  </div>
  );
};

export default LessonItem;

