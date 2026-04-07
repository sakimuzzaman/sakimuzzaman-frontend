
const Herobtn = ({ text }) => {
    return (
      <button
        className="
          flex items-center justify-center
          min-w-[180px]
          h-[52px]
          px-[24px]
          py-[12px]
          gap-[8px]
          rounded-[18px]
          border border-[#5a9aff]
          shadow-[0_0_15px_rgba(36,102,242,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]
          cursor-pointer
          transition-all
          duration-300
          hover:shadow-[0_0_25px_rgba(36,102,242,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]
          hover:scale-105
        "
        style={{
          background: `linear-gradient(
            180deg,
            #5b9bf5 0%,
            #2466F2 30%,
            #1a4fd4 60%,
            #0a1a5c 100%
          )`,
        }}
      >
        <span className="text-[#FFF] text-[16px] font-medium tracking-wide">
          {text}
        </span>
      </button>
    );
  };
  
  export default Herobtn;