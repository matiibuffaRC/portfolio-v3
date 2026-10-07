import { useEffect, useState } from "react";

export type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

const IDS = LINKS.map((l) => l.id);

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// Scroll spy: devuelve el id de la sección que cruza el centro de la pantalla
export function useActiveSection() {
  const [active, setActive] = useState<string>(IDS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export function ThemeIcon({ dark }: { dark: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dark ? (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
      ) : (
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      )}
    </svg>
  );
}

export function ThemeButton({
  dark,
  setDark,
}: Pick<HeaderProps, "dark" | "setDark">) {
  return (
    <button
      type="button"
      title="Cambiar tema"
      aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={dark}
      onClick={() => setDark(!dark)}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#151B23] transition-colors duration-300 hover:bg-gray-200 dark:text-[#D1D7E0] dark:hover:bg-[#252C34]"
    >
      <ThemeIcon dark={dark} />
    </button>
  );
}

export function MenuButton({
  open,
  setOpen,
}: Pick<HeaderProps, "open" | "setOpen">) {
  return (
    <button
      type="button"
      title="Abrir o cerrar menú"
      aria-label={
        open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
      }
      aria-expanded={open}
      aria-controls="menu-navegacion"
      onClick={() => setOpen(!open)}
      className="relative z-50 h-9 w-9 lg:hidden"
    >
      <span className="absolute left-1/2 top-1/2 block h-5 w-5 -translate-x-1/2 -translate-y-1/2">
        <span
          className={`absolute left-0 h-0.5 w-full bg-black transition-all duration-300 dark:bg-[#D1D7E0] ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"}`}
        />
        <span
          className={`absolute left-0 h-0.5 w-full bg-black transition-all duration-300 dark:bg-[#D1D7E0] ${open ? "top-1/2 -translate-y-1/2 opacity-0" : "top-1/2 -translate-y-1/2"}`}
        />
        <span
          className={`absolute left-0 h-0.5 w-full bg-black transition-all duration-300 dark:bg-[#D1D7E0] ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"}`}
        />
      </span>
    </button>
  );
}
