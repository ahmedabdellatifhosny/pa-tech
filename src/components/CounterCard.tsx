import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  counterNumber: number;
  content: string;
}

const CounterCard = ({ counterNumber, content }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        setIsInView(rect.top <= viewHeight && rect.bottom >= 0);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = counterNumber;
      const duration = 2; // Duration of the animation in seconds
      const stepTime = Math.abs(Math.floor(duration * 1000 / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [isInView, counterNumber]);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col justify-center items-center p-6 bg-secondary hover:bg-primary-text text-primary-text hover:text-secondary !border-[1px] duration-300 !border-secondary min-h-[250px] rounded-lg"
      initial={{ scale: 0.8 }}
      animate={{ scale: isInView ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-4xl font-bold "
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {count}+
      </motion.h1>
      <motion.h2
        className="text-2xl  mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.h2>
    </motion.div>
  );
};

export default CounterCard;
