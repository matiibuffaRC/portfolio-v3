import type { SvgIconComponent } from "@mui/icons-material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";

type SkillCategory = {
    id: number;
    categoryName: string;
    icon: SvgIconComponent;
    technologies: string[];
};

const skills: SkillCategory[] = [
    {
        id: 1,
        categoryName: "Lenguajes",
        icon: CodeRoundedIcon,
        technologies: ["JavaScript", "TypeScript", "SQL"],
    },
    {
        id: 2,
        categoryName: "Frontend",
        icon: WebRoundedIcon,
        technologies: ["React", "Next.js", "TailwindCSS", "Bootstrap", "Chakra UI", "Material UI"],
    },
    {
        id: 3,
        categoryName: "Backend",
        icon: DnsRoundedIcon,
        technologies: ["Node.js", "Express"],
    },
    {
        id: 4,
        categoryName: "Bases de datos",
        icon: StorageRoundedIcon,
        technologies: ["PostgreSQL", "SQLite", "Prisma", "Supabase", "Firebase"],
    },
    {
        id: 5,
        categoryName: "IA aplicada",
        icon: AutoAwesomeRoundedIcon,
        technologies: ["Claude", "Claude Code", "MCP (Model Context Protocol)"],
    },
    {
        id: 6,
        categoryName: "Herramientas",
        icon: BuildRoundedIcon,
        technologies: ["Git", "GitHub", "Docker", "Figma", "Jira"],
    },
];

export default skills;
