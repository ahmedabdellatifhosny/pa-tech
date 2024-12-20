import { motion } from 'framer-motion';
// import Button from '../components/helpers/Button';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Available = () => {
  return (
    <div 
      className="container-fluid max-h-[500px] mt-[120px]  bg-no-repeat bg-cover relative"
      style={{ 
        backgroundImage: 'url(/images/available.jpeg)',
        backgroundAttachment: 'fixed', // Keeps the background image fixed
        backgroundPosition: 'center', // Centers the background image
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh', // Makes sure the section is at least the height of the viewport
      }}
    >
      <div className="abobkr-container mx-auto h-full  text-white flex flex-col justify-center items-center">
        <motion.h1
          className=" text-center font-bold heading-text mt-[0px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          الخبرة بين يديك الان!

        </motion.h1>

        <motion.p
          className=" text-center text-2xl my-[20px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
امتلك فريقك البرمجي للعمل على مشروعك الخاص مهما كانت اللغة البرمجية المستخدمة .. نضمن لك من خلال فريقنا اعلى درجات الجودة والتعامل الاحترافي الراقي .. نتشرف بكم جميعا.        </motion.p>

        {/* <div className='w-full flex justify-center'>
          <Button content='Hire Me' className='!px-12' />
        </div> */}
      </div>
    </div>
  );
};

export default Available;
