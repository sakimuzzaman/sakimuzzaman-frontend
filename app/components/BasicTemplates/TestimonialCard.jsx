import { Play } from "lucide-react"; 

const TestimonialCard = ({ isDark = true }) => {
  return (
    <div className={`border border-dashed border-purple-500/60 rounded-xl p-6 w-full max-w-[650px] grid grid-cols-2 gap-4 transition-colors ${isDark ? "" : "bg-white"}`}>
      
      {/* Testimonial Text */}
      <div className={`rounded-2xl p-6 flex flex-col justify-between min-h-[250px] border transition-colors ${isDark ? "bg-[#12141a] border-gray-800" : "bg-white border-gray-100 shadow-sm"}`}>
        <div>
          <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden mb-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <p className={`text-[12px] leading-relaxed transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity.
          </p>
        </div>
        <div>
          <h5 className={`text-[13px] font-semibold transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>Alex Carter</h5>
          <p className="text-[11px] text-gray-500">Freelance Designer</p>
        </div>
      </div>

      {/* Testimonial Video */}
      <div className={`rounded-2xl h-[250px] overflow-hidden relative border group cursor-pointer transition-colors ${isDark ? "bg-[#12141a] border-gray-800" : "bg-white border-gray-100 shadow-sm"}`}>
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
          alt="Deep Work setting" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Play size={18} className="text-blue-500 fill-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-6 left-6">
          <h5 className="text-[13px] font-semibold text-white">Alex Carter</h5>
          <p className="text-[11px] text-gray-200">Freelance Designer</p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;