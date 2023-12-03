import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiVite, SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
const Frontend = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full relative">
            <div className="absolute top-0 left-0 m-4">
                <p className="text-white text-lg font-bold">Tecnologías</p>
            </div>

            {/* Grupo 1 */}
            <div className="flex items-center space-x-4 mb-4">
                <DiJavascript size={50} className="text-yellow-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                <FaHtml5 size={50} className="text-orange-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                <FaCss3Alt size={50} className="text-blue-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
            </div>

            {/* Grupo 2 */}
            <div className="flex items-center space-x-4">
                <FaReact size={50} className="text-blue-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                <SiVite size={50} className="text-yellow-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                <SiTailwindcss size={50} className="text-blue-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
            </div>

            <div className="absolute bottom-0 right-0 m-4">
                <p className="text-white text-lg font-bold">Frontend</p>
            </div>
        </div>
    );
};

export default Frontend;
