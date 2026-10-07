import {
    LINKS,
    MenuButton,
    ThemeButton,
    scrollToSection,
    useActiveSection,
    type HeaderProps,
} from "./headerShared";

import profileImage from "../../assets/profileImg.jpg";

// Opción 3: riel vertical a la izquierda en desktop. Colapsado muestra solo
// puntos (el activo se estira); al pasar el mouse o enfocar se expande con
// los nombres. En móvil es una barra superior normal que abre tu Sidebar.
//
// IMPORTANTE: agregá `md:pl-16` al contenedor principal para que el
// contenido no quede tapado por el riel.
function HeaderRail({ open, setOpen, dark, setDark }: HeaderProps) {
    const active = useActiveSection();

    return (
        <>
            {/* Desktop: riel lateral */}
            <header className="group fixed left-0 top-0 z-100 hidden h-full w-16 flex-col justify-between overflow-hidden border-r border-gray-300 bg-gray-100 py-4 transition-[width] duration-300 hover:w-56 focus-within:w-56 dark:border-gray-800 dark:bg-[#151B23] md:flex">
                <button
                    type="button"
                    aria-label="Ir a inicio"
                    onClick={() => scrollToSection("inicio")}
                    className="flex items-center gap-3 px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176b68]"
                >
                    <img src={profileImage} alt="Matías Buffa" className="h-10 w-10 shrink-0 rounded-full" />
                    <span className="urbanist whitespace-nowrap text-left text-[#151B23] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 dark:text-[#D1D7E0]">
                        <span className="block text-base font-bold leading-tight">Matías Buffa</span>
                        <span className="block text-xs font-bold">Software Developer</span>
                    </span>
                </button>

                <nav aria-label="Navegación principal" className="urbanist flex flex-col gap-1 px-2">
                    {LINKS.map(({ id, label }) => {
                        const isActive = active === id;
                        return (
                            <button
                                key={id}
                                type="button"
                                aria-current={isActive ? "true" : undefined}
                                onClick={() => scrollToSection(id)}
                                className={`flex h-10 cursor-pointer items-center gap-4 rounded-full pl-[1.05rem] pr-4 text-sm font-semibold transition-colors duration-300 ${
                                    isActive
                                        ? "bg-[#c4e4ee] text-[#176b68] dark:bg-[#252C34] dark:text-[#D1F7F3]"
                                        : "text-[#151B23]/70 hover:bg-gray-200 dark:text-[#D1D7E0]/70 dark:hover:bg-[#252C34]"
                                }`}
                            >
                                {/* El punto activo se estira como una barrita vertical */}
                                <span
                                    aria-hidden="true"
                                    className={`w-1.5 shrink-0 rounded-full bg-current transition-all duration-300 ${
                                        isActive ? "h-5" : "h-1.5 opacity-50"
                                    }`}
                                />
                                <span className="whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                <div className="flex px-3">
                    <ThemeButton dark={dark} setDark={setDark} />
                </div>
            </header>

            {/* Móvil: barra superior */}
            <header className="fixed inset-x-0 top-0 z-100 flex h-14 items-center justify-between border-b border-gray-300 bg-gray-100 px-4 dark:border-gray-800 dark:bg-[#151B23] md:hidden">
                <button
                    type="button"
                    aria-label="Ir a inicio"
                    onClick={() => scrollToSection("inicio")}
                    className="flex items-center gap-2"
                >
                    <img src={profileImage} alt="Matías Buffa" className="h-9 w-9 rounded-full" />
                    <span className="urbanist text-sm font-bold text-[#151B23] dark:text-[#D1D7E0]">
                        Matías Buffa
                    </span>
                </button>
                <div className="flex items-center gap-1">
                    <ThemeButton dark={dark} setDark={setDark} />
                    <MenuButton open={open} setOpen={setOpen} />
                </div>
            </header>
        </>
    );
}

export default HeaderRail;
