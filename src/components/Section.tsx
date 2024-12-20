import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ imageSrc, title, description, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }} // Ensures animation happens only once
      className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-16 md:mb-24`}
    >
      <motion.img
        src={imageSrc}
        alt="Section image"
        className="w-full md:w-1/2 h-48 md:h-64 object-cover border rounded-lg"
        
      />
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <motion.h2
          className="text-2xl md:text-3xl text-white font-bold mb-2"
          
        >
          {title}
        </motion.h2>
        <div className='flex mt-4 mb-8 mx-auto'>
          <span className='w-[20px] h-[2px] bg-secondary group-hover:bg-primary-text'></span>
          <span className='mx-2 w-[20px] h-[2px] bg-secondary group-hover:bg-primary-text'></span>
          <span className='w-[20px] h-[2px] bg-secondary group-hover:bg-primary-text'></span>
        </div>
        <motion.p
          className="text-base md:text-lg text-gray-300"
          
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Section;
