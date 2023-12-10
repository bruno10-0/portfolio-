import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, titulo, openModal, closeModal }) => {

    const estiloContenedor = {
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        padding: '20px',
        color: '#ffffff',
        backdropFilter: 'blur(10px)',
    }
    const handleClick = () => {
        closeModal(false);
    };

    return (
        <>
            {openModal &&
                <div>
                    {/*Overlay */}
                    <div className="p-10  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full  z-30 flex justify-center items-end" style={estiloContenedor}>
                        {/*Modal */}
                        <div className="w-full lg:w-auto h-auto relative dark:bg-slate-900 bg-white rounded-lg shadow-2xl">
                            {/*Modal Header */}
                            <div className="flex justify-between items-center  mt-7 mb-7 pb-7 border-b-2 dark:border-blue-500 border-blue-500" >
                                <div className="text-blue-500 ml-6 text-2xl">{titulo}</div>
                            </div>
                            {/*Modal Close */}
                            <IoClose className="rounded-lg absolute top-7 right-7 cursor-pointer text-2xl hover:bg-slate-200 dark:hover:bg-red-600 dark:hover:text-white text-red-500 hover:scale-125 transition-transform duration-300 ease-in-out" onClick={handleClick} />
                            {/*Modal Content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-2">
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
