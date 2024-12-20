import React from 'react';

interface TestimonialCardProps {
  img: string;
  name: string;
  // job: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ img, name, content }) => {
  return (
    <div className="bg-primary-bg text-secondary min-w-full min-h-full hover:bg-secondary group hover:text-primary-text duration-200 hover:border-primary-text border-[1px]  p-6 rounded-lg  shadow-lg mx-auto">
      <div className="flex flex-col items-center -translate-y-16">
        <img
          src={img}
          className="rounded-full !w-24 !h-24 object-cover mb-4 border-2 duration-300 border-white group-hover:border-primary-text "
          alt={`Photo of ${name}`}
        />
        <h2 className="text-3xl font-semibold mb-1">{name}</h2>
        <h3 className="text-xl font-medium  mb-4">{content}</h3>
        {/* <p className="text-base text-center">{content}</p> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
