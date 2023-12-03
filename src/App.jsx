import { useState, useEffect } from "react";
import ThemeSwitch from "./components/ThemeSwitch";
import Presentation from "./components/Presentation";
import Age from "./components/Age";
import Ubication from "./components/Ubication";
import Backend from "./components/Backend";
import Frontend from "./components/Frontend";
import GitHub from "./components/GitHub";
import Gmail from "./components/Gmail";
import Certificates from "./components/Certificates";
import Project from "./components/Project";
import Internships from "./components/Internships";
import Cv from "./components/Cv";
import Notice from "./components/Notice";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={`w-full h-auto flex justify-center items-center ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className="h-auto lg:w-4/5 gallery p-4">

        {/* Columna 1 PERFIL*/}
        <div className="row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 w-full h-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 rounded-xl">
          <Presentation />
        </div>

        {/* Columna 2 EDAD*/}
        <div className="w-full bg-green-400 dark:bg-green-700 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Age />
        </div>

        {/* Columna 3 TEMA*/}
        <div className={`w-full bg-blue-300 dark:bg-blue-800 rounded-xl flex justify-center items-center relative`}>
          <div className="transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <ThemeSwitch theme={theme} onToggle={handleToggleTheme} />
          </div>
        </div>

        {/* Columna 4 MI UBICACION*/}
        <div className="col-span-1 md:col-span-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Ubication />
        </div>

        {/* Columna 5 BACKEND*/}
        <div className="col-span-1 w-full bg-pink-500 dark:bg-pink-800 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <Backend />
        </div>

        {/* Columna 6 FRONTEND*/}
        <div className="col-span-1 w-full bg-violet-900 dark:bg-slate-900  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Frontend />
        </div>

        {/* Columna 7 GITHUB*/}
        <div className="col-span-1 md:col-span-2  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <GitHub />
        </div>

        {/* Columna 8 GMAIL*/}
        <div className="col-span-1 w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Gmail />
        </div>


        {/* Columna 9 CERTIFICADOS*/}
        <div className="col-span-1 w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Certificates />
        </div>

        {/* Columna 10 PASANTIAS*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Internships />
        </div>


        {/* Columna 11 PROYECTOS*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Project />
        </div>

        {/* Columna 12 CV*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Cv />
        </div>

        {/* Columna 13 NOTICIA*/}
        <div className="w-full bg-transparent rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Notice />
        </div>


      </div>
    </div>
  );
}

export default App;
