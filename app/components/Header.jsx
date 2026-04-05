import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between bg-[#FFFFFF] rounded-t-[15px] px-[60px] py-[24px]">
      <div
        className="
            w-[31px] 
            h-[20px] 
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
            h-[20px] 
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

export default Header;
