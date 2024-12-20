// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BlogCardProps {
  img: string;
  date: string;
  title: string;
}

const BlogCard = ({ img, title }: BlogCardProps) => {
  return (
    <div className="shadow-lg rounded-lg border-[1px] border-white overflow-hidden  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt="Blog Image"
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:rotate-6 group-hover:scale-150 "
        />
      </div>
      <div className="p-4 bg-primary-bg h-[50%] text-white">
        {/* <h3 className="text-sm mb-2">{date}</h3> */}
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        {/* <p className="flex items-center cursor-pointer">
          Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </p> */}
      </div>
    </div>
  );
};

export default BlogCard;
