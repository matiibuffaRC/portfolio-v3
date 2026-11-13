// Imports Header componentes
import Header from "./components/header/Header.tsx";
//

// Import inicie components
import Inicie from "./components/Home/Inicie.tsx";
import Proyects from "./components/Home/proyects/Proyects.tsx";
import Experience from "./components/Home/Experience.tsx";
import AboutMe from "./components/Home/AboutMe.tsx";
import TechCarousel from "./components/Home/Techcarousel.tsx";
import Footer from "./components/footer/footer.tsx";
import Contact from "./components/Home/Contact.tsx";
//

// Import dependencias de react
import { useState, useEffect } from "react";

function App() {
    const [open, setOpen] = useState<boolean>(false);
    // La preferencia se lee al crear el estado (y el script de index.html ya aplicó
    // la clase antes del primer pintado), así no hay parpadeo claro/oscuro al cargar.
    const [dark, setDark] = useState<boolean>(() => {
        // Sin preferencia guardada, se respeta el tema del sistema operativo
        try {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";
        } catch {
            // almacenamiento no disponible
        }
        return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
    });

    // aplicar cambios
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        try {
            localStorage.setItem("theme", dark ? "dark" : "light");
        } catch {
            // almacenamiento no disponible (modo privado, etc.)
        }
    }, [dark]);

    return (
        <>
            <a href="#contenido-principal" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-300 focus:rounded focus:bg-[#151B23] focus:px-4 focus:py-2 focus:text-white" >
                Saltar al contenido principal
            </a>
            <Header open={open} setOpen={setOpen} dark={dark} setDark={setDark} />
            {/* <Sidebar open={open} setOpen={setOpen} onClick={() => setOpen(false)} /> */}
            <main id="contenido-principal" tabIndex={-1}>
                <Inicie></Inicie>
                <Proyects></Proyects>
                <Experience></Experience>
                <AboutMe />

                <section aria-label="Tecnologías con las que trabajo" className="py-17.5 dark:bg-[#121820] bg-[#f9fafc]">
                    <TechCarousel dark={dark} />
                </section>
                <Contact/>
            </main>
            <Footer></Footer>
            </>
    );
}

export default App;
