

const TypographySection = ({ item }) => {

    // This dynamically chooses the HTML tag (h1, h2, h3, etc.) based on the level
    const Tag = `h${item.level}`;

    return (
        <>
        <div 
      className="grid grid-cols-4 items-center px-14 py-8 border-b border-gray-200 gap-x-34"
    >
      {/* Column 1: Title and Font Info (Left Aligned) */}
      <div className="text-left">
        <Tag
          className="font-semibold text-gray-900 transition-all"
          style={{ fontSize: `${item.size}px` }}
        >
          {item.title}
        </Tag>
        <p className="text-[12px] text-gray-400 mt-2">Font Family</p>
        <p className="text-[13px] text-gray-700">{item.fontFamily}</p>
      </div>

      {/* Column 2: Weight (Right Aligned) */}
      <div className="">
        <p className="text-[12px] text-gray-400">Weight</p>
        <p className="text-[13px] text-gray-800 mt-2">{item.weight}</p>
      </div>

      {/* Column 3: Size (Right Aligned) */}
      <div className="">
        <p className="text-[12px] text-gray-400">Size</p>
        <p className="text-[13px] text-gray-800 mt-2">{item.size}</p>
      </div>

      {/* Column 4: Line Height (Right Aligned) */}
      <div className="">
        <p className="text-[12px] text-gray-400">Line Height</p>
        <p className="text-[13px] text-gray-800 mt-2">{item.lineHeight}</p>
      </div>
    </div>
        </>
    );
};

export default TypographySection;