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


            <div className="bg-white rounded-xl shadow-sm">

      {/* Heading 1 */}
      <div className="flex justify-between items-center px-8 py-8 border-b border-gray-200">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Heading 1
          </h2>
          <p className="text-[12px] text-gray-400 mt-2">
            Font Family
          </p>
          <p className="text-[13px] text-gray-700">
            SF Pro Display
          </p>
        </div>

        <div className="grid grid-cols-3 gap-24 min-w-[500px] text-right">
          <div>
            <p className="text-[12px] text-gray-400">Weight</p>
            <p className="text-[13px] text-gray-800 mt-2">
              Regular, Medium
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Size</p>
            <p className="text-[13px] text-gray-800 mt-2">
              52
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Line Height</p>
            <p className="text-[13px] text-gray-800 mt-2">
              115%
            </p>
          </div>
        </div>
      </div>

      {/* Heading 2 */}
      <div className="flex justify-between items-center px-8 py-8 border-b border-gray-200">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Heading 2
          </h2>
          <p className="text-[12px] text-gray-400 mt-2">
            Font Family
          </p>
          <p className="text-[13px] text-gray-700">
            SF Pro Display
          </p>
        </div>

        <div className="grid grid-cols-3 gap-24 min-w-[500px] text-right">
          <div>
            <p className="text-[12px] text-gray-400">Weight</p>
            <p className="text-[13px] text-gray-800 mt-2">
              Medium
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Size</p>
            <p className="text-[13px] text-gray-800 mt-2">
              40
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Line Height</p>
            <p className="text-[13px] text-gray-800 mt-2">
              115%
            </p>
          </div>
        </div>
      </div>

      {/* Heading 3 */}
      <div className="flex justify-between items-center px-8 py-8 border-b border-gray-200">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Heading 3
          </h2>
          <p className="text-[12px] text-gray-400 mt-2">
            Font Family
          </p>
          <p className="text-[13px] text-gray-700">
            SF Pro Display
          </p>
        </div>

        <div className="grid grid-cols-3 gap-24 min-w-[500px] text-right">
          <div>
            <p className="text-[12px] text-gray-400">Weight</p>
            <p className="text-[13px] text-gray-800 mt-2">
              Medium
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Size</p>
            <p className="text-[13px] text-gray-800 mt-2">
              28
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Line Height</p>
            <p className="text-[13px] text-gray-800 mt-2">
              115%
            </p>
          </div>
        </div>
      </div>

      {/* Heading 4 */}
      <div className="flex justify-between items-center px-8 py-8">
        <div>
          <h2 className="text-[20px] font-semibold text-gray-900">
            Heading 4
          </h2>
          <p className="text-[12px] text-gray-400 mt-2">
            Font Family
          </p>
          <p className="text-[13px] text-gray-700">
            SF Pro Display
          </p>
        </div>

        <div className="grid grid-cols-3 gap-24 min-w-[500px] text-right">
          <div>
            <p className="text-[12px] text-gray-400">Weight</p>
            <p className="text-[13px] text-gray-800 mt-2">
              Regular
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Size</p>
            <p className="text-[13px] text-gray-800 mt-2">
              24
            </p>
          </div>

          <div>
            <p className="text-[12px] text-gray-400">Line Height</p>
            <p className="text-[13px] text-gray-800 mt-2">
              135%
            </p>
          </div>
        </div>
      </div>

    </div>

        </>
    );
};

export default TypePage;