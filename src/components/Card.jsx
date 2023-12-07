// eslint-disable-next-line react/prop-types
const Card = ({title,text,imagen,url}) => {
    const redireccionar = () => {
        window.open(url, '_blank');
      };
    return (
        <>
            <div className="hover:scale-105 transition-transform duration-300 ease-in-out relative flex w-80 flex-col rounded-xl bg-white dark:bg-slate-800  bg-clip-border text-gray-700 dark:text-white shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <img
                src={imagen} 
                alt="Background Image"
                className="w-full h-full object-cover rounded-xl"
            />
                </div>
                <div className="p-6">
                    <h5 className=" select-none mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased  select-none">
                        {text}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button data-ripple-light="true" type="button" className="hover:scale-125 select-none rounded-lg bg-blue-500 dark:bg-blue-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={redireccionar}>
                        Ver
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;
