import { GoDownload } from "react-icons/go";

const Cv = () => {
    return (
        <>
            <button className="relative btnCv w-full h-full ">
                <div className="absolute top-0 left-0 m-4">
                    <GoDownload className="text-white text-4xl" />
                </div>
                <img
                    src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1701559261/yw1swaeh0groeaizr7lk.png"
                    alt="Imagen de CV"
                    width="90"
                    height="90"
                    style={{ fill: '#0092E4' }}
                />
                <div className="absolute bottom-0 left-0 m-4 flex flex-col justify-start items-start">
                    <p className="text-white text-2xl font-bold">Descargar</p>
                    <p className="text-white text-sm font-medium">Resumen</p>
                </div>
            </button>

        </>
    )
}

export default Cv
