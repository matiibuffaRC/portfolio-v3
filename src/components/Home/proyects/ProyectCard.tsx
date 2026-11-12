import { useRef, useState } from "react";
import type { TouchEvent } from "react";

import GithubIcon from "../../../assets/icons/github-svgrepo-com.svg";

type Proyect = {
    id: number;
    title: string;
    description: string;
    images: string[];
    url: string;
    state: "finished" | "demo" | "Sin terminar" | "educational";
    code: string;
};

type ProyectCardProps = {
    proyect: Proyect;
    index: number;
};

// Distancia mínima (px) para considerar un gesto como swipe en mobile
const SWIPE_THRESHOLD = 40;

function ProyectCard({ proyect, index }: ProyectCardProps) {
    const [selected, setSelected] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const total = proyect.images.length;
    const isEducational = proyect.state === "educational";
    const isInDevelopment = proyect.state === "Sin terminar";
    const hasWebsite = proyect.url !== "";

    const prev = () => setSelected((s) => (s - 1 + total) % total);
    const next = () => setSelected((s) => (s + 1) % total);

    const onTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(dx) < SWIPE_THRESHOLD) return;
        if (dx < 0) next();
        else prev();
    };

    return (
        // La aparición la controla PrintProyects (un único IntersectionObserver
        // compartido que agrega data-visible), así evitamos un re-render por tarjeta.
        <article
            className={`proyect-card flex flex-col md:flex-row gap-10 md:gap-4 py-5 border-b-2 border-gray-300 dark:border-gray-900 ${index % 2 != 1 ? "md:flex-row-reverse" : ""}`}
        >
            <div className="flex-1 flex flex-col justify-between gap-3 md:gap-0 ">
                <div>
                    <h2 className="urbanist font-bold text-2xl dark:text-white">
                        {proyect.title}
                    </h2>
                    <h3 className="open-sans text-sm md:text-xs lg:text-sm">
                        {proyect.description}
                    </h3>
                </div>
                <div className="flex flex-row items-center gap-2">
                    {hasWebsite && (
                        <div>
                            <a
                                href={proyect.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`urbanist font-bold px-3 py-1.5 rounded-full text-white dark:text-[#121820] transition-[scale,background-color] duration-200 ease-out hover:scale-105 active:scale-95 inline-block ${proyect.state == "finished" ? "bg-[#087EA4] hover:bg-[#1d9caf] dark:bg-[#58C4DC]" : "bg-gray-400 hover:bg-gray-500"}`}
                            >
                                {proyect.state == "finished" ? "Visitar sitio" : "Visitar demo"}
                            </a>
                        </div>
                    )}
                    {proyect.code !== "" && (
                        <a
                            href={proyect.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-1 dark:bg-[#121820] bg-gray-300 px-3 py-1.5 rounded-full cursor-pointer transition-[scale,background-color] duration-200 ease-out hover:scale-105 active:scale-95 dark:hover:bg-[#1a2530] hover:bg-gray-400"
                        >
                            <img
                                src={GithubIcon}
                                alt=""
                                width={20}
                                height={20}
                                loading="lazy"
                                decoding="async"
                                className="h-5 w-5 dark:invert"
                            />
                            <span className="urbanist font-bold">Código</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Carrusel: todas las imágenes en una pista que se desplaza con transform
                (animación en GPU, sin cambiar el src ni esperar a que cargue la imagen) */}
            <div className="relative w-full md:max-w-90 lg:max-w-110">
                <div
                    className="aspect-video border border-gray-400 dark:border-gray-700 rounded-2xl overflow-hidden touch-pan-y"
                    onTouchStart={total > 1 ? onTouchStart : undefined}
                    onTouchEnd={total > 1 ? onTouchEnd : undefined}
                >
                    <div
                        className="project-track flex h-full"
                        style={{ transform: `translate3d(${-selected * 100}%, 0, 0)` }}
                    >
                        {proyect.images.map((src, i) => (
                            <img
                                key={src}
                                src={src}
                                alt={i === 0 ? proyect.title : `${proyect.title} - captura ${i + 1}`}
                                aria-hidden={i !== selected}
                                width={1280}
                                height={720}
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                                className="h-full w-full shrink-0 object-cover select-none"
                            />
                        ))}
                    </div>
                </div>

                {proyect.state !== "finished" && (
                    <span
                        className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-xs open-sans ${isEducational ? "border-[#259E93] bg-[#E3F6F5] text-[#176b68] dark:border-[#62c9c0] dark:bg-[#163c3d] dark:text-[#D1F4F1]" : "border-[#259E93] bg-[#259E93] text-white"}`}
                    >
                        {isEducational
                            ? "Educativo"
                            : isInDevelopment
                            ? "En desarrollo"
                            : "En producción"}
                    </span>
                )}

                {total > 1 && (
                    <>
                        {/* Sin backdrop-blur: el desenfoque se recalcula en cada frame
                            mientras la pista se mueve y era una fuente de tirones. */}
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Imagen anterior"
                            className="absolute left-2 top-1/2 pb-1 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white text-xl leading-none cursor-pointer transition-[background-color,scale] duration-150 hover:bg-black/70 active:scale-90"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Imagen siguiente"
                            className="absolute right-2 top-1/2 pb-1 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white text-xl leading-none cursor-pointer transition-[background-color,scale] duration-150 hover:bg-black/70 active:scale-90"
                        >
                            ›
                        </button>
                        <div className="absolute bottom-3 left-1/2 h-1.5 w-14 -translate-x-1/2">
                            {proyect.images.map((_, i) => (
                                <button
                                    type="button"
                                    key={i}
                                    onClick={() => setSelected(i)}
                                    aria-label={`Ir a la imagen ${i + 1}`}
                                    aria-current={selected === i}
                                    className={`project-dot absolute top-0 h-1.5 rounded-full cursor-pointer ${selected === i ? "w-5 bg-transparent" : "w-1.5 bg-white/60"}`}
                                    style={{
                                        left: `${i * 12}px`,
                                        transform: `translateX(${selected < i ? 14 : 0}px)`,
                                    }}
                                />
                            ))}
                            <span
                                aria-hidden="true"
                                className="project-dot pointer-events-none absolute left-0 top-0 h-1.5 w-5 rounded-full bg-white"
                                style={{ transform: `translateX(${selected * 12}px)` }}
                            />
                        </div>
                    </>
                )}
            </div>
        </article>
    );
}

export default ProyectCard;
