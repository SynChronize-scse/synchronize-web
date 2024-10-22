import Globe from "../Globe";

const LandingPart = () => {
  return (
    <div className="w-full h-screen flex flex-col  items-center relative">
      <div className="relative flex flex-col justify-center items-center sm:text-base w-max select-none">
        <div className="relative bottom-6">
          <img
            src="/images/moons.png"
            className="rotate-90 h-[150px] opacity-50"
          />
        </div>

        {/* <h3 className="font-bold leading-none h-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]  text-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]">
          SYNCHRONIZE'25
        </h3> */}
        <h3 className="mt-10 z-10 font-bold leading-none tracking-wider h-[clamp(1.53rem,9vi+-0.6rem,7rem)]  text-[clamp(1.53rem,9vi+-0.6rem,7rem)]">
          SYNCHRONIZE'25
        </h3>

        <div className="relative z-10 flex flex-row items-center justify-center mt-4 w-full max-w-[90%] self-end">
          <img src="/images/star.png" className="w-20 h-20" />
          <div className="border-t border-primary-400 flex-1"></div>
          <span className="ml-3 uppercase text-primary-400 text-xl whitespace-nowrap">
            ENTER THE COSMOS
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button className="border border-primary-400 text-sm rounded-full px-3 py-2 mt-40">
            Register Now
          </button>

          <div className="mt-12 relative flex flex-col items-center">
            <div className="relative bg-[#303030] w-[2px] h-10 mb-2">
              <div className="absolute bg-[#C3DB62] w-[2px] h-1/2 animate-bounceMore"></div>
            </div>
            <span className="text-[#808080] text-xs uppercase">SCROLL</span>
          </div>
        </div>
      </div>

      <Globe className="w-[500px] overflow-hidden aspect-square absolute -right-0 top-20" />

      <img
        src="/images/saturn.png"
        className="w-[400px] aspect-square rotate-[70deg] absolute -left-24 -bottom-36"
      />
    </div>
  );
};

export default LandingPart;
