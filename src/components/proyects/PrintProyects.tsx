// Importamos el arreglo con todos los proyectos:
import proyects from "../../assets/data/proyects.ts";

// Importamos componentes
import ProyectCard from "./ProyectCard.tsx"

// Tipamos los props que pasamos a este componente
type PrintProyectsProps = {
    optionSelected: string;
}
// 


function PrintProyects({ optionSelected }: PrintProyectsProps) {

    const filteredProyects = proyects.filter((proyect) => {

        if (optionSelected === "Todos") return true;

        return proyect.category === optionSelected;
    });

    return (
        <div className="flex flex-col">

            {filteredProyects.map((proyect, index) => (

                <ProyectCard
                    key={`${optionSelected}-${proyect.id}`}
                    proyect={proyect}
                    index={index}
                />

            ))}

        </div>
    );
}

export default PrintProyects