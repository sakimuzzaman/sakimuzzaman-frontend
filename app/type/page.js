
import Link from "next/link";
import BodySection from "../components/BodySection";
import Herosection from "../components/Herosection";
import Seperator from "../components/Seperator";
import TypographySection from "../components/TypographySection";
import { bodyTypographyData, heroData, typographyData } from "../utils/data";


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

            <Link
                href="https://font.download/font/sf-pro-display"
                target="_blank"
                rel="noopener noreferrer"
              >
          <div className="bg-[#FFFFFF] shadow-sm">

                  {typographyData.map((item) => (
                    <TypographySection
                        key={item.level} item={item} />
                  ))}

          </div>
        </Link>
            

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
                 Body
              </span>
            </Seperator>
              
              
            <div className="bg-[#FFFFFF] shadow-sm">

            {bodyTypographyData.map((item, index) => (
              <BodySection key={index} item={item} />
            ))}


          </div>

        </>
    );
};

export default TypePage;