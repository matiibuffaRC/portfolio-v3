import bootstrapIcon from "simple-icons/icons/bootstrap.svg";
import chakraUIIcon from "simple-icons/icons/chakraui.svg";
import dockerIcon from "simple-icons/icons/docker.svg";
import expressIcon from "simple-icons/icons/express.svg";
import firebaseIcon from "simple-icons/icons/firebase.svg";
import figmaIcon from "simple-icons/icons/figma.svg";
import gitIcon from "simple-icons/icons/git.svg";
import githubIcon from "simple-icons/icons/github.svg";
import jiraIcon from "simple-icons/icons/jira.svg";
import javascriptIcon from "simple-icons/icons/javascript.svg";
import materialUIIcon from "simple-icons/icons/mui.svg";
import nextIcon from "simple-icons/icons/nextdotjs.svg";
import nodeIcon from "simple-icons/icons/nodedotjs.svg";
import postgresqlIcon from "simple-icons/icons/postgresql.svg";
import prismaIcon from "simple-icons/icons/prisma.svg";
import reactIcon from "simple-icons/icons/react.svg";
import sqliteIcon from "simple-icons/icons/sqlite.svg";
import supabaseIcon from "simple-icons/icons/supabase.svg";
import tailwindIcon from "simple-icons/icons/tailwindcss.svg";
import typescriptIcon from "simple-icons/icons/typescript.svg";
import sqlIcon from "../../assets/icons/database-svgrepo-com.svg";

type SkillCategory = {
    id: number;
    categoryName: string;
    technologies: {
        name: string;
        icon: string;
    }[];
};

const skills: SkillCategory[] = [
    {
        id: 1,
        categoryName: "Lenguajes",
        technologies: [
            { name: "JavaScript", icon: javascriptIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "SQL", icon: sqlIcon },
        ],
    },
    {
        id: 2,
        categoryName: "Frontend",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "Next.js", icon: nextIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "Bootstrap", icon: bootstrapIcon },
            { name: "Chakra UI", icon: chakraUIIcon },
            { name: "Material UI", icon: materialUIIcon },
        ],
    },
    {
        id: 3,
        categoryName: "Backend",
        technologies: [
            { name: "Node.js", icon: nodeIcon },
            { name: "Express", icon: expressIcon },
            { name: "Firebase", icon: firebaseIcon },
            { name: "Prisma", icon: prismaIcon },
            { name: "PostgreSQL", icon: postgresqlIcon },
            { name: "SQLite", icon: sqliteIcon },
            { name: "Supabase", icon: supabaseIcon },
        ],
    },
    {
        id: 4,
        categoryName: "Herramientas",
        technologies: [
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Docker", icon: dockerIcon },
            { name: "Jira", icon: jiraIcon },
        ],
    },
];

export default skills;
