import Herosection from "../components/Herosection";
import Seperator from "../components/Seperator";
import { heroData } from "../utils/data";


const IconPage = () => {
    return (
        <>
            <Herosection {...heroData.icons}/>

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
               Icons
         </span>
            </Seperator>

        </>
    );
};

export default IconPage;