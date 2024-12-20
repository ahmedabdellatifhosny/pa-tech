
interface OutlineButtonProps{
  content: string;
  className?: string;

}

const OutlineButton = ({content, className}: OutlineButtonProps) => {
  return (
    <button className={`py-3 px-4 text-yellow-600 bg-white border-yellow-600 rounded-md ${className} `}>
      {content}
    </button>
  )
}

export default OutlineButton