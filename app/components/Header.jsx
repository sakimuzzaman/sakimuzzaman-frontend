import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <nav className="flex justify-between bg-[#FFFFFF] rounded-t-[15px] px-[60px] py-[24px]">
            <p>PPA</p>
            <Image 
                src='/headerimg.png'
                width={35}
                height={35}
                alt="Header image" 
                />
            <span>
                <Link href="">Style Guide</Link>
            </span>
        </nav>
    );
};

export default Header;