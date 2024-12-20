import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faWordpress } from "@fortawesome/free-brands-svg-icons"; 
import {
  faBrush,
  faMobile,
  faRobot,
  faGamepad,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import "./style/contact.css";
import "./style/features.css";

// Component لعرض كل بطاقة
const FeaturedCard = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: IconProp;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-transparent featured-card duration-300 text-white rounded-3xl shadow-0 hover:shadow-lg p-6 purple-box-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex h-[150px] justify-center relative my-[25px] items-center">
        <span className="absolute ring-one neon-border w-[100px] h-[100px] border border-gray-700 rounded-full"></span>
        <FontAwesomeIcon
          icon={icon}
          className="text-white text-5xl absolute"
        />
      </div>
      <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
    </div>
  );
};

// Popup Component
const Popup = ({
  title,
  description,
  onClose,
}: {
  title: string;
  description: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={onClose}
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

// Main Component
const Features = () => {
  const [popupData, setPopupData] = useState<{ title: string; description: string } | null>(null);

  const services = [
    {
      title: "بناء موقع الكتروني",
      icon: faBrush,
      description: "مواقع لعرض محتوى، مواقع تقديم خدمات، متاجر الكترونية...",
    },
    {
      title: "بناء تطبيقات هواتف ذكية",
      icon: faMobile,
      description: "تطبيقات تسوق، تطبيقات تقديم خدمات...",
    },
    {
      title: "تصميم أدوات ذكاء اصطناعي",
      icon: faRobot,
      description: "يمكنك الان استخدام تقنيات الذكاء الاصطناعي...",
    },
    {
      title: "تطوير مواقع ووردبريس",
      icon: faWordpress,
      description: "متجرك الالكتروني بأقل التكاليف...",
    },
    {
      title: "برمجة تطبيقات سطح المكتب",
      icon: faDesktop,
      description: "فرصة مميزة لإنشاء برنامجك الخاص...",
    },
    {
      title: "تطوير الألعاب",
      icon: faGamepad,
      description: "صمم لعبتك الان حيث تقدم لك فريق تقني متخصص...",
    },
  ];

  return (
    <div className="mt-[200px] container mx-auto px-4">
      <h1 className="text-4xl text-center text-white mb-8">خدماتنا</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <FeaturedCard
            key={service.title}
            title={service.title}
            icon={service.icon}
            onClick={() => setPopupData(service)} 
          />
        ))}
      </div>

  
      {popupData && (
        <Popup
          title={popupData.title}
          description={popupData.description}
          onClose={() => setPopupData(null)} // إخفاء النافذة عند الضغط على إغلاق
        />
      )}
    </div>
  );
};

export default Features;
