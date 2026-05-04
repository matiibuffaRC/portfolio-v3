// import React from 'react';
type HeaderProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

// Import archivos
import profileImage from "../../assets/profileImg.jpg";
// 

function Header({ open, setOpen, dark, setDark }: HeaderProps) {
    return (
        <header className="bg-gray-100 dark:bg-[#151B23] h-17.5 flex justify-between items-center py-3 px-4 md:px-6 border-b border-gray-300 dark:border-gray-800 fixed w-full">
        
            <div className="h-full flex flex-row items-center gap-2">
                <div className="">
                    <img src={profileImage} alt="Matías Buffa image" className="h-10 w-10 rounded-full"/>
                </div>
                <div className="dark:text-[#D1D7E0] text-[#151B23] urbanist flex flex-col justify-center items-start">
                    <h2 className="text-md font-bold">Matías Buffa</h2>
                    <h3 className="text-xs font-bold">Software Developer</h3>
                </div>
            </div>

            {/* Menú desktop*/}
            <div className="flex flex-row gap-2">
                <nav className="dark:text-[#D1D7E0] text-[#151B23] urbanist font-bold text-md hidden md:flex gap-2">
                <a 
                    href="#inicio"
                    className="hover:bg-gray-200 dark:hover:bg-[#252C34] py-1 px-4 rounded-xl">
                    Inicio
                </a>
                <a  
                    href="#sobre-mi"
                    className="hover:bg-gray-200 dark:hover:bg-[#252C34] py-1 px-4 rounded-xl">
                    Sobre mí
                </a>
                <a 
                    href="#proyectos"
                    className="hover:bg-gray-200 dark:hover:bg-[#252C34] py-1 px-4 rounded-xl">
                    Proyectos
                </a>
                <a 
                    href="#contacto"
                    className="hover:bg-gray-200 dark:hover:bg-[#252C34] py-1 px-4 rounded-xl">
                        Contacto
                </a>
            </nav>


            <div className="flex items-center gap-4">
            {/* Change theme button */}
                <button
                    title="Toggle button"
                    onClick={() => setDark(!dark)}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
                        dark ? "bg-gray-800" : "bg-gray-300"
                    }`}
                    >
                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${ dark ? "translate-x-5" : "translate-x-0" }`}/>
                </button>

                {/* Menú button */}
                <button 
                    title="Menú button" 
                    onClick={() => setOpen(!open)} 
                    className="md:hidden relative w-5 h-5 z-50">
                        <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"}`} />
                        <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`} />
                        <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"}`} />
                </button>

            </div>
            </div>
        </header>
    );
}


export default Header