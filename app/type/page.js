
import Herosection from "../components/Herosection";
import Seperator from "../components/Seperator";
import TypographySection from "../components/TypographySection";
import { heroData, typographyData } from "../utils/data";


const TypePage = () => {
    return (
        <>
            <Herosection {...heroData.type}/>

            <Seperator>
            <span className="
                    jusyify-start
                    opacity-100 
                    rotate-0
                    font-normal 
                    text-[17px] 
                    leading-[100%] 
                    tracking-[0%]
                 ">
               Headings
         </span>
            </Seperator>


            <div className="bg-white shadow-sm">

            {typographyData.map((item) => (
        <TypographySection key={item.level} item={item} />
      ))}

          </div>

        </>
    );
};

export default TypePage;