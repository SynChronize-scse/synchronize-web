import { useEffect, useState } from "react";
import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import LandingPart from "./LandingPart";
import StackedCards from "./StackedCards";

const LandingSection = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

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
        value: 50,
        density: {
          enable: true,
          height: 1000,
          width: 1000,
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
        speed: 0.3,
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
            force: 50,
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
        particles: {
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
          move: {
            speed: 15,
            outModes: {
              default: "destroy",
              top: "none",
            },
            straight: true,
            direction: "bottom-right",
          },
          life: {
            count: 1,
          },
          trail: {
            enable: true,
            fill: { color: "#fff" },
            length: 20,
          },
          rotate: {
            value: 0,
          },
        },
      },
      // {
      //   life: {
      //     count: 0,
      //     duration: 0.1,
      //     delay: 0.4,
      //   },
      //   rate: {
      //     delay: 0.1,
      //     quantity: 1,
      //   },
      //   position: {
      //     x: 100,
      //     y: 0,
      //   },
      //   size: {
      //     width: 100,
      //     height: 0,
      //   },
      //   particles: {
      //     shape: {
      //       type: "circle",
      //     },
      //     size: {
      //       value: 20,
      //     },
      //     move: {
      //       speed: 15,
      //       outModes: {
      //         default: "destroy",
      //         top: "none",
      //       },
      //       straight: true,
      //       direction: "bottom-right",
      //     },
      //     life: {
      //       count: 1,
      //     },
      //     trail: {
      //       enable: true,
      //       fill: { color: "#ffffff" },
      //       length: 100,
      //     },
      //     rotate: {
      //       value: 0,
      //     },
      //   },
      // },
    ],
    preset: "stars",
  };

  return (
    <div id="bg" className="w-full h-full relative">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute top-0 bottom-0 h-full w-full z-0"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <main className="relative z-10 w-full h-full font-[AdieuRegular] text-primary-400">
        <LandingPart />
        <StackedCards />
      </main>
    </div>
  );
};

export default LandingSection;
