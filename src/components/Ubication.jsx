import { FaLocationDot } from "react-icons/fa6";
const Ubication = () => {


    return (
        <div className="relative w-full h-full rounded-xl">
            <img
                src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1701482386/sw2ukbyvoho0xfmna9z0.png"  // Reemplaza con la ruta correcta de tu imagen
                alt="Background Image"
                className="w-full h-full object-cover rounded-xl"
            />
            <div
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center rounded-xl"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(0px)',  // Ajusta la cantidad de desenfoque aquí
                }}
            >
                <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="z-10 w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 border-2 border-black rounded-full overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1701451938/d4akhatt8e4pdlun9sq2.png"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="m-2 w-20 h-20 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                </div>
                <label className="bg-blue-800 text-white px-4 py-2 rounded-3xl flex items-center">
                    <FaLocationDot className="text-red-600 mr-2" />
                    <p>Posadas, Misiones, Argentina.</p>
                </label>
            </div>
        </div>
    )
}

export default Ubication;
