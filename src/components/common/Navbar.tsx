import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);

  return (
    <div className=" px-[5px] !max-w-screen !overflow-x-hidden lg:px-[40px] z-[1000]  w-[100vw] mx-auto border-b-[1px] border-gray-500">
      <header
        className={`flex items-center flex-row-reverse  h-[70px] px-[20px] w-[95vw] mx-auto z-[1000]  bg-transaprent  mx-auto py-0 text-white  top-0 left-0  transition-transform duration-300   `}
      >
        {/* Logo */}
        <a href={"#navbar"} className="flex items-center mr-4">
          <h1 className="ml-[10px] text-md font-bold ">PA TECH</h1>

          <img src="/images/landing-logo.png" className="w-[60px]" alt="logo" />
        </a>

        {/* Spacer to push the nav to the right */}
        <div className="flex-grow"></div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex space-x-6 h-full text-md duration-300 items-center mr-4">
          <a
            href="#about-us"
            className="text-white hover:text-purple-500   h-full duration-300 flex justify-center px-2 ml-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            لنتعرف
          </a>
          <a
            href="#services"
            className="text-white hover:text-purple-500   duration-300 h-full flex justify-center px-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            خدماتنا
          </a>
          <a
            href="#achievements"
            className="text-white hover:text-purple-500   duration-300 h-full flex justify-center px-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            انجازاتنا
          </a>
          <a
            href="#our-team"
            className="text-white hover:text-purple-500   h-full flex justify-center px-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            فريق عملنا
          </a>
          <a
            href="#benefits"
            className="text-white hover:text-purple-500   h-full flex justify-center px-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            مميزاتنا
          </a>
          <a
            href="#contact-us"
            className="text-white hover:text-purple-500   h-full flex justify-center px-2 items-center rounded-md transform transition-transform hover:scale-105"
          >
            تواصل معنا
          </a>
        </nav>

        {/* Button and Hamburger Icon */}
        <div className="flex items-center space-x-4 xl:hidden mr-4">
          <div
            className="cursor-pointer text-3xl"
            onClick={() => setIsSidebarOpened((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        {/* Mobile Overlay Sidebar */}
        {isSidebarOpened && (
          <div
            className="fixed top-0 left-0 bg-black bg-opacity-75 z-[10] h-screen w-screen"
            onClick={() => setIsSidebarOpened(false)}
          ></div>
        )}

        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full z-[1000] !bg-primary-bg shadow-lg w-64 transition-transform duration-300 ${
            isSidebarOpened ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-4 border-r-[1px]">
            <div className="flex items-center justify-between mb-8">
              <img
                src="/images/landing-logo.png"
                className="w-[70px]"
                alt="logo"
              />
              <button
                className="text-white text-3xl"
                onClick={() => setIsSidebarOpened(false)}
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about-us"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  لنتعرف
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  انجازاتنا
                </a>
              </li>
              <li>
                <a
                  href="#our-team"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  فريق عملنا
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  مميزاتنا
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="text-white hover:text-purple-500   block py-2 px-4 rounded-md duration-300 transform transition-transform hover:scale-105"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
