import AboutSection from "$lib/components/Home/AboutSection";
import LandingSection from "$lib/components/Home/LandingSection";
import StackedCards from "$lib/components/Home/StackedCards";
import { useEffect, useState } from "react";

const Home = () => {
  const [hasHWA, setHasHWA] = useState<boolean>(true);
  const [showHwaPrompt, setShowHwaPrompt] = useState<boolean>(true);

  useEffect(() => {
    const checkHWA = () => {
      // create a test function for both "default" drawing and forced software
      const test = (force = false) => {
        // Firefox (at lest on macOS) doesn't accelerate OffscreenCanvas
        const canvas = document.createElement("canvas");
        // willReadFrequently will force software rendering
        const ctx = canvas.getContext("2d", { willReadFrequently: force });
        ctx?.moveTo(0, 0), ctx?.lineTo(120, 121); // HWA is bad at obliques
        ctx?.stroke();
        return ctx?.getImageData(0, 0, 200, 200).data.join();
      };
      // check that both return different results
      return test(true) !== test(false);
    };

    if (!checkHWA()) {
      console.warn("[Hardware acceleration is disabled.]");
      setHasHWA(() => false);
    } else {
      console.log("[Hardware acceleration is enabled.]");
      setHasHWA(() => true);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-10 justify-center bg-dark-400 text-white">
      <LandingSection />
      <AboutSection className="mt-24" />
      <StackedCards />

      {!hasHWA && showHwaPrompt && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-dark-400 p-3 rounded-lg max-w-80 sm:max-w-96 flex flex-col">
              <h1 className="text-xl font-bold">
                Hardware Acceleration is Disabled
              </h1>
              <p className="text-sm mt-4">
                This site is optimized for hardware acceleration. Please enable
                it in your browser settings.
              </p>
              <button
                onClick={() => setShowHwaPrompt(false)}
                className="mt-4 text-primary-400 rounded-md self-center"
              >
                [Close]
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
