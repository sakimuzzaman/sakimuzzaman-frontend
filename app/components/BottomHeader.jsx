import Image from "next/image";
import Link from "next/link";

const BottomHeader = () => {
  return (
    <nav className="flex justify-between bg-[#FFFFFF] rounded-b-[25px] px-[60px] py-[24px] border-t border-gray-300">
      <div
        className="
            w-[31px] 
            h-[32px] 
            flex items-center justify-center
            opacity-100 
            rotate-0
            "
      >
        <p
          className="
            font-medium 
            text-[17px] 
            leading-[100%] 
            tracking-[0%]
            [font-family:'SF_Pro_Display',sans-serif]
         "
        >
          PPA
        </p>
      </div>

      <Image src="/headerimg.png" width={35} height={35} alt="Header image" />

      <span className="opacity-100 rotate-0">
        <Link
          href="/style-guide"
          className="
            inline-flex items-center justify-center
            w-[82px] 
            h-[32px] 
            text-[17px] 
            font-normal 
            whitespace-nowrap
            leading-[100%] 
            tracking-[0%]
            [font-family:'SF_Pro_Display',sans-serif]
            hover:opacity-80 transition-opacity
          "
        >
          Style Guide
        </Link>
      </span>
    </nav>
  );
};

export default BottomHeader;
