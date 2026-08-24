// Imports Header componentes
import Header from "./components/header/Header.tsx";
import Sidebar from "./components/header/sidebar.tsx";
//

// Import inicie components
import Inicie from "./components/Home/Inicie.tsx";
import Proyects from "./components/Home/proyects/Proyects.tsx";
import Experience from "./components/Home/Experience.tsx";
import AboutMe from "./components/Home/AboutMe.tsx";
import TechCarousel from "./components/Home/Techcarousel.tsx";
import Footer from "./components/footer/footer.jsx";
//

// Import dependencias de react
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

  // aplicar cambios
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#151B23] focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <Header open={open} setOpen={setOpen} dark={dark} setDark={setDark} />
      <Sidebar open={open} setOpen={setOpen} onClick={() => setOpen(false)} />
      <main id="contenido-principal" tabIndex={-1}>
        <Inicie></Inicie>
        <Proyects></Proyects>
        <Experience></Experience>
        <AboutMe />

        <section className="py-17.5 dark:bg-[#121820] bg-[#f9fafc]">
          <TechCarousel dark={dark} />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
