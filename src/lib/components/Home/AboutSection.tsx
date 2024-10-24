import React, { useEffect, useRef, useState } from 'react';
import { cn } from "$lib/utils";

interface AboutSectionProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [cursorYPosition, setCursorYPosition] = useState(0); // State to track cursor Y position

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, earum, id eligendi autem beatae, voluptates ducimus nam incidunt veniam nostrum perspiciatis! Modi facilis corporis at, dignissimos in totam expedita impedit veritatis laborum ex doloribus maiores dolorem. Expedita, eum voluptates quos error reiciendis quas accusamus earum harum minus omnis repudiandae accusantium.";

  const words = text.split(' '); // Splitting the text by words

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-bright', 'animate-fadeIn'); // Add subtle fade-in effect
            entry.target.classList.remove('text-dim');
          } else {
            entry.target.classList.remove('text-bright', 'animate-fadeIn');
            entry.target.classList.add('text-dim');
          }
        });
      },
      {
        threshold: 0.1, // Low threshold to detect words entering view
        rootMargin: '-20px',
      }
    );

    wordRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Listen to the scroll event to adjust cursor position
  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll position
    setCursorYPosition(scrollY * 0.5); // Adjust multiplier for how fast/slow the cursor moves relative to scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col font-[AdieuRegular] w-full px-3 sm:px-20 bg-dark-400 min-h-screen relative",
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

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mt-16">
        {/* Left Image Section */}
        <div className="w-full md:w-[35%] relative">
          <div className="aspect-square bg-dark-400 border border-gray-800"></div>
        </div>

        {/* Cursor Image - Moves with scrolling */}
        <div 
          className="w-20 h-20 absolute" 
          style={{ top: `${cursorYPosition}px`, left: '10px' }} // Position dynamically based on scroll
        >
          <img 
            src="/images/cursor.png" 
            alt="Cursor" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 flex flex-wrap leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              ref={el => wordRefs.current[index] = el}
              className="text-dim transition-colors duration-300 text-base sm:text-lg md:text-xl inline-block" // Use inline-block to keep word spacing
              style={{
                animationDelay: `${index * 0.2}s`, // Slightly staggered delay for each word
              }}
            >
              {word}&nbsp; {/* Ensure spacing between words */}
            </span>
          ))}
        </div>
      </div>

      {/* Extra space for scrolling */}
      <div className="h-[15vh]"></div>
    </div>
  );
};

export default AboutSection;
