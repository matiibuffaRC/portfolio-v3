import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CopyButtonProps = {
    variant: "default" | "outline";
    size: "sm" | "md" | "lg";
    content: string;
    label?: string;
};

const variantClasses = {
    default:
        "bg-[#087EA4] text-white hover:bg-[#066b89] dark:bg-[#58C4DC] dark:text-[#151B23]",
    outline:
        "text-[#087EA4]  dark:text-[#58C4DC]",
};

const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
};

function CopyButton({
    variant,
    size,
    content,
    label = "",
}: CopyButtonProps) {
    const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

    useEffect(() => {
        if (status === "idle") return;

        const timeoutId = window.setTimeout(() => setStatus("idle"), 2000);
        return () => window.clearTimeout(timeoutId);
    }, [status]);

    const handleCopy = async () => {
        try {
            if (!navigator.clipboard) {
                throw new Error("El portapapeles no está disponible en este contexto.");
            }

            await navigator.clipboard.writeText(content);
            setStatus("copied");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-2">
            <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/30 dark:focus-visible:ring-[#58C4DC]/30 ${variantClasses[variant]} ${sizeClasses[size]}`}
                aria-label={status === "copied" ? `${label} copiado` : label}
            >
                {status === "copied" ? (
                    <CheckIcon aria-hidden="true" fontSize="small" />
                ) : (
                    <ContentCopyIcon aria-hidden="true" fontSize="small" />
                )}
                {status === "copied" ? "Copiado" : label}
            </button>
            <span
                role="status"
                aria-live="polite"
                className={`text-sm ${status === "error" ? "text-red-700 dark:text-red-300" : ""}`}
            >
                {status === "error" ? "No se pudo copiar el contenido." : ""}
            </span>
        </div>
    );
}

export default CopyButton;
