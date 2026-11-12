import { useEffect, useMemo, useRef } from "react";

// Importamos el arreglo con todos los proyectos:
import proyects from "../../../assets/data/proyects.ts";

// Importamos componentes
import ProyectCard from "./ProyectCard.tsx";

// Tipamos los props que pasamos a este componente
type PrintProyectsProps = {
  optionSelected: string;
};
//

// Retraso entre tarjetas que aparecen al mismo tiempo (efecto cascada)
const STAGGER_MS = 70;

function PrintProyects({ optionSelected }: PrintProyectsProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  const filteredProyects = useMemo(
    () =>
      proyects.filter(
        (proyect) => optionSelected === "Todos" || proyect.category === optionSelected,
      ),
    [optionSelected],
  );

  // Un único IntersectionObserver para todas las tarjetas.
  // - Marca la tarjeta con data-visible directamente en el DOM (sin setState → sin re-render).
  // - El retraso en cascada se calcula sólo entre las tarjetas que entran en el mismo
  //   lote, así al hacer scroll cada tarjeta aparece al instante y no "espera su turno".
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let batchIndex = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${batchIndex * STAGGER_MS}ms`);
          el.dataset.visible = "true";
          batchIndex++;
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );

    list.querySelectorAll<HTMLElement>(".proyect-card:not([data-visible])").forEach((card) =>
      observer.observe(card),
    );

    return () => observer.disconnect();
  }, [filteredProyects]);

  return (
    // La key en el contenedor reinicia la lista al cambiar de filtro,
    // y la clase hace un fundido corto del bloque completo.
    <div ref={listRef} key={optionSelected} className="proyect-list flex flex-col">
      {filteredProyects.map((proyect, index) => (
        <ProyectCard key={proyect.id} proyect={proyect} index={index} />
      ))}
    </div>
  );
}

export default PrintProyects;
