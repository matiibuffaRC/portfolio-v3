import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import CopyButton from './Buttons/copy';

/* ───────── Configuración: editá esto con tus datos ───────── */
const CONFIG = {
    endpoint: "https://formspree.io/f/xvkzgpwj",
    email: "matbuffa05@email.com",
    linkedin: "https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/",
    github: "https://github.com/matiibuffaRC",
};

interface FormValues {
    nombre: string;
    correo: string;
    motivo: string;
    mensaje: string;
    empresa: string; // honeypot anti-spam
}


type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "sending" | "success" | "error";

const INITIAL: FormValues = { nombre: "", correo: "", motivo: "", mensaje: "", empresa: "" };
const MAX_MENSAJE = 800;

function validate(v: FormValues): FormErrors {
    const e: FormErrors = {};
    if (v.nombre.trim().length < 2) e.nombre = "Decime cómo te llamás.";
    if (!/^\S+@\S+\.\S+$/.test(v.correo)) e.correo = "Ingresá un correo válido para poder responderte.";
    if (!v.motivo) e.motivo = "Elegí el motivo de tu mensaje.";
    if (v.mensaje.trim().length < 10) e.mensaje = "Contame un poco más (mínimo 10 caracteres).";
    return e;
}

/* Marca: #087EA4 — fondo: #F9FAFC. Inputs "rellenos" sin borde visible, como en la referencia */
const inputClass =
    "w-full rounded-lg border border-transparent bg-slate-100 px-3 py-2.5 text-sm text-slate-800 " +
    "dark:border-[#3A4654] dark:bg-[#1e242c] dark:text-[#D1D7E0] dark:placeholder:text-slate-500 " +
    "placeholder:text-slate-400 transition-colors motion-reduce:transition-none " +
    "hover:border-[#087EA4]/50 dark:hover:border-[#58C4DC]/50 " +
    "focus-visible:border-[#087EA4] dark:focus-visible:border-[#58C4DC] focus-visible:bg-white dark:focus-visible:bg-[#252C34] " +
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/20 dark:focus-visible:ring-[#58C4DC]/20 " +
    "aria-invalid:border-red-700 aria-invalid:bg-red-50 aria-invalid:focus-visible:ring-red-700/20 " +
    "dark:aria-invalid:border-red-400 dark:aria-invalid:bg-red-950/40";

const linkClass =
    "rounded font-semibold text-[#087EA4] dark:text-[#58C4DC] underline-offset-4 " +
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/30 dark:focus-visible:ring-[#58C4DC]/30";

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
    return (
        <div className="flex min-w-0 flex-col gap-1.5">
            <label htmlFor={id} className="text-xs font-medium text-slate-600 dark:text-[#D1D7E0]">
                {label}
            </label>
            {children}
            {error && <p id={`${id}-error`} role="alert" className="text-xs text-red-700">{error}</p>}
        </div>
    );
}

const iconProps = {
    width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
    strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
} as const;

const MailIcon = () => (
    <svg {...iconProps}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></svg>
);
const LinkedinIcon = () => (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67v-8.6h2.67V18ZM7 8.23a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2V18h-2.67v-8.6h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.1V18Z" />
    </svg>
);
const GithubIcon = () => (
    <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.1 3.8 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
);
export default function Contacto() {
    const [values, setValues] = useState<FormValues>(INITIAL);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormValues]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (values.empresa) return; // bot detectado

        const found = validate(values);
        setErrors(found);
        if (Object.keys(found).length > 0) {
            document.getElementById(Object.keys(found)[0])?.focus();
            return;
        }

        setStatus("sending");
        try {
            const { empresa, ...data } = values;
            const res = await fetch(CONFIG.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    Accept: "application/json" 
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Respuesta no válida");
            setStatus("success");
            setValues(INITIAL);
        } catch {
        setStatus("error");
        }
    };

    const a11y = (name: keyof FormValues) =>
        errors[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

    return (
        <section id="contacto" className="bg-[#F9FAFC] px-4 py-45 text-slate-900 transition-colors dark:bg-[#121820] dark:text-[#D1D7E0] sm:py-20" aria-labelledby="contacto-titulo">
            <div className="mx-auto grid w-full max-w-5xl items-center gap-10 rounded-3xl border border-slate-200 bg-[#F9FAFC] p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-[#151B23] sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
                {/* ── Columna izquierda: texto y datos de contacto ── */}
                <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Estoy para ayudarte
                    </p>
                    <h2 id="contacto-titulo" className="mt-3 text-4xl font-normal leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl" >
                        <strong className="font-bold">Hablemos</strong> de tu próximo proyecto
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-[#D1D7E0]">
                        ¿Tenés una propuesta, una idea o querés colaborar? Escribime y te respondo en un par de días.
                    </p>

                    <ul className="mt-8 space-y-5">
                        <li className="flex items-center gap-4">
                            <span className="text-[#087EA4]"><MailIcon /></span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Correo</p>
                                <p  className={`${linkClass} flex flex-row gap-1 items-center text-slate-900 dark:text-[#D1D7E0] `}>
                                    {CONFIG.email}
                                    <CopyButton
                                        variant="outline"
                                        size="sm"
                                        content={CONFIG.email}
                                    />
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-[#087EA4] dark:text-[#58C4DC]"><LinkedinIcon /></span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
                                <div className="group flex flex-row gap-2 items-center">
                                    <a
                                        href={CONFIG.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${linkClass} text-slate-900 dark:text-[#D1D7E0] `}
                                    >
                                        Mi perfil
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-[#087EA4] dark:text-[#58C4DC]"><GithubIcon /></span>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400">GitHub</p>
                                <div className="group flex flex-row gap-2 items-center">
                                    <a
                                        href={CONFIG.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${linkClass} text-slate-900 dark:text-[#D1D7E0]`}
                                    >
                                        Mi perfil
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* ── Columna derecha: tarjeta del formulario ── */}
                <div className="w-full rounded-3xl bg-white p-5 shadow-xl shadow-slate-900/10 transition-colors dark:bg-[#1e242c] dark:shadow-black/20 sm:p-7 lg:max-w-md lg:justify-self-end">
                    {status === "success" ? (
                        <div role="status" className="py-10 text-center">
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">¡Gracias por escribirme!</p>
                            <p className="mt-1 text-sm text-slate-600 dark:text-[#D1D7E0]">Recibí tu mensaje y te voy a responder pronto.</p>
                            <button type="button" onClick={() => setStatus("idle")} className={`${linkClass} mt-5 text-sm`}>
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                            <Field id="nombre" label="Nombre" error={errors.nombre}>
                                <input 
                                    id="nombre" 
                                    name="nombre" 
                                    type="text" 
                                    autoComplete="name"
                                    placeholder="Tu nombre" 
                                    value={values.nombre}
                                    onChange={handleChange} 
                                    className={inputClass} {...a11y("nombre")} />
                            </Field>

                            <Field id="correo" label="Correo electrónico" error={errors.correo}>
                                <input 
                                    id="correo" 
                                    name="correo" 
                                    type="email" 
                                    autoComplete="email"
                                    placeholder="vos@correo.com" 
                                    value={values.correo}
                                    onChange={handleChange}
                                    className={inputClass} {...a11y("correo")} />
                            </Field>

                            <Field id="motivo" label="Motivo" error={errors.motivo}>
                                <div className="relative">
                                    <select 
                                        id="motivo" 
                                        name="motivo" 
                                        value={values.motivo} 
                                        onChange={handleChange}
                                        className={`${inputClass} appearance-none pr-9 ${values.motivo ? "" : "text-slate-400 dark:text-slate-500"}`}
                                        {...a11y("motivo")}>
                                        <option value="">Seleccionar…</option>
                                        <option value="laboral">Propuesta laboral</option>
                                        <option value="freelance">Proyecto freelance</option>
                                        <option value="colaboracion">Colaboración</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                                        <path d="m5 8 5 5 5-5" />
                                    </svg>
                                </div>
                            </Field>

                            <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
                                <textarea 
                                    id="mensaje" 
                                    name="mensaje" 
                                    maxLength={MAX_MENSAJE}
                                    placeholder="Escribí tu mensaje…" 
                                    value={values.mensaje}
                                    onChange={handleChange} 
                                    className={`${inputClass} min-h-28 resize-y`}
                                    {...a11y("mensaje")} 
                                />
                                <p className="text-right text-xs text-slate-400 dark:text-slate-500">{values.mensaje.length}/{MAX_MENSAJE}</p>
                            </Field>

                            {/* Honeypot: oculto para personas y lectores de pantalla */}
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="empresa">No completar</label>
                                <input 
                                    id="empresa" 
                                    name="empresa" 
                                    type="text" 
                                    tabIndex={-1}
                                    autoComplete="off" 
                                    value={values.empresa} 
                                    onChange={handleChange} 
                                />
                            </div>

                            {status === "error" && (
                                <p role="alert" className="rounded-lg border border-red-700/30 bg-red-50 px-3 py-2.5 text-sm text-red-700 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-300">
                                    No pude enviar el mensaje. Probá de nuevo o escribime a{" "}
                                    <a href={`mailto:${CONFIG.email}`} className="font-semibold underline">{CONFIG.email}</a>.
                                </p>
                            )}

                            {/* Botón píldora con círculo e ícono de flecha */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group mt-1 inline-flex w-full cursor-pointer items-center gap-3 self-start rounded-full bg-[#087EA4] p-1.5 pr-6 text-sm font-semibold text-white transition-colors hover:bg-[#066686] dark:bg-[#58C4DC] dark:text-[#151B23] dark:hover:bg-[#3998B6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/40 dark:focus-visible:ring-[#58C4DC]/40 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none sm:w-auto"
                            >
                                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#087EA4] dark:bg-[#151B23] dark:text-[#58C4DC]">
                                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                        className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none">
                                        <path d="M4 10h12m-5-5 5 5-5 5" />
                                    </svg>
                                </span>
                                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}