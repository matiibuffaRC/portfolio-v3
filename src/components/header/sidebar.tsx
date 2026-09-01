type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: () => void;
};

function Sidebar({ open, setOpen, onClick }: SidebarProps) {
    const handleNav = (id: string) => {
        if (onClick) onClick();
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40 animate-fade-in" />
            )}

            <div id="menu-navegacion" className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-[#151b23] dark:bg-[#151B23] dark:text-[#D1D7E0] z-50 transform transition-transform duration-300 p-5 ${open ? "translate-x-0" : "-translate-x-full"}`} >
                <nav aria-label="Menú de navegación móvil" className="flex flex-col gap-4 text-lg font-bold urbanist" >
                    <button type="button" onClick={() => handleNav("inicio")} className="text-left">
                        Inicio
                    </button>
                    <button type="button" onClick={() => handleNav("proyectos")} className="text-left">
                        Proyectos
                    </button>
                    <button type="button" onClick={() => handleNav("experiencia")} className="text-left">
                        Experiencia
                    </button>
                    <button type="button" onClick={() => handleNav("sobre-mi")} className="text-left">
                        Sobre mí
                    </button>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
