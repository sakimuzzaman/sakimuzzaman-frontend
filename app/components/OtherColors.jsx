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
        px-4 sm:px-6 md:px-10 lg:px-[60px]
        py-6 sm:py-8 md:py-10 lg:py-[60px]
        gap-6 sm:gap-8 md:gap-10
      "
    >
      {/* Title */}
      <h3 className="font-semibold text-[20px] sm:text-[22px] md:text-2xl">
        Other Colors
      </h3>

      {/* Description */}
      <p className="text-[13px] sm:text-[14px] md:text-sm max-w-[600px] text-gray-700 leading-relaxed">
        Used to indicate errors or critical actions, these colors are essential
        for alerting users and drawing attention to important warnings.
      </p>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]
        "
      >
        <ColorBox
          bgValue="hsla(0, 91%, 50%, 1)"
          title="Red [500]"
          hsb="0 91 50"
          darkText
        />

        <OtherColorBox
          bgValue="linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)"
          title="Glow-Line-Horizontal"
          darkText
        />

        <OtherColorBox
          bgValue="linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)"
          title="Glow-Line-Vertical"
          darkText
        />

        <OtherColorBox
          bgValue="linear-gradient(-35deg, rgba(36, 102, 242, 0.7) 0%, rgba(36, 102, 242, 0) 80%)"
          title="Glow-Reflect-SM"
          darkText
        />

        {/* Special Shape Box */}
        <div className="flex justify-center items-center">
          <OtherColorBox
            title="Glow-Reflect-LG"
            darkText
            bgValue="radial-gradient(81.27% 74.72% at 50% 50%, #2466F2 0%, #2466F2 25%, rgba(36, 102, 242, 0) 100%)"
            className="
              w-[80px] h-[80px]
              sm:w-[100px] sm:h-[100px]
            "
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              WebkitClipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OtherColors;


