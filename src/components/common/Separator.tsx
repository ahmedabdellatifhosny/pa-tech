
import { motion } from "framer-motion";

const Separator = () => {
  return (
    <div className='w-[70%] h-[1px] mx-auto group relative rounded-xl'>
      <motion.span
        initial={{ width: 0, left: '50%' }}
        whileInView={{ width: '50%', left: '0%' }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className='bg-white w-0 absolute h-full shadow-lg shadow-purple-600' 
      />
      <motion.span
        initial={{ width: 0, right: '50%' }}
        whileInView={{ width: '50%', right: '0%' }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className='bg-white w-0 absolute h-full shadow-lg shadow-purple-600' 
      />
    </div>
  );
}

export default Separator;
