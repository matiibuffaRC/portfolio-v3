// import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Experience() {
    return (
        <section className='dark:bg-[#121820] bg-[#f9fafc] py-10 px-5'>
            <div className='m-auto flex flex-col items-center lg:max-w-5xl'>
                <h2 className='urbanist font-bold text-[#259E93] text-3xl w-full'>EXPERIENCIA</h2>
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
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h2 className='urbanist font-bold text-xl dark:text-white'>Estudiante investigador</h2>
                            <h2 className='urbanist font-bold text-md dark:text-gray-300'>Universidad Tecnológica Nacional</h2>
                            <h3 className='urbanist font-bold text-gray-500 text-md'>Abril 2025 - Diciembre 2025</h3>
                            <h3 className='open-sans text-sm dark:text-gray-300'>Como estudiante de investigación, trabajé en un grupo dedicado a analizar y documentar procesos de negocio de empresas locales, con el objetivo de comprender su funcionamiento y detectar oportunidades de mejora.</h3>
                        </TimelineContent>
                        
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h2 className='urbanist font-bold text-xl dark:text-white'>Desarrollo Web</h2>
                            <h2 className='urbanist font-bold text-md dark:text-gray-300'>Freelance</h2>
                            <h3 className='urbanist font-bold text-gray-500 text-md'>Agosto 2024 - Actualidad</h3>
                            <h3 className='open-sans text-sm dark:text-gray-300'>Como desarrollador web freelance, diseñé y desarrollé sitios y aplicaciones web a medida, adaptados a las necesidades de cada cliente, priorizando la usabilidad, el rendimiento y el diseño responsive. </h3>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </section>
    )
}

export default Experience