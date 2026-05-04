import DBIcon from "../../assets/icons/database-svgrepo-com.svg";
import ToolsIcon from "../../assets/icons/Tool.svg";
import CodeIcon from "../../assets/icons/Code.svg";
import RocketIcon from "../../assets/icons/Rocket.svg";


type SkillCategory = {
    id: number;
    categoryName: string;
    technologies: string[];
    icon: string;
};

const skills: SkillCategory[] = [
    {
        id: 1,
        categoryName: "Lenguajes",
        technologies: ["Javascript", "Typescript", "C++", "SQL"],
        icon: CodeIcon,
    },
    {
        id: 2,
        categoryName: "Frontend",
        technologies: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "Chakra UI"],
        icon: RocketIcon,
    },
    {
        id: 3,
        categoryName: "Backend",
        technologies: ["Node.js", "Express", "Firebase", "Postresql"],
        icon: DBIcon,
    },
    {
        id: 4,
        categoryName: "Herramientas",
        technologies: ["Git", "Figma", "Power Query", "VSCode", "Jira", "Pack Office", "Docker",
        ],
        icon: ToolsIcon,
    },
];

export default skills