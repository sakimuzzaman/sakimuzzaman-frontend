const OtherColorBox = ({ bgValue, title, darkText= true }) => {
    return (
      <div 
        style={{ background: bgValue }} 
        className={`
    flex flex-col justify-end
    w-full
    aspect-[180/110] 
    p-3 sm:p-3 lg:p-[6px]
    gap-1 sm:gap-2
    rounded-[12px]
    border-[1px] border-[#E0E3E5]
    ${darkText ? "text-black" : "text-white"}
`}
      >
        
        {title}
      </div>
    );
  };

  export default OtherColorBox;