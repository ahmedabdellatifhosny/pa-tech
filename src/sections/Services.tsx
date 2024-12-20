import { motion } from "framer-motion";
import ServicesCard from "../components/ServicesCard";
import './style/Hero.css'
import {
  faRobot,
  faBrush,
  faGamepad,
  faDesktop,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
// import Button from "../components/helpers/Button";
import { generateMeteors } from "./Hero";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";

// Define animation variants for text
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Define animation variants for cards
const cardVariants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === 'right' ? 200 : -200,
    transition: { duration: 1.2},  // Transition duration for hidden state
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },  // Transition duration for visible state
  },
};

// Define animation variants for button
// const buttonVariants = {
//   hidden: { scale: 0, transition: { duration: 0.5 } }, // Transition duration for hidden state
//   visible: { scale: 1, transition: { duration: 0.5 } }, // Transition duration for visible state
// };

const Services = () => {
  return (
    <div id="services" className="container-fluid mb-[100px]  meteor-background py-6">
      {generateMeteors(10)}
      <div className="abobkr-container mx-auto min-h-[100vh] lg:min-h-[70vh]">
        <motion.h1
          className="text-secondary text-center !text-2xl lg:!text-3xl xl:!text-4xl font-bold  mt-[50px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }} // Delay for heading animation
        >
           خدماتنا

        </motion.h1>

        <motion.p
          className="text-gray-300 text-center w-[80%] mx-auto text-xl xl:text-xl mt-[20px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }} // Delay for paragraph animation
        >
          نملك فريق كبير قادر على انجاز أي فكرة برمجية تقنية مهما كانت كبيرة! فالنقاط لا تحصر ما يمكننا القيام به ولكننا سنقدم أنفسنا باختصار شديد.
لذلك بالطبع، يمكنك أيضًا التواصل معنا لو كنت تملك فكرة مختلفة عن المعروض!


        </motion.p>

        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-[70px] gap-[50px]">
          {[faBrush, faMobile, faRobot].map((icon, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom="right" // Custom direction for animation
              transition={{ delay: 0.6 }} // Delay for card animations
            >
              <ServicesCard
                icon={icon}
                title={["بناء موقع الكتروني", "بناء تطبيقات هواتف ذكية", "تصميم أدوات ذكاء اصطناعي"][index]}
                content={[
                  " مواقع لعرض محتوى، مواقع تقديم خدمات، متاجر الكترونية، متاجر بيع بالجملة وبيع بالتجزئة، متاجر طبية، منصات تعليمية، مواقع للشركات... وغيرها",
                  "تطبيقات تسوق، تطبيقات تقديم خدمات متنوعة مثل الديلفري والمطاعم والمتاجر، تطبيقات توصيل مثل اوبر وكريم، تطبيقات تعليمية، تطبيقات طبية... وغيرها",
                  "يمكنك الآن استخدام أدوات الذكاء الاصطناعي ودمجها في مشروعك الالكتروني بشكل احترافي، وتذكر أن جميع الأفكار تتحول لواقع معنا",
                ][index]}
              />
            </motion.div>
          ))}

          {[faGamepad, faWordpress, faDesktop].map((icon, index) => (
            <motion.div
              key={index + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom="left" // Custom direction for animation
              transition={{ delay: 0.6 }} // Delay for card animations
            >
              <ServicesCard
                icon={icon}
                title={["تطوير الألعاب", "تطوير مواقع ووردبريس", "برمجة تطبيقات سطح المكتب."][index]}
                  content={[
                  "نوفر لكم في خدمة تطوير الألعاب فرصة لتحويل الأفكار المدهشة إلى واقع ملموس، رسومات مميزة، لغات برمجية حديثة، أدوات ذكاء اصطناعي، إدارة لأداء اللعبة، كل هذا وأكثر لمخرجات مثالية وألعاب لا مثيل لها.",
                  "متجرك الالكتروني بأقل التكاليف الممكنة وأسرع التقنيات",
                  "فرصة مميزة لإنشاء برنامجك الخاص على سطح المكتب لتسهيل أعمالك داخل شركتك"
                ][index]}
              />
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="w-full flex justify-center items-center mt-[50px]"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }} // Delay for button animation
        >
          <Button content="View All" className="px-12 hover:border-black" />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Services;
