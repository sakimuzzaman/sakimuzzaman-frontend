

const Seperator = ({ children }) => {
    return (
        <div className="
            flex items-center justify-start
            w-full max-w-[1920px] 
            h-[52px] 
            px-[60px] 
            py-[16px] 
            gap-[8px] 
           
            rotate-0
           
            bg-[#F5F6F7/50]
        ">
            <div className="flex items-center gap-[8px]">
                {children}
            </div>
        </div>
    );
};

export default Seperator;