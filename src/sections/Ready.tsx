import { motion } from 'framer-motion';
import './style/ready.css';
import './style/Hero.css';

// Define animation variants
const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 3, type: "spring", stiffness: 80, delay: 0.4 } },
};

const imageVariants = {
  hidden: { opacity: 0, rotate: 180, x: 300 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 1, delay: .5 }, x: 0 },
};

const Ready = () => {
  return (
    <div id="about-us" className='container-fluid !max-w-screen !overflow-x-hidden overflow-hidden  min-h-[70vh] mt-[50px] lg:mt-[0] flex flex-col justify-center   py-0 meteor-background'>
      {/* {generateMeteors(40)} */}
      <div className="abobkr-container mx-auto flex justify-center gap-12 lg:justify-between flex-col-reverse pb-12 lg:flex-row-reverse">
        {/* Content Div */}
        <motion.div
          className="w-full mt-[50px] z-[100] lg:mt-0 lg:w-[50%] flex flex-col justify-center"
        >
          <motion.p
            className="text-white font-bold !text-2xl lg:!text-3xl xl:!text-4xl mb-[10px] mt-[50px]"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: '4rem' }} // Adjust the font size here
          >
            لنتعرّف
          </motion.p>
          <motion.p
            className="text-gray-300 text-md lg:text-lg mt-[20px]"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ fontSize: '1.25rem' }} // Adjust the font size here
          >
            هنا فريق PA Tech، متخصصون بتقديم خدمات برمجية منوعة، نساعدك في <span  >تطوير تطبيقات مذهلة ومواقع ويب متطورة</span>  لتحقيق نجاح مبهر في العالم التقني! بالاضافة إلى أننا نقّدم لكم  <span > كل ما تحتاجونه في مجال الذكاء الاصطناعي والتصاميم الرائعة </span>! هل تعتقد أنّ تجربتك معنا ستكون عادية؟ نحن لا نعتقد ذلك!
          </motion.p>
        </motion.div>
        {/* Image Div */}
        <motion.div
          className="w-full lg:w-[50%] relative flex justify-center items-center rounded-md"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="planet mt-[70px] lg:mt-[10px]">
          </div>
        </motion.div>
        
      </div>
      <hr className='w-[70%] mx-auto mt-[50px] '  />
    </div>
  );
};

export default Ready;
