import AboutSection from "$lib/components/Home/AboutSection";
import LandingSection from "$lib/components/Home/LandingSection";
import SectionHeader from "$lib/components/Home/SectionHeader";
import SponsorUs from "$lib/components/Home/SponsorUs";
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

  // #9A4444
  // #004225
  const events = [
    {
      title: "Technical Events",
      description:
        "The SynChronize festival will be renowned for its enormous selection of scientific and technology-related activities and contests. These experiences provide you ...",
      src: "https://images.unsplash.com/photo-1566954979172-eaba308acdf0",
      color: "#606C5D",
      path: "/events/technical",
    },
    {
      title: "Fun Events",
      description:
        "We at SynChronize are bringing you some lighthearted fun events to dispel the stereotype of a technical festival....",
      src: "https://images.unsplash.com/photo-1643508522322-5bbc32b80dd0",
      color: "#977F6D",
    },
    {
      title: "Cultural Events",
      description:
        "This is an opportunity of a lifetime to meet and enjoy the performances and Open Mics of some of the best artists among the participants to get you moving to their music and dance...",
      src: "https://images.unsplash.com/photo-1643508522322-5bbc32b80dd0",
      color: "#C2491D",
    },
    {
      title: "Tech Tank",
      description:
        "These effectively link the audience and unite those who share similar interests. It is a setting where individuals may express their views and grow as individuals. It offers fantastic networking chances...",
      src: "https://images.unsplash.com/photo-1643508522322-5bbc32b80dd0",
      color: "#977F6D",
    },
    {
      title: "Tech Tank",
      description:
        "These would include informational and motivational talks from eminent personalities from the field of computer science. Guest lecture is expected to be insightful and a great....",
      src: "https://images.unsplash.com/photo-1643508522322-5bbc32b80dd0",
      color: "#31511E",
    },
  ];

  // #FFF0D1
  // #977F6D
  // #BBACAF

  return (
    <>
      {/* Top Message Bar */}
      <div className="relative z-[10000] flex items-center justify-center w-full h-fit py-1 text-white bg-[rgba(10,10,10,0.404)] backdrop-blur-[10px]">
        <p className="text-center text-xs sm:text-sm px-1 sm:px-0">
          Interested in partnering with us? Check out our{" "}
          <a
            href="#sponsor-us"
            className="font-bold cursor-pointer hover:underline"
          >
            Sponsor Us
          </a>{" "}
          section below!
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 justify-center bg-dark-400 text-white">
        <LandingSection />
        <AboutSection className="mt-24" />

        {/* Heading */}
        <SectionHeader
          title="Events"
          className="self-start font-[AdieuRegular] px-3 sm:px-20"
        />
        <StackedCards items={events} className="font-[AdieuRegular]" />

        <SponsorUs id="sponsor-us" />

        {!hasHWA && showHwaPrompt && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-dark-400 p-3 rounded-lg max-w-80 sm:max-w-96 flex flex-col">
                <h1 className="text-xl font-bold">
                  Hardware Acceleration is Disabled
                </h1>
                <p className="text-sm mt-4">
                  This site is optimized for hardware acceleration. Please
                  enable it in your browser settings.
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
    </>
  );
};

export default Home;
