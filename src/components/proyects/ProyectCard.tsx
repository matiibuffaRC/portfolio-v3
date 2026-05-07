import { useEffect, useRef, useState } from "react";

import GithubIcon from "../../assets/icons/github-svgrepo-com.svg";

type Proyect = {
    id: number;
    title: string;
    description: string;
    images: string[];
    url: string;
    state: string;
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

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                }

            },
            {
                threshold: 0.15,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();

    }, []);

    return (

        <div
            ref={cardRef}
            className={`
                proyect-card
                ${visible ? "show" : ""}
                flex flex-col md:flex-row gap-10 md:gap-4 py-5
                border-b-2 border-gray-300 dark:border-gray-900
                ${index % 2 != 1 ? "md:flex-row-reverse" : ""}
            `}
            style={{
                transitionDelay: `${index * 0.2}s`,
            }}
        >

            {/* INFO */}
            <div className="flex-1 flex flex-col justify-between gap-3 md:gap-0">

                <div>

                    <h2 className="urbanist font-bold text-2xl dark:text-white">
                        {proyect.title}
                    </h2>

                    <h3 className="open-sans text-sm md:text-xs lg:text-sm">
                        {proyect.description}
                    </h3>

                </div>

                <div className="flex flex-row items-center gap-2">

                    <div>
                        <a
                            href={proyect.url}
                            target="__blank"
                            className={`
                                urbanist font-bold px-3 py-2 rounded-full
                                text-white dark:text-[#121820]
                                ${proyect.state == "finished"
                                    ? "bg-[#25A9BC] hover:bg-[#1d9caf]"
                                    : "bg-gray-400 hover:bg-gray-500"}
                            `}
                        >
                            {proyect.state == "finished"
                                ? "Visitar sitio"
                                : "Visitar demo"}
                        </a>
                    </div>

                    <div className="flex flex-row items-center gap-1 dark:bg-[#121820] bg-gray-300 px-3 py-1.5 rounded-full">

                        <img
                            src={GithubIcon}
                            alt="Github SVG icon"
                            className="h-5 w-5 dark:invert"
                        />

                        <a
                            href={proyect.code}
                            target="__blank"
                            className="urbanist font-bold cursor-pointer"
                        >
                            Código
                        </a>

                    </div>

                </div>

            </div>

            {/* IMAGES */}
            <div
                className={`
                    flex flex-col md:flex-row gap-4
                    ${index % 2 != 0 ? "md:flex-row-reverse" : ""}
                `}
            >

                {/* MAIN IMAGE */}
                <div className="w-full md:max-w-90 lg:max-w-110 border border-gray-400 dark:border-gray-700 rounded-2xl">

                    <img
                        src={currentImage}
                        title="Proyect image"
                        className="w-full object-cover rounded-2xl"
                    />

                </div>

                {/* THUMBNAILS */}
                <div className="flex flex-row md:flex-col gap-2 justify-center">

                    {proyect.images.slice(1).map((image, i) => (

                        <div
                            key={i}
                            onClick={() => setSelected(i + 1)}
                            className={`
                                w-14 h-14 md:w-15 md:h-15
                                border cursor-pointer rounded-xl
                                ${selected === i + 1
                                    ? "border-white dark:border-gray-800"
                                    : "border-gray-400 dark:border-gray-900"}
                            `}
                        >

                            <img
                                src={image}
                                title="Proyect image"
                                className="w-full h-full object-cover rounded-lg"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default ProyectCard;