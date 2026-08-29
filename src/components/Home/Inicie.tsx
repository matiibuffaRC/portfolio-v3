// import React from 'react'
//Import components
import ScrollIndicator from "./ScrollIndicator";
//

function Inicie() {
    return (
        <section id="inicio" className="scroll-mt-18 dark:bg-[#121820] bg-[#f9fafc] p-5 min-h-screen flex flex-col items-center justify-center relative" >
            <div className="flex flex-col items-center">
                <h1 className="animate-fade-in-up text-center text-[#151B23] dark:text-[#E3F6F5] text-5xl md:text-7xl urbanist font-bold">
                    Matías Buffa
                </h1>
                <h2 className="animate-fade-in-up [animation-delay:150ms] text-center text-[#151B23] dark:text-[#D1D7E0] text-2xl md:text-2xl open-sans font-semibold">
                    Desarrollador Full Stack enfocado en React y Node.js
                </h2>
                
                <div className="animate-fade-in-up [animation-delay:450ms] flex flex-row justify-center gap-2 px-4 my-3 w-full">
                    <div className="bg-[#E3F6F5] max-w-32 flex-1 text-center py-1 rounded-2xl transition-colors hover:bg-[#c9ecea]">
                        <a title="Descargar curriculum vitae" aria-label="Descargar curriculum vitae de Matías Buffa" href="/MatiasBuffaCVP.pdf" target="_blank" rel="noopener noreferrer" className="block text-[#259E93] urbanist font-bold" >
                        Ver CV
                        </a>
                    </div>
                    <div className="bg-[#E3F6F5] max-w-32 flex-1 text-center py-1 rounded-2xl transition-colors hover:bg-[#c9ecea]">
                        <a title="Visitar LinkedIn de Matías Buffa" aria-label="Visitar perfil de LinkedIn de Matías Buffa" href="https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/" target="_blank" rel="noopener noreferrer" className="block text-[#259E93] urbanist font-bold" >
                        LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <ScrollIndicator />
        </section>
    );
}

export default Inicie;
