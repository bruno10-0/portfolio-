import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
    return (
        <>
            <div className="relative h-full w-full">
                <div className="absolute top-0 left-0 m-4">
                    <FaGithub className="text-white text-4xl" />
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