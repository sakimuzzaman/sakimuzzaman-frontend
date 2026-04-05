import Herosection from "../components/Herosection";
import Seperator from "../components/Seperator";
import { heroData } from "../utils/data";


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
        </>
    );
};

export default TypePage;