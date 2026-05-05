// import React from 'react';
import skills from "../../assets/data/skills.ts";


function AboutMe() {
    const printSkills = skills.map((skill)=>{
        return(
            <div key={skill.id}>
                <h3 className="urbanist font-bold text-xl pt-3 pb-1 dark:text-[#D1D7E0] text-[#535b64]">{skill.categoryName}</h3>
                <div className="flex flex-row flex-wrap">
                    {skill.technologies.map((technology)=>{
                        return(
                            <span key={technology} className="flex flex-row items-center gap-1 m-1 px-4 py-2 dark:bg-[#1e242c] bg-gray-300 rounded-full">
                                <img src={skill.icon} alt="" className="dark:invert w-4 h-4" />
                                <span className="dark:text-[#D1D7E0] text-[#151B23] text-xs font-bold open-sans">{technology}</span>
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    })
    return (
        <section className='dark:bg-[#121820] bg-[#f9fafc] py-17.5 px-5 dark:text-[#D1D7E0] text-[#151B23] flex flex-col items-center'>
            <div>
                <h2 className='urbanist font-bold text-[#259E93] text-3xl w-full pb-3'>UN POCO SOBRE MÍ</h2>
                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:grid-rows-2 max-w-5xl">
                    <div className="border dark:border-gray-800 border-gray-200 p-3 py-5 rounded-2xl shadow md:col-start-1 md:row-start-1">
                        <h3 className="open-sans font-bold text-2xl w-full">Matías Buffa</h3>
                        <h3 className="open-sans text-sm">
                            Desarrollador Full Stack especializado en aplicaciones web modernas utilizando React y Node.js.
                            Actualmente curso Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN).
                            Resido en San Francisco, Córdoba, Argentina.
                        </h3>
                    </div>
                    <div className="border dark:border-gray-800 border-gray-200 p-3 py-5 rounded-2xl shadow md:col-start-1 md:row-start-2">
                        <h2 className="urbanist font-bold text-2xl">Ingeniería en Sistemas de Información</h2>
                        <h3 className="open-sans text-sm">
                            En el transcurso del cursado de la carrera desarrollé pensamiento lógico, modelado de sistemas y bases sólidas en algoritmos y estructuras de datos, trabajando con requerimientos reales.
                        </h3>
                    </div>
                    <div className="border dark:border-gray-800 border-gray-200 p-4 py-5 rounded-2xl shadow md:col-start-2 md:row-start-1 md:row-span-2">
                        <h2 className="urbanist font-bold text-2xl">Habilidades técnicas</h2>
                        {printSkills}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe