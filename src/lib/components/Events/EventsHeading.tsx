import { useState, useEffect } from "react";
import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EventsHeading = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {};

  const options: IParticlesProps["options"] = {
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: window?.innerWidth > 768 ? 50 : 10,
        limit: {
          mode: "wait",
          value: window?.innerWidth > 768 ? 200 : 50,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { max: 0.7, min: 0.3 },
        animation: {
          enable: true,
          speed: 0.1,
          sync: false,
        },
      },
      size: {
        value: { max: 1, min: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "parallax",
          parallax: {
            enable: true,
            force: 40,
            smooth: 10,
          },
        },
        resize: {
          enable: true,
        },
      },
    },
    emitters: [
      {
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.4,
        },
        rate: {
          delay: 0.1,
          quantity: 1,
        },
        position: {
          x: 0,
          y: 0,
        },
        size: {
          width: 100,
          height: 0,
        },
      },
    ],
    preset: "stars",
  };
  return (
    <div className="overflow-hidden relative">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute top-0 bottom-0 h-full w-full z-0 bg-[#111111]"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <div className="font-[AdieuRegular] flex justify-center items-center bg-dark-400 py-20">
        <Link to="/">
          <ChevronLeft className="w-7 h-7 sm:w-10 sm:h-10 text-primary-400 absolute z-50 top-4 left-4 sm:top-9 sm:left-9" />
        </Link>

        <div className="w-full my-5 flex justify-center items-center">
          <h1 className="relative z-50 text-5xl md:text-9xl lg:text-9xl font-semibold text-primary-400">
            EVENTS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EventsHeading;
