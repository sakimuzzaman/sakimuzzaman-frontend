import React from 'react';

const Herobtn = ({text}) => {
    return (
        <button className="
        flex items-center justify-center
        w-[128px] 
        h-[36px] 
        px-[12px] 
        py-[8px] 
        gap-[8px] 
        border-[1px] 
        rounded-[12px] 
        opacity-100 
        rotate-0
        bg-[#2466F2]
    ">
        <span className='text-[#FFF]'> {text}</span>
    </button>
    );
};

export default Herobtn;