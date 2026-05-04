// Imports Header componentes
import Header from "./components/headerComponents/Header.tsx";
import Sidebar from "./components/headerComponents/sidebar.tsx";
// 

// Import inicie components
import Inicie from "./components/inicie/Inicie.tsx";
import Proyects from "./components/proyects/Proyects.tsx";
import Experience from "./components/experience/Experience.tsx";
// 

// Import dependencias
import { useState, useEffect } from "react";

function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [dark, setDark] = useState<boolean>(false);

    // cargar preferencia
    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "dark") {
        setDark(true);
        document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        console.log("dark:", dark);
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    // aplicar cambios
    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <>
        <Header open={open} setOpen={setOpen} dark={dark} setDark={setDark}/>
        <Sidebar open={open} setOpen={setOpen} onClick={() => setOpen(false)} />
        <main>
            <section id="inicio"><Inicie></Inicie></section>
            <section id="proyectos"><Proyects></Proyects></section>
            <section id="experiencia"><Experience></Experience></section>
        </main>
        {/* Secciones */}
        
        </>
    );
}

export default App
