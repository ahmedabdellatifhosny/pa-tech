import {  faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/helpers/Button";
import './style/Hero.css';
import './style/contact.css'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";
// const createStars = (count: number) => {
//   const stars = [];
//   for (let i = 0; i < count; i++) {
//     stars.push(
//       <div
//         key={i}
//         className="star"
//         style={{
//           width: `${Math.random() * 3 + 1}px`, // Random size for stars
//           height: `${Math.random() * 3 + 1}px`, // Random size for stars
//           top: `${Math.random() * 100}vh`, // Random vertical position
//           left: `${Math.random() * 100}vw`, // Random horizontal position
//         }}
//       />
//     );
//   }
//   return stars;
// };

const ContactUs = () => {
  

  // const meteors = generateShootingStart(25); // Generate 25 meteors

  return (
    <div id="contact-us" className="container-fluid max-w-screen overflow-hidden overflow-x-hidden py-12 meteor-background">
      {/* {createStars(10)} */}
      <div className="abobkr-container flex flex-col lg:flex-row mx-auto mb-[100px] gap-12">
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <h1 className="text-3xl font-bold text-white mb-4">اتصل بنا</h1>
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/970599108310"
              className="flex items-center gap-4 bg-white p-4 w-[100%] lg:w-[80%] rounded-lg shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-primary-text text-2xl" />
              <div>
                <h3 className="text-primary-text font-semibold">اتصل بي</h3>
                <h2 className="text-lg font-bold">+970599108310</h2>
              </div>
            </a>
            <a 
        href="https://www.facebook.com/your-profile" // Replace with your Facebook link
        className="flex items-center gap-4 bg-white p-4 w-[100%] lg:w-[80%] rounded-lg shadow-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-primary-text text-2xl" />
        <div>
          <h3 className="text-primary-text font-semibold">تابعنا على الفيسبوك</h3>
          <h2 className="text-lg font-bold">patech official</h2> {/* Replace with your Facebook username */}
        </div>
      </a>

      <a 
        href="https://www.instagram.com/your-profile" // Replace with your Instagram link
        className="flex items-center gap-4 bg-white p-4 w-[100%] lg:w-[80%] rounded-lg shadow-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-primary-text text-2xl" />
        <div>
          <h3 className="text-primary-text font-semibold">تابعنا على إنستغرام</h3>
          <h2 className="text-lg font-bold">patech</h2> {/* Replace with your Instagram username */}
        </div>
      </a>

      <a 
        href="mailto:your-email@example.com" // Replace with your email address
        className="flex items-center gap-4 bg-white p-4 w-[100%] lg:w-[80%] rounded-lg shadow-md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faVoicemail} className="text-primary-text text-2xl" />
        <div>
          <h3 className="text-primary-text font-semibold">أرسل لنا بريدًا إلكترونيًا</h3>
          <h2 className="text-lg font-bold">patech@gmail.com</h2> {/* Replace with your email address */}
        </div>
      </a>
            
            
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <h1 className="text-3xl font-bold text-white mb-4">اترك لنا رسالة</h1>
          <p className="text-white mb-6">
            إذا كان لديك أي أسئلة أو استفسارات، يرجى ملء النموذج أدناه وسنكون سعداء بمساعدتك.
          </p>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="الاسم الأول" 
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-text transition" 
              />
              <input 
                type="text" 
                placeholder="اسم العائلة" 
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-text transition" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-text transition" 
              />
              <input 
                type="tel" 
                placeholder="الهاتف" 
                className="p-3 rounded-lg text-right border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-text transition" 
              />
            </div>
            <textarea 
              placeholder="الرسالة" 
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 hover:!text-white focus:ring-primary-text transition h-32 resize-none" 
            />
            <Button 
              content="إرسال" 
              className="!px-8 !py-3 bg-primary-text text-white rounded-lg shadow-md transition-colors hover:!text-white" 
            />
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex gap-4 text-white duration-300">
          <a 
            href="https://www.facebook.com/profile.php?id=100095238793847&mibextid=LQQJ4d" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faFacebook} 
              className="text-3xl cursor-pointer duration-300 hover:text-blue-500 transition-colors" 
            />
          </a>
          <a 
            href="https://www.instagram.com/pa.tech.ai?igsh=Y29leGZjNGc1djQ=" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faInstagram} 
              className="text-3xl cursor-pointer duration-300 hover:text-red-500 transition-colors" 
            />
          </a>
          <a 
            href="https://wa.me/970599108310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon 
              icon={faWhatsapp} 
              className="text-3xl cursor-pointer duration-300 hover:text-green-600 transition-colors" 
            />
          </a>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ContactUs;