import { GiTrophy } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const Card2 = ({ title, text, logo }) => {
    return (
      <>
        <div className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full bg-blue-500 dark:bg-blue-800 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 px-4">
          {logo && <GiTrophy className="text-white text-7xl mb-4" />}
          <div className="text-center">
            <span className="font-bold select-none">{title}</span>
            <p className="line-clamp-3 select-none">{text}</p>
          </div>
        </div>
      </>
    );
  };  

export default Card2
