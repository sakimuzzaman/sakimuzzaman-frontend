import ColorBox from "./ColorBox";

const NeutralColors = () => {
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
        animate-fadeIn
      "
    >
      {/* Title */}
      <h3 className="font-semibold text-[20px] sm:text-[22px] md:text-2xl">
        Neutral Colors
      </h3>

      {/* Description */}
      <p className="text-[13px] sm:text-[14px] md:text-sm max-w-[600px] text-gray-700 leading-relaxed">
        These are the base colors for backgrounds, text, and other UI elements.
        They create balance and ensure readability in the interface.
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
        {[
          { bg: "hsla(0, 0%, 100%, 1)", title: "Neutral [0]", hsb: "0 0 100", dark: true },
          { bg: "hsla(206, 1%, 97%, 1)", title: "Neutral [50]", hsb: "206 2 96", dark: true },
          { bg: "hsla(207, 1%, 94%, 1)", title: "Neutral [100]", hsb: "207 3 90", dark: true },
          { bg: "hsla(210, 2%, 90%, 1)", title: "Neutral [200]", hsb: "208 4 85", dark: true },
          { bg: "hsla(207, 4%, 85%, 1)", title: "Neutral [300]", hsb: "209 5 70", dark: false },
          { bg: "hsla(210, 4%, 70%, 1)", title: "Neutral [400]", hsb: "211 9 55", dark: false },
          { bg: "hsla(214, 17%, 28%, 1)", title: "Neutral [500]", hsb: "214 13 37", dark: false },
          { bg: "hsla(216, 21%, 20%, 1)", title: "Neutral [600]", hsb: "216 19 23", dark: false },
          { bg: "hsla(216, 30%, 13%, 1)", title: "Neutral [700]", hsb: "216 30 13", dark: false },
          { bg: "hsla(218, 15%, 8%, 1)", title: "Neutral [800]", hsb: "218 32 9", dark: false },
          { bg: "hsla(219, 24%, 4%, 1)", title: "Neutral [900]", hsb: "219 35 5", dark: false },
          { bg: "hsla(0, 0%, 0%, 1)", title: "Neutral [950]", hsb: "0 0 0", dark: false },
        ].map((color, index) => (
          <div
            key={index}
            className="
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:-translate-y-1
            "
          >
            <ColorBox
              bgValue={color.bg}
              title={color.title}
              hsb={color.hsb}
              darkText={color.dark}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeutralColors;