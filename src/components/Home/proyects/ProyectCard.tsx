import { useEffect, useRef, useState } from "react";

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

function ProyectCard({ proyect, index }: ProyectCardProps) {
    const [selected, setSelected] = useState(0);
    const [visible, setVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const currentImage = proyect.images[selected];
    const isEducational = proyect.state === "educational";
    const hasWebsite = proyect.state !== "Sin terminar" && proyect.url !== "";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                setVisible(true);
                }
            },
            {
                threshold: 0.05,
            },
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={cardRef} className={`proyect-card ${visible ? "show" : ""} flex flex-col md:flex-row gap-10 md:gap-4 py-5 border-b-2 border-gray-300 dark:border-gray-900 ${index % 2 != 1 ? "md:flex-row-reverse" : ""} `} style={{ transitionDelay: `${index * 0.12}s` }} >
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
                            <a href={proyect.url} target="_blank" rel="noopener noreferrer" className={`urbanist font-bold px-3 py-1.5 rounded-full text-white dark:text-[#121820] transition-transform duration-200 ease-out hover:scale-105 active:scale-95 inline-block ${proyect.state == "finished" ? "bg-[#087EA4] hover:bg-[#1d9caf]" : "bg-gray-400 hover:bg-gray-500"}`} >
                                {proyect.state == "finished" ? "Visitar sitio" : "Visitar demo"}
                            </a>
                        </div>
                    )}
                    <a href={proyect.code} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1 dark:bg-[#121820] bg-gray-300 px-3 py-1.5 rounded-full cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95 dark:hover:bg-[#1a2530] hover:bg-gray-400" >
                        <img src={GithubIcon} alt="Github SVG icon" className="h-5 w-5 dark:invert" />
                        <span className="urbanist font-bold">
                            Código
                        </span>
                    </a>
                </div>
            </div>

            <div className={`relative flex flex-col md:flex-row gap-4  ${index % 2 != 0 ? "md:flex-row-reverse" : ""} `} >
                <div className="relative w-full md:max-w-90 lg:max-w-110">
                    <div className="border border-gray-400 dark:border-gray-700 rounded-2xl">
                        <img key={currentImage} src={currentImage} title="Proyect image" className="project-image-enter w-full object-cover rounded-2xl" />
                    </div>

                    {proyect.state !== "finished" && (
                        <span className={`absolute top-3 left-3 rounded-full border px-3 py-1 text-xs open-sans ${isEducational ? "border-[#259E93] bg-[#E3F6F5] text-[#176b68] dark:border-[#62c9c0] dark:bg-[#163c3d] dark:text-[#D1F4F1]" : "border-[#259E93] bg-[#259E93] text-white"}`} >
                            {isEducational ? "Educativo" : "En producción"}
                        </span>
                    )}
                </div>

                <div className="flex flex-row md:flex-col gap-2 justify-center">
                {proyect.images.slice(1).map((image, i) => (
                    <div key={i} onClick={() => setSelected(i + 1)} className={`w-14 h-14 md:w-15 md:h-15 border cursor-pointer rounded-xl overflow-hidden ${selected === i + 1 ? "border-white dark:border-gray-800" : "border-gray-400 dark:border-gray-900"}`} >
                        <img src={image} title="Proyect image" className="w-full h-full object-cover" />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ProyectCard;