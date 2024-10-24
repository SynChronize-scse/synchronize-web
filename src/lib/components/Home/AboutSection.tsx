import React, { useEffect, useRef } from 'react';
import { cn } from "$lib/utils";

interface AboutSectionProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const AboutSection = ({ className }: AboutSectionProps) => {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, earum, id eligendi autem beatae, voluptates ducimus nam incidunt veniam nostrum perspiciatis! Modi facilis corporis at, dignissimos in totam expedita impedit veritatis laborum ex doloribus maiores dolorem. Expedita, eum voluptates quos error reiciendis quas accusamus earum harum minus omnis repudiandae accusantium.";
  const words = text.split(/(\s+)/).filter(word => word.trim().length > 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay based on word index
            const wordIndex = wordRefs.current.findIndex(ref => ref === entry.target);
            setTimeout(() => {
              entry.target.classList.add('text-bright');
              entry.target.classList.remove('text-dim');
            }, wordIndex * 100); // 100ms delay between each word
          } else {
            entry.target.classList.remove('text-bright');
            entry.target.classList.add('text-dim');
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: '-20px'
      }
    );

    wordRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
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

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 mt-16">
        {/* Left Image Section */}
        <div className="w-full md:w-[35%] relative">
          <div className="aspect-square bg-dark-400 border border-gray-800"></div>
        </div>

        <div className="w-16 h-16 -mt-4 md:mt-0 md:-ml-8">
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
              className="text-dim transition-colors duration-700 text-base sm:text-lg md:text-xl inline-block mr-1 opacity-70 hover:opacity-100"
            >
              {word}
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