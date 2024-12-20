import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import OurWorkCard from '../components/OurWorkCard';
// import Button from '../components/helpers/Button';
import { generateMeteors } from './Hero';
import './style/Hero.css';
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface CardData {
  img: string;
  title: string;
  features: string;
  content: string;
}

interface CardDataMap {
  all: CardData[];
  webDevelopment: CardData[];
  mobileApps: CardData[];
  games: CardData[];
  figmaWebDesigns: CardData[];
  figmaAppDesigns: CardData[];
}

const cardData: CardDataMap = {
  all: [
    { img: '/images/hero.jpeg', title: 'مشروع 1', features: 'ميزة 1', content: 'محتوى 1' },
    { img: '/images/hero.jpeg', title: 'مشروع 2', features: 'ميزة 2', content: 'محتوى 2' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
    { img: '/images/hero.jpeg', title: 'مشروع 3', features: 'ميزة 3', content: 'محتوى 3' },
  ],
  webDevelopment: [
    { img: '/images/hero.jpeg', title: 'مشروع تطوير ويب 1', features: 'ميزة تطوير ويب 1', content: 'محتوى تطوير ويب 1' },
    { img: '/images/hero.jpeg', title: 'مشروع تطوير ويب 2', features: 'ميزة تطوير ويب 2', content: 'محتوى تطوير ويب 2' },
    { img: '/images/hero.jpeg', title: 'مشروع تطوير ويب 2', features: 'ميزة تطوير ويب 2', content: 'محتوى تطوير ويب 2' },
  ],
  mobileApps: [
    { img: '/images/hero.jpeg', title: 'مشروع تطبيق موبايل 1', features: 'ميزة تطبيق موبايل 1', content: 'محتوى تطبيق موبايل 1' },
    { img: '/images/hero.jpeg', title: 'مشروع تطبيق موبايل 2', features: 'ميزة تطبيق موبايل 2', content: 'محتوى تطبيق موبايل 2' },
    { img: '/images/hero.jpeg', title: 'مشروع تطبيق موبايل 2', features: 'ميزة تطبيق موبايل 2', content: 'محتوى تطبيق موبايل 2' },
    { img: '/images/hero.jpeg', title: 'مشروع تطبيق موبايل 2', features: 'ميزة تطبيق موبايل 2', content: 'محتوى تطبيق موبايل 2' },
    { img: '/images/hero.jpeg', title: 'مشروع تطبيق موبايل 2', features: 'ميزة تطبيق موبايل 2', content: 'محتوى تطبيق موبايل 2' },
  ],
  games: [
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 1', features: 'ميزة لعبة 1', content: 'محتوى لعبة 1' },
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 1', features: 'ميزة لعبة 1', content: 'محتوى لعبة 1' },
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 1', features: 'ميزة لعبة 1', content: 'محتوى لعبة 1' },
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 1', features: 'ميزة لعبة 1', content: 'محتوى لعبة 1' },
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 1', features: 'ميزة لعبة 1', content: 'محتوى لعبة 1' },
    { img: '/images/hero.jpeg', title: 'مشروع لعبة 2', features: 'ميزة لعبة 2', content: 'محتوى لعبة 2' },
  ],
  figmaWebDesigns: [
    { img: '/images/hero.jpeg', title: 'تصميم ويب فيجما 1', features: 'ميزة تصميم ويب فيجما 1', content: 'محتوى تصميم ويب فيجما 1' },
    { img: '/images/hero.jpeg', title: 'تصميم ويب فيجما 1', features: 'ميزة تصميم ويب فيجما 1', content: 'محتوى تصميم ويب فيجما 1' },
    { img: '/images/hero.jpeg', title: 'تصميم ويب فيجما 2', features: 'ميزة تصميم ويب فيجما 2', content: 'محتوى تصميم ويب فيجما 2' },
  ],
  figmaAppDesigns: [
    { img: '/images/hero.jpeg', title: 'تصميم تطبيق فيجما 1', features: 'ميزة تصميم تطبيق فيجما 1', content: 'محتوى تصميم تطبيق فيجما 1' },
    { img: '/images/hero.jpeg', title: 'تصميم تطبيق فيجما 2', features: 'ميزة تصميم تطبيق فيجما 2', content: 'محتوى تصميم تطبيق فيجما 2' },
  ],
};

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'webDevelopment' | 'mobileApps' | 'games' | 'figmaWebDesigns' | 'figmaAppDesigns'>('all');

  // Function to handle tab change
  const handleTabChange = (tab: 'all' | 'webDevelopment' | 'mobileApps' | 'games' | 'figmaWebDesigns' | 'figmaAppDesigns') => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid py-6 !max-w-screen !overflow-x-hidden z-[5] meteor-background" id="achievements">
      {generateMeteors(10)}
      <div className="abobkr-container mx-auto min-h-[100vh] ">
        <motion.h1
          className="text-secondary text-center font-bold !text-2xl lg:!text-3xl xl:!text-4xl mt-[50px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
           انجازاتنا
        </motion.h1>

        <motion.p
          className="text-secondary text-center text-xl mt-[10px]"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          بالتأكيد ستكون فضولي للاطلاع على أعمالنا السابقة، تابع معنا في هذه المحطة ..
        </motion.p>

        <div className="max-w-[800px] mx-auto w-fit  flex-wrap my-4  !text-md lg:!text-lg flex justify-between text-nowrap mt-[40px]">
          {['all', 'webDevelopment', 'mobileApps', 'figmaWebDesigns', 'figmaAppDesigns'].map((tab) => (
            <div
              key={tab}
              className={`mx-2 pb-3 hover:border-b-2 -text font-bold duration-300 border-b-2 text-secondary hover:text-purple-700 hover:border-b-purple-500 ${activeTab === tab ? 'text-purple-500 font-bold border-b-purple-500' : 'border-transparent'} cursor-pointer`}
              onClick={() => handleTabChange(tab as 'all' | 'webDevelopment' | 'mobileApps' | 'games' | 'figmaWebDesigns' | 'figmaAppDesigns')}
            >
              {tab === 'all' ? 'الكل' : tab === 'webDevelopment' ? 'مواقع الكترونية' : tab === 'mobileApps' ? 'تطبيقات موبايل' :  tab === 'figmaWebDesigns' ? 'تصاميم  مواقع' : 'تصاميم  تطبقات'}
            </div>
          ))}
        </div>

        <div className="w-full  pb-12 pt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[50px]">
          <AnimatePresence>
            {cardData[activeTab].length > 0 ? (
              cardData[activeTab].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <OurWorkCard
                    img={card.img}
                    title={card.title}
                    features={card.features}
                    content={card.content}
                  />
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center text-gray-500">لا توجد بيانات لعرضها</div>
            )}
          </AnimatePresence>
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
