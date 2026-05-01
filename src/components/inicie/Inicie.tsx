// import React from 'react'
//Import components
import ScrollIndicator from "./ScrollIndicator";
//


function Inicie() {
    return (
        <section className="dark:bg-[#121820] bg-[#f9fafc] p-5">
            <div className="my-70 md:my-60 flex flex-col items-center">
                <h1 className="text-center text-[#151B23] dark:text-[#E3F6F5] text-5xl md:text-7xl urbanist font-bold">Matías Buffa</h1>
                <h2 className="text-center text-[#151B23] dark:text-[#D1D7E0] text-2xl md:text-3xl open-sans font-semibold">Fullstack Developer</h2>
                <h3 className="text-center text-[#151B23] dark:text-[#D1D7E0] text-lg open-sans">Fullstack React & Node</h3>
                <div className="flex flex-row justify-center gap-2 px-15 my-3 w-full ">
                    <div className="bg-[#E3F6F5] max-w-30 flex-1 text-center py-1 rounded-2xl">
                        <a title='Inicie button' href="#" className="text-[#259E93] urbanist font-bold">
                            Ver CV
                        </a>
                    </div>
                    <div className="bg-[#E3F6F5] max-w-30 flex-1 text-center py-1 rounded-2xl">
                        <a title='Inicie button' href="#" className="text-[#259E93] urbanist font-bold">
                            Github
                        </a>
                    </div>
                </div>
            </div>
            <ScrollIndicator />
        </section>
    )
}

export default Inicie