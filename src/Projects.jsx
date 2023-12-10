import { useEffect } from "react";
import NavBar from "./components/NavBar";
import ThemeSwitch from "./components/ThemeSwitch";
import { useTheme } from "./context/themeContext";
import CardProject from "./components/CardProject";
import { SiNodedotjs, SiPostgresql, SiTailwindcss, SiReact, SiExpress } from "react-icons/si";
const Projects = () => {
    const { theme, toggleTheme } = useTheme();

    const carouselItemsQuejup = [
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702183998/imgPortfolio/projects/ak3whglgt0phkauehb4l.png', altText: 'Bienvenida' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702183998/imgPortfolio/projects/e7mrqweb56vbwcnle98j.png', altText: 'Registro' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702184630/imgPortfolio/projects/piaxarpvapq9psggqp6t.png', altText: 'Incio de sesión' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702183996/imgPortfolio/projects/qvtckcco8puxh9r0e41h.png', altText: 'Principal' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702184630/imgPortfolio/projects/ymad9gbtmibewb4cmgvp.png', altText: 'Publicación' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702183999/imgPortfolio/projects/gz1hi3bxccir13ouam66.png', altText: 'Ubicación' },

    ];

    const carouselItemsTaskList = [
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702185696/imgPortfolio/projects/mj033qhdxo8ny65rqzzc.png', altText: 'Espectativa' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702185697/imgPortfolio/projects/n7wybs60ihxqhyd6msxx.png', altText: 'Espectativa' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702185983/imgPortfolio/projects/lqud4kwpttmvwjef823s.png', altText: 'inicio' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702185982/imgPortfolio/projects/frsml03mlx8ri0lfvtcv.png', altText: 'eliminar' },
        { imageUrl: 'https://res.cloudinary.com/dzemdgvqo/image/upload/v1702185982/imgPortfolio/projects/ak8d45dlwal5dqtvrtbz.png', altText: 'eliminar' },
    ];

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", theme === "dark");
    }, [theme]);
    return (
        <div className={`w-full h-auto ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
            <NavBar>
                <ThemeSwitch theme={theme} onToggle={toggleTheme} />
            </NavBar>
            <div className="w-full h-16 bg-transparent mb">
            </div>

            <div className="p-5 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <CardProject
                    carouselItems={carouselItemsQuejup}
                    name={"Quejup"}
                    dateCompletion={"11/11/2023"}
                    description={"Quejup es una aplicación diseñada para poner de manifiesto las preocupaciones de la ciudad de Posadas. A través de un sistema de publicaciones georeferenciadas, la comunidad de Posadas puede compartir y destacar sus quejas."}
                    role={"Abarqué todas las fases del desarrollo, desde la maquetación hasta el despliegue del mismo."}
                    objective={"Ser un medio para impulsar el cambio positivo al abordar y visibilizar las preocupaciones específicas de la comunidad."}
                    urlGitHub={"https://github.com/bruno10-0/Backend-Frontend"}
                    urlPageWeb={"https://quejup-frontend.vercel.app/"}
                >
                    <div className="flex justify-start gap-5 p-1 my-2">
                        <SiNodedotjs className="text-green-500 text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <SiExpress className="text-blue-500 text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <SiPostgresql className="text-white text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <SiReact className="animate-spin text-blue-400   text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <SiTailwindcss className="text-sky-600 text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                    </div>
                </CardProject >

                <CardProject
                    carouselItems={carouselItemsTaskList}
                    name={"Task List"}
                    dateCompletion={"11/17/2023"}
                    description={"Task List es una aplicación web que permite a los usuarios guardar notas de tareas pendientes de manera rápida y sencilla. Toda la información es privada y solo editable por el usuario. Además, se guarda localmente en la PC, lo que significa que el acceso desde otros dispositivos no está disponible."}
                    role={"Me responsabilicé de la creación y desarrollo de la funcionalidad principal de las tarjetas (cards) en la interfaz, permitiendo a los usuarios crear y eliminar notas de manera intuitiva."}
                    objective={"Este proyecto tiene como finalidad demostrar las habilidades fundamentales en React. Además, busca evidenciar la destreza para seguir un diseño propuesto de manera efectiva."}
                    urlGitHub={"https://github.com/NAB-TAG/TaskList_argentinaPrograma"}
                    urlPageWeb={"http://taskapp.lovestoblog.com/"}
                >
                    <div className="flex justify-start gap-5 p-1 my-2">
                        <SiReact className="animate-spin text-blue-400   text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                        <SiTailwindcss className="text-sky-600 text-4xl hover:scale-125 transition-transform duration-300 ease-in-out" />
                    </div>
                </CardProject >
            </div>
        </div>
    )
}

export default Projects