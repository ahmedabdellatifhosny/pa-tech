
interface ButtonProps{
  content: string;
  className?: string;

}

const Button = ({content, className}: ButtonProps) => {
  return (
    <button className={`py-4 px-6 bg-primary-text text-secondary font-bold text-lg border-secondary  rounded-md   hover:bg-transparent border hover:text-primary-bg duration-300 ${className} `}>
      {content}
    </button>
  )
}

export default Button