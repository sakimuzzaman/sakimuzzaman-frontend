import ColorBox from "./ColorBox";

const PrimaryColors = () => {
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
        Primary Colors
      </h3>

      {/* Description */}
      <p className="text-[13px] sm:text-[14px] md:text-sm max-w-[600px] text-gray-700 leading-relaxed">
        This is the main interaction color we use throughout the platform. It
        represents the brand's identity and is consistently applied across all
        touchpoints.
      </p>

      {/* Color Grid */}
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
        <ColorBox bgValue="hsla(221, 85%, 95%, 1)" title="Primary [50]" hsb="220 9 100" darkText={true} />
        <ColorBox bgValue="hsla(213, 19%, 85%, 1)" title="Primary [100]" hsb="220 21 10" darkText={true} />
        <ColorBox bgValue="hsla(214, 31%, 80%, 1)" title="Primary [200]" hsb="220 34 100" darkText={true} />
        <ColorBox bgValue="hsla(216, 46%, 70%, 1)" title="Primary [300]" hsb="220 51 100" darkText={true} />
        <ColorBox bgValue="hsla(218, 60%, 60%, 1)" title="Primary [400]" hsb="220 68 100" darkText={false} />
        <ColorBox bgValue="hsla(221, 89%, 50%, 1)" title="Primary [500]" hsb="220 88 100" darkText={false} />

        <ColorBox bgValue="hsla(221, 89%, 85%, 1)" title="Primary [600]" hsb="220 89 85" darkText={false} />
        <ColorBox bgValue="hsla(221, 90%, 70%, 1)" title="Primary [700]" hsb="220 88 70" darkText={false} />
        <ColorBox bgValue="hsla(221, 91%, 60%, 1)" title="Primary [800]" hsb="220 89 50" darkText={false} />
        <ColorBox bgValue="hsla(221, 90%, 30%, 1)" title="Primary [900]" hsb="220 90 30" darkText={false} />
        <ColorBox bgValue="hsla(221, 87%, 15%, 1)" title="Primary [950]" hsb="220 87 15" darkText={false} />
      </div>
    </section>
  );
};

export default PrimaryColors;