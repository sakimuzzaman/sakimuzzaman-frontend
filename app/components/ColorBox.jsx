const ColorBox = ({ bgValue, title, hsb, darkText = false }) => {
  return (
    <div
      className={`
    flex flex-col justify-end
    w-full
    aspect-[180/110] 
    p-3 sm:p-4 lg:p-[20px]
    gap-1 sm:gap-2
    rounded-[12px]
    border-[1px] border-[#E0E3E5]
    ${darkText ? "text-black" : "text-white"}
`}
      style={{ backgroundColor: bgValue }}
    >
      <h3
        className="
                font-medium 
                text-[18px] 
                leading-[120%] 
                [font-family:'SF_Pro_Display',sans-serif]
            "
      >
        {title}
      </h3>

      <span
        className="
                font-normal 
                text-[14px] 
                opacity-80 
                leading-[100%] 
                [font-family:'SF_Pro_Display',sans-serif]
            "
      >
        HSB: {hsb}
      </span>
    </div>
  );
};

export default ColorBox;
