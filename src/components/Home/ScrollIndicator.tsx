import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../header/headerShared";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        setVisible(window.scrollY < 50);
        frame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    // Un <button> real: se puede usar con teclado y tiene nombre accesible.
    // Cuando se oculta, `inert` lo saca del orden de tabulación.
    <button
      type="button"
      aria-label="Ir a la sección de proyectos"
      onClick={() => scrollToSection("proyectos")}
      inert={!visible}
      className={`fixed bottom-5 lg:bottom-15 left-1/2 -translate-x-1/2 grid h-11 w-11 place-items-center rounded-full cursor-pointer transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span aria-hidden="true" className="animate-bounce text-3xl text-[#087EA4] dark:text-[#58C4DC]">
        ↓
      </span>
    </button>
  );
}

export default ScrollIndicator;
