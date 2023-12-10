import Carousel from "./Carrousel"
// eslint-disable-next-line react/prop-types
const CardProject = ({ children, name, description, objective, role, dateCompletion, carouselItems, urlGitHub, urlPageWeb }) => {

    const GitHub = () => {
        const url = urlGitHub;
        window.open(url, '_blank');
    };
    const PageWeb = () => {
        const url = urlPageWeb;
        window.open(url, '_blank');
    };

    return (
        <>
            <div
                className=" shadow-2xl shadow-gray-500 dark:shadow-blue-600 duration-500 group overflow-hidden relative rounded dark:bg-neutral-800 bg-neutral-400 text-neutral-50 p-4 flex flex-col justify-evenly"
            >
                <div
                    className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
                ></div>
                <div
                    className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
                ></div>
                <div
                    className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
                ></div>

                <div className="z-10 flex flex-col justify-evenly w-full h-full">
                    <span className="flex items-center justify-between text-center">
                        <span className="text-3xl font-bold mr-2">{name}</span>
                        <div className="bg-gray-500 text-white rounded-full p-2 text-sm mt-2">Finalizó {dateCompletion}</div>
                    </span>

                    <span className="text-2xl my-2">Descripción</span>
                    <p>
                        {description}
                    </p>

                    <div>
                        <Carousel items={carouselItems} />
                    </div>

                    <span className="text-2xl my-2">Objetivo</span>
                    <p>
                        {objective}
                    </p>

                    <span className="text-2xl my-2">Rol</span>
                    <p>
                        {role}
                    </p>

                    <span className="text-2xl my-2">Tecnologías</span>
                    <div>
                        {children}
                    </div>


                    <div className="flex flex-col justify-between items-center w-full h-auto p-2 gap-4">
                        <button
                            className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3"
                            onClick={GitHub}
                        >
                            GitHub
                        </button>
                        <button
                            className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3"
                            onClick={PageWeb}
                        >
                            Pagina Web
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CardProject
