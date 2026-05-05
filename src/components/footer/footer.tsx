// Import icons
import GithubIcon from "../../assets/icons/github-svgrepo-com2.svg";
import EmailIcon from "../../assets/icons/mail-alt-3-svgrepo-com.svg";
import LinkedinIcon from "../../assets/icons/linkedin-svgrepo-com.svg";


function footer() {
    return (
        <footer className='bg-gray-100 dark:bg-[#151B23] p-5 urbanist'>
            <div>
                <div className='flex flex-col gap-1 md:flex-row md:justify-between md:px-10'>
                    <div className='flex flex-row items-center justify-center gap-5'>
                        <a href="https://github.com/matiibuffaRC" target="__blank" title='Github icon' className="hover:bg-gray-200 dark:hover:bg-[#252C34] p-2 rounded-full">
                            <img src={GithubIcon} alt="" className='w-4 h-4 dark:invert'/>
                        </a>
                        <a href="mailto:matbuffautn05@gmail.com" title='Mail icon' className="hover:bg-gray-200 dark:hover:bg-[#252C34] p-2 rounded-full">
                            <img src={EmailIcon} alt="" className='w-4 h-4 dark:invert'/>
                        </a>
                        <a href="https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/" target="__blank" title='Linkedin icon' className="hover:bg-gray-200 dark:hover:bg-[#252C34] p-2 rounded-full">
                            <img src={LinkedinIcon} alt="" className='w-4 h-4 dark:invert'/>
                        </a>
                    </div>
                    <div className='flex flex-row items-center justify-center dark:text-white'>
                        <h2>© 2026 Matías Buffa. </h2>
                    </div>
                </div>
                <div className='text-center dark:text-white text-xs'>
                    <h2>Sitio diseñado y desarrollado por Matías Buffa.</h2>
                </div>
            </div>
        </footer>
    )
}

export default footer