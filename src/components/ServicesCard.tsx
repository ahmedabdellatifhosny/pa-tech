import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ServicesCardProps {
  icon: IconProp;
  title: string;
  content: string;
}

// Define an array of 25 colors
const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F733FF', '#FF33A0',
  '#FF8C00', '#FF4500', '#DA70D6', '#9400D3', '#00CED1',
  '#20B2AA', '#3CB371', '#FF1493', '#C71585', '#DC143C',
  '#FF6347', '#FF0000', '#FF69B4', '#FFB6C1', '#B22222',
  '#8A2BE2', '#A52A2A', '#5F9EA0', '#D2691E', '#FFDEAD'
];

const ServicesCard = ({ icon, title, content }: ServicesCardProps) => {
  // State to store the current color
  const [iconColor, setIconColor] = useState<string>('#FF5733'); // Default color

  // Function to handle hover and change color
  const handleMouseEnter = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setIconColor(randomColor);
  };

  return (
    <div 
      className='flex flex-col group min-h-[620px]  justify-between max-h-[80vh] hover:bg-secondary duration-300 h-full p-8 border rounded-lg shadow-lg'
      onMouseEnter={handleMouseEnter} // Change color on hover
      style={{
        background: 'transparent',
        transition: 'background 0.3s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = 'linear-gradient(to bottom, #2c2b2b1c, #2c2b2b1c)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <div className='w-full h-[55%] flex flex-col justify-between'>
        <div className='flex border-2  border-primary-text bg-secondary mx-auto bg-[#2c2b2b1c] group-hover:border-primary-text p-6 w-fit rounded-full'>
          <FontAwesomeIcon 
            icon={icon} 
            size="3x" 
            style={{ color: iconColor }} // Apply the dynamic color
            className='transition-transform duration-300 transform group-hover:scale-125'
          />
        </div>
        <h1 className='text-3xl text-center  text-secondary  font-bold my-6'>{title}</h1>
        <div className='flex mb-4 mx-auto'>
          <span className='w-[30px] h-[3px] bg-secondary '></span>
          <span className='mx-4 w-[30px] h-[3px] bg-secondary '></span>
          <span className='w-[30px] h-[3px] bg-secondary '></span>
        </div>
      </div>
      <div className='h-[45%]'>
        <p className='text-secondary mt-8 text-center  !text-xl md:text-lg lg:!text-xl'>{content}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
