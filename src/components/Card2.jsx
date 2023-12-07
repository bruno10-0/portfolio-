import { GiTrophy } from "react-icons/gi";

const Card2 = () => {
    return (
        <>
            <div
                className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full bg-blue-500 dark:bg-blue-800 rounded-lg shadow-lg flex flex-row items-center justify-evenly gap-4 px-4"
            >
                 <GiTrophy className="text-white text-7xl"/> 
                <div>
                    <span className="font-bold  select-none">Mis Logros y Próximos Pasos</span>
                    <p className="line-clamp-3 select-none">
                        Estos logros son solo el comienzo de mi viaje de aprendizaje y crecimiento.
                        Me estoy esforzando por absorber cada conocimiento, mejorar mis habilidades
                        y explorar nuevas áreas.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Card2
