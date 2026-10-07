import { useEffect, useRef, useState } from "react";
import {
    LINKS,
    MenuButton,
    ThemeButton,
    scrollToSection,
    useActiveSection,
    type HeaderProps,
} from "./headerShared";

import profileImage from "../../assets/profileImg.jpg";

// Opción 2: se esconde al bajar, vuelve al subir, se achica al scrollear
// y muestra una barra con el progreso de lectura de la página.
function HeaderAutoHide({ open, setOpen, dark, setDark }: HeaderProps) {
    const active = useActiveSection();
    const [hidden, setHidden] = useState(false);
    const [compact, setCompact] = useState(false);
    const [progress, setProgress] = useState(0);
    const lastY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? (y / max) * 100 : 0);
            setCompact(y > 24);
            // Baja: esconder. Sube: mostrar. Pequeños movimientos se ignoran.
            if (Math.abs(y - lastY.current) > 6) {
                setHidden(y > lastY.current && y > 120);
                lastY.current = y;
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Con el menú móvil abierto el header nunca se esconde
    const translate = hidden && !open ? "-translate-y-full" : "translate-y-0";

    return (
        <header
            className={`fixed inset-x-0 top-0 z-100 border-b border-gray-300 bg-gray-100/90 backdrop-blur dark:border-gray-800 dark:bg-[#151B23]/90 transition-all duration-300 ${translate} ${
                compact ? "h-14" : "h-17.5"
            }`}
        >
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">
                <button
                    type="button"
                    aria-label="Ir a inicio"
                    onClick={() => scrollToSection("inicio")}
                    className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b68]"
                >
                    <img
                        src={profileImage}
                        alt="Matías Buffa"
                        className={`rounded-full transition-all duration-300 ${compact ? "h-8 w-8" : "h-10 w-10"}`}
                    />
                    <span className="urbanist text-left text-[#151B23] dark:text-[#D1D7E0]">
                        <span className="block text-base font-bold leading-tight">Matías Buffa</span>
                        <span
                            className={`block text-xs font-bold transition-all duration-300 ${
                                compact ? "h-0 opacity-0" : "h-4 opacity-100"
                            }`}
                        >
                            Software Developer
                        </span>
                    </span>
                </button>

                <div className="flex items-center gap-2">
                    <nav aria-label="Navegación principal" className="urbanist hidden gap-6 md:flex">
                        {LINKS.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => scrollToSection(id)}
                                className={`group relative cursor-pointer py-1 text-sm font-semibold transition-colors duration-300 ${
                                    active === id
                                        ? "text-[#176b68] dark:text-[#D1F7F3]"
                                        : "text-[#151B23]/70 hover:text-[#151B23] dark:text-[#D1D7E0]/70 dark:hover:text-[#D1D7E0]"
                                }`}
                            >
                                {label}
                                <span
                                    aria-hidden="true"
                                    className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded bg-[#176b68] transition-transform duration-300 dark:bg-[#D1F7F3] ${
                                        active === id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                                    }`}
                                />
                            </button>
                        ))}
                    </nav>
                    <ThemeButton dark={dark} setDark={setDark} />
                    <MenuButton open={open} setOpen={setOpen} />
                </div>
            </div>

            {/* Progreso de lectura */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 bg-[#176b68] dark:bg-[#D1F7F3]"
                style={{ width: `${progress}%` }}
            />
        </header>
    );
}

export default HeaderAutoHide;
