import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";

const Cv = () => {

    function redirigirACanva() {
        // URL de Canva
        const urlCanva ="https://www.canva.com/design/DAFrgkFzlkw/THSYnwh9gB0388FF4FU1rA/view?utm_content=DAFrgkFzlkw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        // Abrir la URL en una nueva pestaña
        window.open(urlCanva, "_blank");
    }

    return (
        <>
            <button className="relative btnCv w-full h-full "onClick={redirigirACanva}>
                <div className="absolute top-0 left-0 m-4">
                    <MdOutlineRemoveRedEye className="text-white text-4xl" />
                </div>
                <div className="absolute top-0 right-0 m-4">
                    <LuArrowUpRight className="text-white text-4xl" />
                </div>
                <img
                    src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1702181765/imgPortfolio/pitwub0nk9zimiofuwrj.png"
                    alt="Imagen de CV"
                    width="90"
                    height="90"
                    style={{ fill: '#0092E4' }}
                />
                <div className="absolute bottom-0 left-0 m-4 flex flex-col justify-start items-start">
                    <p className="text-white text-2xl font-bold">Currículum</p>
                    <p className="text-white text-sm font-medium">Visualizar.</p>
                </div>
            </button>

        </>
    )
}

export default Cv
