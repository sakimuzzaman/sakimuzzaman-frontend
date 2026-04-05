import React from 'react';
import ColorBox from './ColorBox';
import OtherColorBox from './OtherColorBox';

const OtherColors = () => {
    return (
        <section
      className="
            mx-auto
            bg-[#FFFFFF]
            flex flex-col
            w-full max-w-[1920px] 
            h-[416px] 
            p-[60px] 
            gap-[40px] 
            opacity-100 
            rotate-0
        "
    >
      <h3 className="font-semibold text-2xl">Alpha Colors</h3>
      <p className="text-sm">
        Used to indicate errors or critical actions, these colors are essential
        for alerting users and drawing attention to important warnings.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-[22px]">
        <ColorBox
          bgValue="hsla(0, 91%, 50%, 1)"
          title="White [30%]"
          hsb="0 0 100 30%"
          darkText={true}
        />
        <OtherColorBox
          bgValue="linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)"  
          title="Glow-Line-Horizontal"
          
          darkText={true}
        />

        <OtherColorBox
          bgValue="linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)"  
          title="Glow-Line-Horizontal"
          
          darkText={true}
        />

        <OtherColorBox
        bgValue="linear-gradient(-35deg, rgba(36, 102, 242, 0.7) 0%, rgba(36, 102, 242, 0) 80%)" 
        title="Glow-Reflect-SM" 
        darkText={true}
        />

        <OtherColorBox
        title="Glow-reflect-LG"
        darkText={true}
        
        bgValue="radial-gradient(81.27% 74.72% at 50% 50%, #2466F2 0%, #2466F2 25%, rgba(36, 102, 242, 0) 100%)"
        style={{
            display: 'inline-block',
            width: '100px', 
            height: '100px', 
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            WebkitClipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            margin: '10px'
        }}
        />

      </div>
    </section>
    );
};

export default OtherColors;