import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; // Import FreeMode CSS
import './style/swiper.css'; // Ensure this path is correct

import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import TestimonialCard from '../components/TestimonialCard';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const teamsData = [
  {
    image: '/images/team-2.jpeg',
    name: 'م. محمود أبوسل',
    content: 'مدير ومشرف القسم البرمجي للاكاديمية الفلسطينية'
  },
  {
    image: '/images/team-3.jpeg',
    name: 'د. محمد العفيفي',
    content: 'المؤسس والمدير التنفيذي للأكاديمية الفلسطينية'
  },
  {
    image: '/images/team-4.jpeg',
    name: 'أ.إسلام الأغا',
    content: 'المؤسس والمدير العام للأكاديمية الفلسطينية'
  },
  {
    image: '/images/team-5.jpeg',
    name: 'أ. مهند العايدي',
    content: 'الشريك المؤسس والمدير الإداري والمالي للأكاديمية'
  },
]

const Testimonials = () => {
  return (
    <div className="container-fluid bg-white py-6" id="our-team">
      <div className="w-[90vw] lg:w-[80vw] mx-auto min-h-[70vh]">
        <motion.h1
          className="text-primary-bg text-center font-bold heading-text mt-12"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          فريق العمل
        </motion.h1>

        <motion.p
          className="text-primary-bg text-center text-md mt-4 mb-8"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          نأخذكم برحلة سريعة للتعرف على فريق العمل ومسماه الوظيفي.
        </motion.p>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true} // Enable free mode for swiping
          autoplay={{
            delay: 7000, // Autoplay delay in milliseconds
            disableOnInteraction: false, // Autoplay continues even after user interaction
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span key={${index}} class="${className} w-[20px] h-[5px] translate-y-[100px] xl:translate-y-[150px]  rounded-none bg-primary-bg"></span>`;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
          }}
          modules={[Pagination, FreeMode, Autoplay]} // Add modules used
          className="mySwiper !overflow-visible mt-[100px]"
        >
          {teamsData.map((team, index) => (
            <SwiperSlide key={index} className="flex justify-center !overflow-visible">
              <TestimonialCard
                img={team.image}
                name={team.name}
                // job='Programmer Developer'
                content={team.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
