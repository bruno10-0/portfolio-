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
import Alert from "./components/Alert";
import Modal from "./components/Modal"
import Card from "./components/Card";
import Card2  from "./components/Card2";
function App() {
  const [modalGmail, setModalGmail] = useState(false)
  const [isCopied, setIsCopied] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleCopyClick = () => {
    const emailText = 'brunobrodon75@gmail.com';

    navigator.clipboard.writeText(emailText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch(err => console.error('Error al copiar al portapapeles', err));
  }

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const toggleModalGmail = () => {
    setModalGmail(!modalGmail);
  };
  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className={`relative w-full h-auto flex justify-center items-center ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
      <div className="h-auto lg:w-4/5 gallery p-4">

        {/* Columna 1 PERFIL*/}
        <div className="row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 w-full h-auto bg-gradient-to-r from-purple-900 via-pink-500 to-red-900  rounded-xl">
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
        <div className="col-span-1 w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <Gmail handleCopyClick={handleCopyClick} />
        </div>

        {/* Columna 9 NOTICIA*/}
        <div className="w-full bg-transparent rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <Notice />
        </div>

        {/* Columna 10 PASANTIAS*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Internships />
        </div>


        {/* Columna 11 PROYECTOS*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Project />
        </div>

        {/* Columna  CV*/}
        <div className="col-span-1  w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out ">
          <Cv />
        </div>



        {/* Columna 9 CERTIFICADOS*/}
        <div className="col-span-1 w-full  bg-slate-200 dark:bg-slate-400  rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out " onClick={toggleModalGmail}>
          <Certificates />
        </div>



      </div>

      <Modal openModal={modalGmail} closeModal={setModalGmail} titulo={"Certificados"}>

        <div className="flex items-center justify-center m-4 px-2">
          <Card
            title={"Explorando Java: Mi Experiencia en el Curso Inicial de Desarrollador"}
            text={"La experiencia formativa fue fundamental para mi desarrollo en el ámbito de la programación y testing. A través de este curso, pude adentrarme en el fascinante mundo de Java, comprender sus fundamentos y aplicarlos en diversos contextos (POO)."}
            imagen={"https://res.cloudinary.com/dzemdgvqo/image/upload/v1701922201/vsjcbvoxe1adaiucsjx9.png"}
            url={"https://drive.google.com/file/d/1x1L1ck-nfbBEFYBly8_Uiw_LyDJp6hmN/view?usp=sharing"} />

        </div>

        <div className="flex items-center justify-center m-4 px-2">
          <Card
            title={"¡Logro Desbloqueado! Certificación en Desarrollo Java Inicial del Programa 4.0 de la UTN"}
            text={"Fue un viaje desafiante pero gratificante. Me sumergí en los conceptos esenciales de Java, trabajé duro y finalmente superé el curso con éxito."}
            imagen={"https://res.cloudinary.com/dzemdgvqo/image/upload/v1701922662/i5anbijhdqjtkibcs5ms.png"}
            url={"https://drive.google.com/file/d/1dfS0_bdzYLcUDb2jMF2vBlYlH4cXjaTj/view?usp=sharing"} />

        </div>

        <div className="flex items-center justify-center m-4 px-2">
          <Card
            title={"Foro Internacional: Informática y Ciberseguridad"}
            text={"La experiencia fue enriquecedora, brindándonos una visión más amplia y detallada sobre la importancia de la seguridad informática.Estoy emocionado por aplicar estos conocimientos y contribuir a la creación de entornos virtuales más seguros y protegidos. "}
            imagen={"https://res.cloudinary.com/dzemdgvqo/image/upload/v1701923211/tua99ja6e75zev3xlo1x.png"}
            url={"https://drive.google.com/file/d/1ol-MKUSrr0SwgurcOuV1apdVj3tVf1wb/view?usp=sharing"} />

        </div>

        <div className="flex items-center justify-center m-4 px-2">
          <Card
            title={"Curso de Desarrollador WEB con REACT JS en la Universidad Tecnológica Nacional"}
            text={"Estoy agradecido por la oportunidad y emocionado de aplicar estos conocimientos en futuros proyectos. Fue una experiencia enriquecedora que fortaleció mi base en desarrollo web."}
            imagen={"https://res.cloudinary.com/dzemdgvqo/image/upload/v1701920956/htqxklfrnybvxnwzzkn6.png"}
            url={"https://drive.google.com/file/d/1RXPwFF4mlFitwTF3q_2S8FrG-GnO5boV/view?usp=sharing"} />

        </div>

        <div className="col-span-2 hidden items-center justify-center m-4 px-2 lg:flex">
          <Card2 />
        </div>



      </Modal>
      {isCopied && <Alert text={"Gmail copiado al portapapeles"}>

      </Alert>}
    </div>
  );
}

export default App;
