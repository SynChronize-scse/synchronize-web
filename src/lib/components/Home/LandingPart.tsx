import Globe from "../Globe";

const LandingPart = () => {
  return (
    <>
      <div className="w-full h-[90vh] sm:h-screen flex flex-col  items-center relative overflow-hidden">
        <div className="relative h-full flex flex-col justify-between sm:justify-center items-center sm:text-base w-max select-none">
          <div className="relative sm:bottom-6">
            <img
              src="/images/moons.png"
              className="rotate-90 h-[100px] sm:h-[150px] opacity-50"
            />
          </div>

          {/* <h3 className="font-bold leading-none h-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]  text-[clamp(1.53rem,7.99vi+-0.47rem,5.92rem)]">
          SYNCHRONIZE'25
        </h3> */}
          <div className="flex flex-col">
            <h3 className=" sm:mt-10 z-10 font-bold leading-none tracking-wider h-[clamp(2rem,9vi+-0.6rem,7rem)]  text-[clamp(2rem,9vi+-0.6rem,7rem)]">
              SYNCHRONIZE'25
            </h3>

            <div className="relative z-10 flex flex-row items-center justify-center mt-4 w-full max-w-[90%] self-end">
              <img
                src="/images/star.png"
                className="w-10 h-10 sm:w-20 sm:h-20"
              />

              <div className="border-t border-primary-400 flex-1"></div>
              <span className="ml-3 uppercase text-primary-400 text-lg sm:text-xl whitespace-nowrap">
                ENTER THE COSMOS
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center sm:mt-40 py-24 sm:py-0">
            <button className="border border-primary-400 text-sm rounded-full px-3 py-2">
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

        <Globe className="w-[450px] sm:w-[500px] overflow-hidden aspect-square absolute -right-52 sm:-right-0 top-32 sm:top-20" />

        <img
          src="/images/saturn.png"
          className="hidden sm:block w-[250px] sm:w-[400px] z-[10000] overflow-visible aspect-square rotate-[70deg] absolute -left-24 -bottom-24 sm:-bottom-36"
        />
      </div>
      <img
        src="/images/saturn.png"
        className="w-[250px] sm:w-[400px] z-[10000] overflow-visible aspect-square rotate-[70deg] absolute -left-24 -bottom-24 sm:-bottom-36"
      />
    </>
  );
};

export default LandingPart;
