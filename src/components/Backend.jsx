import { FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { DiMongodb, DiMysql, DiPostgresql, DiJava } from 'react-icons/di';
const Backend = () => {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center w-full h-full">

                <div className="absolute top-0 left-0 m-4">
                    <p className="text-white text-lg font-bold">Tecnologías</p>
                </div>

                {/* Grupo 1 */}
                <div className="flex items-center space-x-4 mb-4">
                    <FaNodeJs size={50} className="text-green-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                    <FaJsSquare size={50} className="text-yellow-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                    <DiJava size={50} className="text-white transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                </div>

                {/* Grupo 2 */}
                <div className="flex items-center space-x-4">
                    <DiMongodb size={50} className="text-green-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                    <DiMysql size={50} className="text-blue-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                    <DiPostgresql size={50} className="text-indigo-500 transform hover:scale-150 transition-transform duration-300 ease-in-out" />
                </div>

                <div className="absolute bottom-0 right-0 m-4">
                    <p className="text-white text-lg font-bold">Backend</p>
                </div>
            </div>
        </>
    )
}
export default Backend