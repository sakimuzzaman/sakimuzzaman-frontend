import AlphaColors from "../components/AlphaColors";
import Herosection from "../components/Herosection";
import NeutralColors from "../components/NeutralColors";
import OtherColors from "../components/OtherColors";
import PrimaryColors from "../components/PrimaryColors";
import Seperator from "../components/Seperator";


const ColorPage = () => {
    return (
        <>
        

        <Herosection />

        <Seperator>
        <div className="flex justify-start gap-[8px]">
        <span className="
          jusyify-start
          opacity-100 
          rotate-0
          font-normal 
          text-[17px] 
          leading-[100%] 
          tracking-[0%]
         ">
               Primary
         </span>
  </div>
        </Seperator>

        <PrimaryColors />

        <Seperator>
        <div className="flex justify-start gap-[8px]">
        <span className="
          jusyify-start
          opacity-100 
          rotate-0
          font-normal 
          text-[17px] 
          leading-[100%] 
          tracking-[0%]
         ">
               Neutral
         </span>
  </div>
        </Seperator>

        <NeutralColors />

        <Seperator>
        <div className="flex justify-start gap-[8px]">
        <span className="
          jusyify-start
          opacity-100 
          rotate-0
          font-normal 
          text-[17px] 
          leading-[100%] 
          tracking-[0%]
         ">
               Alpha
         </span>
  </div>
        </Seperator>

        <AlphaColors />

        <Seperator>
        <div className="flex justify-start gap-[8px]">
        <span className="
          jusyify-start
          opacity-100 
          rotate-0
          font-normal 
          text-[17px] 
          leading-[100%] 
          tracking-[0%]
         ">
               Others
         </span>
  </div>
        </Seperator>

        <OtherColors />

    </>
    );
};

export default ColorPage;