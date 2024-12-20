import Navbar from "../components/common/Navbar";
import Ready from "../sections/Ready";
import Portfolio from "../sections/Portfolio";
import ContactUs from "../sections/ContactUs";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useRef, useState } from "react";
import Separator from "../components/common/Separator";
import Features from "../sections/Features";
import { motion } from 'framer-motion';
import Hero, { generateMeteors } from "../sections/Hero";
import NewWhyUs from "../sections/NewWhyUs";
import Loading from "../components/Loading";

const ClientLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      if (loadingRef.current) {
        loadingRef.current.classList.add("loader-fade-out"); // Use classList for adding class
      }
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div dir="rtl" className="!max-w-[97vw] !bg-black lg:!max-w-[99vw] !overflow-hidden">
      {isLoading && (
        <div ref={loadingRef}>
          <Loading />
        </div>
      )}

      {/* Hero and Navbar */}
      <div className="meteor-background relative !max-w-screen !overflow-x-hidden">
        {generateMeteors(20)}
        <Navbar />
        <Hero />
      </div>

      <Separator />

      {/* Ready  */}
      <div className="relative meteor-background">
      {generateMeteors(10)}

        <motion.div className='w-screen h-screen hidden lg:block absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] opacity-[0.09]'>
          <video
            className='w-full h-full object-cover'
            src="/videos/blackhole-bg.mp4"
            autoPlay
            loop
            muted
          />
          <div className='absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b to-transparent from-[#000000f1] via-[#140f0f8e]'></div>
          <div className='absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-[#000000f1] via-[#140f0f8e]'></div>
        </motion.div>
        <Ready />
      </div>

        
        <div className="relative meteor-background">
          {generateMeteors(10)}
          <Features />
        </div>

      <Separator />

      <div className="relative meteor-background">
      {generateMeteors(20)}

        <motion.div className='w-screen h-screen absolute top-0 left-0  z-[1] opacity-10'>
          <video
            className='w-full h-full object-cover'
            src="/videos/cosmic-6.mp4"
            autoPlay
            loop
            muted
          />
          <div className='absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b to-transparent from-[#000000f1] via-[#140f0f8e]'></div>
          <div className='absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-[#000000f1] via-[#140f0f8e]'></div>
        </motion.div>
        <Portfolio />
      </div>

      <div className="relative ">
        {generateMeteors(10)}
        <motion.div className='w-screen h-screen absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] opacity-10'>
          <video
            className='w-full h-full object-cover'
            src="/videos/cosmic-3.mp4"
            autoPlay
            loop
            muted
          />
          <div className='absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b to-transparent from-[#000000f1] via-[#140f0f8e]'></div>
          <div className='absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent to-[#000000f1] via-[#140f0f8e]'></div>
        </motion.div>
        <NewWhyUs />
      </div>

      <Separator />
      <ContactUs />
      <ScrollToTop />
    </div>
  );
};

export default ClientLayout;
