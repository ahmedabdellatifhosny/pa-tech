import { motion } from "framer-motion";
import CounterCard from "../components/CounterCard"; // Import the CounterCard component

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const dummyData = [
  { counterNumber: 120, content: "Projects Completed" },
  { counterNumber: 45, content: "Happy Clients" },
  { counterNumber: 30, content: "Awards Won" },
  { counterNumber: 200, content: "Hours Worked" },
];

const Counters = () => {
  return (
    <div className="container-fluid bg-primary-bg py-6">
      <div className="abobkr-container mx-auto min-h-[100vh] lg:min-h-[70vh]">
        <motion.h1
          className="text-secondary text-center font-bold heading-text mt-[50px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Achievements
        </motion.h1>

        <motion.p
          className="text-secondary text-center text-md mt-[20px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque
          assumenda, molestias nesciunt laudantium earum doloremque dolorum
          autem dignissimos dolore optio repellat fugiat perferendis. Totam,
          similique fuga? Unde, eaque labore.
        </motion.p>

        <div className="w-full bg-primary-bg p-12  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-[70px] gap-[50px]">
          {dummyData.map((data, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CounterCard
                counterNumber={data.counterNumber}
                content={data.content}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
