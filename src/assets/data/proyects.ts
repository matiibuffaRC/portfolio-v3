import cover1 from "../../../public/imgs/project2-img1.webp";
import img1 from "../../../public/imgs/project2-img2.webp";
import img2 from "../../../public/imgs/project2-img3.webp";
import img3 from "../../../public/imgs/project2-img4.webp";

import cover2 from "../../../public/imgs/project3-img1.webp";
import img1proyect2 from "../../../public/imgs/project3-img2.webp";
import img2proyect2 from "../../../public/imgs/project3-img3.webp";
import img3proyect2 from "../../../public/imgs/project3-img4.webp";

import cover3 from "../../../public/imgs/project1-img1.webp";
import img1proyect3 from "../../../public/imgs/project1-img2.webp";
import img2proyect3 from "../../../public/imgs/project1-img3.webp";
import img3proyect3 from "../../../public/imgs/project1-img4.webp";

import cover4 from "../../../public/imgs/project4-img1.webp";
import img1proyect4 from "../../../public/imgs/project4-img2.webp";
import img2proyect4 from "../../../public/imgs/project4-img3.webp";
import img3proyect4 from "../../../public/imgs/project4-img4.webp";

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
        description: "Es una web desarrollada para mostrar toda la información necesaria acerca de un complejo de alojamiento en una zona turística. Muestra todas las comodidades y como llegar al mismo, cuenta con los contactos correspondientes para coordinar una reserva por Whatsapp.",
        images:[cover1, img1, img2, img3],
        category:"Frontend",
        url:"https://lonuestro.vercel.app/",
        state:"finished",
        code:"https://github.com/matiibuffaRC/cabanias-lo-nuestro"
    },
    {
        id: 2,
        title: "Casa Buffa",
        description: "E-commerce diseñado para una tienda de productos de panaderia, repostería y descartables. Cuando con un catálogo de productos, carrito de compras y generador de presupuesto. Cuenta con una API para finalizar los pedidos vía Whatsapp.",
        images:[cover2, img1proyect2, img2proyect2, img3proyect2],
        category:"Backend",
        url:"https://casabuffaonline.vercel.app/",
        state:"demo",
        code:"https://github.com/matiibuffaRC/Mini-E-Commerce"
    },
    {
        id: 3,
        title: "Enerkits",
        description: "Desarrollo de sitio web para empresa especializada en la venta de paneles solares y soluciones energéticas residenciales. La plataforma incluye un catálogo interactivo de productos y sistemas, con visualización de precios y opción de finalizar la compra de forma directa a través de WhatsApp.",
        images:[cover3, img1proyect3, img2proyect3, img3proyect3],
        category:"Fullstack",
        url:"https://enerkitssolar.vercel.app/",
        state:"demo",
        code:"https://github.com/matiibuffaRC/EnerkitsSolar"
    },
    {
        id: 4,
        title: "Gestor de gastos",
        description:"Gestor de gastos diseñado para una asignatura de la facultad que me permitió trabajar con React + Typescript. La idea es implementar autenticación y una base de datos para llevar el control de todos los gastos de los usuarios.",
        images:[cover4, img1proyect4, img2proyect4, img3proyect4],
        category:"Frontend",
        url:"https://desarrollo-trabajo-practico2.vercel.app/",
        state:"demo",
        code:"https://github.com/matiibuffaRC/desarrollo-trabajo-practico2"
    }
]

export default proyects