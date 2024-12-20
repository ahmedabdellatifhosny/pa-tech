import React, { useEffect, useRef } from "react";
import "./style/newWhyUs.css"; // Ensure this CSS file exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Slide {
  imageSrc: string;
  title: string;
  description: string;
  reverse: boolean;
}

const slideData: Slide[] = [
  {
    imageSrc: "/images/cosmic-2.jpg",
    title: "أسعار مفاجئة",
    description: "ستٌفاجئكَ الأسعار !",
    reverse: true,
  },
  {
    imageSrc: "/images/cosmic-1.jpg",
    title: "تجربة مميزة",
    description:
      "تجربتك المميزة معنا ستكون تجربة لا تُنسى، لأنك ستتعامل مع فريق محترف، سريع، ومليء بالأفكار!",
    reverse: false,
  },
  {
    imageSrc: "/images/cosmic-3.jpg",
    title: "تجربة مسبقة",
    description: "سيكون بإمكانك تجربة كل شيء مسبقًا !",
    reverse: false,
  },
  {
    imageSrc: "/images/cosmic-4.jpg",
    title: "عقود رسمية",
    description: "كل أعمالنا تتم من خلال عقود رسمية مكتوبة عن طريق محامي!",
    reverse: true,
  },
  {
    imageSrc: "/images/cosmic-5.jpg",
    title: "جودة عمل عالية",
    description: "وأخيرًا وليس آخر، جودة العمل ستكون أقوى مما تتوقع !",
    reverse: false,
  },
];

const NewWhyUs: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const activate = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const items = sliderRef.current?.children;

    if (items) {
      if (target.matches(".next")) {
        sliderRef.current?.appendChild(items[0]);
      } else if (target.matches(".prev")) {
        sliderRef.current?.prepend(items[items.length - 1]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", activate);
    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  return (
    <>
      <div className="container z-[5] mx-auto">
        <h1 className="!text-2xl text-center mt-[50px] lg:!text-3xl xl:!text-4xl font-bold !text-white">
          لماذا ستقوم باختيار PA Tech لمشروعك القادم؟
        </h1>
        <p className="text-xl text-center !text-gray-300 mt-[15px]">
          سؤال جميل ! سنسرد لك المزايا، لعلّنا نُصبح شركاء النجاح.. !
        </p>
      </div>
      <main>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[10]"></div>
        <ul className="slider" ref={sliderRef}>
          {slideData.map((slide, index) => (
            <li
              key={index}
              className={`item ${slide.reverse ? "reverse" : ""}`}
              style={{ backgroundImage: `url(${slide.imageSrc})` }}
            >
              <div className="content -translate-y-1/2 translate-x-[0] md:translate-x-[0px] lg:translate-x-[50px] bg-gray-900/70 rounded-3xl p-6 ">
                <h2 className="title !bold !text-xl md:!text-xl text-center lg:!text-2xl xl:!text-3xl 2xl:!text-5xl">
                  {slide.title}
                </h2>
                <p className="description !hidden md:!block text-center  lg:!text-lg  xl:!text-2xl 2xl:!text-3xl">
                  {slide.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <nav className="nav z-[20]">
          <FontAwesomeIcon icon={faArrowRight} className="btn prev" />
          <FontAwesomeIcon icon={faArrowLeft} className="btn next" />
        </nav>
      </main>
    </>
  );
};

export default NewWhyUs;
