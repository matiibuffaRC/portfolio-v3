

type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: () => void;
};

function Sidebar({ open, setOpen, onClick }: SidebarProps) {
    const links = [
        { id: "inicio", label: "Inicio" },
        { id: "proyectos", label: "Proyectos" },
        { id: "experiencia", label: "Experiencia" },
        { id: "sobre-mi", label: "Sobre mí" },
        { id: "contacto", label: "Contacto" },
    ];

    const handleNav = (id: string) => {
        if (onClick) onClick();
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            {open && (
                <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-140 animate-fade-in" />
            )}

            <div id="menu-navegacion" className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-[#151b23] dark:bg-[#151B23] dark:text-[#D1D7E0] z-250 transform transition-transform duration-300 p-5 ${open ? "translate-x-0" : "-translate-x-full"}`} >

                <div className='border-b border-gray-300 mb-5 pb-1'>
                    <h2 className="urbanist flex items-center justify-center gap-1 text-2xl font-bold text-[#151B23] dark:text-[#D1D7E0]">
                        Matías
                    </h2>
                </div>
                <nav aria-label="Menú de navegación móvil" className="flex flex-col gap-4 text-lg font-bold urbanist" >
                    {links.map(({ id, label }, index) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => handleNav(id)}
                            className={`text-left ${open ? "sidebar-item-enter" : ""}`}
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
