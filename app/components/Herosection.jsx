import Herobtn from "./Herobtn";


const Herosection = ({ title, description, buttonText }) => {
    return (
      <section className="mx-auto bg-[#FFFFFF] flex flex-col items-center justify-center max-w-[1920px] min-h-[664px] px-[60px] py-[200px] gap-[48px]">
        
        <Herobtn text={buttonText} />
  
        <div className="flex justify-center items-center w-full">
          <p className="text-[120px] font-extrabold uppercase text-center">
            {title}
          </p>
        </div>
  
        <div className="flex justify-center w-full">
          <p className="text-[17px] text-center max-w-[800px]">
            {description}
          </p>
        </div>
  
      </section>
    );
  };
  
  export default Herosection;