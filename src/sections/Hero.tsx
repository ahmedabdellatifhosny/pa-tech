import { motion } from 'framer-motion';
import './style/Hero.css'
import './style/Herobutton.css'
// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// const buttonVariants = {
//   hidden: { opacity: 0, scale: 0.9, y: 50 },
//   visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
// };

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 1 } },
};


export const generateMeteors = (count: number) => {
  const meteors = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 5 + 5; // Size between 5 and 10
    const left = Math.random() * 100; // Position from 0% to 100%
    const top = Math.random() * 100; // Position from 0% to 100%
    const animationDuration = Math.random() * 5 + 5; // Duration between 5 and 10 seconds

    meteors.push(
      <div
        key={i}
        className="meteor"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          animationDuration: `${animationDuration}s`
        }}
      />
    );
  }
  return meteors;
};


const Hero = () => {
  return (
    <div className='container-fluid !overflow-hidden  !max-w-screen !overflow-x-hidden max-w-[100vw] overflow-x-hidden"'>
      
      {/* {generateMeteors(10)} */}
      <div className="abobkr-container mx-auto flex justify-center gap-4 lg:justify-between flex-col-reverse pb-12 lg:flex-row min-h-[100vh] lg:min-h-[90vh] mt-[20px]">

        <motion.div
          className="w-full mt-[50px] lg:mt-0 lg:w-[50%] flex flex-col justify-center "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div variants={textVariants}> */}
          {/* <Button content="اهلا بك" className="w-fit hover:!bg-white" /> */}
          {/* </motion.div> */}
          <motion.h1
            className="text-white font-bold text-xl lg:text-2xl xl:text-3xl mt-[50px] mb-[20px] !leading-[50px] tracking-wider"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            تجاوز حدود الخيال، وتقدّم نحو عالم تقني ممتلئ بالابداع
          </motion.h1>
          <a href="#contact-us">
          {/* <button className='hero-button'>تواصل معنا</button> */}



          </a>

          {/* <motion.p
            className="text-white text-xl mt-[20px] "
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            هل لديك مشروع تريد أن تحوله إلى موقع مُبهر أو تطبيق مميز ؟ ابدأ رحلتك معنا الآن !
          </motion.p> */}
          {/* <motion.div
            className="flex w-full lg:w-[80%] gap-4 mt-[50px] flex-col lg:flex-row"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <Button content="تسجيل الدخول " className="!w-full lg:w-[170px] !bg-secondary hover:!text-secondary !border-bg-secondary hover:!bg-primary-text !text-primary-text py-3 lg:py-6" />
            <Button content="انشاء حساب" className="!w-full border !border-white py-3 px-6 lg:w-[170px] !bg-transparent hover:!bg-secondary duration-300 text-white lg:py-6" />
          </motion.div> */}
        </motion.div>
        {/* Image Div */}
        <motion.div
          className="w-full lg:w-[60%] flex justify-center items-center rounded-md "
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <div className="section-banner">
            <div id="star-1">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-2">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-3">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-4">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-5">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-6">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>

            <div id="star-7">
              <div className="curved-corner-star">
                <div id="curved-corner-bottomright"></div>
                <div id="curved-corner-bottomleft"></div>
              </div>
              <div className="curved-corner-star">
                <div id="curved-corner-topright"></div>
                <div id="curved-corner-topleft"></div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
