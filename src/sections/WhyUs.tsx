import React from 'react';
import Section from '../components/Section';
import { generateMeteors } from './Hero';

const WhyUs: React.FC = () => {
  const sections = [
    { imageSrc: '/images/why-us-1.jfif', title: 'تجربة مميزة', description: 'تجربتك المميزة معنا ستكون تجربة لا تُنسى، لأنك ستتعامل مع فريق محترف، سريع، ومليء بالأفكار!', reverse: false },
    { imageSrc: '/images/why-us-2.jpeg', title: 'أسعار مفاجئة', description: 'ستٌفاجئكَ الأسعار !', reverse: true },
    { imageSrc: '/images/why-us-3.jpeg', title: 'تجربة مسبقة', description: 'سيكون بإمكانك تجربة كل شيء مسبقًا !', reverse: false },
    { imageSrc: '/images/why-us-4.jpeg', title: 'عقود رسمية', description: 'كل أعمالنا تتم من خلال عقود رسمية مكتوبة عن طريق محامي!', reverse: true },
    { imageSrc: '/images/why-us-5.jpeg', title: 'جودة عمل عالية', description: 'وأخيرًا وليس آخر، جودة العمل ستكون أقوى مما تتوقع !', reverse: false },
  ];

  return (
    <div className="fluid mx-auto meteor-background p-4 my-[50px]">
      {generateMeteors(10)}

      <div className='w-[80%] mx-auto'>
        <header className="text-center mb-12">
          <h1 className="!text-2xl lg:!text-3xl xl:!text-4xl font-bold text-white">لماذا ستقوم باختيار PA Tech لمشروعك القادم؟</h1>
          <p className="text-xl text-gray-300 mt-[15px]">سؤال جميل ! سنسرد لك المزايا، لعلّنا نُصبح شركاء النجاح.. !</p>
        </header>
        {sections.map((section, index) => (
          <Section
            key={index}
            imageSrc={section.imageSrc}
            title={section.title}
            description={section.description}
            reverse={section.reverse}
          />
        ))}
      </div>
      <div className="text-center mt-12 text-gray-300">
        <p className="text-xl">ماذا تنتظر ! شاركنا أفكارك ودعنا نحوّلها إلى لوحة فنية مميزة !</p>
        <p className="mt-4 text-lg">لا ترحل قبل أن تزور المحطة الأخيرة !</p>
      </div>
    </div>
  );
};

export default WhyUs;
