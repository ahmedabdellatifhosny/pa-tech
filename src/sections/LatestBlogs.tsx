import { motion } from 'framer-motion';
import React from 'react';
import BlogCard from '../components/BlogCard'; // Adjust the import path as needed
// import Button from '../components/helpers/Button';
import './style/Hero.css'
import { generateMeteors } from './Hero';
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LatestBlogs: React.FC = () => {
  // Dummy data for BlogCards
  const blogs = [
    {
      img: '/images/blog-1.jpeg',
      date: 'Sept 15, 2024',
      title: 'تجربتك المميزة معنا ستكون تجربة لا تُنسى، لأنك ستتعامل مع فريق محترف، سريع، ومليء بالأفكار!'
    },
    {
      img: '/images/blog-2.jpeg',
      date: 'Oct 10, 2024',
      title: 'ستٌفاجئكَ الأسعار '
    },
    {
      img: '/images/blog-3.jpeg',
      date: 'Oct 10, 2024',
      title: 'كل أعمالنا تتم من خلال عقود رسمية مكتوبة عن طريق محامي!'
    },
    {
      img: '/images/blog-4.jpeg',
      date: 'Nov 5, 2024',
      title: 'سيكون بإمكانك تجربة كل شيء مسبقًا '
    },
    {
      img: '/images/blog-5.jpeg',
      date: 'Nov 5, 2024',
      title: 'وأخيرًا وليس آخر، جودة العمل ستكون أقوى مما تتوقع !'
    },
    {
      img: '/images/blog-6.jpeg',
      date: 'Nov 5, 2024',
        title: 'ماذا تنتظر ! شاركنا أفكارك ودعنا نحوّلها إلى لوحة فنية مميزة !  لا ترحل قبل أن تزور المحطة الأخيرة !'
    }
  ];

  return (
    <div className="container-fluid meteor-background max-w-screen overflow-hidden py-6" id="benefits">
      {generateMeteors(10)}
      <div className="abobkr-container mx-auto min-h-[100vh] lg:min-h-[70vh]">
        <motion.h1
          className="text-primary-bg text-center font-bold heading-text mt-[50px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          لماذا ستقوم باختيار PA Tech لمشروعك القادم؟
        </motion.h1>

        <motion.p
          className="text-primary-bg text-center text-md mt-[20px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          سؤال جميل ! سنسرد لك المزايا، لعلّنا نُصبح شركاء النجاح.. !
        </motion.p>

        <div className="w-full  p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[70px] gap-[30px]">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              img={blog.img}
              date={blog.date}
              title={blog.title}
            />
          ))}
        </div>
        
        {/* <div className='w-full flex justify-center mt-8'>
          <Button content='View All' className='!px-12' />
        </div> */}
      </div>
    </div>
  );
};

export default LatestBlogs;
