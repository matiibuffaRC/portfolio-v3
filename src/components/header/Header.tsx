import { useEffect, useState } from "react";

type HeaderProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

// Import archivos
import profileImage from "../../assets/profileImg.jpg";

const SECTIONS = ["inicio", "proyectos", "experiencia", "sobre-mi"];

function Header({ open, setOpen, dark, setDark }: HeaderProps) {
    const [activeSection, setActiveSection] = useState<string>("inicio");

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        {
            // Se activa cuando la sección cruza el centro de la pantalla
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        },
    );

    SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    }, []);

    const linkClass = (id: string) => `cursor-pointer hover:bg-gray-200 dark:hover:bg-[#252C34] transition-all duration-700 py-1 px-4 rounded-3xl ${ activeSection === id ? "bg-[#E3F6F5] dark:bg-[#252C34] text-[#176b68] dark:text-[#D1F7F3]" : ""}`;

    return (
        <header className="bg-gray-100 dark:bg-[#151B23] h-17.5 flex justify-between items-center py-3 px-4 md:px-6 border-b border-gray-300 dark:border-gray-800 fixed w-full z-10">
            <div className="h-full flex flex-row items-center gap-2">
                <div className="">
                    <button type="button" aria-label="Ir a inicio" onClick={() => scrollToSection("inicio")} className="p-0 bg-transparent border-0 focus:outline-none">
                        <img src={profileImage} alt="Matías Buffa image" className="h-10 w-10 rounded-full"/>
                    </button>
                </div>
                <div className="dark:text-[#D1D7E0] text-[#151B23] urbanist flex flex-col justify-center items-start">
                    <button type="button" aria-label="Ir a inicio" onClick={() => scrollToSection("inicio")} className="text-left p-0 bg-transparent border-0 focus:outline-none" >
                        <h2 className="text-md font-bold">Matías Buffa</h2>
                        <h3 className="text-xs font-bold">Software Developer</h3>
                    </button>
                </div>
            </div>

            {/* Menú desktop*/}
            <div className="flex flex-row gap-2">
                <nav aria-label="Navegación principal" className="dark:text-[#D1D7E0] text-[#151B23] urbanist font-semibold text-md hidden md:flex gap-2" >
                    <button type="button" onClick={() => scrollToSection("inicio")} className={linkClass("inicio")} >
                        Inicio
                    </button>
                    <button type="button" onClick={() => scrollToSection("proyectos")} className={linkClass("proyectos")} >
                        Proyectos
                    </button>
                    <button type="button" onClick={() => scrollToSection("experiencia")} className={linkClass("experiencia")} >
                        Experiencia
                    </button>
                    <button type="button" onClick={() => scrollToSection("sobre-mi")} className={linkClass("sobre-mi")} >
                        Sobre mí
                    </button>
                </nav>

                <div className="flex items-center gap-4">
                {/* Change theme button */}
                <button type="button" title="Cambiar tema" aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"} aria-pressed={dark} onClick={() => setDark(!dark)} className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${dark ? "bg-gray-800" : "bg-gray-300"}`} >
                    <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${dark ? "translate-x-5" : "translate-x-0"}`} />
                </button>

                {/* Menú button */}
                <button type="button" title="Abrir o cerrar menú" aria-label={ open ? "Cerrar menú de navegación" : "Abrir menú de navegación" } aria-expanded={open} aria-controls="menu-navegacion" onClick={() => setOpen(!open)} className="md:hidden relative w-5 h-5 z-50" >
                    <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"}`} />
                    <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "opacity-0" : "top-1/2 -translate-y-1/2"}`} />
                    <span className={`absolute left-0 w-full h-0.5 dark:bg-[#D1D7E0] bg-black transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"}`} />
                </button>
                </div>
            </div>
    </header>
    );
}

export default Header;
