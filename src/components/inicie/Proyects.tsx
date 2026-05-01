// import React from 'react';

function Proyects() {
    return (
        <section className="dark:bg-[#212830] bg-[#F3F4F6] dark:text-[#D1D7E0] text-[#151B23] p-5 flex flex-col items-center">
            <div className="border border-black w-full md:max-w-4xl flex flex-col gap-2">
                <div>
                    <h2 className="urbanist font-bold text-[#259E93] text-3xl">PROYECTOS</h2>
                    <h3 className="open-sans font-bold text-xl">Algunos de mis destacados...</h3>
                </div>
                <div>
                    <div className="dark:bg-[#121820] rounded-full py-1 px-4 inline-flex flex-row gap-4">
                        <h2 className="font-bold open-sans text-sm hover:bg-gray-100 rounded-full py-1 px-2">Todos</h2>
                        <h2 className="font-bold open-sans text-sm hover:bg-gray-100 rounded-full py-1 px-2">Frontend</h2>
                        <h2 className="font-bold open-sans text-sm hover:bg-gray-100 rounded-full py-1 px-2">Backend</h2>
                        <h2 className="font-bold open-sans text-sm hover:bg-gray-100 rounded-full py-1 px-2">Fullstack</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyects