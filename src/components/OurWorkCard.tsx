import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

interface OurWorkCardProps {
  img: string;
  title: string;
  features: string;
  content: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurWorkCard = ({ img, title, features, content }: OurWorkCardProps) => {
  return (
    <motion.div
      className=' relative overflow-hidden group rounded-lg'
      variants={cardVariants}
      initial="hidden"
      animate="visible"

    >
      <div className='w-full h-full min-h-full'>
        <img src={img} alt={title} className='w-full min-h-full  object-cover' />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-primary-bg bg-opacity-90 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
        <div className='p-6  text-white'>
          <h1 className='text-xl font-bold mb-2'>{title}</h1>
          <h3 className='text-lg font-semibold mb-2'>{features}</h3>
          <div className='flex min-w-[120px] mb-2'>
            <span className='w-[30px] h-[2px] bg-primary-bg mr-1'></span>
            <span className='w-[30px] h-[2px] bg-primary-bg mr-1'></span>
            <span className='w-[30px] h-[2px] bg-primary-bg'></span>
          </div>
          <p className='text-sm mb-4'>{content}</p>
          <button className='py-3 px-6 bg-white text-primary-bg border border-primary-bg flex items-center'>
            Know More <FontAwesomeIcon icon={faArrowAltCircleDown} className='ml-2' />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OurWorkCard;
