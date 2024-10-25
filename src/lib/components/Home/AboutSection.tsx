import React, { useEffect, useRef, useState } from "react";
import { cn } from "$lib/utils";

interface AboutSectionProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

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
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col font-[AdieuRegular] w-full px-3 sm:px-20 bg-dark-400 min-h-screen",
        className
      )}
      style={{ cursor: 'url("/images/cursor.png"), auto' }}
    >
      <div className="flex flex-col w-fit mt-8">
        <span className="uppercase whitespace-nowrap text-primary-400 text-base sm:text-xl md:text-3xl w-fit mb-1">
          About Synchronize'25
        </span>
        <div className="w-[75%] h-[1px] self-end bg-primary-400"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-16">
        <div className="w-full relative aspect-square bg-dark-400 border border-gray-800">
          <div className=""></div>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="relative">
            <img
              src="/images/cursor1.png"
              alt="Cursor"
              className="relative top-8 left-3 md:sticky md:top-0 w-6 md:min-w-12 object-contain"
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
                        scrollPosition > overallIndex / (text.length * 1);
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
