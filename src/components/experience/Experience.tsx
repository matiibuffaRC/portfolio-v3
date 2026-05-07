// Experience.jsx

import { useEffect, useRef, useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Experience() {

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setVisible(true);
                }

            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();

    }, []);

    const experiences = [
        {
            title: "Estudiante investigador",
            company: "Universidad Tecnológica Nacional",
            date: "Abril 2025 - Diciembre 2025",
            desc: "Como estudiante de investigación, trabajé en un grupo dedicado a analizar y documentar procesos de negocio de empresas locales, con el objetivo de comprender su funcionamiento y detectar oportunidades de mejora."
        },
        {
            title: "Desarrollo Web",
            company: "Freelance",
            date: "Agosto 2024 - Actualidad",
            desc: "Como desarrollador web freelance, diseñé y desarrollé sitios y aplicaciones web a medida, adaptados a las necesidades de cada cliente, priorizando la usabilidad, el rendimiento y el diseño responsive."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className='dark:bg-[#121820] bg-[#f9fafc] py-17.5 px-5'
        >

            <div className='m-auto flex flex-col items-center lg:max-w-5xl'>

                <h2 className='urbanist font-bold text-[#259E93] text-3xl w-full pb-3'>
                    EXPERIENCIA
                </h2>

                <Timeline
                    className='w-full md:max-w-200'
                    position="right"
                    sx={{
                        [`& .MuiTimelineItem-root:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >

                    {experiences.map((exp, index) => (

                        <TimelineItem
                            key={index}
                            className={`timeline-item ${visible ? 'show' : ''}`}
                            style={{
                                transitionDelay: `${index * 0.3}s`,
                            }}
                        >

                            <TimelineSeparator>
                                <TimelineDot />
                                {index !== experiences.length - 1 && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>

                            <TimelineContent>

                                <h2 className='urbanist font-bold text-xl dark:text-white'>
                                    {exp.title}
                                </h2>

                                <h2 className='urbanist font-bold text-md dark:text-gray-300'>
                                    {exp.company}
                                </h2>

                                <h3 className='urbanist font-bold text-gray-500 text-md'>
                                    {exp.date}
                                </h3>

                                <h3 className='open-sans text-sm dark:text-gray-300'>
                                    {exp.desc}
                                </h3>

                            </TimelineContent>

                        </TimelineItem>

                    ))}

                </Timeline>

            </div>
        </section>
    );
}

export default Experience;