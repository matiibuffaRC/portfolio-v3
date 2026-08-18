import { useState } from "react";

// Import de íconos - Frontend
import cssIcon from "../../assets/icons/techs/css.svg";
import htmlIcon from "../../assets/icons/techs/html.svg";
import jsIcon from "../../assets/icons/techs/js.svg";
import reactIcon from "../../assets/icons/techs/react.svg";
import tailwindcssIcon from "../../assets/icons/techs/tailwindcss.svg";
import typescriptIcon from "../../assets/icons/techs/typescript.svg";
import materialUI from "../../assets/icons/techs/material.svg";
import figma from "../../assets/icons/techs/figma.svg";
import bootstrap from "../../assets/icons/techs/bootstrap.svg";

// Import de íconos - Backend
import nodeIcon from "../../assets/icons/techs/node.svg";
import expressjsIcon from "../../assets/icons/techs/expressjs.svg";
import expressjsDarkIcon from "../../assets/icons/techs/expressjs_dark.svg";
import postgresqlIcon from "../../assets/icons/techs/postgresql.svg";
import firebaseIcon from "../../assets/icons/techs/firebase.svg";
import sqlite from "../../assets/icons/techs/sqlite.svg"

type TechIcon = {
    name: string;
    light: string; // Ícono por defecto / tema claro
    dark?: string; // Ícono alternativo para tema oscuro (si existe)
};

type Direction = "left" | "right";

const frontendTechnologies: TechIcon[] = [
    { name: "HTML", light: htmlIcon },
    { name: "CSS", light: cssIcon },
    { name: "Javascript", light: jsIcon },
    { name: "React.js", light: reactIcon },
    { name: "Typescript", light: typescriptIcon },
    { name: "Tailwind", light: tailwindcssIcon },
    { name: "Bootstrap", light: bootstrap },
    { name: "Figma", light: figma },
    { name: "MaterialUI", light: materialUI }
];

const backendTechnologies: TechIcon[] = [
    { name: "Node.js", light: nodeIcon },
    { name: "Express", light: expressjsIcon, dark: expressjsDarkIcon },
    { name: "PostgreSQL", light: postgresqlIcon },
    { name: "Firebase", light: firebaseIcon },
    { name: "SQLite", light: sqlite },
];

// Devuelve el ícono correcto según el tema activo
function getIconSrc(tech: TechIcon, dark: boolean) {
    return dark && tech.dark ? tech.dark : tech.light;
}

// Carrusel individual, reutilizable para cualquier lista de tecnologías
function TechCarousel({
    technologies,
    direction = "left",
    dark,
    paused,
}: {
    technologies: TechIcon[];
    direction?: Direction;
    dark: boolean;
    paused: boolean;
}) {
    return (
        <div className="relative w-full overflow-hidden py-3 md:py-4 bg-gray-100 dark:bg-gray-800">
            {/* Difuminado en los bordes */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-gray-100 via-transparent to-gray-100 dark:from-gray-800 dark:via-transparent dark:to-gray-800" />

            {/* Pista de íconos (se repite 3 veces para el loop infinito) */}
            <div className={`flex w-max mx-auto gap-6 md:gap-10 justify-center items-center tech-track ${ direction === "left" ? "tech-track-left" : "tech-track-right" }`} style={{ animationPlayState: paused ? "paused" : "running" }} >
                {[0, 1, 2, 3, 4, 5, 6].map((groupIndex) => (
                    <div key={groupIndex} className="flex gap-6 md:gap-16 justify-center items-center" aria-hidden={groupIndex !== 0} >
                        {technologies.map((tech) => (
                            <img key={`${groupIndex}-${tech.name}`} title={tech.name} alt={tech.name} src={getIconSrc(tech, dark)} className="h-10 w-10 md:h-14 md:w-14 shrink-0 transition-transform duration-300 hover:scale-110" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Componente padre con los dos carruseles 
function TechCarousels({ dark }: { dark: boolean }) {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div className=" flex flex-col items-center justify-center gap-3 md:gap-4 w-full max-w-full mx-auto px-4 md:px-0" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} >
            <TechCarousel technologies={frontendTechnologies} direction="left" dark={dark} paused={isPaused} />
            <TechCarousel technologies={backendTechnologies} direction="right" dark={dark} paused={isPaused} />

            {/* Animación del scroll infinito (compartida por ambos carruseles) */}
            <style>{`
                @keyframes tech-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.333%); }
                }

                .tech-track {
                    animation-name: tech-scroll;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    will-change: transform;
                }

                .tech-track-left {
                    animation-duration: 25s;
                    animation-direction: normal;
                }

                .tech-track-right {
                    animation-duration: 25s;
                    animation-direction: reverse;
                }

                @media (max-width: 768px) {
                    .tech-track-left,
                    .tech-track-right {
                        animation-duration: 18s;
                    }
                }
            `}</style>
        </div>
    );
}

export default TechCarousels;