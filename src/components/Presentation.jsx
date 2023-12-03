const Presentation = () => {
    return (
        <>
            <div className="relative w-full h-full flex">
                <div className="lg:w-1/2 w-full h-full flex flex-col lg:justify-end justify-center lg:items-start items-center p-8">
                    <h1 className="font-bold mb-4 text-white text-lg lg:text-3xl select-none">👋 Hola, Soy Bruno </h1>
                    <p className="text-white md:text-sm select-none lg:text-xl">
                        Actualmente, estoy inmerso en el mundo del desarrollo web. Mis conocimientos abarcan diversas tecnologías, 
                        y  <strong className="font-bold">mi objetivo principal se centra en perfeccionar mis habilidades</strong>. Estoy listo para sumergirme en 
                        nuevos desafíos y aprender más en el camino.
                    </p>

                </div>

                <div className="hidden md:hidden lg:block w-1/2 h-full p-2">
                    <img
                        src={"https://res.cloudinary.com/dzemdgvqo/image/upload/v1701451938/d4akhatt8e4pdlun9sq2.png"}
                        alt="Imagen animada Bruno"
                        className="h-full w-full object-cover rounded-lg select-none"
                    />
                </div>
            </div>
        </>
    );
};

export default Presentation;
