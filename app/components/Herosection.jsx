import Herobtn from "./Herobtn";

const Herosection = () => {
    return (
        <section className="
            mx-auto 
            bg-[#FFFFFF]
            flex flex-col items-center justify-center
            max-w-[1920px] 
            min-h-[664px] 
            px-[60px] 
            py-[200px] 
            gap-[48px] 
            opacity-100
        ">
            
            <Herobtn />

            <div className="flex justify-center items-center w-full">
    <p className="
        w-[934px] 
        h-[84px] 
        flex items-center justify-center
        whitespace-nowrap
        opacity-100 
        rotate-0
        uppercase
        text-center
        font-extrabold
        text-[120px] 
        leading-[1] 
        tracking-[0%]
        [font-family:'Neue_Power',sans-serif]
        [text-edge:cap]
    ">
        Color styles
    </p>
</div>
            
<div className="flex justify-center w-full">
    <p className="
        w-[800px] 
        max-w-[800px] 
        h-[48px] 
        opacity-100 
        rotate-0
        text-center
        font-normal
        text-[17px] 
        leading-[140%] 
        tracking-[0%]
        [font-family:'SF_Pro_Display',sans-serif]
        whitespace-nowrap
    ">
        These are the foundational colors used throughout the application's interface and design system. They define the <br /> visual language of the brand, ensuring consistency and accessibility across all touchpoints.
    </p>
</div>

        </section>
    );
};

export default Herosection;