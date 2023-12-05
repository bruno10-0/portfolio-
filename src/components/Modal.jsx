import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, titulo, modalGmail, setModalGmail }) => {

    const estiloContenedor = {
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        padding: '20px',
        color: '#ffffff',
        backdropFilter: 'blur(10px)',
    }
    const handleClick = () => {
        // Cambiar el estado al valor opuesto
        setModalGmail(false);
      };

    return (
        <>
        {modalGmail &&
            <div>
                {/*Overlay */}
                <div className="p-10 inset-0 fixed w-full h-full z-30 flex justify-center items-center" style={estiloContenedor}>
                    {/*Modal */}
                    <div className="w-full lg:w-4/5 h-auto relative dark:bg-slate-900 bg-white rounded-lg shadow-2xl">
                        {/*Modal Header */}
                        <div className="flex justify-between items-center  mt-7 mb-7 pb-7 border-b-2 dark:border-green-600 border-blue-500" >
                            <div className="text-blue-500 dark:text-green-600 ml-6 text-2xl">{titulo}</div>
                        </div>
                        {/*Modal Close */}
                        <IoClose className="rounded-lg absolute top-7 right-7 cursor-pointer text-2xl hover:bg-slate-200 dark:hover:bg-red-600 dark:hover:text-white text-red-500 hover:scale-125 transition-transform duration-300 ease-in-out" onClick={handleClick}/>
                        {/*Modal Content */}
                        <div className="flex flex-col items-center mb-5">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
            }
        </>
    );
};

export default Modal;
