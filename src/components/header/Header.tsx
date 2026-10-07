import { useLayoutEffect, useRef, useState } from "react";
import { LINKS, MenuButton, ThemeButton, scrollToSection, useActiveSection, type HeaderProps } from "./headerShared";
import Sidebar from "./sidebar";

import profileImage from "../../assets/profileImg.jpg";

// Opción 1: isla flotante. El fondo del link activo se desliza entre secciones.
function Header({ open, setOpen, dark, setDark }: HeaderProps) {
    const active = useActiveSection();
    const navRef = useRef<HTMLElement>(null);
    const [pill, setPill] = useState({ left: 0, width: 0 });

    useLayoutEffect(() => {
        const measure = () => {
            const btn = navRef.current?.querySelector<HTMLElement>(
                `[data-id="${active}"]`,
            );
            if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
            };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [active]);

    return (
        <>
            <header className="pointer-events-none fixed inset-x-0 top-3 z-100 flex justify-center px-2">
                <div className="pointer-events-auto flex w-full items-center justify-between gap-3 rounded-full border border-gray-300/70 bg-white/70 p-2 shadow-[0_8px_24px_-8px_rgba(21,27,35,0.2)] backdrop-blur-md dark:border-gray-700/70 dark:bg-[#151B23]/70 dark:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] md:max-w-5xl md:justify-between md:gap-4 md:px-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
                    <button type="button" aria-label="Ir a inicio" onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 rounded-full py-0 pl-0 pr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b68]" >
                        <img src={profileImage} alt="Matías Buffa" className="h-10 w-10 rounded-full shadow-[0_2px_8px_rgba(21,27,35,0.24)]" />
                        <span className="text-left">
                            <span className="urbanist block text-base font-bold text-[#151B23] dark:text-[#D1D7E0]">
                                Matías Buffa
                            </span>
                            <span className="urbanist block text-[13px] font-semibold text-gray-700 dark:text-[#D1D7E0]/80">
                                Software Developer
                            </span>
                        </span>
                    </button>

                    {/* Desktop */}
                    <nav ref={navRef} aria-label="Navegación principal" className="urbanist relative hidden items-center lg:flex lg:justify-self-center" >
                        <span aria-hidden="true" className="absolute inset-y-0 rounded-full bg-[#c4e4ee] shadow-[0_2px_8px_rgba(23,107,104,0.18)] transition-all duration-500 ease-out dark:bg-[#252C34] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]" style={{ left: pill.left, width: pill.width }} />
                        {LINKS.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                data-id={id}
                                onClick={() => scrollToSection(id)}
                                className={`relative cursor-pointer rounded-full px-5 py-2 text-base font-semibold transition-colors duration-300 ${
                                active === id
                                    ? "text-[#176b68] dark:text-[#D1F7F3]"
                                    : "text-[#151B23]/70 hover:text-[#151B23] dark:text-[#D1D7E0]/70 dark:hover:text-[#D1D7E0]"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-1 border-gray-300 dark:border-gray-700 [&>button]:h-10 [&>button]:w-10 lg:ml-1 lg:justify-self-end lg:border-l lg:pl-2">
                        <ThemeButton dark={dark} setDark={setDark} />
                        <MenuButton open={open} setOpen={setOpen} />
                    </div>
                </div>
            </header>
            <Sidebar open={open} setOpen={setOpen} />
        </>
    );
}

export default Header;
