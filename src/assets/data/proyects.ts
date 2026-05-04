import cover1 from "../../../public/imgs/project2-img1.webp";
import img1 from "../../../public/imgs/project2-img2.webp";
import img2 from "../../../public/imgs/project2-img3.webp";
import img3 from "../../../public/imgs/project2-img4.webp";

import cover2 from "../../../public/imgs/project3-img1.webp";
import img1proyect2 from "../../../public/imgs/project3-img2.webp";
import img2proyect2 from "../../../public/imgs/project3-img3.webp";
import img3proyect2 from "../../../public/imgs/project3-img4.webp";

type Proyect = {
    id: number,
    title: string,
    description: string,
    images: string[],
    category: string,
    url: string,
    code: string,
    state: string
}

const proyects:Proyect[] = [
    {
        id: 1,
        title: "Complejo Lo nuestro",
        description: "Es una web desarrollada para mostrar toda la información necesaria acerca de un complejo de alojamiento en una zona turística. Muestra todas las comodidas y como llegar al mismo, cuenta con los contactos correspondientes para coordinar una reserva por Whatsapp.",
        images:[cover1, img1, img2, img3],
        category:"Frontend",
        url:"...",
        state:"finished",
        code:"..."
    },
    {
        id: 2,
        title: "Casa Buffa",
        description: "E-commerce diseñado para una tienda de productos de panaderia, repostería y descartables. Cuando con un catálogo de productos, carrito de compras y generador de presupuesto. Cuenta con una API para finalizar los pedidos vía Whatsapp.",
        images:[cover2, img1proyect2, img2proyect2, img3proyect2],
        category:"Fullstack",
        url:"...",
        state:"demo",
        code:"..."
    }
    ,
    // {
        // id: 3,
        // title: "Enerkits",
        // description: "...",
        // images:["..", ".."],
        // category:"Backend"
    // },
]

export default proyects