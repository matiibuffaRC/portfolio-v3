import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";

interface FormValues {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
  acepta: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL: FormValues = {
  nombre: "",
  correo: "",
  telefono: "",
  asunto: "",
  mensaje: "",
  acepta: false,
};

const MAX_MENSAJE = 500;

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (v.nombre.trim().length < 2) e.nombre = "Escribe tu nombre completo.";
  if (!/^\S+@\S+\.\S+$/.test(v.correo)) e.correo = "Ingresa un correo válido, por ejemplo nombre@dominio.com.";
  if (v.telefono && !/^[\d\s+()-]{7,}$/.test(v.telefono)) e.telefono = "Usa solo números, espacios, + o guiones.";
  if (!v.asunto) e.asunto = "Elige un asunto.";
  if (v.mensaje.trim().length < 10) e.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
  if (!v.acepta) e.acepta = "Debes aceptar para poder enviar el formulario.";
  return e;
}

/* Clases reutilizables alineadas con la paleta del portafolio. */
const inputClass =
  "w-full rounded-xl border border-gray-300 bg-[#f9fafc] px-3.5 py-3 text-[#151B23] " +
  "placeholder:text-gray-400 dark:border-gray-700 dark:bg-[#121820] dark:text-[#D1D7E0] dark:placeholder:text-gray-500 " +
  "transition-colors motion-reduce:transition-none " +
  "hover:border-[#087EA4] dark:hover:border-[#58C4DC] focus-visible:border-[#087EA4] focus-visible:bg-white " +
  "dark:focus-visible:border-[#58C4DC] dark:focus-visible:bg-[#121820] " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/25 " +
  "dark:focus-visible:ring-[#58C4DC]/25 aria-invalid:border-red-700 aria-invalid:bg-red-50 " +
  "dark:aria-invalid:border-red-400 dark:aria-invalid:bg-red-950/30 aria-invalid:focus-visible:ring-red-700/20";

const labelClass = "urbanist text-sm font-semibold text-[#243054] dark:text-[#D1D7E0]";

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Formulario() {
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const next = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setValues((prev) => ({ ...prev, [name]: next }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSent(false);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setSending(true);
    try {
      // TODO: reemplaza por tu llamada real (fetch/axios)
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
      setValues(INITIAL);
    } finally {
      setSending(false);
    }
  };

  const a11y = (name: keyof FormValues) =>
    errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` }
      : {};

  return (
    <section id="contacto" className="scroll-mt-18 bg-[#f9fafc] px-5 py-17.5 text-[#151B23] dark:bg-[#121820] dark:text-[#D1D7E0]">
      <div className="mx-auto max-w-5xl">
        <h2 className="urbanist w-full pb-3 text-4xl font-bold text-[#087EA4] dark:text-[#58C4DC]">
          CONTACTO
        </h2>
        <p className="open-sans mb-7 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
          ¿Tenés una idea o un proyecto en mente? Escribime y conversemos sobre cómo puedo ayudarte.
        </p>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10 dark:border-gray-800 dark:bg-[#151B23]"
      >
        <h3 className="urbanist mb-1 text-2xl font-bold tracking-tight text-[#243054] dark:text-white sm:text-3xl">
          Hablemos de tu proyecto
        </h3>
        <p className="open-sans mb-7 leading-relaxed text-gray-600 dark:text-gray-300">
          Completá el formulario y me pondré en contacto con vos.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field id="nombre" label="Nombre completo" error={errors.nombre}>
            <input id="nombre" name="nombre" type="text" autoComplete="name"
              placeholder="Tu nombre" value={values.nombre}
              onChange={handleChange} className={inputClass} {...a11y("nombre")} />
          </Field>

          <Field id="correo" label="Correo electrónico" error={errors.correo}>
            <input id="correo" name="correo" type="email" autoComplete="email"
              placeholder="tu correo electrónico" value={values.correo}
              onChange={handleChange} className={inputClass} {...a11y("correo")} />
          </Field>

          <Field id="telefono" label="Teléfono (opcional)" error={errors.telefono}>
            <input id="telefono" name="telefono" type="tel" autoComplete="tel"
              placeholder="+54 000 000 0000" value={values.telefono}
              onChange={handleChange} className={inputClass} {...a11y("telefono")} />
          </Field>

          <Field id="asunto" label="Asunto" error={errors.asunto}>
            <select id="asunto" name="asunto" value={values.asunto}
              onChange={handleChange} className={inputClass} {...a11y("asunto")}>
              <option value="">Elegí un asunto</option>
              <option value="proyecto">Desarrollo de un proyecto</option>
              <option value="freelance">Propuesta freelance</option>
              <option value="consulta">Consulta</option>
              <option value="otro">Otro</option>
            </select>
          </Field>

          <Field id="mensaje" label="Mensaje" error={errors.mensaje} className="sm:col-span-2">
            <textarea id="mensaje" name="mensaje" maxLength={MAX_MENSAJE}
              placeholder="Contame brevemente sobre tu idea o consulta..." value={values.mensaje}
              onChange={handleChange}
              className={`${inputClass} min-h-32 resize-y`} {...a11y("mensaje")} />
            <p className="text-right text-xs text-gray-500 dark:text-gray-400">
              {values.mensaje.length}/{MAX_MENSAJE}
            </p>
          </Field>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="acepta" className="flex cursor-pointer items-start gap-2.5 text-sm leading-snug text-[#243054] dark:text-[#D1D7E0]">
              <input id="acepta" name="acepta" type="checkbox"
                checked={values.acepta} onChange={handleChange}
                className="mt-0.5 size-4.5 shrink-0 accent-[#087EA4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/30"
                {...a11y("acepta")} />
              <span>Acepto que usen mis datos para responder a esta consulta.</span>
            </label>
            {errors.acepta && (
              <p id="acepta-error" role="alert" className="text-sm text-red-700 dark:text-red-400">
                {errors.acepta}
              </p>
            )}
          </div>
        </div>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => { setValues(INITIAL); setErrors({}); setSent(false); }}
            className="rounded-xl border border-gray-300 px-5 py-3 font-semibold text-[#087EA4] transition-colors hover:border-[#087EA4] hover:bg-[#087EA4]/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/30 motion-reduce:transition-none dark:border-gray-700 dark:text-[#58C4DC] dark:hover:border-[#58C4DC] dark:hover:bg-[#58C4DC]/10"
          >
            Limpiar
          </button>
          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-[#087EA4] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#066686] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087EA4]/40 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none dark:bg-[#58C4DC] dark:text-[#121820] dark:hover:bg-[#7bd3e5] dark:focus-visible:ring-[#58C4DC]/40"
          >
            {sending ? "Enviando…" : "Enviar mensaje"}
          </button>
        </div>

        {sent && (
          <p role="status" className="mt-5 rounded-xl border border-[#087EA4] bg-[#087EA4]/10 px-3.5 py-3 text-[#054b63] dark:border-[#58C4DC] dark:text-[#D1F7F3]">
            Mensaje enviado. Me pondré en contacto con vos pronto.
          </p>
        )}
      </form>
      </div>
    </section>
  );
}