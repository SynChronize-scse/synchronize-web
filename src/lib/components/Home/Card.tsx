// src/components/Card.js
import { motion, useTransform } from 'framer-motion';

const Card = ({ title, description, src, color, i, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className={`flex flex-row relative h-[600px] w-[1200px] rounded-2xl p-12`} // Increased width and height
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
      >
        {/* Left Side: Title and Description */}
        <div className="flex flex-col justify-start w-1/2 pr-8">
          <h2 className="text-2xl mb-4">{title}</h2>
          <p className="text-base">{description}</p>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-1/2 h-full rounded-2xl overflow-hidden">
          <img
            src={`/images/${src}`} 
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
