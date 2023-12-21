const Presentation = () => {
    return (
        <>
            <div className="w-full h-full flex relative">
                <div className="hidden lg:flex items-center absolute top-0 left-0 mt-4 ml-10">
                    <div className="relative">
                        {/* Círculo con efecto ping */}
                        <div className="animate-ping absolute w-6 h-6 bg-green-500 rounded-full"></div>
                        {/* Círculo verde */}
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-white text-sm ml-2 select-none">Disponible</p>
                </div>


                <div className="absolute top-0 left-1/2  -translate-x-1/2 -mt-3 lg:hidden">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500  to-pink-700 border-4 border-blue-600 dark:border-black rounded-full overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1702181308/imgPortfolio/xnzsjkx4qpooaub3dpbn.png"
                            alt="Icono"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="mt-10 md:mt-0 lg:w-1/2 w-full h-full flex flex-col lg:justify-end justify-center lg:items-start items-center p-8">
                    <h1 className="font-bold mb-4 text-white text-lg lg:text-3xl select-none">👋 Hola, Soy Bruno </h1>
                    <p className="text-white md:text-sm select-none lg:text-xl">
                        Actualmente, estoy inmerso en el mundo del desarrollo web. Mis conocimientos abarcan diversas tecnologías
                        y  <strong className="font-bold">mi objetivo principal se centra en perfeccionar mis habilidades.</strong>
                    </p>
                </div>

                <div className="hidden md:hidden lg:block w-1/2 h-full p-2">
                    <img
                        src="https://res.cloudinary.com/dzemdgvqo/image/upload/v1702181308/imgPortfolio/xnzsjkx4qpooaub3dpbn.png"
                        alt="Imagen animada Bruno"
                        className="h-full w-full object-cover rounded-lg select-none"
                    />
                </div>
            </div>
        </>
    );
};

export default Presentation;
