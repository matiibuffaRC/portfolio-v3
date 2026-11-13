import ScrollIndicator from "./ScrollIndicator";

function Inicie() {
    return (
        <section id="inicio" className="scroll-mt-18 dark:bg-[#121820] bg-white p-5 min-h-screen flex flex-col items-center justify-center relative" >
            <div className="flex flex-col items-center">
                <h1 className="animate-fade-in-up text-center text-[#151B23] dark:text-[#E3F6F5] text-5xl md:text-7xl urbanist font-bold">
                    Matías Buffa
                </h1>
                <p className="animate-fade-in-up [animation-delay:150ms] text-center text-[#151B23] dark:text-[#D1D7E0] text-2xl md:text-2xl open-sans font-semibold">
                    Desarrollador Full Stack enfocado en React y Node.js
                </p>

                {/* Toda la píldora es el link (antes solo el texto era clickeable).
                    El texto visible coincide con el nombre accesible; el contexto extra va en sr-only. */}
                <div className="animate-fade-in-up [animation-delay:450ms] flex flex-row items-center justify-center gap-2 px-4 my-3 w-full">
                    <a href="/MatiasBuffaCVP.pdf" target="_blank" rel="noopener noreferrer" className="max-w-32 flex-1 text-center py-1 rounded-4xl transition-colors bg-[#087EA4] hover:bg-[#066686] text-white dark:bg-[#58C4DC] dark:hover:bg-[#3998B6] dark:text-[#151B23] text-lg urbanist font-bold select-none" >
                        Ver CV
                        <span className="sr-only"> de Matías Buffa (PDF, se abre en una pestaña nueva)</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/" target="_blank" rel="noopener noreferrer" className="max-w-32 flex-1 text-center py-1 rounded-4xl transition-colors border border-[#087EA4] hover:bg-[#087EA4]/10 dark:border-white dark:hover:bg-[#171e27] text-[#087EA4] dark:text-white text-lg urbanist font-bold select-none" >
                        LinkedIn
                        <span className="sr-only"> de Matías Buffa (se abre en una pestaña nueva)</span>
                    </a>
                </div>
            </div>
            <ScrollIndicator />
        </section>
    );
}

export default Inicie;
