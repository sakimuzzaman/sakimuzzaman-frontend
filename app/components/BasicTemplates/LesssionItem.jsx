import { Play } from 'lucide-react';

const LessonItem = ({ title, duration, isActive = false, hasPreview = false, isDark = true }) => {
  return (
    <div className={`flex items-center justify-between py-4 border-b last:border-0 w-full transition-colors ${isDark ? "border-gray-800" : "border-gray-100"}`}>
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isActive ? (isDark ? "bg-white" : "bg-blue-600") : (isDark ? "bg-gray-800" : "bg-gray-100")
        }`}>
          <Play size={14} className={`${isActive ? (isDark ? "text-blue-500 fill-blue-500" : "text-white fill-white") : "text-gray-400"}`} />
        </div>
        <span className={`text-[14px] font-medium transition-colors ${isDark ? "text-white" : "text-gray-800"}`}>
          {title}
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        {hasPreview && (
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-full transition-colors ${isDark ? "text-white bg-gray-800" : "text-gray-800 bg-gray-100"}`}>
            Preview
          </span>
        )}
        <span className={`text-[13px] w-10 text-right transition-colors ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {duration}
        </span>
      </div>
    </div>
  );
};

export default LessonItem;

