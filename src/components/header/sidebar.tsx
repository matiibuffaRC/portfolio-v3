type SidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClick?: () => void;
};

function Sidebar({ open, setOpen, onClick }: SidebarProps) {
    return (
        <>
        {open && (
            <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/50 z-40" />
        )}

        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-[#151b23] dark:bg-[#151B23] dark:text-[#D1D7E0] z-50 transform transition-transform duration-300 p-5 ${ open ? "translate-x-0" : "-translate-x-full" }`}>
            <nav className="flex flex-col gap-4 text-lg font-bold urbanist">
                <a href="#inicio" onClick={onClick}>Inicio</a>
                <a href="#proyectos" onClick={onClick}>Proyectos</a>
                <a href="#experiencia" onClick={onClick}>Experiencia</a>
                <a href="#sobre-mi" onClick={onClick}>Sobre mí</a>
            </nav>
        </div>
        
        </>
    );
}

export default Sidebar