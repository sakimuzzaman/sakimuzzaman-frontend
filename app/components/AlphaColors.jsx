import ColorBox from "./ColorBox";

const AlphaColors = () => {
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
        Alpha Colors
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
        <ColorBox bgValue="hsla(0, 0%, 100%, 0.3)" title="White [30%]" hsb="0 0 100 30%" darkText />
        <ColorBox bgValue="hsla(221, 85%, 95%, 0)" title="Blue [0%]" hsb="0 0 100 0%" darkText />
        <ColorBox bgValue="hsla(210, 3%, 90%, 0.3)" title="Gray [30%]" hsb="0 0 100 30%" darkText />

        <ColorBox bgValue="hsla(221, 85%, 90%, 1.25)" title="Blue [15%]" hsb="0 0 100 15%" darkText={false} />
        <ColorBox bgValue="hsla(0, 0%, 0%, 0.2)" title="Black [20%]" hsb="0 0 100 20%" darkText={false} />
      </div>
    </section>
  );
};

export default AlphaColors;