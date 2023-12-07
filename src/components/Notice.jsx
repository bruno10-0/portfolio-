import { GiMicrophone } from "react-icons/gi";

const Notice = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        <GiMicrophone className="text-6xl text-orange-400" />
                        <strong>NOTICIAS</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                    </div>
                    <div className="front-content">
                        <small className="badge">Noticias</small>

                        <a href="https://www.canal12misiones.com/economia-del-conocimiento/quejup-una-app-que-busca-solucionar-problemas-comunes-de-la-ciudad">
                            <div className="description cursor-pointer">
                                <div className="title">
                                    <p className="title">
                                        <strong className="text-2xl">Quejup</strong>
                                    </p>
                                    {/* Provide your SVG here if needed */}
                                </div>
                                <p className="card-footer">
                                    25/11/2023 &nbsp; | &nbsp; canal12misiones
                                </p>
                            </div>
                        </a>


                        <a href="https://ladatamix.com/presentaron-aplicaciones-desarrolladas-por-estudiantes-del-ises/">
                            <div className="description cursor-pointer">
                                <div className="title">
                                    <p className="title">
                                        <strong className="text-2xl">Quejup</strong>
                                    </p>
                                    {/* Provide your SVG here if needed */}
                                </div>
                                <p className="card-footer">
                                    17/11/2023 &nbsp; | &nbsp; Ladatamix
                                </p>
                            </div>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;
