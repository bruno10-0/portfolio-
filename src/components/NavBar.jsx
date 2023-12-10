import { useNavigate } from 'react-router-dom';
import { GoHome } from "react-icons/go";
// eslint-disable-next-line react/prop-types
const NavBar = ({ children }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/");
    };
    const blurBackground = {
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        padding: '20px',
        color: '#ffffff',
        backdropFilter: 'blur(20px)',
    };
    return (
        <>
            <nav style={blurBackground} className="fixed w-full h-16 z-50">
                <div></div>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="text-white font-bold text-lg">Proyectos</div>
                        <div className="flex space-x-4">
                            <GoHome onClick={handleNavigation} className='text-2xl cursor-pointer' />
                            <button>
                                {children}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
