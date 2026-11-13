import { useEffect, useRef } from "react";
import { LINKS, scrollToSection } from "./headerShared";

type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    active?: string;
};

function Sidebar({ open, setOpen, active }: SidebarProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const wasOpen = useRef(false);

    // Foco: al abrir va al primer link; al cerrar vuelve al botón del menú.
    // Escape cierra y Tab queda atrapado dentro del panel mientras está abierto.
    useEffect(() => {
        if (!open) {
            if (wasOpen.current) document.getElementById("boton-menu")?.focus();
            wasOpen.current = false;
            return;
        }
        wasOpen.current = true;
        panelRef.current?.querySelector<HTMLElement>("button")?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                return;
            }
            if (e.key !== "Tab" || !panelRef.current) return;
            const items = panelRef.current.querySelectorAll<HTMLElement>("button");
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, setOpen]);

    // Si se agranda la pantalla a desktop con el menú abierto, se cierra
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const onChange = () => mq.matches && setOpen(false);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, [setOpen]);

    const handleNav = (id: string) => {
        wasOpen.current = false; // el foco va a la sección, no al botón del menú
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <>
            {open && (
                <div aria-hidden="true" onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-140 animate-fade-in" />
            )}

            <div
                ref={panelRef}
                id="menu-navegacion"
                role="dialog"
                aria-modal="true"
                aria-label="Menú de navegación"
                // Cerrado queda fuera de pantalla: `inert` evita que se pueda tabular o leer
                inert={!open}
                className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-[#151b23] dark:bg-[#151B23] dark:text-[#D1D7E0] z-250 transform transition-transform duration-300 p-5 ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="border-b border-gray-300 dark:border-gray-700 mb-5 pb-1">
                    <p className="urbanist flex items-center justify-center gap-1 text-2xl font-bold text-[#151B23] dark:text-[#D1D7E0]">
                        Matías
                    </p>
                </div>
                <nav aria-label="Navegación principal" className="flex flex-col gap-2 text-lg font-semibold urbanist">
                    {LINKS.map(({ id, label }, index) => (
                        <button
                            key={id}
                            type="button"
                            aria-current={active === id ? "location" : undefined}
                            onClick={() => handleNav(id)}
                            className={`cursor-pointer rounded-lg px-2 py-1.5 text-left hover:bg-gray-200 dark:hover:bg-[#252C34] aria-[current]:text-[#087EA4] dark:aria-[current]:text-[#58C4DC] ${open ? "sidebar-item-enter" : ""}`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
