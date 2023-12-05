import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight } from "react-icons/lu";
const GitHub = () => {
    const githubUrl = "https://github.com/bruno10-0?tab=repositories";

    const handleClick = () => {
        window.open(githubUrl, "_blank");
    };
    return (
        <>
            <div className="relative h-full w-full " onClick={handleClick} style={{ cursor: 'pointer' }}>
                <div className="absolute top-0 left-0 m-4 flex w-full justify-between">
                    <FaGithub className="text-white text-4xl" />
                    <LuArrowUpRight className="text-white text-4xl mr-6"/>
                </div>
                <div className="absolute bottom-0 left-0 m-4">
                    <p className="text-white text-2xl font-bold">GitHub</p>
                    <p className="text-white text-sm font-medium">Repositorio cool, aqui subo el codigo mis proyectos.</p>
                </div>
                <div className="flex items-center justify-center h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://media4.giphy.com/media/NytMLKyiaIh6VH9SPm/giphy.gif")' }}>
                </div>
            </div>
        </>
    )
}
export default GitHub