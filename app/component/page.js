import React from 'react';
import Herosection from '../components/Herosection';
import { heroData } from '../utils/data';
import Seperator from '../components/Seperator';

const ComponentPage = () => {
    return (
        <div>
            <Herosection {...heroData.components}/>

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
               Base Components
         </span>
            </Seperator>

        </div>
    );
};

export default ComponentPage;