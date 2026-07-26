import { useState } from 'react';

// Imports components
import PrintProyects from './PrintProyects';
// 

const OPTIONS = ["Todos", "Frontend", "Backend", "Fullstack"];

function Proyects() {
    // Variable de estado para guardar lo que elegimos para mostrar, por defecto mostramos todos
    const [optionSelected, setOptionSelected] = useState<string>("Todos");
    // Función para cambiar de selección
    const handleOption = (option: string) => {
        setOptionSelected(option);
    }

    return (
        <section className="dark:bg-[#212830] bg-[#F3F4F6] dark:text-[#D1D7E0] text-[#151B23] py-17.5 p-5 flex flex-col items-center">
            <div className="w-full md:max-w-4xl lg:max-w-5xl flex flex-col gap-2">
                <div>
                    <h2 className="urbanist font-bold text-[#259E93] text-3xl">PROYECTOS</h2>
                    <h3 className="open-sans font-bold text-xl">Algunos de mis destacados...</h3>
                </div>
                {/* Filtro de opciones */}
                <div>
                    <div className="dark:bg-[#121820] bg-gray-300 rounded-full py-1 px-1 inline-flex flex-row gap-2">
                        {OPTIONS.map((option) => (
                            <h2
                                key={option}
                                onClick={() => handleOption(option)}
                                className={`font-bold urbanist text-xs hover:bg-gray-200 dark:hover:bg-[#212830] rounded-full py-1 px-2 cursor-pointer ${optionSelected === option ? "bg-gray-200 dark:bg-[#212830]" : ""}`}
                            >
                                {option}
                            </h2>
                        ))}
                    </div>
                </div>
                <div>
                    <PrintProyects optionSelected={optionSelected}></PrintProyects>
                </div>
            </div>
        </section>
    )
}

export default Proyects