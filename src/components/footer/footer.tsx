// Import icons
import GithubIcon from "../../assets/icons/github-svgrepo-com2.svg";
import EmailIcon from "../../assets/icons/mail-alt-3-svgrepo-com.svg";
import LinkedinIcon from "../../assets/icons/linkedin-svgrepo-com.svg";

const iconLinkClass = "inline-flex rounded-full p-3 hover:bg-gray-200 dark:hover:bg-[#252C34]";

function Footer() {
    return (
        <footer className='bg-gray-100 dark:bg-[#151B23] p-5 urbanist text-[#151B23] dark:text-white'>
            <div className='flex flex-col gap-1 md:flex-row md:justify-between md:px-10'>
                {/* El texto accesible lo da aria-label; los íconos son decorativos (alt="") */}
                <ul aria-label="Redes y contacto" className='flex flex-row items-center justify-center gap-3'>
                    <li>
                        <a href="https://github.com/matiibuffaRC" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Matías Buffa (se abre en una pestaña nueva)" title='GitHub de Matías Buffa' className={iconLinkClass}>
                            <img src={GithubIcon} alt="" width={16} height={16} decoding="async" className='w-4 h-4 dark:invert'/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:matbuffautn05@gmail.com" aria-label="Enviar correo a Matías Buffa" title='Enviar correo a Matías Buffa' className={iconLinkClass}>
                            <img src={EmailIcon} alt="" width={16} height={16} decoding="async" className='w-4 h-4 dark:invert'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Matías Buffa (se abre en una pestaña nueva)" title='LinkedIn de Matías Buffa' className={iconLinkClass}>
                            <img src={LinkedinIcon} alt="" width={16} height={16} decoding="async" className='w-4 h-4 dark:invert'/>
                        </a>
                    </li>
                </ul>
                <p className='flex flex-row items-center justify-center'>
                    © {new Date().getFullYear()} Matías Buffa.
                </p>
            </div>
            <p className='text-center text-xs'>
                Sitio diseñado y desarrollado por Matías Buffa.
            </p>
        </footer>
    )
}

export default Footer
