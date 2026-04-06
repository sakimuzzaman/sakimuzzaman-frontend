

const BodySection = ({ item }) => {
    return (
        <div className="border-b border-blue-50/50 py-10 px-14">
      {/* Top Level Title */}
      <div className="mb-6">
        <h3 className="text-[14px] font-semibold text-gray-900">
          {item.title}
        </h3>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-4 gap-x-32">
        {/* Font Family Column */}
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">
            Font Family
          </span>
          <span className="text-[14px] text-gray-800 mt-1 font-medium">
            {item.fontFamily}
          </span>
        </div>

        {/* Weight Column */}
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">
            Weight
          </span>
          <span className="text-[14px] text-gray-800 mt-1 font-medium">
            {item.weight}
          </span>
        </div>

        {/* Size Column */}
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">
            Size
          </span>
          <span className="text-[14px] text-gray-800 mt-1 font-medium">
            {item.size}
          </span>
        </div>

        {/* Line Height Column */}
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">
            Line Height
          </span>
          <span className="text-[14px] text-gray-800 mt-1 font-medium">
            {item.lineHeight}
          </span>
        </div>
      </div>
    </div>
    );
};

export default BodySection;