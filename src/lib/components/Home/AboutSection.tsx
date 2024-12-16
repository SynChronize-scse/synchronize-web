import React, { useEffect, useRef, useState } from "react";
import { cn } from "$lib/utils";
import SectionHeader from "./SectionHeader";
import XIM from "../../../assets/images/xim_main.png";

interface AboutSectionProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cursorPosition, setCursorPosition] = useState(0);

  const text =
    "SynChronize is the university's technical fest with a multitude of events planned over a span of three days, wherein students from our university, as well as from other institutes, may take part in events like coding contests, technical workshops, guest lectures, and more. With the series of planned events and curriculum, the organizing team expects a hearty participation of over 3k students, and aims for this to be a big success as well as a fruitful experience for all the participants.";

  const paragraphs = [text];
  const words = paragraphs.map((paragraph) => paragraph.split(" "));

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollPercentage = Math.max(
          0,
          Math.min(1, (windowHeight - top) / (windowHeight + height))
        );
        setScrollPosition(scrollPercentage);

        // Calculate cursor position based on scroll
        const textHeight = sectionRef.current.clientHeight;
        const maxCursorMove = textHeight - 48; // 48px is approximate cursor height
        const newCursorPosition = scrollPercentage * maxCursorMove;
        setCursorPosition(newCursorPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [transformStyle, setTransformStyle] = useState(
  //   "translate3d(0px, 0px, 0px) rotate(0deg) scale(1.3, 1.3)"
  // );
  // const targetRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       const ratio = entry.intersectionRatio;
  //       const rotate = -1 * ratio;
  //       const scale = 1.2 - 0.2 * ratio;
  //       setTransformStyle(
  //         `translate3d(0px, 0px, 0px) rotate(${rotate}deg) scale(${scale}, ${scale})`
  //       );
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  //   });

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      id="about"
      className={cn(
        "flex flex-col font-[AdieuRegular] w-full px-3 sm:px-20 bg-dark-400 ",
        className
      )}
      style={{ cursor: 'url("/images/cursor.png"), auto' }}
    >
      <SectionHeader title="About SynChronize'25" />

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-16">
        <div className="md:ml-10 relative aspect-square bg-dark-400 w-full md:w-[85%] ">
          {/* ref={targetRef} */}
          <div className="overflow-hidden rounded-lg">
            <img className="opacity-80 overflow-hidden" src={XIM} alt="" />
            {/* <img
              className="opacity-80 overflow-hidden"
              src={XIM}
              alt=""
              style={{ transform: transformStyle }}
            /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1">
          <div className="relative">
            <img
              src="/images/cursor.png"
              alt="Cursor"
              className="relative top-8 left-3 md:sticky md:top-0 w-6 md:min-w-12 object-contain"
              style={{
                transform: `translateY(${
                  window.innerWidth > 768 ? cursorPosition : 0
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>

          <div
            ref={sectionRef}
            className="flex flex-col gap-4 font-[AdieuLight]"
          >
            {paragraphs.map((_paragraph, pIndex) => (
              <p key={pIndex} className="leading-relaxed indent-10 md:indent-0">
                {words[pIndex].map((word, wIndex) => (
                  <span
                    key={wIndex}
                    className="indent-1 inline-block mr-1 tracking-wide"
                  >
                    {word.split("").map((letter, lIndex) => {
                      const overallIndex = pIndex * 5 + wIndex * 5 + lIndex;
                      const isHighlighted =
                        scrollPosition + 0.15 >
                        overallIndex / (text.length * 1);
                      return (
                        <span
                          key={lIndex}
                          className={cn(
                            "transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
                            isHighlighted ? "text-bright" : "text-dim"
                          )}
                          style={{
                            animationDelay: `${overallIndex * 0.01}s`,
                          }}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
